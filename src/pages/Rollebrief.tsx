export function Rollebrief() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>NS Rollebrief</h1>
        <p className="page-lead">
          Intern orienteringsbrief om Natural States rolle i NODES (tidligere KAIROS).
          11 slides som dekker prosjektramme, konsortium, mandat, leveranser, risiko og anbefalt løp.
        </p>
      </header>

      <section className="card-section">
        <div className="presentation-actions">
          <a
            href="/rollebrief.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Åpne i nytt vindu
          </a>
          <a
            href="/rollebrief.html"
            download="NODES-NS-ROLLEBRIEF.html"
            className="btn-secondary"
          >
            Last ned HTML
          </a>
        </div>
      </section>

      <section className="card-section">
        <div className="iframe-container">
          <iframe
            src="/rollebrief.html"
            title="NODES NS Rollebrief"
            className="presentation-iframe"
          />
        </div>
      </section>
    </div>
  )
}
