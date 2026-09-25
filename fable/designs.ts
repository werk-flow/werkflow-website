export type FableSlug = 'one' | 'two' | 'three' | 'four' | 'five'

export type FableDesign = {
  slug: FableSlug
  name: string
  /** One line on what the page leads with. */
  idea: string
  /** Two-tone swatch, mixed from the design's ground and its accent. */
  swatch: string
}

export const fableDesigns: FableDesign[] = [
  {
    slug: 'one',
    name: 'Fragen',
    idea: 'Die acht Fragen eines Chefs, jede mit der Antwort aus dem Programm.',
    swatch: 'linear-gradient(110deg, #fafafb 50%, #1a1523 50%)',
  },
  {
    slug: 'two',
    name: 'Regal',
    idea: 'Der Betrieb als Lagerregal: jedes Fach beschriftet, alles an seinem Platz.',
    swatch: 'linear-gradient(110deg, #221e2d 50%, #b3aac8 50%)',
  },
  {
    slug: 'three',
    name: 'Video',
    idea: 'Die Kampagnenseite: Video oben, kurzes Formular daneben, Termin danach.',
    swatch: 'linear-gradient(110deg, #3e3659 50%, #fafafb 50%)',
  },
  {
    slug: 'four',
    name: 'Antwortkarte',
    idea: 'Ein Prospekt zum Aufklappen, mit einer Antwortkarte zum Abtrennen.',
    swatch: 'linear-gradient(110deg, #ffffff 50%, #cfc9d8 50%)',
  },
  {
    slug: 'five',
    name: 'Anfrage',
    idea: 'Ein Anruf wird zum Auftrag, zum Einsatz, zur Übergabe. Zum Selberklicken.',
    swatch: 'linear-gradient(110deg, #f4f3f6 50%, #6f5f94 50%)',
  },
]
