import { useRef, useState } from 'react'

const FILES = 'abcdefgh'
const GLYPH = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' }

export function Glyph({ type, color, className = '' }) {
  return <span className={`glyph ${color === 'w' ? 'glyph-w' : 'glyph-b'} ${className}`}>{GLYPH[type]}</span>
}

export default function Board({ pieces, flipped, onDrop, lastMove }) {
  const boardRef = useRef(null)
  const [drag, setDrag] = useState(null) // { id, x, y } in % of the board

  const toCell = (sq) => {
    const f = FILES.indexOf(sq[0])
    const r = Number(sq[1]) - 1
    return { col: flipped ? 7 - f : f, row: flipped ? r : 7 - r }
  }

  const pointToSq = (clientX, clientY) => {
    const rect = boardRef.current.getBoundingClientRect()
    const col = Math.floor(((clientX - rect.left) / rect.width) * 8)
    const row = Math.floor(((clientY - rect.top) / rect.height) * 8)
    if (col < 0 || col > 7 || row < 0 || row > 7) return null
    const f = flipped ? 7 - col : col
    const r = flipped ? row : 7 - row
    return FILES[f] + (r + 1)
  }

  const pct = (clientX, clientY) => {
    const rect = boardRef.current.getBoundingClientRect()
    return {
      x: ((clientX - rect.left) / rect.width) * 100 - 6.25,
      y: ((clientY - rect.top) / rect.height) * 100 - 6.25,
    }
  }

  const down = (e, piece) => {
    if (piece.dying) return
    e.currentTarget.setPointerCapture(e.pointerId)
    setDrag({ id: piece.id, ...pct(e.clientX, e.clientY) })
  }
  const move = (e, piece) => {
    if (drag?.id === piece.id) setDrag({ id: piece.id, ...pct(e.clientX, e.clientY) })
  }
  const up = (e, piece) => {
    if (drag?.id !== piece.id) return
    const sq = pointToSq(e.clientX, e.clientY)
    setDrag(null)
    onDrop(piece.id, sq)
  }

  const squares = []
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const f = flipped ? 7 - col : col
      const r = flipped ? row : 7 - row
      const sq = FILES[f] + (r + 1)
      const dark = (f + r) % 2 === 0
      const isLast = lastMove && (lastMove[0] === sq || lastMove[1] === sq)
      squares.push(
        <div key={sq} className={`sq ${dark ? 'dark' : 'light'} ${isLast ? 'last' : ''}`}>
          {col === 0 && <span className="coord rank">{r + 1}</span>}
          {row === 7 && <span className="coord file">{FILES[f]}</span>}
        </div>
      )
    }
  }

  return (
    <div className="board" ref={boardRef}>
      <div className="squares">{squares}</div>
      {pieces.map((p) => {
        const { col, row } = toCell(p.sq)
        const dragging = drag?.id === p.id
        const style = dragging
          ? { left: `${drag.x}%`, top: `${drag.y}%` }
          : { left: `${col * 12.5}%`, top: `${row * 12.5}%` }
        return (
          <div
            key={p.id}
            className={`piece ${dragging ? 'dragging' : ''} ${p.dying ? `dying dying-${p.color}` : ''}`}
            style={style}
            onPointerDown={(e) => down(e, p)}
            onPointerMove={(e) => move(e, p)}
            onPointerUp={(e) => up(e, p)}
            onPointerCancel={() => setDrag(null)}
          >
            <Glyph type={p.type} color={p.color} />
          </div>
        )
      })}
    </div>
  )
}
