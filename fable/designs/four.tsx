import { Schibsted_Grotesk, Source_Serif_4 } from 'next/font/google'
import { audience, notYet, planned, plannedNote, today } from '../facts'
import { LeadForm } from '../shared/lead-form'
import './four.css'

const grotesk = Schibsted_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-f4-head',
  display: 'swap',
})

const serif = Source_Serif_4({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  variable: '--font-f4-body',
  display: 'swap',
})

/**
 * Fable 4, "Antwortkarte". A trade handout: a cover, three folded panels, and
 * a reply card to tear off. The card is the form, and the memorable object.
 * Grotesk headings, serif body, the way a printed brochure would be set.
 */

const contents = [
  { href: '#f4-heute', label: 'Was heute drin ist' },
  { href: '#f4-start', label: 'Wie der Start läuft' },
  { href: '#kontakt', label: 'Antwortkarte' },
]

export default function FableFour() {
  return (
    <div className={`f4 ${grotesk.variable} ${serif.variable}`}>
      <header className="f4-masthead">
        <a className="f4-masthead__brand" href="#main">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-text-light.svg" alt="WerkFlow" width="128" height="28" />
        </a>
        <p className="f4-masthead__audience">{audience}</p>
      </header>

      <main id="main" className="f4-brochure">
        <section className="f4-cover" aria-labelledby="f4-title">
          <div className="f4-cover__text">
            <h1 className="f4-title" id="f4-title">
              Die Software für den ganzen SHK-Betrieb.
            </h1>
            <p className="f4-lede">
              Büro, Leitung, Lager und Monteure arbeiten mit denselben Aufträgen. Der Zettel fällt weg. Der
              Überblick bleibt.
            </p>
          </div>
          <nav className="f4-contents" aria-label="Inhalt">
            <p className="f4-contents__title">In diesem Prospekt</p>
            <ol>
              {contents.map((entry) => (
                <li key={entry.href}>
                  <a href={entry.href}>{entry.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </section>

        <div className="f4-panels">
          <section className="f4-panel" id="f4-heute" aria-labelledby="f4-heute-title">
            <h2 className="f4-panel__title" id="f4-heute-title">
              Was heute drin ist
            </h2>
            <p className="f4-panel__intro">
              Das ist gebaut und in Betrieb. Nichts davon ist ein Versprechen für später.
            </p>
            <dl className="f4-facts">
              {today.map((fact) => (
                <div key={fact.title} className="f4-facts__item">
                  <dt>{fact.title}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="f4-panel" id="f4-start" aria-labelledby="f4-start-title">
            <h2 className="f4-panel__title" id="f4-start-title">
              Wie der Start läuft
            </h2>
            <p className="f4-panel__intro">
              Ein Programm allein ändert keinen Betrieb. Darum planen wir den Start mit Ihnen.
            </p>
            <dl className="f4-facts">
              {planned.map((fact) => (
                <div key={fact.title} className="f4-facts__item">
                  <dt>{fact.title}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
            <p className="f4-panel__note">{plannedNote}</p>

            <h2 className="f4-panel__title f4-panel__title--later">Was noch nicht geht</h2>
            <p className="f4-panel__text">{notYet}</p>
          </section>

          <section className="f4-card" id="kontakt" aria-labelledby="f4-card-title">
            <div className="f4-card__head">
              <div>
                <p className="f4-card__kicker">Antwortkarte</p>
                <h2 className="f4-card__title" id="f4-card-title">
                  Ja, ich will ein Gespräch.
                </h2>
              </div>
              <p className="f4-card__stamp" aria-label="Kein Porto nötig, Vorschau">
                Kein
                <br />
                Porto
                <br />
                nötig
              </p>
            </div>
            <p className="f4-card__text">
              Eine halbe Stunde am Telefon. Sie erzählen, wie Ihr Betrieb arbeitet. Wir zeigen, was WerkFlow
              daraus macht.
            </p>
            <LeadForm buttonLabel="Karte abschicken" messageLabel="Was soll besser werden? (freiwillig)" />
          </section>
        </div>
      </main>

      <footer className="f4-footer">
        <p>WerkFlow · Software für SHK-Betriebe · Entwurf, keine veröffentlichte Seite</p>
      </footer>
    </div>
  )
}
