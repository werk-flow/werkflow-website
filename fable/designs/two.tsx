import { Archivo } from 'next/font/google'
import { audience, notYet, planned, plannedNote, today } from '../facts'
import { LeadForm } from '../shared/lead-form'
import './two.css'

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  variable: '--font-f2',
  display: 'swap',
})

/**
 * Fable 2, "Regal". The business as a stock shelf: every bin labelled, every
 * thing in its place. The hero is a shelf of bins with real example contents;
 * the product itself is sorted onto three shelves further down.
 */

type Bin = { label: string; lines: string[]; flag?: string; wide?: boolean }

const heroShelves: Bin[][] = [
  [
    { label: 'Aufträge', lines: ['14 offen', '3 heute fertig'] },
    { label: 'Einsätze heute', lines: ['6 geplant', 'alle bestätigt'] },
    { label: 'Anfragen', lines: ['2 neu', 'Hoffmann, Praxis Dr. Weiß'] },
    { label: 'Übergaben', lines: ['1 offen', 'Foto fehlt'], flag: 'prüfen' },
  ],
  [
    { label: 'Plantafel', lines: ['KW 40', 'S. Berger im Urlaub'], wide: true },
    { label: 'Zeiten', lines: ['Woche: 148:30 Std.', '2 Korrekturen offen'] },
    { label: 'Wartung', lines: ['3 fällig bis 21. Okt.'] },
  ],
  [
    { label: 'Lager, Regal B3', lines: ['Ausdehnungsgefäß 25 l', '1 Stück'], flag: 'nachbestellen' },
    { label: 'Fahrzeug Krüger', lines: ['Ausdehnungsgefäß 18 l', '1 Stück'] },
    { label: 'Dokumente', lines: ['Lieferschein', 'Arbeitsbericht, unterschrieben'], wide: true },
  ],
]

const shelves: { title: string; text: string; items: string[] }[] = [
  {
    title: 'Die Arbeit',
    text: 'Vom Anruf bis zur Unterschrift. Jeder Schritt liegt im nächsten Fach.',
    items: ['Kunden und Einsatzorte', 'Anfragen', 'Aufträge und Projekte', 'Plantafel', 'Mein Einsatz', 'Übergabe'],
  },
  {
    title: 'Die Leute und die Zeit',
    text: 'Wer wann gearbeitet hat, und was beim Kunden steht.',
    items: ['Zeiten', 'Service und Wartung'],
  },
  {
    title: 'Das Material und das Papier',
    text: 'Teile und Dateien haben einen Ort. Man sucht nicht mehr.',
    items: ['Lager', 'Dokumente'],
  },
]

function factByTitle(title: string) {
  const fact = today.find((entry) => entry.title === title)
  if (!fact) throw new Error(`Unknown fact ${title}`)
  return fact
}

export default function FableTwo() {
  return (
    <div className={`f2 ${archivo.variable}`}>
      <header className="f2-header">
        <a className="f2-header__brand" href="#main">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-text-dark.svg" alt="WerkFlow" width="128" height="28" />
        </a>
        <a className="f2-header__cta" href="#kontakt">
          Gespräch anfragen
        </a>
      </header>

      <main id="main">
        <section className="f2-hero">
          <div className="f2-hero__text">
            <h1 className="f2-title">Alles an seinem Platz.</h1>
            <p className="f2-lede">
              Aufträge, Stunden, Teile, Dokumente. In WerkFlow hat jedes Ding sein Fach. Jeder im Betrieb findet
              es, ohne zu fragen.
            </p>
            <p className="f2-audience">{audience}</p>
            <a className="f2-button" href="#kontakt">
              Gespräch anfragen
            </a>
          </div>

          <div className="f2-shelf" aria-label="Beispiel: der Betrieb als Regal mit beschrifteten Fächern">
            {heroShelves.map((row, rowIndex) => (
              <div className="f2-shelf__row" key={rowIndex}>
                {row.map((bin) => (
                  <div className={`f2-bin${bin.wide ? ' f2-bin--wide' : ''}`} key={bin.label}>
                    <div className="f2-bin__inside">
                      {bin.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      {bin.flag ? <span className="f2-bin__flag">{bin.flag}</span> : null}
                    </div>
                    <span className="f2-bin__label">{bin.label}</span>
                  </div>
                ))}
                <span className="f2-shelf__board" aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="f2-section" aria-labelledby="f2-regale">
          <h2 className="f2-heading" id="f2-regale">
            Drei Regale, ein Programm.
          </h2>
          <p className="f2-section__text">
            WerkFlow ist eine Software für den ganzen Betrieb: Büro, Leitung und Monteure arbeiten mit denselben
            Aufträgen. Das ist heute schon drin.
          </p>

          {shelves.map((shelf) => (
            <div className="f2-rack" key={shelf.title}>
              <div className="f2-rack__side">
                <h3 className="f2-rack__title">{shelf.title}</h3>
                <p className="f2-rack__text">{shelf.text}</p>
              </div>
              <div className="f2-rack__row">
                {shelf.items.map((title) => {
                  const fact = factByTitle(title)
                  return (
                    <div className="f2-bin f2-bin--text" key={title}>
                      <div className="f2-bin__inside">
                        <p>{fact.text}</p>
                      </div>
                      <span className="f2-bin__label">{fact.title}</span>
                    </div>
                  )
                })}
                <span className="f2-shelf__board" aria-hidden="true" />
              </div>
            </div>
          ))}

          <p className="f2-empty">
            <span className="f2-empty__label">Noch leer</span>
            {notYet}
          </p>
        </section>

        <section className="f2-section f2-section--start" aria-labelledby="f2-start">
          <h2 className="f2-heading" id="f2-start">
            Wir räumen mit Ihnen ein.
          </h2>
          <p className="f2-section__text">
            Ein leeres Regal hilft niemandem. Darum kommt zum Programm der Start dazu.
          </p>
          <ol className="f2-start">
            {planned.map((fact) => (
              <li key={fact.title} className="f2-start__item">
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </li>
            ))}
          </ol>
          <p className="f2-note">{plannedNote}</p>
        </section>

        <section className="f2-contact" id="kontakt" aria-labelledby="f2-reden">
          <div className="f2-contact__text">
            <h2 className="f2-heading" id="f2-reden">
              Reden wir über Ihren Betrieb.
            </h2>
            <p>
              Eine halbe Stunde am Telefon oder per Video. Sie sagen, wo es hakt. Wir zeigen, in welches Fach es
              in WerkFlow gehört.
            </p>
          </div>
          <div className="f2-contact__form">
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="f2-footer">
        <p>WerkFlow · Software für SHK-Betriebe · Entwurf, keine veröffentlichte Seite</p>
      </footer>
    </div>
  )
}
