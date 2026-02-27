import { researchProjects, publications, standards } from '../data/research'

export function Research() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Forskning</h1>
        <p className="page-lead">
          NS har en bred forskningsportefølje som spenner fra Forskningsrådet til Horizon Europe,
          med publisert metodikk og deltakelse i europeisk standardisering.
        </p>
      </header>

      <section className="card-section">
        <h2>Finansierte prosjekter</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Prosjekt</th>
                <th>Finansiør</th>
                <th>Fokus</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {researchProjects.map(p => (
                <tr key={p.name}>
                  <td><strong>{p.name}</strong></td>
                  <td>{p.funder}</td>
                  <td>{p.focus}</td>
                  <td><span className="status-pill">{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card-section">
        <h2>Publikasjoner</h2>
        <div className="publication-grid">
          {publications.map(p => (
            <div key={p.title} className="publication-card">
              <h3>{p.title}</h3>
              <p>{p.type}</p>
              <div className="pub-meta">
                {p.author && <span>{p.author}</span>}
                {p.year > 0 && <span>{p.year}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card-section">
        <h2>Standardisering og policy</h2>
        <div className="standards-grid">
          {standards.map(s => (
            <div key={s.name} className="standard-card">
              <h3>{s.name}</h3>
              <p>{s.scope}</p>
              <span className="tag">{s.type}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
