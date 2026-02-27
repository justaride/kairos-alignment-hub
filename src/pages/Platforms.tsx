import { platforms } from '../data/platforms'

const tierLabels = {
  1: 'Tier 1 — Sterkest KAIROS-tilpasning',
  2: 'Tier 2 — Sterk tilpasning',
  3: 'Tier 3 — Støttende tilpasning'
} as const

export function Platforms() {
  const grouped = [1, 2, 3].map(tier => ({
    tier: tier as 1 | 2 | 3,
    label: tierLabels[tier as 1 | 2 | 3],
    items: platforms.filter(p => p.tier === tier)
  }))

  return (
    <div className="page">
      <header className="page-header">
        <h1>Plattformer</h1>
        <p className="page-lead">
          21+ deployed plattformer organisert etter KAIROS-relevans. Tier 1 er sterkeste direkte overlapp.
        </p>
      </header>

      {grouped.map(group => (
        <section key={group.tier} className="card-section">
          <h2>{group.label}</h2>
          <div className="platform-grid">
            {group.items.map(p => (
              <div key={p.name} className={`platform-card tier-${p.tier}`}>
                <div className="platform-card-header">
                  <h3>{p.name}</h3>
                  <span className="platform-subtitle">{p.subtitle}</span>
                </div>
                <p>{p.description}</p>
                {p.stats && (
                  <div className="platform-stats">
                    {p.stats.map(s => (
                      <span key={s} className="stat-tag">{s}</span>
                    ))}
                  </div>
                )}
                <div className="platform-stack">
                  {p.stack.map(s => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="platform-link">
                    Besøk plattform →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
