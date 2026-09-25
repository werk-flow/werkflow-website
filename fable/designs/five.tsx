import { Onest } from 'next/font/google'
import { audience, notYet, planned, plannedNote } from '../facts'
import { LeadForm } from '../shared/lead-form'
import { Demo } from './five-demo'
import './five.css'

const onest = Onest({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-f5',
  display: 'swap',
})

/**
 * Fable 5, "Anfrage". The hero is a small working flow: a phone call becomes
 * a job, lands on the board, reaches the field worker, and comes back as a
 * checked handover. The reader drives it. The rest of the page says what was
 * real in it and how a start would go.
 */

const real = [
  'Die Anfrage mit Kunde, Ort und Anlage.',
  'Der Auftrag, der daraus wird, ohne neues Tippen.',
  'Die Plantafel mit Urlaub und freien Tagen.',
  'Der Einsatz auf dem Handy mit Aufgaben, Fotos und Unterschrift.',
  'Die Übergabe, bei der das Büro prüft, ob alles da ist.',
]

export default function FableFive() {
  return (
    <div className={`f5 ${onest.variable}`}>
      <header className="f5-header">
        <a className="f5-header__brand" href="#main">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-text-light.svg" alt="WerkFlow" width="128" height="28" />
        </a>
        <a className="f5-header__cta" href="#kontakt">
          Gespräch anfragen
        </a>
      </header>

      <main id="main">
        <section className="f5-hero">
          <div className="f5-hero__text">
            <h1 className="f5-title">Ein Anruf. Und dann?</h1>
            <p className="f5-lede">
              Klicken Sie sich durch einen Auftrag, vom Anruf bis zur Übergabe. So läuft er in WerkFlow. Ohne
              Zettel, ohne Rückfragen, ohne doppeltes Tippen.
            </p>
            <p className="f5-audience">{audience}</p>
          </div>
          <Demo />
        </section>

        <section className="f5-section" aria-labelledby="f5-echt">
          <div className="f5-section__head">
            <h2 className="f5-heading" id="f5-echt">
              Das war kein Trick.
            </h2>
            <p className="f5-section__text">
              Alles, was Sie gerade geklickt haben, gibt es in WerkFlow heute. Mit echten Kunden, echten
              Kollegen und echten Aufträgen.
            </p>
          </div>
          <ul className="f5-real">
            {real.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="f5-boundary">{notYet}</p>
        </section>

        <section className="f5-section" aria-labelledby="f5-start">
          <div className="f5-section__head">
            <h2 className="f5-heading" id="f5-start">
              Und wie kommt das in Ihren Betrieb?
            </h2>
            <p className="f5-section__text">
              Nicht mit einem Link und viel Glück. Wir planen den Start mit Ihnen.
            </p>
          </div>
          <dl className="f5-planned">
            {planned.map((fact) => (
              <div key={fact.title} className="f5-planned__item">
                <dt>{fact.title}</dt>
                <dd>{fact.text}</dd>
              </div>
            ))}
          </dl>
          <p className="f5-boundary">{plannedNote}</p>
        </section>

        <section className="f5-section f5-contact" id="kontakt" aria-labelledby="f5-reden">
          <div className="f5-section__head">
            <h2 className="f5-heading" id="f5-reden">
              Der nächste Schritt ist ein Anruf.
            </h2>
            <p className="f5-section__text">
              Diesmal von uns. Eine halbe Stunde. Sie erzählen, wie Ihr Betrieb heute arbeitet. Wir zeigen
              Ihren Ablauf in WerkFlow.
            </p>
          </div>
          <div className="f5-contact__form">
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="f5-footer">
        <p>WerkFlow · Software für SHK-Betriebe · Entwurf, keine veröffentlichte Seite</p>
      </footer>
    </div>
  )
}
