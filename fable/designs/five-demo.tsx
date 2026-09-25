'use client'

import { useState } from 'react'

/**
 * The click-through for Fable 5. Five steps, one job. Each step shows the
 * view the person in that role sees, with example data; the button names the
 * action that moves the job on. Every view is markup, not a screenshot.
 */

const steps = [
  { key: 'anfrage', label: 'Anfrage', who: 'Büro', action: 'Auftrag anlegen' },
  { key: 'auftrag', label: 'Auftrag', who: 'Büro', action: 'In die Plantafel' },
  { key: 'plantafel', label: 'Plantafel', who: 'Leitung', action: 'An M. Krüger schicken' },
  { key: 'einsatz', label: 'Mein Einsatz', who: 'Monteur', action: 'Fertig melden' },
  { key: 'uebergabe', label: 'Übergabe', who: 'Büro', action: 'Übergabe abschließen' },
] as const

const week = ['Mo', 'Di', 'Mi', 'Do', 'Fr']

function Anfrage() {
  return (
    <div className="f5-note">
      <p className="f5-view__label">Anfrage, Dienstag 8:12 Uhr</p>
      <p className="f5-note__who">Familie Hoffmann</p>
      <p className="f5-note__where">Eichenweg 4, Einsatzort seit 2019</p>
      <p className="f5-note__text">
        „Die Heizung geht seit gestern Abend nicht. Es ist kalt im Haus. Kann heute jemand kommen?“
      </p>
      <dl className="f5-kv">
        <div>
          <dt>Dringlichkeit</dt>
          <dd>hoch</dd>
        </div>
        <div>
          <dt>Anlage</dt>
          <dd>Gastherme, Baujahr 2014</dd>
        </div>
        <div>
          <dt>Erreichbar</dt>
          <dd>0170 000 000, ab 12 Uhr</dd>
        </div>
      </dl>
    </div>
  )
}

function Auftrag() {
  return (
    <div className="f5-job">
      <p className="f5-view__label">Auftrag 2026-0418</p>
      <p className="f5-job__title">Störung Heizung, Hoffmann</p>
      <dl className="f5-kv">
        <div>
          <dt>Kunde</dt>
          <dd>
            Familie Hoffmann <span className="f5-taken">übernommen</span>
          </dd>
        </div>
        <div>
          <dt>Einsatzort</dt>
          <dd>
            Eichenweg 4 <span className="f5-taken">übernommen</span>
          </dd>
        </div>
        <div>
          <dt>Anlage</dt>
          <dd>
            Gastherme, 2014 <span className="f5-taken">übernommen</span>
          </dd>
        </div>
        <div>
          <dt>Stand</dt>
          <dd>geplant, noch ohne Termin</dd>
        </div>
      </dl>
      <p className="f5-job__hint">Die Anfrage ist jetzt ein Auftrag. Sie bleibt beim Kunden in der Geschichte.</p>
    </div>
  )
}

function Plantafel({ placed }: { placed: boolean }) {
  const rows: { name: string; bars: { from: number; span: number; label: string; kind?: string }[] }[] = [
    { name: 'M. Krüger', bars: [{ from: 0, span: 2, label: 'Neubau Am Anger' }] },
    { name: 'T. Yilmaz', bars: [{ from: 0, span: 3, label: 'Bad Lenz' }, { from: 3, span: 2, label: 'Wartung Roth' }] },
    { name: 'S. Berger', bars: [{ from: 0, span: 5, label: 'Urlaub', kind: 'absent' }] },
  ]
  return (
    <div className="f5-board" role="table" aria-label="Plantafel, Beispielwoche">
      <div className="f5-board__head" role="row">
        <span role="columnheader">Kollege</span>
        {week.map((day) => (
          <span key={day} role="columnheader">
            {day}
          </span>
        ))}
      </div>
      {rows.map((row) => (
        <div className="f5-board__row" role="row" key={row.name}>
          <span className="f5-board__name" role="cell">
            {row.name}
          </span>
          <span className="f5-board__days" role="cell">
            {row.bars.map((bar) => (
              <span
                key={bar.label}
                className="f5-board__bar"
                data-kind={bar.kind}
                style={{ gridColumn: `${bar.from + 1} / span ${bar.span}` }}
              >
                {bar.label}
              </span>
            ))}
            {row.name === 'M. Krüger' ? (
              <span
                className={`f5-board__bar f5-board__bar--new${placed ? ' is-placed' : ''}`}
                style={{ gridColumn: '2 / span 1' }}
              >
                Hoffmann, Heizung
              </span>
            ) : null}
          </span>
        </div>
      ))}
      <p className="f5-board__hint">
        {placed
          ? 'Dienstag ab 13 Uhr bei M. Krüger. S. Berger ist im Urlaub, das sieht man gleich.'
          : 'Der Auftrag liegt noch am Rand. Er kommt zu dem Kollegen, der Zeit hat.'}
      </p>
    </div>
  )
}

function Einsatz({ done }: { done: boolean }) {
  const tasks = ['Therme prüfen, Fehler lesen', 'Teil tauschen, Foto vorher und nachher', 'Abgas messen', 'Kunde unterschreiben lassen']
  return (
    <div className="f5-phone" aria-label="Mein Einsatz auf dem Handy, Beispiel">
      <div className="f5-phone__bar">
        <span>Mein Einsatz</span>
        <span>13:02</span>
      </div>
      <p className="f5-phone__title">Störung Heizung, Hoffmann</p>
      <p className="f5-phone__where">Eichenweg 4 · Klingel: Hoffmann · Therme im Keller</p>
      <ul className="f5-tasks">
        {tasks.map((task) => (
          <li key={task} className={done ? 'is-done' : undefined}>
            <span className="f5-tasks__box" aria-hidden="true" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
      <div className="f5-phone__evidence">
        {done ? (
          <>
            <span>3 Fotos</span>
            <span>Messung 12:02</span>
            <span>Unterschrift K. Hoffmann</span>
          </>
        ) : (
          <span>Noch keine Fotos, keine Messung, keine Unterschrift.</span>
        )}
      </div>
    </div>
  )
}

function Uebergabe({ closed }: { closed: boolean }) {
  const checks = [
    ['Aufgaben', '4 von 4 erledigt'],
    ['Fotos', '3, vorher und nachher'],
    ['Messung', 'Abgaswerte, in Ordnung'],
    ['Material', 'Platine, 1 Stück aus Fahrzeug Krüger'],
    ['Zeit', '4:25 Stunden Arbeit, 0:35 Fahrt'],
    ['Unterschrift', 'K. Hoffmann, 12:08 Uhr'],
  ]
  return (
    <div className="f5-handover">
      <p className="f5-view__label">Übergabe, Auftrag 2026-0418</p>
      <ul className="f5-checks">
        {checks.map(([label, value]) => (
          <li key={label}>
            <span className="f5-checks__ok" aria-hidden="true">
              ✓
            </span>
            <span className="f5-checks__label">{label}</span>
            <span className="f5-checks__value">{value}</span>
          </li>
        ))}
      </ul>
      <p className="f5-handover__state" data-closed={closed}>
        {closed ? 'Übergabe abgeschlossen. Der Auftrag ist fertig, alles hängt daran.' : 'Alles da. Das Büro kann abschließen.'}
      </p>
    </div>
  )
}

export function Demo() {
  const [step, setStep] = useState(0)
  const [acted, setActed] = useState(false)
  const finished = step === steps.length - 1 && acted

  function go(index: number) {
    setStep(index)
    setActed(false)
  }

  function advance() {
    // The board, the phone, and the handover each have one action of their
    // own before the job moves on; the other steps move on directly.
    if ((step === 2 || step === 3 || step === steps.length - 1) && !acted) {
      setActed(true)
      return
    }
    go(step + 1)
  }

  const current = steps[step]
  const actionLabel = step === 2 && acted ? 'Weiter zum Monteur' : step === 3 && acted ? 'Weiter zur Übergabe' : current.action

  return (
    <div className="f5-demo">
      <ol className="f5-rail" aria-label="Schritte">
        {steps.map((entry, index) => (
          <li key={entry.key} className="f5-rail__item" aria-current={index === step ? 'step' : undefined}>
            <button
              type="button"
              className="f5-rail__button"
              onClick={() => go(index)}
              aria-label={`Schritt ${index + 1}: ${entry.label}`}
            >
              <span className="f5-rail__num">{index + 1}</span>
              <span className="f5-rail__label">{entry.label}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="f5-stage" aria-live="polite">
        <p className="f5-stage__who">
          {current.who} sieht:
        </p>
        <div className="f5-stage__view" key={current.key}>
          {step === 0 ? <Anfrage /> : null}
          {step === 1 ? <Auftrag /> : null}
          {step === 2 ? <Plantafel placed={acted} /> : null}
          {step === 3 ? <Einsatz done={acted} /> : null}
          {step === 4 ? <Uebergabe closed={acted} /> : null}
        </div>
        <div className="f5-stage__actions">
          {finished ? (
            <a className="f5-stage__button" href="#kontakt">
              So soll es bei uns laufen
            </a>
          ) : (
            <button type="button" className="f5-stage__button" onClick={advance}>
              {actionLabel}
            </button>
          )}
          {step > 0 ? (
            <button type="button" className="f5-stage__back" onClick={() => go(step - 1)}>
              Zurück
            </button>
          ) : null}
          {finished ? (
            <button type="button" className="f5-stage__back" onClick={() => go(0)}>
              Noch mal von vorn
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
