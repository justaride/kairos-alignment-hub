import { timeline, openDecisions, actionItems } from '../data/nextSteps'

export function NextSteps() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Neste steg</h1>
        <p className="page-lead">
          Tidslinje, åpne beslutninger og handlingspunkter for KAIROS-responsen.
        </p>
      </header>

      <section className="card-section">
        <h2>Tidslinje</h2>
        <div className="timeline">
          {timeline.map(t => (
            <div key={t.date} className="timeline-item">
              <div className="timeline-date">{t.date}</div>
              <div className="timeline-content">
                <strong>{t.milestone}</strong>
                <p>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card-section">
        <h2>Åpne beslutninger</h2>
        <div className="decisions-grid">
          {openDecisions.map(d => (
            <div key={d.title} className="decision-card">
              <h3>{d.title}</h3>
              <ul>
                {d.options.map(o => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              {d.recommendation && (
                <div className="recommendation">{d.recommendation}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="card-section">
        <h2>Handlingspunkter</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th style={{ width: '5%' }}></th>
                <th>Oppgave</th>
                <th style={{ width: '15%' }}>Frist</th>
              </tr>
            </thead>
            <tbody>
              {actionItems.map((a, i) => (
                <tr key={i} className={a.done ? 'done' : ''}>
                  <td>
                    <span className={`check ${a.done ? 'checked' : ''}`}>
                      {a.done ? '✓' : '○'}
                    </span>
                  </td>
                  <td>{a.text}</td>
                  <td><span className="deadline-tag">{a.deadline}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card-section">
        <h2>Åpne spørsmål</h2>
        <ol className="open-questions">
          <li>Medfinansieringsmodell — hvor stor andel dekker Grønn Plattform vs. partnerforpliktelse?</li>
          <li>IP-håndtering — beholder partnere plattform-IP i et GP-konsortium?</li>
          <li>Scope — ønsker KAIROS spesifikke plattformer eller generell AI/dataplattformkapasitet?</li>
          <li>Andre partnere — hvem ellers er i konsortiet? Overlapper noen med NCHs 42 partnere?</li>
          <li>Arbeidspakker — hvor ville NS passe i arbeidspakkestrukturen?</li>
          <li>SINTEF-kontinuitet — kan SirkOff-relasjonen eksplisitt refereres i KAIROS-forslaget?</li>
          <li>NCH-rolle — skal NCH posisjoneres som separat entitet eller del av NS' bidrag?</li>
        </ol>
      </section>
    </div>
  )
}
