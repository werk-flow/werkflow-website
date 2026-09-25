import { Atkinson_Hyperlegible } from 'next/font/google'
import { audience, notYet, planned, plannedNote, today } from '../facts'
import { LeadForm } from '../shared/lead-form'
import { VideoSlot } from '../shared/video-slot'
import './three.css'

const hyperlegible = Atkinson_Hyperlegible({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-f3',
  display: 'swap',
})

/**
 * Fable 3, "Video". The campaign page as the scope describes it: a video
 * sales letter on top, a short form beside it, a booking step after the form.
 * Everything below the fold only supports the two things above it. The
 * typeface is the most legible one available, since the reading-level rule
 * applies to the letters as much as to the words.
 */

const inVideo = [
  {
    title: 'Ein Anruf wird ein Auftrag',
    text: 'Das Büro notiert die Anfrage. Mit einem Klick wird daraus ein Auftrag mit Kunde, Ort und Anlage.',
  },
  {
    title: 'Die Woche auf einer Tafel',
    text: 'Alle Kollegen, alle Tage. Urlaub und Krankheit sind mit drin. Ein Einsatz wird an den richtigen Tag gezogen.',
  },
  {
    title: 'Der Monteur auf der Baustelle',
    text: 'Er sieht nur seinen Einsatz. Er hakt ab, macht Fotos, lässt unterschreiben. Das Büro prüft alles bei der Übergabe.',
  },
]

const faq = [
  {
    question: 'Läuft das auf dem Handy?',
    answer: 'Ja, im Browser. Der Monteur öffnet WerkFlow auf dem Handy und sieht seinen Einsatz. Eine App im App Store gibt es noch nicht.',
  },
  {
    question: 'Was passiert mit unseren alten Daten?',
    answer: 'Wir planen, sie mit Ihnen ins System zu bringen: Mitarbeiter, Kunden, Aufträge, Lager, Dokumente. Was genau, klären wir vor dem Start.',
  },
  {
    question: 'Können wir Angebote und Rechnungen schreiben?',
    answer: 'Noch nicht. Das kommt später. Heute geht es um Aufträge, Planung, Baustelle, Zeiten, Lager und Dokumente.',
  },
  {
    question: 'Was kostet das?',
    answer: 'Das besprechen wir im Gespräch. Der Preis hängt vom Umfang ab, und der ist noch nicht festgelegt.',
  },
  {
    question: 'Was passiert nach dem Formular?',
    answer: 'Wir rufen Sie an. Ein Gespräch dauert etwa eine halbe Stunde. Sie erzählen, wie Ihr Betrieb arbeitet. Wir zeigen, was WerkFlow daraus macht.',
  },
]

export default function FableThree() {
  return (
    <div className={`f3 ${hyperlegible.variable}`}>
      <div className="f3-top">
        <header className="f3-header">
          <a className="f3-header__brand" href="#main">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-text-dark.svg" alt="WerkFlow" width="128" height="28" />
          </a>
          <p className="f3-header__audience">{audience}</p>
        </header>

        <main id="main">
          <section className="f3-hero">
            <div className="f3-hero__video">
              <h1 className="f3-title">Weniger Zettel. Mehr Überblick. So arbeitet ein SHK-Betrieb mit WerkFlow.</h1>
              <VideoSlot caption="Im fertigen Video sehen Sie einen Auftrag von Anfang bis Ende. Kein Verkaufsvideo, ein Rundgang." />
            </div>
            <aside className="f3-hero__form" id="kontakt" aria-label="Gespräch anfragen">
              <LeadForm
                heading="Gespräch anfragen"
                intro="Ein Anruf, eine halbe Stunde. Danach wissen Sie, ob WerkFlow zu Ihrem Betrieb passt."
                buttonLabel="Anruf anfragen"
                booking
              />
            </aside>
          </section>
        </main>
      </div>

      <div className="f3-body">
        <section className="f3-section" aria-labelledby="f3-drei">
          <h2 className="f3-heading" id="f3-drei">
            Drei Dinge aus dem Video
          </h2>
          <ol className="f3-three">
            {inVideo.map((item, index) => (
              <li key={item.title} className="f3-three__item">
                <span className="f3-three__num" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="f3-section" aria-labelledby="f3-heute">
          <h2 className="f3-heading" id="f3-heute">
            Was WerkFlow heute kann
          </h2>
          <dl className="f3-facts">
            {today.map((fact) => (
              <div key={fact.title} className="f3-facts__item">
                <dt>{fact.title}</dt>
                <dd>{fact.text}</dd>
              </div>
            ))}
          </dl>
          <p className="f3-boundary">{notYet}</p>
        </section>

        <section className="f3-section" aria-labelledby="f3-start">
          <h2 className="f3-heading" id="f3-start">
            So planen wir den Start
          </h2>
          <ul className="f3-planned">
            {planned.map((fact) => (
              <li key={fact.title}>
                <strong>{fact.title}.</strong> {fact.text}
              </li>
            ))}
          </ul>
          <p className="f3-boundary">{plannedNote}</p>
        </section>

        <section className="f3-section" aria-labelledby="f3-faq">
          <h2 className="f3-heading" id="f3-faq">
            Häufige Fragen
          </h2>
          <div className="f3-faq">
            {faq.map((item) => (
              <details key={item.question} className="f3-faq__item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="f3-section f3-again">
          <p>Sie haben bis hier gelesen. Dann lohnt sich das Gespräch.</p>
          <a className="f3-button" href="#kontakt">
            Zum Formular
          </a>
        </section>

        <footer className="f3-footer">
          <p>WerkFlow · Software für SHK-Betriebe · Entwurf, keine veröffentlichte Seite</p>
        </footer>
      </div>
    </div>
  )
}
