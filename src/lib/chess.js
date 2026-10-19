// Deliberately "brainless": no rules engine, no legality checks.
// It only knows where pieces are and how to play a recorded move (e.g. "e2e4").

const BACK_RANK = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
const FILES = 'abcdefgh'

export function initialPieces() {
  const pieces = []
  FILES.split('').forEach((file, i) => {
    pieces.push({ id: `w-${BACK_RANK[i]}-${file}`, type: BACK_RANK[i], color: 'w', sq: `${file}1` })
    pieces.push({ id: `w-p-${file}`, type: 'p', color: 'w', sq: `${file}2` })
    pieces.push({ id: `b-p-${file}`, type: 'p', color: 'b', sq: `${file}7` })
    pieces.push({ id: `b-${BACK_RANK[i]}-${file}`, type: BACK_RANK[i], color: 'b', sq: `${file}8` })
  })
  return pieces
}

// Plays a move like "e2e4". Handles captures, en passant and castling so the
// recorded opening lines animate correctly. `instant` removes captured pieces
// immediately (used when rebuilding a position); otherwise they are flagged
// `dying` so the board can play the capture animation.
export function applyMove(pieces, uci, instant = false) {
  const from = uci.slice(0, 2)
  const to = uci.slice(2, 4)
  const mover = pieces.find((p) => p.sq === from && !p.dying)
  if (!mover) return { pieces, captured: null }

  let target = pieces.find((p) => p.sq === to && !p.dying && p.id !== mover.id)
  if (!target && mover.type === 'p' && from[0] !== to[0]) {
    target = pieces.find((p) => p.sq === to[0] + from[1] && p.type === 'p' && !p.dying)
  }

  let rook = null
  if (mover.type === 'k' && Math.abs(from.charCodeAt(0) - to.charCodeAt(0)) === 2) {
    const kingside = to[0] > from[0]
    rook = { from: (kingside ? 'h' : 'a') + from[1], to: (kingside ? 'f' : 'd') + from[1] }
  }

  const next = pieces
    .map((p) => {
      if (p.id === mover.id) return { ...p, sq: to }
      if (target && p.id === target.id) return instant ? null : { ...p, dying: true }
      if (rook && p.type === 'r' && p.sq === rook.from) return { ...p, sq: rook.to }
      return p
    })
    .filter(Boolean)

  return {
    pieces: next,
    captured: target ? { id: target.id, type: target.type, color: target.color } : null,
  }
}
