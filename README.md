# Chess Opening Trainer

A Vite + React opening trainer. No chess engine, no rules, no AI — just a board you can drag pieces around on.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Features

- **Left panel:** top 10 openings for White. **Right panel:** top 10 defences for Black.
- Pick one to see its moves, summary, key ideas and pitfalls.
- **Next move / Back / Auto-play** step through the line with animated pieces.
- Click any move in the move list to jump to that point.
- **Drag any piece** anywhere. Drop it on an enemy piece to take it — the captured piece spins off the board and lands in the "has taken" tray.
- **View from White / Black** flips the board.

## Structure

```
src/
  App.jsx                  state: board, step, flip, auto-play
  components/Board.jsx     board + drag-and-drop + capture animation
  components/OpeningList.jsx
  data/openings.js         all 20 openings (edit or add your own)
  lib/chess.js             piece setup and applying a recorded move
  styles.css
```

To add an opening, append an object to `WHITE_OPENINGS` or `BLACK_OPENINGS` in `src/data/openings.js`. `san` is the display text and `uci` is the same moves as from-to squares (e.g. `e2e4`); they must line up move for move. Castling is written as the king move (`e1g1`).

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site on every push to `main`.

1. Push this repo to GitHub (default branch `main`).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The site appears at `https://<your-username>.github.io/<repo-name>/`.
