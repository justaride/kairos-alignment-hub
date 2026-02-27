export function MutualValue() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Gjensidig verdi</h1>
        <p className="page-lead">
          Hva NS tilfører KAIROS, og hva KAIROS gir tilbake til NS.
        </p>
      </header>

      <section className="card-section">
        <div className="value-columns">
          <div className="value-col ns-gives">
            <h2>NS → KAIROS</h2>
            <ul>
              <li>Domenekunnskap innen klimacompliance, byplanlegging, sirkulær konstruksjon og regulatoriske rammeverk</li>
              <li>Live plattformer som testplattformer for KAWP-integrasjon</li>
              <li>Rask prototypingkapasitet for foresight-demonstratorer</li>
              <li>Datapipelines (satellitt, regulatorisk, kommunal, finansiering) allerede i produksjon</li>
              <li>Eksisterende SINTEF-relasjon (SirkOff) for smidig konsortiumintegrasjon</li>
              <li>NCH-nettverk (42 partnere, 15+ arbeidsgrupper) som ferdig formidlings- og interessentkanal</li>
              <li>Forskningsleveranseerfaring på tvers av norske, nordiske og EU-programmer</li>
              <li>Publisert metodikk (Holthe 2022, NS Four Pillars Model)</li>
            </ul>
          </div>
          <div className="value-col kairos-gives">
            <h2>KAIROS → NS</h2>
            <ul>
              <li>Forskningspartnerskap med UiO/SINTEF — akademisk troverdighet og tilgang til PhD/postdoc-kapasitet</li>
              <li>Tilgang til klimadatasett — klimamodellutdata, AMOC-data, tipping point-forskning</li>
              <li>Grønn Plattform-medfinansiering for arbeid allerede i NS sitt veikart</li>
              <li>Akademisk framing som hever NS plattformportefølje</li>
              <li>Multi-agentisk AI-metodikk — fra single-agent RAG til orkestrerte multi-agent-systemer</li>
              <li>Spekulativ futures-metodikk — foresight-verktøy forankret i reelle deployed systemer</li>
              <li>Posisjonering i skjæringspunktet AI + klima + urban design</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card-section">
        <h2>Komplementaritetsgap</h2>
        <p className="section-lead">
          Hva UiO/SINTEF allerede har vs. hva NS tilfører — argumentet for hvorfor NS fyller et gap.
        </p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Område</th>
                <th>UiO/SINTEF har</th>
                <th>NS bringer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AI-forskning</strong></td>
                <td>Multi-agentisk AI-teori, forskningsmetodikk</td>
                <td>Deployed single-agent RAG-systemer, produksjonsdata-pipelines</td>
              </tr>
              <tr>
                <td><strong>Klimadata</strong></td>
                <td>Klimamodellering, AMOC-forskning, tipping points</td>
                <td>Satellittverifisering, GFW-integrasjon, geospatiale pipelines</td>
              </tr>
              <tr>
                <td><strong>Byplanlegging</strong></td>
                <td>Akademisk urban teori, design thinking</td>
                <td>4 live beslutningsstøtte-dashbord for norske kommuner</td>
              </tr>
              <tr>
                <td><strong>Sirkulær økonomi</strong></td>
                <td>Forskningsmiljøer, publiseringskanal</td>
                <td>80 prosjekter, B2B markedsplass, 42-partner styringsnettverk</td>
              </tr>
              <tr>
                <td><strong>Regulatorisk</strong></td>
                <td>Policy-analyse, juridisk rammeverk</td>
                <td>Kunnskapsgraf med 2 290 entiteter, automatisert regulatorisk navigasjon</td>
              </tr>
              <tr>
                <td><strong>Infrastruktur</strong></td>
                <td>Institusjonell IT, forskningsinfra</td>
                <td>21+ apper på lean infra (~€20/mnd), rask iterasjon, GitHub→produksjon</td>
              </tr>
              <tr>
                <td><strong>Nettverk</strong></td>
                <td>Akademiske nettverk, konferanser</td>
                <td>NCH (42 partnere, 15+ arbeidsgrupper), CEN WG4, COP-engasjement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
