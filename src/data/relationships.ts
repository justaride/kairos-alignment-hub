export type Relationship = {
  name: string
  type: string
  status: 'active' | 'program-experience' | 'network'
  description: string
  kairosRelevance: string
}

export const relationships: Relationship[] = [
  {
    name: 'SINTEF SirkOff',
    type: 'Klientprosjekt',
    status: 'active',
    description: 'Aktivt klientprosjekt med SINTEF — sirkulære bygg i offentlig sektor. IPO 2025-søknad innsendt, intensjonsbrev, partnermøter og CVer levert.',
    kairosRelevance: 'SINTEF er en av KAIROS\' to konsortiumledere. NS har allerede et arbeidsforhold — ikke kald henvendelse.'
  },
  {
    name: 'Grønn Plattform 2025 (BuildGreenSpace)',
    type: 'Programerfaring',
    status: 'program-experience',
    description: 'NS søkte Grønn Plattform 2025 som del av BuildGreenSpace-konsortiet. Forstår programformat, krav, medfinansieringsmodell og partnerstruktur.',
    kairosRelevance: 'NS er ikke ny til Grønn Plattform — kjent med formatet. Reduserer risiko for KAIROS-konsortiet.'
  },
  {
    name: 'Nordic Circular Hotspot (NCH)',
    type: 'Styringsnettverk',
    status: 'network',
    description: '42 signerte partnerskapsavtaler. 15+ overgangsgrupper (Data, Bygg, Innkjøp, Mat, Tekstil, Regulering). CEN WG4, COP28/COP30. Nøkkelpartnere: Holland Circular Hotspot, Roskilde University, SINTEF, Exchange4Change Brasil, Hub For Ocean.',
    kairosRelevance: 'Institusjonell infrastruktur som KAIROS kan utnytte. Overgangsgruppene kartlegger direkte til KAIROS-domener.'
  },
  {
    name: 'EU-programerfaring',
    type: 'Forskningsprogrammer',
    status: 'program-experience',
    description: 'CodeCoex (Horizon Europe Stage 1), NEB 2025, DUT Forskningsrådet (4 land), Trustmaking JPI (JPI Urban Europe), Interreg Baltic/Textiles/RECONNECT, Destructura (Erasmus+).',
    kairosRelevance: 'Demonstrerer at NS kan skrive og levere i finansierte, flerpartner forskningsrammer på norsk, nordisk og EU-nivå.'
  }
]
