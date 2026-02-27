export function Presentation() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Presentasjon</h1>
        <p className="page-lead">
          Utskriftsvennlig HTML-presentasjon av KAIROS-alignment. Kan skrives ut som PDF.
        </p>
      </header>

      <section className="card-section">
        <div className="presentation-actions">
          <a
            href="/presentation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Åpne i nytt vindu
          </a>
          <a
            href="/presentation.html"
            download="KAIROS-NS-Presentasjon.html"
            className="btn-secondary"
          >
            Last ned HTML
          </a>
        </div>
      </section>

      <section className="card-section">
        <div className="iframe-container">
          <iframe
            src="/presentation.html"
            title="KAIROS NS Presentasjon"
            className="presentation-iframe"
          />
        </div>
      </section>
    </div>
  )
}
