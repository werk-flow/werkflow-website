/**
 * The claims every Fable design may make, in one place, so the five pages
 * stay on the same facts. Sources: werkflow-app/AGENTS.md and the Phase 1
 * roadmap (Waves 0 to 2 accepted, production release of 2026-09-18) for what
 * exists today; werkflow-business/docs/offer.md for the planned start.
 *
 * Nothing here names a price, a guarantee, a trial, a date, a customer, an
 * app-store link, or an AI feature: none of those is decided or released.
 */

export type Fact = { title: string; text: string }

/** What the released product does today. */
export const today: Fact[] = [
  {
    title: 'Kunden und Einsatzorte',
    text: 'Jeder Kunde hat seine Ansprechpartner und seine Einsatzorte. Ein Auftrag zeigt immer auf den richtigen Ort.',
  },
  {
    title: 'Anfragen',
    text: 'Ein Anruf wird als Anfrage notiert. Mit einem Klick wird daraus ein Auftrag. Nichts wird doppelt getippt.',
  },
  {
    title: 'Aufträge und Projekte',
    text: 'Jeder Auftrag hat einen Stand: geplant, läuft, blockiert, fertig. Man sieht, wer dran ist und was noch fehlt.',
  },
  {
    title: 'Plantafel',
    text: 'Die Woche für alle Kollegen auf einer Tafel. Urlaub, Krankheit und freie Zeit sind sichtbar. Einsätze zieht man an die richtige Stelle.',
  },
  {
    title: 'Mein Einsatz',
    text: 'Der Monteur sieht auf dem Handy nur seinen Einsatz: was, wo, wann. Er hakt Aufgaben ab, macht Fotos, notiert Maße und Mängel. Der Kunde unterschreibt auf dem Gerät.',
  },
  {
    title: 'Übergabe',
    text: 'Das Büro prüft, was auf der Baustelle passiert ist. Fehlt ein Foto oder eine Unterschrift, sieht man es sofort.',
  },
  {
    title: 'Zeiten',
    text: 'Arbeit, Fahrt und Pause werden am Gerät erfasst. Zeitkonten und der Export für die Lohnabrechnung sind dabei.',
  },
  {
    title: 'Service und Wartung',
    text: 'Anlagen beim Kunden sind erfasst. Wartungspläne erzeugen die fälligen Termine von selbst.',
  },
  {
    title: 'Lager',
    text: 'Artikel, Lagerorte und Bestände. Material wird für den Auftrag geplant und am Einsatz entnommen.',
  },
  {
    title: 'Dokumente',
    text: 'Eine Ablage für alles. Jede Datei hängt am Auftrag, am Kunden oder am Mitarbeiter.',
  },
]

/** The boundary every page states so that no reader expects more. */
export const notYet =
  'Angebote und Rechnungen kommen später. Eine App im App Store gibt es noch nicht. WerkFlow läuft im Browser, am Rechner und auf dem Handy.'

/** The founders' planned start, from the offer document. Planned, not sold. */
export const planned: Fact[] = [
  {
    title: 'Wir bringen Ihre Daten rein',
    text: 'Mitarbeiter, Kunden, offene Aufträge, Lager und Dokumente. Wir kommen zu Ihnen und richten das ein. Sie bauen nichts allein neu auf.',
  },
  {
    title: 'Schulung vor Ort, nach Rolle',
    text: 'Büro, Leitung und Monteure lernen nur, was sie brauchen. Mit echten Aufträgen, nicht mit einer Tour durch alle Menüs.',
  },
  {
    title: 'Regelmäßige Gespräche',
    text: 'Wir schauen mit Ihnen, was läuft und was hakt. Dort helfen wir nach.',
  },
  {
    title: 'Hilfe zum Nachlesen und Videos',
    text: 'Kurze Texte und kurze Videos zu jeder Funktion, für jeden im Betrieb.',
  },
]

export const plannedNote =
  'So planen wir den Start. Umfang und Bedingungen klären wir vor dem Kauf. Nichts davon ist heute schon zu kaufen.'

/** Who the page speaks to, without a headcount: that boundary is still open. */
export const audience = 'Für SHK-Betriebe mit Büro, Lager und mehreren Monteuren.'

export const previewNote = 'Vorschau. Diese Seite sendet noch nichts.'
