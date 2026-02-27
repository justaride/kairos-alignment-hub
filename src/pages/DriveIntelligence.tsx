export function DriveIntelligence() {
  const capabilities = [
    { capability: 'Grønn Plattform-erfaring', evidence: 'GP 2025-søknad (BuildGreenSpace)', domain: 'Programkjennskap' },
    { capability: 'Aktivt SINTEF-forhold', evidence: 'SirkOff klientprosjekt + IPO 2025', domain: 'Konsortiumintegrasjon' },
    { capability: 'Forskningsrådet prosjektleveranse', evidence: 'DUT Inclusive City (4 land)', domain: 'Forskningsgjennomføring' },
    { capability: 'EU-forskningsforslag', evidence: 'CodeCoex Horizon Europe, NEB 2025', domain: 'Forslagskriving' },
    { capability: 'JPI forskningsleveranse', evidence: 'Trustmaking JPI', domain: 'Internasjonal forskning' },
    { capability: 'Akademisk publisering', evidence: 'Holthe 2022 bokkapittel', domain: 'Forskningstroverdighet' },
    { capability: 'Formalisert metodikk', evidence: 'Four Pillars Model, Arbeidsverktøy', domain: 'Metodisk stringens' },
    { capability: '42-partner SØ-nettverk', evidence: 'Nordic Circular Hotspot', domain: 'Styringsnettverk' },
    { capability: '15+ tematiske arbeidsgrupper', evidence: 'NCH overgangsgrupper', domain: 'Domenedekning' },
    { capability: 'EU-standarddeltakelse', evidence: 'CEN WG4 Business Models', domain: 'Standardautoritet' },
    { capability: 'COP-engasjement', evidence: 'COP28, COP30', domain: 'Klimapolitikk' },
    { capability: 'Living lab-erfaring', evidence: 'Ravnedalen', domain: 'Anvendt forskning' },
    { capability: 'Materialstrømsanalyse', evidence: 'Ravnedalen, NCE CE', domain: 'Sirkulær metodikk' },
    { capability: 'Kommunal styringserfaring', evidence: 'Leknes Vestvågøy', domain: 'Offentlig sektor' },
    { capability: 'Interreg-erfaring', evidence: 'Baltic, Textiles, RECONNECT', domain: 'EU-programleveranse' },
    { capability: 'Erasmus+-erfaring', evidence: 'Destructura', domain: 'Utdanning og opplæring' },
  ]

  return (
    <div className="page">
      <header className="page-header">
        <h1>Drive-etterretning</h1>
        <p className="page-lead">
          Funn fra NS Google Drive som styrker KAIROS-casen utover deployed plattformer.
          Disse er ikke-plattform-eiendeler som demonstrerer institusjonell kapasitet.
        </p>
      </header>

      <section className="card-section">
        <h2>Nøkkelfunn</h2>
        <div className="findings-grid">
          <div className="finding-card highlight">
            <h3>SINTEF-relasjon endrer framingen</h3>
            <p>
              Det aktive SirkOff-klientprosjektet med SINTEF betyr at dette ikke er en kald henvendelse.
              NS jobber allerede med en av de to KAIROS-lederne. Kombinert med GP 2025-erfaring
              posisjonerer dette NS som en kjent, betrodd partner.
            </p>
          </div>
          <div className="finding-card highlight">
            <h3>NCH er en massiv eiendel</h3>
            <p>
              42 partnerskapsavtaler og 15+ tematiske overgangsgrupper utgjør institusjonell infrastruktur,
              ikke bare et nettverk. NCHs direkte referanser til UiO og SINTEF i Nordic Circular Construction
              Phase II-søknaden sementerer ytterligere de eksisterende relasjonene.
            </p>
          </div>
          <div className="finding-card">
            <h3>Forskningssporet er dypere enn forventet</h3>
            <p>
              DUT (Forskningsrådet), Trustmaking JPI (EU), CodeCoex (Horizon Europe), NEB 2025 og
              Holthe 2022-publikasjonen viser samlet at NS opererer i finansierte forskningskontekster
              på norsk, nordisk og EU-nivå.
            </p>
          </div>
          <div className="finding-card">
            <h3>Strategiske implikasjoner</h3>
            <ol>
              <li><strong>Led med SINTEF</strong> — NS er ikke kald mot en konsortiumleder</li>
              <li><strong>GP 2025-erfaring</strong> — Nevn kjennskap til programformat</li>
              <li><strong>NCH som styringsinfrastruktur</strong> — Institusjonell eiendel KAIROS kan utnytte</li>
              <li><strong>Forskningssporet</strong> — Demonstrer leveransekapasitet i finansierte kontekster</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h2>Kapabilitetsmatrise</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Kapabilitet</th>
                <th>Bevisgrunnlag</th>
                <th>KAIROS-domene</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map(c => (
                <tr key={c.capability}>
                  <td><strong>{c.capability}</strong></td>
                  <td>{c.evidence}</td>
                  <td><span className="tag">{c.domain}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
