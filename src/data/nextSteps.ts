export type TimelineItem = {
  date: string
  milestone: string
  description: string
}

export type Decision = {
  title: string
  options: string[]
  recommendation?: string
  status: 'open' | 'decided'
}

export type ActionItem = {
  text: string
  deadline: string
  done: boolean
}

export const timeline: TimelineItem[] = [
  {
    date: '4. mars 2026',
    milestone: 'Konseptskisse frist',
    description: 'Konseptskisse for Grønn Plattform 2026 skal leveres. NS må avklare bidrag til skissen.'
  },
  {
    date: '3. juni 2026',
    milestone: 'Full søknad frist',
    description: 'Fullstendig prosjektsøknad med arbeidspakker, budsjett og partnerbidrag.'
  },
  {
    date: 'H2 2026',
    milestone: 'Prosjektstart (estimert)',
    description: 'KAIROS starter som 3-årig forskningsprosjekt dersom finansiert.'
  },
  {
    date: 'H2 2029',
    milestone: 'Prosjektavslutning (estimert)',
    description: 'Avslutning av KAIROS-prosjektet etter 3 år.'
  }
]

export const openDecisions: Decision[] = [
  {
    title: 'Forpliktelsesnivå',
    options: [
      'A) Full konsortiumpartner (navngitt i søknaden, medfinansieringsforpliktelse, arbeidspakke-eierskap)',
      'B) Assosiert partner (bidrar plattformer/data, lettere forpliktelse)',
      'C) Kun støttebrev'
    ],
    status: 'open'
  },
  {
    title: 'Hvilke plattformer å fremheve',
    options: [
      'A) Kun Coffee & Forest (enkleste narrativ)',
      'B) Coffee & Forest + PlanVarde + sirkulær suite (viser bredde)',
      'C) Full portefølje med portal-demo (maksimal effekt, risiko for overbelastning)'
    ],
    recommendation: 'Anbefalt: Alternativ B',
    status: 'open'
  },
  {
    title: 'Multi-agentisk AI-framing',
    options: [
      'Posisjonere NS som allerede driver multi-agentisk AI',
      'Ærlig framing: sterk single-agent RAG, klar til å utvikle seg mot multi-agent med KAIROS'
    ],
    recommendation: 'Anbefalt: Ærlig framing — mer troverdig',
    status: 'open'
  }
]

export const actionItems: ActionItem[] = [
  { text: 'Gabriel gjennomgår alignment brief og justerer vektlegging', deadline: 'Mandag 2. mars', done: false },
  { text: 'Skriv e-postsvar — led med SINTEF-relasjon og GP 2025-erfaring', deadline: 'Mandag 2. mars', done: false },
  { text: 'Hent GP 2025-søknadsmaterialer fra Drive for formatreferanse', deadline: 'Mandag 2. mars', done: false },
  { text: 'Hent SINTEF SirkOff-relasjonskontext fra Drive', deadline: 'Mandag 2. mars', done: false },
  { text: 'Kontakt Cathrine Barth re: NCH/KAIROS-synergier', deadline: 'Mandag 2. mars', done: false },
  { text: 'Beslutt: hvilke plattformer å tilby som KAWP-testplattformer', deadline: 'Mandag 2. mars', done: false },
  { text: 'Beslutt: hvilket nivå av personellforpliktelse NS kan tilby', deadline: 'Mandag 2. mars', done: false },
  { text: 'Avklar med Kristian: hvilket format trenger konseptskissen fra partnere?', deadline: '4. mars', done: false },
  { text: 'Forbered 1-side NS-kapabilitetsoversikt for skisse-vedlegg', deadline: '4. mars', done: false },
  { text: 'Identifiser NS-teammedlemmer for forslaget', deadline: '4. mars', done: false },
  { text: 'Utvikle detaljerte arbeidspakkebidrag', deadline: '3. juni', done: false },
  { text: 'Forbered plattform-arkitekturdokumentasjon for søknadsvedlegg', deadline: '3. juni', done: false },
  { text: 'Kalkuler personalkostnadsforpliktelse og medfinansieringsbudsjett', deadline: '3. juni', done: false }
]
