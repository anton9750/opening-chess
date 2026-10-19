export default function OpeningList({ title, side, openings, activeIdx, onSelect }) {
  return (
    <aside className="panel">
      <h2>{title}</h2>
      <p className="panel-sub">{side === 'white' ? 'Openings you play as White' : 'Defences you play as Black'}</p>
      <ol className="opening-list">
        {openings.map((o, i) => (
          <li key={o.name}>
            <button
              className={`opening ${activeIdx === i ? 'active' : ''}`}
              onClick={() => onSelect(side, i)}
            >
              <span className="opening-name">{o.name}</span>
              <span className="opening-meta">{o.eco} · {o.san.split(' ').slice(0, 4).join(' ')}</span>
            </button>
          </li>
        ))}
      </ol>
    </aside>
  )
}
