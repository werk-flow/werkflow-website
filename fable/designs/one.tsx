import { Bricolage_Grotesque } from 'next/font/google'
import type { ReactNode } from 'react'
import { audience, notYet, planned, plannedNote } from '../facts'
import { LeadForm } from '../shared/lead-form'
import './one.css'

const grotesque = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz', 'wdth'],
  variable: '--font-f1',
  display: 'swap',
})

/**
 * Fable 1, "Fragen". The page is the list of questions an owner asks every
 * day, set very large, each followed by the answer the program gives. No
 * hero image, no cards: the questions are the design.
 */

type Question = {
  id: string
  question: string
  answer: string
  view: ReactNode
}

const week = ['Mo', 'Di', 'Mi', 'Do', 'Fr']

function Board() {
  const rows: { name: string; bars: { from: number; span: number; label: string; kind?: string }[] }[] = [
    { name: 'M. Krüger', bars: [{ from: 0, span: 2, label: 'Hoffmann, Heizung' }, { from: 3, span: 2, label: 'Wartung Bäckerei Roth' }] },
    { name: 'T. Yilmaz', bars: [{ from: 0, span: 3, label: 'Neubau Am Anger 12' }, { from: 4, span: 1, label: 'Notdienst', kind: 'open' }] },
    { name: 'S. Berger', bars: [{ from: 0, span: 5, label: 'Urlaub', kind: 'absent' }] },
    { name: 'J. Pohl', bars: [{ from: 1, span: 2, label: 'Bad Familie Lenz' }] },
  ]
  return (
    <div className="f1-view f1-board" role="table" aria-label="Beispiel: Plantafel für eine Woche">
      <div className="f1-board__head" role="row">
        <span role="columnheader">Kollege</span>
        {week.map((day) => (
          <span key={day} role="columnheader">
            {day}
          </span>
        ))}
      </div>
      {rows.map((row) => (
        <div className="f1-board__row" role="row" key={row.name}>
          <span className="f1-board__name" role="cell">
            {row.name}
          </span>
          <span className="f1-board__days" role="cell">
            {row.bars.map((bar) => (
              <span
                key={bar.label}
                className="f1-board__bar"
                data-kind={bar.kind}
                style={{ gridColumn: `${bar.from + 1} / span ${bar.span}` }}
              >
                {bar.label}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
}

function Rows({ label, rows }: { label: string; rows: [string, string, string?][] }) {
  return (
    <div className="f1-view">
      <p className="f1-view__label">{label}</p>
      <ul className="f1-rows">
        {rows.map(([primary, secondary, status]) => (
          <li key={primary + secondary} className="f1-rows__row">
            <span className="f1-rows__primary">{primary}</span>
            <span className="f1-rows__secondary">{secondary}</span>
            {status ? (
              <span className="f1-rows__status" data-status={status}>
                {status}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Request() {
  return (
    <div className="f1-view f1-request">
      <div className="f1-request__note">
        <p className="f1-view__label">Anfrage, Di 8:12 Uhr</p>
        <p className="f1-request__who">Familie Hoffmann, Eichenweg 4</p>
        <p>„Die Heizung geht seit gestern Abend nicht. Es ist kalt im Haus. Kann heute jemand kommen?“</p>
        <p className="f1-request__meta">Dringend · Anlage: Gastherme, 2014</p>
      </div>
      <div className="f1-request__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="f1-request__job">
        <p className="f1-view__label">Auftrag 2026-0418</p>
        <p className="f1-request__who">Störung Heizung, Hoffmann</p>
        <p>Einsatzort, Kontakt, Anlage und Text sind übernommen. Nichts wurde neu getippt.</p>
        <p className="f1-request__meta">Heute, 13:00 · M. Krüger</p>
      </div>
    </div>
  )
}

function Time() {
  const segments = [
    { label: 'Fahrt', from: '7:10', to: '7:45', width: 35 },
    { label: 'Arbeit, Hoffmann', from: '7:45', to: '12:10', width: 265 },
    { label: 'Pause', from: '12:10', to: '12:40', width: 30, kind: 'break' },
    { label: 'Arbeit, Roth', from: '12:40', to: '16:05', width: 205 },
  ]
  return (
    <div className="f1-view">
      <p className="f1-view__label">Zeiten, M. Krüger, Dienstag</p>
      <div className="f1-time" aria-label="Beispiel: erfasste Zeiten eines Tages">
        {segments.map((segment) => (
          <span
            key={segment.label}
            className="f1-time__segment"
            data-kind={segment.kind}
            style={{ flexGrow: segment.width }}
            title={`${segment.label}, ${segment.from} bis ${segment.to}`}
          >
            <span>{segment.label}</span>
            <span className="f1-time__span">
              {segment.from}–{segment.to}
            </span>
          </span>
        ))}
      </div>
      <p className="f1-time__sum">8:25 Stunden Arbeit, 0:35 Fahrt. Fertig für die Lohnabrechnung.</p>
    </div>
  )
}

const questions: Question[] = [
  {
    id: 'wo',
    question: 'Wer ist morgen wo?',
    answer:
      'Die Plantafel zeigt die ganze Woche für alle Kollegen. Urlaub und Krankheit stehen gleich mit drin. Ein Einsatz wird an den richtigen Tag gezogen. Der Kollege sieht ihn sofort.',
    view: <Board />,
  },
  {
    id: 'telefon',
    question: 'Was hat der Kunde am Telefon gesagt?',
    answer:
      'Das Büro notiert den Anruf als Anfrage. Mit einem Klick wird daraus ein Auftrag. Kunde, Ort, Anlage und Text wandern mit.',
    view: <Request />,
  },
  {
    id: 'stand',
    question: 'Wo steckt der Auftrag gerade?',
    answer:
      'Jeder Auftrag hat einen Stand. Wenn etwas blockiert, steht der Grund dabei. Man sieht, wer dran ist und was noch fehlt.',
    view: (
      <Rows
        label="Aufträge, heute"
        rows={[
          ['Störung Heizung, Hoffmann', 'M. Krüger · heute 13:00', 'läuft'],
          ['Bad Familie Lenz', 'J. Pohl · Fliesen fehlen', 'blockiert'],
          ['Neubau Am Anger 12', 'T. Yilmaz · Tag 3 von 5', 'läuft'],
          ['Wartung Bäckerei Roth', 'Do, M. Krüger', 'geplant'],
          ['Zähler Wechsel, Praxis Dr. Weiß', 'Übergabe offen: Foto fehlt', 'Übergabe'],
        ]}
      />
    ),
  },
  {
    id: 'baustelle',
    question: 'Was ist auf der Baustelle passiert?',
    answer:
      'Der Monteur hakt auf dem Handy die Aufgaben ab. Fotos, Maße, Mängel und die Unterschrift des Kunden hängen am Auftrag. Das Büro prüft alles bei der Übergabe.',
    view: (
      <Rows
        label="Nachweise, Auftrag 2026-0418"
        rows={[
          ['3 Fotos', 'Therme vorher, Platine, nachher'],
          ['Messung', 'Abgaswerte, 12:02 Uhr'],
          ['Mangel', 'Ausdehnungsgefäß ohne Druck'],
          ['Unterschrift', 'K. Hoffmann, 12:08 Uhr'],
        ]}
      />
    ),
  },
  {
    id: 'stunden',
    question: 'Wie viele Stunden waren das?',
    answer:
      'Arbeit, Fahrt und Pause werden am Gerät erfasst, nicht am Abend aus dem Kopf. Korrekturen laufen über einen kurzen Weg mit Freigabe. Das Zeitkonto stimmt.',
    view: <Time />,
  },
  {
    id: 'teil',
    question: 'Wo ist das Teil?',
    answer:
      'Jeder Artikel hat seinen Lagerort: Regal, Raum oder Fahrzeug. Material wird für den Auftrag geplant und am Einsatz entnommen. Der Bestand stimmt mit dem Regal überein.',
    view: (
      <Rows
        label="Lager, Suche „Ausdehnungsgefäß“"
        rows={[
          ['Ausdehnungsgefäß 18 l', 'Regal B3 · 4 Stück'],
          ['Ausdehnungsgefäß 25 l', 'Regal B3 · 1 Stück', 'nachbestellen'],
          ['Ausdehnungsgefäß 18 l', 'Fahrzeug Krüger · 1 Stück'],
        ]}
      />
    ),
  },
  {
    id: 'wartung',
    question: 'Wann ist die Wartung fällig?',
    answer:
      'Anlagen beim Kunden sind erfasst, mit Baujahr und Geschichte. Ein Wartungsplan erzeugt die fälligen Termine von selbst. Niemand blättert mehr im Heft.',
    view: (
      <Rows
        label="Wartung, fällig in 30 Tagen"
        rows={[
          ['Bäckerei Roth, Gaskessel', 'Do, 2. Okt. · M. Krüger'],
          ['Praxis Dr. Weiß, Lüftung', '14. Okt. · noch offen'],
          ['Familie Lenz, Wärmepumpe', '21. Okt. · noch offen'],
        ]}
      />
    ),
  },
  {
    id: 'schein',
    question: 'Wo ist der Lieferschein?',
    answer:
      'Es gibt eine Ablage. Jede Datei hängt am Auftrag, am Kunden oder am Mitarbeiter. Was zum Auftrag gehört, steht beim Auftrag.',
    view: (
      <Rows
        label="Dokumente, Auftrag 2026-0418"
        rows={[
          ['Lieferschein Großhandel', 'PDF · Di 7:02'],
          ['Foto Platine', 'JPG · Di 11:40'],
          ['Arbeitsbericht mit Unterschrift', 'PDF · Di 12:08'],
        ]}
      />
    ),
  },
]

export default function FableOne() {
  return (
    <div className={`f1 ${grotesque.variable}`}>
      <header className="f1-header">
        <a className="f1-header__brand" href="#main">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-text-light.svg" alt="WerkFlow" width="128" height="28" />
        </a>
        <a className="f1-header__cta" href="#kontakt">
          Gespräch anfragen
        </a>
      </header>

      <main id="main">
        <section className="f1-hero">
          <h1 className="f1-q f1-q--hero">Wer ist morgen wo?</h1>
          <div className="f1-hero__text">
            <p className="f1-lede">
              Solche Fragen kosten einen Chef im SHK-Betrieb jeden Tag Zeit. Wer sie beantworten will, sucht in
              Zetteln, Ordnern und Anrufen. WerkFlow beantwortet sie auf einen Blick.
            </p>
            <p className="f1-audience">{audience}</p>
            <a className="f1-button" href="#kontakt">
              Gespräch anfragen
            </a>
          </div>
        </section>

        {questions.map((item) => (
          <section className="f1-question" key={item.id} aria-labelledby={`f1-${item.id}`}>
            <h2 className="f1-q" id={`f1-${item.id}`}>
              {item.question}
            </h2>
            <div className="f1-question__body">
              <p className="f1-question__answer">{item.answer}</p>
              <div className="f1-question__view">{item.view}</div>
            </div>
          </section>
        ))}

        <section className="f1-plain" aria-labelledby="f1-nochnicht">
          <h2 className="f1-q f1-q--small" id="f1-nochnicht">
            Was geht noch nicht?
          </h2>
          <p className="f1-plain__text">{notYet}</p>
        </section>

        <section className="f1-plain" aria-labelledby="f1-start">
          <h2 className="f1-q f1-q--small" id="f1-start">
            Wie fängt man an?
          </h2>
          <p className="f1-plain__text">
            Ein neues Programm ist nur so gut wie der Start. Darum lassen wir Sie damit nicht allein.
          </p>
          <dl className="f1-planned">
            {planned.map((fact) => (
              <div key={fact.title} className="f1-planned__item">
                <dt>{fact.title}</dt>
                <dd>{fact.text}</dd>
              </div>
            ))}
          </dl>
          <p className="f1-plain__note">{plannedNote}</p>
        </section>

        <section className="f1-contact" id="kontakt" aria-labelledby="f1-reden">
          <h2 className="f1-q" id="f1-reden">
            Wollen wir reden?
          </h2>
          <div className="f1-contact__body">
            <p className="f1-question__answer">
              Ein Gespräch, eine halbe Stunde. Sie erzählen, wie Ihr Betrieb heute arbeitet. Wir zeigen, was
              WerkFlow daraus macht. Ohne Verkaufsdruck.
            </p>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="f1-footer">
        <p>WerkFlow · Software für SHK-Betriebe · Entwurf, keine veröffentlichte Seite</p>
      </footer>
    </div>
  )
}
