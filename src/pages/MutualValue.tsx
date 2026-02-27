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
        <h2>Hva KAIROS eksplisitt søker fra partnere</h2>
        <p className="section-lead">
          Fra KAIROS-konseptnotatet: hva de trenger fra industripartnere.
        </p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>KAIROS-krav</th>
                <th>NS-dekning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dyp domenekunnskap innen klima, urban design, arkitektur, sirkulær økonomi</strong></td>
                <td>21+ plattformer på tvers av disse domenene, publisert metodikk (Holthe 2022)</td>
              </tr>
              <tr>
                <td><strong>Aktive praksisporteføljer som produserer reelle data for KAWP</strong></td>
                <td>Live datapipelines: satellitt, regulatorisk, kommunal, finansiering — allerede i produksjon</td>
              </tr>
              <tr>
                <td><strong>Personalkostnadsforpliktelse (Grønn Plattform medfinansieringsmodell)</strong></td>
                <td>GP 2025-erfaring (BuildGreenSpace) — kjent med medfinansieringsmodellen</td>
              </tr>
              <tr>
                <td><strong>Villighet til å bruke arbeidet som testplattformer for agentisk AI-drevet foresight</strong></td>
                <td>Coffee & Forest (RAG + satellitt), PlanVarde (kunnskapsgraf), Perronggården (datapipeline) som kandidater</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
