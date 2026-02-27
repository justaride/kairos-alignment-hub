export type Platform = {
  name: string
  subtitle: string
  description: string
  url?: string
  stack: string[]
  stats?: string[]
  tier: 1 | 2 | 3
}

export const platforms: Platform[] = [
  {
    name: 'Coffee & Forest',
    subtitle: 'EUDR Compliance Platform',
    description: 'Inntar fragmenterte bondedata fra diverse kilder (Excel, CSV, Shapefiles), verifiserer gårdsplott mot avskogingslag via Global Forest Watch og Sentinel Hub, genererer EU Due Diligence Statements for import til Norge/EØS.',
    url: 'https://coffee-forest.naturalstateproject.com',
    stack: ['NestJS 11', 'React 19', 'PostgreSQL', 'pgvector', 'PostGIS', 'Redis', 'OpenAI'],
    stats: ['RAG-drevet regulatorisk chatbot', 'Satellittbasert verifisering', 'EUDR-compliance-motor'],
    tier: 1
  },
  {
    name: 'PlanVarde',
    subtitle: 'Regulatorisk AI-kunnskapsgraf',
    description: 'Kunnskapsgraf over norsk planleggingslov med grafalgoritmer for navigasjon, prosessmoduler og risikovurdering mot myndigheter.',
    url: 'https://varde.gabistudio.dev',
    stack: ['Next.js 16', 'React 19', 'tRPC', 'Prisma', 'PostgreSQL 17'],
    stats: ['2 290 entiteter', '1 705+ relasjoner', '381 lovparagrafer', '35 entitetstyper'],
    tier: 1
  },
  {
    name: 'Perronggården',
    subtitle: 'Konseptskisse-plattform',
    description: 'Prosjektdashboard med innsiktsbibliotek, interessenthåndtering, KPI-sporing, dokumentbehandling og automatiserte QA-gates for Kolbotn sentrum.',
    url: 'https://perronggarden.naturalstateproject.com',
    stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Leaflet'],
    stats: ['181 verifiserte innsikter', '15 interessenter', '20 KPIer', '23 dokumenter behandlet'],
    tier: 1
  },
  {
    name: 'Nordic Circular Buildings',
    subtitle: 'Forskningsdatabase',
    description: 'Verifiserte sirkulære byggeprosjekter på tvers av Norden med CO₂-reduksjonsdata, interaktivt kart og PDF-siteringer.',
    url: 'https://publiccircularbuilding.naturalstateproject.com',
    stack: ['Astro 5.16'],
    stats: ['80 prosjekter', '5 nordiske land', '520+ forskningsdok.', 'CO₂-reduksjon: 28–97%'],
    tier: 2
  },
  {
    name: 'FYRA',
    subtitle: 'B2B Gjenbruksmarkedsplass',
    description: 'Sirkulær markedsplass for gjenbruk med operatørprofiler, produktkategorier og kapasitetssporing.',
    url: 'https://fyra-report.naturalstateproject.com',
    stack: ['Next.js'],
    stats: ['50+ operatørprofiler', 'Møbler, tekstiler, byggematerialer'],
    tier: 2
  },
  {
    name: 'Nordic Circular Summit 2025',
    subtitle: 'Etterretningshub',
    description: 'Intelligens-plattform for nordisk sirkulærøkonomitoppmøte med organisasjonskartlegging og semantiske koblinger.',
    url: 'https://summit2025nuuk.naturalstateproject.com',
    stack: ['Next.js 16', 'React 19', 'Cytoscape.js'],
    stats: ['85+ organisasjoner', '395 semantiske koblinger', '32 bedrifter profilert'],
    tier: 2
  },
  {
    name: 'NECC / Nordic Innovation',
    subtitle: 'Sirkulær byggeinfrastruktur',
    description: '3-årig nordisk innovasjonsprosjekt for sirkulær bygningsinfrastruktur på tvers av 5 nordiske land.',
    url: 'https://nordic-innovation.naturalstateproject.com',
    stack: ['Next.js 16', 'React 19', 'PostgreSQL'],
    stats: ['11,84 MNOK', '5 562 timer', '7 arbeidspakker', '5 nordiske land'],
    tier: 2
  },
  {
    name: 'Filipstad',
    subtitle: 'Beslutningsstøtte + Kunnskapsbase',
    description: 'Oslo fjordbybeslutningsstøtte-dashboard og kunnskapsbase for Filipstad byplanleggingsprosess (180 daa havneområde).',
    url: 'https://filipstad.naturalstateproject.com',
    stack: ['React', 'TypeScript'],
    tier: 2
  },
  {
    name: 'Finansieringskart',
    subtitle: 'Finansierings- og politikk-kartlegging',
    description: 'Aggregerer data fra Forskningsrådet, EU Horizon, SkatteFUNN og Doffin med nettverksvisualisering og varslingssystem.',
    url: 'https://funding.naturalstateproject.com',
    stack: ['React 18', 'Express', 'PostgreSQL', 'ReactFlow'],
    tier: 2
  },
  {
    name: 'Tangenkaia',
    subtitle: 'Stedsanalyse',
    description: 'Stedsbasert analysedashboard.',
    url: 'https://tangenkaia.naturalstateproject.com',
    stack: ['React', 'TypeScript', 'Vite'],
    tier: 3
  },
  {
    name: 'Sundland Bolig',
    subtitle: 'Bolig- og reguleringsanalyse',
    description: 'Bolig- og reguleringsanalyseplattform for Sundland-området.',
    url: 'https://sundland-bolig.naturalstateproject.com',
    stack: ['React', 'TypeScript', 'Vite'],
    tier: 3
  },
  {
    name: 'Rendalen',
    subtitle: 'Regional utvikling + Besøksstrategi',
    description: 'Stedsbasert intelligens-dashbord for regional utvikling og besøksstrategi.',
    url: 'https://rendalen.naturalstateproject.com',
    stack: ['Next.js 15'],
    tier: 3
  },
  {
    name: 'Sunnmørsalpene',
    subtitle: 'Alpin regionanalyse',
    description: 'Alpine regionanalyser og dashbord.',
    url: 'https://sunnmorsalpene.naturalstateproject.com',
    stack: ['React', 'Vite'],
    tier: 3
  }
]
