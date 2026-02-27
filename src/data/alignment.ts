export type AlignmentRow = {
  requirement: string
  platforms: string
  evidence: string
}

export const alignmentData: AlignmentRow[] = [
  {
    requirement: 'Agentisk AI for klima-/regulatoriske data',
    platforms: 'Coffee & Forest',
    evidence: 'RAG-drevet EUDR-compliance-motor — inntar fragmenterte bondedata (Excel, CSV, Shapefiles), verifiserer gårdsplott mot avskogingslag via Global Forest Watch + Sentinel Hub, genererer EU Due Diligence Statements. PostgreSQL + pgvector + PostGIS + OpenAI. NestJS + React monorepo.'
  },
  {
    requirement: 'Beslutningsstøtte for byplanlegging',
    platforms: 'Filipstad, Tangenkaia, Perronggården, Sundland',
    evidence: 'Fire live byplanleggingsdashboard for norske kommuner og utviklere. Filipstad = fjordbyutvikling. Tangenkaia = stedsanalyse. Perronggården = Kolbotn sentrum med 181 verifiserte innsikter, 15 interessenter, 20 KPIer. Sundland = bolig/regulering.'
  },
  {
    requirement: 'Semantisk søk i fragmenterte data',
    platforms: 'Perronggården, PlanVarde, Coffee & Forest',
    evidence: 'Perronggården: Supabase kunnskapsbase med dokumentekstraksjon (23 dok., 179 sider, automatiserte QA-gates). PlanVarde: Kunnskapsgraf med 2 290 entiteter, 1 705 relasjoner, 381 seksjoner av PBL 2008 + TEK17. Coffee & Forest: pgvector RAG over regulatorisk korpus.'
  },
  {
    requirement: 'Klimarisiko og avskogingsovervåking',
    platforms: 'Coffee & Forest',
    evidence: 'Satellittbasert verifisering mot Global Forest Watch avskogingslag (post-des. 2020). Risikovurdering flagger høyrisikobruk. Bevisdokumentkjede for revisjonsspor. PostGIS for geospatiale spørringer.'
  },
  {
    requirement: 'Sirkulærøkonomi-intelligens',
    platforms: 'Nordic Circular Buildings, FYRA, Summit 2025, NECC',
    evidence: '80 verifiserte sirkulære byggeprosjekter i 5 nordiske land. 520+ forskningsdokumenter analysert. FYRA: B2B gjenbruksmarkedsplass med 50+ operatørprofiler. Summit 2025: 395 semantiske koblinger, 85+ organisasjoner kartlagt. NECC: 11,84 MNOK søknad til Nordic Innovation.'
  },
  {
    requirement: 'Regional utviklingsanalyse',
    platforms: 'Rendalen, Sunnmørsalpene',
    evidence: 'Stedsbaserte intelligens-dashbord for norske kommuner. Rendalen: besøksstrategi + regional utvikling. Sunnmørsalpene: alpine regionanalyser.'
  },
  {
    requirement: 'Finansiering- og politisk landskapskartlegging',
    platforms: 'Finansieringskart',
    evidence: 'Aggregerer Forskningsrådet, EU Horizon, SkatteFUNN, Doffin-data. Nettverksvisualisering (ReactFlow), varslingssystem, bedriftsprofiler med finansieringstidslinjer.'
  },
  {
    requirement: 'Kunnskapsgraf for regulatoriske domener',
    platforms: 'PlanVarde (PlanKompasset)',
    evidence: '2 290 entiteter, 1 705+ relasjoner på tvers av PBL 2008 og TEK17. 35 entitetstyper, 22 relasjonstyper. Grafalgoritmer for sentralitetsanalyse og community-deteksjon. Prosessmodul med 12 faser for reguleringsplan, 8 for byggesak.'
  },
  {
    requirement: 'Skalerbar plattforminfrastruktur',
    platforms: 'Natural State Portal (21+ live apper)',
    evidence: '21 produksjonsapper på én Hetzner VPS via Coolify + Cloudflare Tunnel. PostgreSQL-databaser, Redis, Docker Compose. Auto-deploy fra GitHub. Cloudflare Zero Trust for tilgangskontroll. ~€20/mnd.'
  },
  {
    requirement: 'Forskningssamarbeid og finansiert prosjekterfaring',
    platforms: 'DUT, Trustmaking JPI, CodeCoex, SINTEF SirkOff',
    evidence: 'DUT Forskningsrådet: inkluderende stedsutvikling i Oslo/Wien/Panevėžys/Riga. Trustmaking JPI: EU-finansiert nabolagsdemokratiforskning. CodeCoex: Stage 1 Horizon Europe (biodiversitet + SØ). SirkOff: aktivt SINTEF-klientprosjekt.'
  },
  {
    requirement: 'Sirkulærøkonomi-styringsnettverk',
    platforms: 'Nordic Circular Hotspot (NCH)',
    evidence: '42 signerte partnerskapsavtaler (Holland Circular Hotspot, Roskilde University, SINTEF, Exchange4Change Brasil, Hub For Ocean). 15+ overgangsgrupper (Data, Bygg, Innkjøp, Mat, Tekstil, Regulering, EU-ledelse). CEN WG4 europeisk standardisering. COP28/COP30.'
  }
]
