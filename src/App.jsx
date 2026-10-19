import { useEffect, useState } from 'react'
import Board, { Glyph } from './components/Board.jsx'
import OpeningList from './components/OpeningList.jsx'
import { WHITE_OPENINGS, BLACK_OPENINGS } from './data/openings.js'
import { initialPieces, applyMove } from './lib/chess.js'

export default function App() {
  const [pieces, setPieces] = useState(initialPieces)
  const [captured, setCaptured] = useState([])
  const [flipped, setFlipped] = useState(false)
  const [active, setActive] = useState(null) // { side, idx }
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [last, setLast] = useState(null)

  const opening = active ? (active.side === 'white' ? WHITE_OPENINGS : BLACK_OPENINGS)[active.idx] : null
  const uci = opening ? opening.uci.split(' ') : []
  const san = opening ? opening.san.split(' ') : []

  // Play one move with the capture animation.
  const commit = (move) => {
    const r = applyMove(pieces, move)
    setPieces(r.pieces)
    setLast([move.slice(0, 2), move.slice(2, 4)])
    if (r.captured) {
      setCaptured((c) => [...c, r.captured])
      setTimeout(() => setPieces((ps) => ps.filter((p) => !p.dying)), 750)
    }
  }

  // Rebuild the position after n moves of an opening (no animation).
  const goTo = (op, n) => {
    let ps = initialPieces()
    const caps = []
    let lm = null
    const moves = op ? op.uci.split(' ') : []
    for (let i = 0; i < n; i++) {
      const r = applyMove(ps, moves[i], true)
      ps = r.pieces
      if (r.captured) caps.push(r.captured)
      lm = [moves[i].slice(0, 2), moves[i].slice(2, 4)]
    }
    setPieces(ps)
    setCaptured(caps)
    setLast(lm)
    setStep(n)
  }

  const select = (side, idx) => {
    const op = (side === 'white' ? WHITE_OPENINGS : BLACK_OPENINGS)[idx]
    setActive({ side, idx })
    setPlaying(false)
    setFlipped(side === 'black')
    goTo(op, 0)
  }

  const next = () => {
    if (!opening || step >= uci.length) return
    commit(uci[step])
    setStep(step + 1)
  }
  const prev = () => step > 0 && (setPlaying(false), goTo(opening, step - 1))
  const reset = () => (setPlaying(false), goTo(opening, 0))

  useEffect(() => {
    if (!playing) return
    if (step >= uci.length) return setPlaying(false)
    const t = setTimeout(next, 1100)
    return () => clearTimeout(t)
  }, [playing, step, active])

  // Free play: drag any piece anywhere. Dropping on an enemy piece takes it.
  const onDrop = (id, sq) => {
    const p = pieces.find((x) => x.id === id)
    if (!p || !sq || sq === p.sq) return
    const occupant = pieces.find((x) => x.sq === sq && !x.dying)
    if (occupant && occupant.color === p.color) return
    commit(p.sq + sq)
  }

  const takenBy = (color) => captured.filter((c) => c.color !== color) // pieces `color` has taken

  return (
    <div className="app">
      <header className="top">
        <h1>Opening Trainer</h1>
        <p>Pick an opening, step through it, then drag the pieces yourself. Drop a piece on an enemy piece to take it.</p>
      </header>

      <main className="layout">
        <OpeningList
          title="White openings"
          side="white"
          openings={WHITE_OPENINGS}
          activeIdx={active?.side === 'white' ? active.idx : null}
          onSelect={select}
        />

        <section className="center">
          <div className="tray">
            <span className="tray-label">{flipped ? 'White' : 'Black'} has taken</span>
            <div className="tray-pieces">
              {takenBy(flipped ? 'w' : 'b').map((c) => <Glyph key={c.id} type={c.type} color={c.color} className="mini" />)}
            </div>
          </div>

          <Board pieces={pieces} flipped={flipped} onDrop={onDrop} lastMove={last} />

          <div className="tray">
            <span className="tray-label">{flipped ? 'Black' : 'White'} has taken</span>
            <div className="tray-pieces">
              {takenBy(flipped ? 'b' : 'w').map((c) => <Glyph key={c.id} type={c.type} color={c.color} className="mini" />)}
            </div>
          </div>

          <div className="controls">
            <button onClick={prev} disabled={!opening || step === 0}>Back</button>
            <button onClick={() => setPlaying((p) => !p)} disabled={!opening || step >= uci.length}>
              {playing ? 'Pause' : 'Auto-play'}
            </button>
            <button onClick={next} disabled={!opening || step >= uci.length}>Next move</button>
            <button onClick={reset}>Reset board</button>
            <button className="primary" onClick={() => setFlipped((f) => !f)}>
              View from {flipped ? 'White' : 'Black'}
            </button>
          </div>

          <div className="explain">
            {opening ? (
              <>
                <div className="explain-head">
                  <h2>{opening.name}</h2>
                  <span className="eco">{opening.eco}</span>
                </div>
                <div className="moves">
                  {san.map((m, i) => (
                    <button
                      key={i}
                      className={`move ${i < step ? 'played' : ''} ${i === step - 1 ? 'current' : ''}`}
                      onClick={() => (setPlaying(false), goTo(opening, i + 1))}
                    >
                      {i % 2 === 0 && <span className="num">{i / 2 + 1}.</span>}
                      {m}
                    </button>
                  ))}
                </div>
                <p className="summary">{opening.summary}</p>
                <h3>Key ideas</h3>
                <ul>{opening.ideas.map((t) => <li key={t}>{t}</li>)}</ul>
                <h3>Watch out</h3>
                <p>{opening.watch}</p>
              </>
            ) : (
              <p className="empty">Choose an opening from the left (White) or right (Black) to see its moves and explanation.</p>
            )}
          </div>
        </section>

        <OpeningList
          title="Black openings"
          side="black"
          openings={BLACK_OPENINGS}
          activeIdx={active?.side === 'black' ? active.idx : null}
          onSelect={select}
        />
      </main>
    </div>
  )
}
