import { team } from '../data/team'

export function Overview() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>KAIROS Alignment Hub</h1>
        <p className="page-lead">
          Komplett oversikt over Natural States posisjonering mot Project KAIROS — Grønn Plattform 2026
        </p>
      </header>

      <section className="card-section">
        <div className="info-grid">
          <div className="info-card accent">
            <h3>Hva er KAIROS?</h3>
            <p>
              Et tverrfaglig forskningsprosjekt som kombinerer spekulativ fremtidstenkning,
              industridesign, arkitektur, urbanisme og multi-agentisk AI for å takle klimautfordringer.
            </p>
            <div className="info-meta">
              <span>UiO + SINTEF</span>
              <span>Grønn Plattform 2026</span>
              <span>3 år</span>
            </div>
          </div>
          <div className="info-card">
            <h3>KAWP</h3>
            <p>
              KAIROS Agential World Model Generator — et løsningsagentisk AI-verktøy
              som interagerer med virkelige data og designpraksis for å generere
              fremtidsverdensmodeller for klimatilpasning.
            </p>
          </div>
          <div className="info-card">
            <h3>Nøkkelkonsepter</h3>
            <dl className="concept-list">
              <dt>Sense-ability</dt>
              <dd>Gi mening til fragmentert kompleks data om klimaendringer</dd>
              <dt>Change-ability</dt>
              <dd>Utnytte spekulasjon om materielle praksiser for reell endring i dag</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h2>Natural State — Posisjonering</h2>
        <p className="section-lead">
          Strategibyrå for stedsutvikling med 21+ deployed plattformer som
          adresserer akkurat den fragmenterte datautfordringen KAIROS beskriver.
        </p>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">21+</span>
            <span className="stat-label">Live plattformer</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">42</span>
            <span className="stat-label">NCH-partnere</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">80</span>
            <span className="stat-label">Sirkulære prosjekter</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5</span>
            <span className="stat-label">Nordiske land</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">2 290</span>
            <span className="stat-label">Kunnskapsgraf-entiteter</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">~€20</span>
            <span className="stat-label">Infra/mnd</span>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h2>Tidslinje</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">4. mars 2026</div>
            <div className="timeline-content">Konseptskisse frist</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">3. juni 2026</div>
            <div className="timeline-content">Full søknad frist</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">H2 2026</div>
            <div className="timeline-content">Prosjektstart (estimert)</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">H2 2029</div>
            <div className="timeline-content">Prosjektavslutning (estimert)</div>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h2>Team</h2>
        <div className="team-grid">
          {team.map(m => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar">{m.name.split(' ').map(n => n[0]).join('')}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card-section">
        <a href="/presentation.html" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Last ned presentasjon (HTML)
        </a>
      </section>
    </div>
  )
}
