import { relationships } from '../data/relationships'

const statusColors: Record<string, string> = {
  active: 'var(--green)',
  'program-experience': 'var(--navy)',
  network: 'var(--accent)'
}

const statusLabels: Record<string, string> = {
  active: 'Aktiv',
  'program-experience': 'Programerfaring',
  network: 'Nettverk'
}

export function Relationships() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Eksisterende relasjoner</h1>
        <p className="page-lead">
          NS har allerede etablerte relasjoner med KAIROS-konsortiumets nøkkelaktører.
          SINTEF-forholdet er den sterkeste posisjoneringsfordelen.
        </p>
      </header>

      <div className="relationship-grid">
        {relationships.map(r => (
          <div key={r.name} className="relationship-card">
            <div className="relationship-header">
              <h3>{r.name}</h3>
              <span className="status-tag" style={{ background: statusColors[r.status] }}>
                {statusLabels[r.status]}
              </span>
            </div>
            <p className="relationship-type">{r.type}</p>
            <p>{r.description}</p>
            <div className="kairos-relevance">
              <strong>KAIROS-relevans:</strong> {r.kairosRelevance}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
