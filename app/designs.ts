import { fableDesigns } from '@/fable/designs'

export type DesignSlug = 'one' | 'two' | 'three' | 'four' | 'five'
export type ModelKey = 'astra' | 'opus' | 'fable'

export type Design = {
  slug: DesignSlug
  /** Working name of the design, as its own folder calls it. */
  name: string
  /** One line on what the page leads with. Shown on the overview. */
  idea: string
  /** Two-tone swatch, mixed from the design's own ground and accent. */
  swatch: string
}

export type Model = {
  key: ModelKey
  /** How the model is named everywhere in the shell. */
  name: string
  /** One line naming what this set of five is. */
  note: string
  designs: Design[]
}

export const models: Model[] = [
  {
    key: 'astra',
    name: 'Astra',
    note: 'Fünf Entwürfe, gebaut von Astra.',
    designs: [
      {
        slug: 'one',
        name: 'Überblick',
        idea: 'Helle Produktübersicht mit Wochentafel und ruhiger Typografie.',
        swatch: 'linear-gradient(110deg, #fafafb 50%, #e3ddeb 50%)',
      },
      {
        slug: 'two',
        name: 'Werkstatt',
        idea: 'Werkstattbild, Anthrazit und schmale, kräftige Schrift.',
        swatch: 'linear-gradient(110deg, #24212a 50%, #a99c8d 50%)',
      },
      {
        slug: 'three',
        name: 'Arbeitsfluss',
        idea: 'Sehr große Schrift und die Übergabe vom Auftrag aufs Handy.',
        swatch: 'linear-gradient(110deg, #ffffff 50%, #6f5f94 50%)',
      },
      {
        slug: 'four',
        name: 'Miteinander',
        idea: 'Menschen und begleitete Einführung, mit Bogenfoto und Serifenschrift.',
        swatch: 'linear-gradient(110deg, #eae6f1 50%, #b9aca0 50%)',
      },
      {
        slug: 'five',
        name: 'Fokus',
        idea: 'Kampagnenstrecke mit dunklem Einstieg und Anfrage-Vorschau.',
        swatch: 'linear-gradient(110deg, #292432 50%, #fafafb 50%)',
      },
    ],
  },
  {
    key: 'opus',
    name: 'Opus',
    note: 'Fünf Entwürfe, gebaut von Opus.',
    designs: [
      {
        slug: 'one',
        name: 'Feierabend',
        idea: 'Der Papierkram als Gegenstand: Zettel, Stundenzettel, Lieferschein — daneben derselbe Vorgang, sauber.',
        swatch: 'linear-gradient(110deg, #ffffff 50%, #e9e4da 50%)',
      },
      {
        slug: 'two',
        name: 'Plantafel',
        idea: 'Die Woche als Planungstafel. Namen links, Tage oben, ein oranger Strich für heute.',
        swatch: 'linear-gradient(110deg, #211c2e 50%, #f3f1f6 50%)',
      },
      {
        slug: 'three',
        name: 'Technische Zeichnung',
        idea: 'Ein Auftrag als Schemazeichnung, mit Maßlinien, Stückliste und Schriftfeld.',
        swatch: 'linear-gradient(110deg, #e8ecef 50%, #16202a 50%)',
      },
      {
        slug: 'four',
        name: 'Morgens um sechs',
        idea: 'Der Tag eines Chefs, von 05:40 bis 21:15, in einer Spalte.',
        swatch: 'linear-gradient(110deg, #f7f6f8 50%, #3e3659 50%)',
      },
      {
        slug: 'five',
        name: 'Ein Dienstag',
        idea: 'Das Produkt selbst: Chef, Büro oder Monteur wählen und denselben Dienstag sehen.',
        swatch: 'linear-gradient(110deg, #fafafb 50%, #6f5f94 50%)',
      },
    ],
  },
  {
    key: 'fable',
    name: 'Fable',
    note: 'Fünf Entwürfe, gebaut von Fable.',
    // The fable set keeps its registry beside its code; the shell reads it.
    designs: fableDesigns,
  },
]

export const designSlugs: DesignSlug[] = ['one', 'two', 'three', 'four', 'five']

export function findModel(key: string): Model | undefined {
  return models.find((model) => model.key === key)
}

export function findDesign(modelKey: string, slug: string) {
  const model = findModel(modelKey)
  const design = model?.designs.find((entry) => entry.slug === slug)
  if (!model || !design) return undefined
  return { model, design, index: model.designs.indexOf(design) }
}

/** Page title used by every design route. */
export function designTitle(modelKey: ModelKey, slug: DesignSlug) {
  const found = findDesign(modelKey, slug)
  if (!found) return 'WerkFlow'
  return `${found.model.name} ${found.index + 1}: ${found.design.name} — WerkFlow`
}
