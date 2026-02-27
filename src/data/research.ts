export type ResearchProject = {
  name: string
  funder: string
  focus: string
  status: string
}

export type Publication = {
  title: string
  author: string
  year: number
  type: string
}

export type Standard = {
  name: string
  scope: string
  type: string
}

export const researchProjects: ResearchProject[] = [
  {
    name: 'DUT Inclusive City',
    funder: 'Forskningsrådet (DUT)',
    focus: 'Inkluderende stedsutvikling, 15-minutters by-kartlegging',
    status: 'Aktiv — workshops i Oslo, Wien, Panevėžys, Riga'
  },
  {
    name: 'Trustmaking JPI',
    funder: 'JPI Urban Europe',
    focus: 'Nabolagsdemokrati, sivil tillit',
    status: 'Aktiv'
  },
  {
    name: 'CodeCoex',
    funder: 'Horizon Europe',
    focus: 'Biodiversitet + sirkulærøkonomi (Sundland Verk)',
    status: 'Stage 1 evaluert'
  },
  {
    name: 'NEB 2025',
    funder: 'New European Bauhaus',
    focus: 'Bærekraft, inkludering, estetikk',
    status: 'Søkt'
  },
  {
    name: 'SINTEF SirkOff',
    funder: 'IPO 2025',
    focus: 'Sirkulære bygg i offentlig sektor',
    status: 'Aktivt klientprosjekt'
  },
  {
    name: 'Grønn Plattform 2025',
    funder: 'Innovation Norway',
    focus: 'BuildGreenSpace-konsortium',
    status: 'Søkt'
  }
]

export const publications: Publication[] = [
  {
    title: 'The New Natural State of the Market',
    author: 'Kristian Holthe',
    year: 2022,
    type: 'Publisert bokkapittel'
  },
  {
    title: 'NS Four Pillars Model',
    author: '',
    year: 0,
    type: 'Strukturert metodikk for steds-/samfunnstransformasjon'
  }
]

export const standards: Standard[] = [
  {
    name: 'CEN WG4',
    scope: 'Forretningsmodeller for sirkulær økonomi',
    type: 'Europeisk standardisering'
  },
  {
    name: 'COP28 / COP30',
    scope: 'Klimapolitisk engasjement',
    type: 'FN-klimakonferanse'
  },
  {
    name: 'Jakarta ISO',
    scope: 'ISO-standardisering',
    type: 'Internasjonal standardisering'
  }
]
