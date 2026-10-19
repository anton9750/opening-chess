// Each opening: `san` (display) and `uci` (from-to squares) must line up move for move.
// White list = openings White chooses. Black list = Black's best-known answers.

export const WHITE_OPENINGS = [
  {
    name: 'Italian Game',
    eco: 'C50',
    san: 'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6',
    uci: 'e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6',
    summary:
      'A classical opening where White develops quickly and aims the bishop at f7, Black’s weakest point early on. It leads to rich, strategic middlegames without forcing heavy theory.',
    ideas: [
      'Build a strong center with c3 and d3, preparing d4 at the right moment.',
      'Castle early and bring the knight to g3 or e3 via the kingside.',
      'Keep the bishop on the a2–g8 diagonal; retreat to b3 if it is challenged.',
    ],
    watch: 'Don’t rush an attack on f7 — Black can often meet it with ...Nxe4 tricks or ...d5.',
  },
  {
    name: 'Ruy Lopez',
    eco: 'C60',
    san: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7',
    uci: 'e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7',
    summary:
      'The “Spanish Game” is one of the oldest and most respected openings. The bishop pressures the knight that defends e5, creating long-term tension rather than a quick tactic.',
    ideas: [
      'Pressure the c6 knight to undermine Black’s hold on the e5 pawn.',
      'Castle, then play Re1 and c3 followed by d4 to take the center.',
      'Aim for slow, positional squeezes — small advantages grow over time.',
    ],
    watch: 'Black’s Berlin Defence (…Nf6 and …Nxe4) leads to a very solid, drawish endgame.',
  },
  {
    name: 'Queen’s Gambit',
    eco: 'D06',
    san: 'd4 d5 c4 e6 Nc3 Nf6 Bg5 Be7',
    uci: 'd2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7',
    summary:
      'White offers a flank pawn to deflect Black’s d5 pawn and claim the center. It is not a true gambit — if Black takes, White usually regains the pawn.',
    ideas: [
      'Fight for the center with c4 attacking the d5 pawn.',
      'Develop the bishop to g5 to pin the knight and increase pressure on d5.',
      'Use the extra central space to launch queenside play (the minority attack).',
    ],
    watch: 'After ...dxc4, don’t try to hold the pawn — develop and regain it naturally.',
  },
  {
    name: 'London System',
    eco: 'D02',
    san: 'd4 d5 Bf4 Nf6 e3 e6 Nf3 Bd6 Bg3 O-O',
    uci: 'd2d4 d7d5 c1f4 g8f6 e2e3 e7e6 g1f3 f8d6 f4g3 e8g8',
    summary:
      'A solid, low-theory setup. White develops the dark-squared bishop before closing the pawn chain with e3, and plays the same structure against almost anything.',
    ideas: [
      'Place the bishop on f4 early so it isn’t locked in by e3.',
      'Complete the setup with Nf3, Bd3, c3, Nbd2 and castle.',
      'Look for the e4 break or a kingside attack once pieces are placed.',
    ],
    watch: 'Black can challenge the bishop with ...c5 and ...Qb6 hitting b2 — be ready for it.',
  },
  {
    name: 'English Opening',
    eco: 'A20',
    san: 'c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5',
    uci: 'c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 d7d5 c4d5 f6d5',
    summary:
      'A flexible flank opening. White controls d5 from the side and can transpose into many other systems. Often played like a Sicilian with colors reversed.',
    ideas: [
      'Control the d5 square with the c-pawn and knight.',
      'Fianchetto the king’s bishop to g2 to pressure the long diagonal.',
      'Stay flexible — choose the pawn structure after seeing Black’s setup.',
    ],
    watch: 'Black can take over the center with …d5 if White is too passive.',
  },
  {
    name: 'Scotch Game',
    eco: 'C45',
    san: 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5 Qe7',
    uci: 'e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 e4e5 d8e7',
    summary:
      'White strikes in the center immediately, opening the position and gaining space. It leads to open, active play and has less theory than the Ruy Lopez.',
    ideas: [
      'Open the center early while Black is still developing.',
      'Trade the knight on c6 to damage Black’s pawn structure.',
      'Use the e5 pawn to gain space and harass Black’s pieces.',
    ],
    watch: 'Black’s ...Bc5 and ...Qh4 ideas can generate fast counterplay if White is careless.',
  },
  {
    name: 'King’s Gambit',
    eco: 'C33',
    san: 'e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 d6',
    uci: 'e2e4 e7e5 f2f4 e5f4 g1f3 g7g5 h2h4 g5g4 f3e5 d7d6',
    summary:
      'The most romantic opening in chess. White sacrifices a pawn for rapid development and an open f-file, creating sharp attacking chances.',
    ideas: [
      'Give up the f-pawn to open lines toward Black’s king.',
      'Develop fast and use the half-open f-file with Rf1 and Bc4.',
      'Meet ...g5 aggressively with h4 to undermine the pawn chain.',
    ],
    watch: 'It is risky — if the attack stalls, White’s own king is exposed and a pawn down.',
  },
  {
    name: 'Vienna Game',
    eco: 'C26',
    san: 'e4 e5 Nc3 Nf6 f4 d5 fxe5 Nxe4 Nf3 Be7',
    uci: 'e2e4 e7e5 b1c3 g8f6 f2f4 d7d5 f4e5 f6e4 g1f3 f8e7',
    summary:
      'White develops the knight first, keeping the option of f4 to build a strong center. It transposes easily to the King’s Gambit or to quieter lines.',
    ideas: [
      'Delay committing: Nc3 first, then decide between f4 or Bc4.',
      'Strike with f4 to challenge Black’s e5 pawn and open the f-file.',
      'Control d5 and e4 with the knight on c3.',
    ],
    watch: 'Black’s ...Nxe4 trick is common — know how to recapture and keep the initiative.',
  },
  {
    name: 'Catalan Opening',
    eco: 'E04',
    san: 'd4 Nf6 c4 e6 g3 d5 Bg2 Be7 Nf3 O-O',
    uci: 'd2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7 g1f3 e8g8',
    summary:
      'A refined positional system combining the Queen’s Gambit with a kingside fianchetto. The bishop on g2 exerts constant pressure on the queenside.',
    ideas: [
      'Use the g2 bishop to pressure d5 and the b7 pawn along the long diagonal.',
      'Keep a small but lasting space advantage in the center.',
      'Aim for quiet pressure; White often wins a pawn back after Black takes on c4.',
    ],
    watch: 'Black can liquidate the center with ...dxc4 and ...b5 to challenge the bishop.',
  },
  {
    name: 'Réti Opening',
    eco: 'A09',
    san: 'Nf3 d5 g3 Nf6 Bg2 c6 O-O Bg4',
    uci: 'g1f3 d7d5 g2g3 g8f6 f1g2 c7c6 e1g1 c8g4',
    summary:
      'A hypermodern opening: White controls the center with pieces rather than pawns, then strikes with c4 or d3 when ready.',
    ideas: [
      'Fianchetto the bishop to g2 and castle early for safety.',
      'Challenge Black’s center with c4 once the setup is complete.',
      'Keep options open — can transpose into the Catalan, English or King’s Indian Attack.',
    ],
    watch: 'If White never challenges the center, Black can build a comfortable pawn majority.',
  },
]

export const BLACK_OPENINGS = [
  {
    name: 'Sicilian Defence: Najdorf',
    eco: 'B90',
    san: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6',
    uci: 'e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6',
    summary:
      'The sharpest and most popular reply to 1.e4. Black fights for the center from the flank and creates an unbalanced position with winning chances.',
    ideas: [
      '…a6 stops White’s pieces landing on b5 and prepares …b5 and queenside expansion.',
      'Trade the c-pawn for White’s d-pawn to get a healthy central pawn majority.',
      'Use the half-open c-file for counterattack against White’s queenside.',
    ],
    watch: 'It demands a lot of theory — White’s Bg5 and English Attack lines are sharp.',
  },
  {
    name: 'French Defence',
    eco: 'C11',
    san: 'e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7',
    uci: 'e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8e7 e4e5 f6d7',
    summary:
      'A solid and strategic defense. Black accepts a slightly cramped position in exchange for a sturdy pawn chain and clear counterplay against White’s center.',
    ideas: [
      'Strike at the base of White’s pawn chain with ...c5 and ...f6.',
      'Develop the “bad” c8 bishop actively, often via b6/a6 or d7.',
      'Play on the queenside while White pushes on the kingside.',
    ],
    watch: 'The light-squared bishop can get buried behind the pawn on e6 if Black is passive.',
  },
  {
    name: 'Caro-Kann Defence',
    eco: 'B12',
    san: 'e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6',
    uci: 'e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6',
    summary:
      'Rock-solid and reliable. Black challenges the center with ...d5 while keeping the bishop outside the pawn chain, avoiding the French Defence’s problem piece.',
    ideas: [
      'Develop the light-squared bishop before playing ...e6.',
      'Solid structure: small risk of getting crushed early.',
      'Head for a healthy endgame with a sound pawn structure.',
    ],
    watch: 'It can be passive — aim for ...c5 or ...e5 breaks to avoid getting squeezed.',
  },
  {
    name: 'Queen’s Gambit Declined',
    eco: 'D37',
    san: 'd4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O',
    uci: 'd2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7 e2e3 e8g8',
    summary:
      'Black declines the pawn and defends d5 with ...e6. A time-tested classical setup: solid, flexible, and a staple of world-championship play.',
    ideas: [
      'Hold the center with ...d5 and ...e6; develop calmly.',
      'Break with ...c5 or ...e5 at the right moment to free the position.',
      'Plan to finally develop the light-squared bishop via ...b6 or ...dxc4.',
    ],
    watch: 'The c8 bishop is hemmed in — don’t postpone freeing it for too long.',
  },
  {
    name: 'Slav Defence',
    eco: 'D17',
    san: 'd4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5',
    uci: 'd2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5',
    summary:
      'A modern, sturdy answer to the Queen’s Gambit. Black supports d5 with a pawn on c6 while keeping the light-squared bishop free to develop outside the chain.',
    ideas: [
      'Support d5 with …c6 and develop the c8 bishop actively.',
      'Take on c4 and hold the pawn with ...b5 or ...Bf5 as needed.',
      'Aim to equalize completely and wait for White to overextend.',
    ],
    watch: 'Hanging on to the c4 pawn too greedily can leave Black’s king short on defenders.',
  },
  {
    name: 'King’s Indian Defence',
    eco: 'E60',
    san: 'd4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O',
    uci: 'd2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8',
    summary:
      'A fighting hypermodern defense. Black lets White build a big center, then attacks it with pieces and pawn breaks — usually with a kingside pawn storm.',
    ideas: [
      'Let White occupy the center, then strike with ...e5 or ...c5.',
      'Use the g7 bishop as a powerful long-range attacker.',
      'In closed positions, push ...f5 and go all-in on the kingside.',
    ],
    watch: 'If White gets in c5 or a quick queenside attack first, Black can be too slow.',
  },
  {
    name: 'Nimzo-Indian Defence',
    eco: 'E32',
    san: 'd4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5',
    uci: 'd2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5',
    summary:
      'Considered one of Black’s most reliable defenses to 1.d4. The bishop pins the knight on c3, preventing e4 and creating long-term structural pressure.',
    ideas: [
      'Control e4 and trade the bishop for the c3 knight to damage White’s pawns.',
      'Aim for doubled c-pawns that become targets later in the game.',
      'Choose between ...d5, ...c5 or ...b6 depending on White’s setup.',
    ],
    watch: 'If White gets the bishop pair and an open game, Black needs accurate play.',
  },
  {
    name: 'Grünfeld Defence',
    eco: 'D85',
    san: 'd4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7',
    uci: 'd2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7',
    summary:
      'A dynamic counter-attacking opening. Black allows White a big pawn center and then attacks it right away with the g7 bishop and ...c5.',
    ideas: [
      'Hit White’s center with pieces — especially the long diagonal bishop.',
      'Break with ...c5 to undermine d4 and open the position.',
      'Accept a space deficit in return for active piece play.',
    ],
    watch: 'It is theory-heavy; if White’s center survives, Black can be overrun.',
  },
  {
    name: 'Scandinavian Defence',
    eco: 'B01',
    san: 'e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 c6',
    uci: 'e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6',
    summary:
      'The most direct challenge to 1.e4. Black immediately questions White’s center and brings the queen out early, accepting some tempo loss for a clear plan.',
    ideas: [
      'Recapture on d5 right away; avoid long-term weaknesses.',
      'Retreat the queen to a5 or d6 and develop pieces around it.',
      'Aim for a solid, easy-to-play structure with the bishop outside the chain.',
    ],
    watch: 'White gains tempi attacking the queen, so avoid unnecessary pawn moves.',
  },
  {
    name: 'Petroff Defence',
    eco: 'C42',
    san: 'e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5',
    uci: 'e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5',
    summary:
      'A symmetrical, ultra-solid answer to 1.e4. Black counter-attacks the e4 pawn instead of defending e5, leading to balanced positions that are hard to crack.',
    ideas: [
      'Counterattack with ...Nf6 rather than defend passively.',
      'Always kick the white knight with ...d6 before taking on e4.',
      'Aim for equality and good drawing chances against stronger players.',
    ],
    watch: 'Never take e4 early — 3...Nxe4?? runs into 4.Qe2 and White wins material.',
  },
]
