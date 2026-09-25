'use client'

import { useId, useRef, useState, type FormEvent } from 'react'
import { previewNote } from '../facts'

/**
 * The lead form shared by the five Fable designs. It carries only markup and
 * behaviour: every design styles the `.lead*` hooks inside its own scope.
 *
 * It is a local preview. Nothing is sent anywhere; a submit validates the
 * fields and shows the confirmation. With `booking`, the confirmation adds a
 * simulated appointment step, since the scope names a possible calendar step.
 */

type Values = {
  name: string
  betrieb: string
  telefon: string
  email: string
  groesse: string
  nachricht: string
}

type Errors = Partial<Record<keyof Values, string>>

const empty: Values = {
  name: '',
  betrieb: '',
  telefon: '',
  email: '',
  groesse: '',
  nachricht: '',
}

const sizes = ['bis 10', '11 bis 30', '31 bis 60', 'mehr als 60']
const slots = ['9:00', '11:00', '14:00', '16:00']

function validate(values: Values): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Bitte Ihren Namen eintragen.'
  if (!values.betrieb.trim()) errors.betrieb = 'Bitte den Namen des Betriebs eintragen.'
  if (!values.telefon.trim()) {
    errors.telefon = 'Bitte eine Telefonnummer eintragen.'
  } else if (values.telefon.replace(/[^\d]/g, '').length < 6) {
    errors.telefon = 'Die Nummer ist zu kurz.'
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Die E-Mail-Adresse sieht nicht richtig aus.'
  }
  if (!values.groesse) errors.groesse = 'Bitte die Größe des Betriebs wählen.'
  return errors
}

/** The next five working days after today, for the simulated booking step. */
function nextWorkdays(count: number) {
  const days: Date[] = []
  const cursor = new Date()
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1)
    const day = cursor.getDay()
    if (day !== 0 && day !== 6) days.push(new Date(cursor))
  }
  return days
}

const dayFormat = new Intl.DateTimeFormat('de-DE', { weekday: 'short', day: 'numeric', month: 'numeric' })

export function LeadForm({
  heading,
  intro,
  buttonLabel = 'Gespräch anfragen',
  booking = false,
  messageLabel = 'Was drückt gerade am meisten? (freiwillig)',
}: {
  heading?: string
  intro?: string
  buttonLabel?: string
  booking?: boolean
  messageLabel?: string
}) {
  const id = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState(false)
  const [day, setDay] = useState<number | null>(null)
  const [slot, setSlot] = useState<string | null>(null)

  function field(key: keyof Values) {
    return {
      id: `${id}-${key}`,
      name: key,
      value: values[key],
      'aria-invalid': errors[key] ? true : undefined,
      'aria-describedby': errors[key] ? `${id}-${key}-error` : undefined,
      onChange: (event: { target: { value: string } }) => {
        setValues((current) => ({ ...current, [key]: event.target.value }))
        if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
      },
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = validate(values)
    setErrors(next)
    const first = (Object.keys(next) as (keyof Values)[]).find((key) => next[key])
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    setDone(true)
  }

  if (done) {
    const days = booking ? nextWorkdays(5) : []
    return (
      <div className="lead lead--done" aria-live="polite">
        <p className="lead__done">
          Danke, {values.name.trim()}. Wenn die Seite live ist, melden wir uns bei {values.betrieb.trim()}.
        </p>
        {booking ? (
          <div className="lead__booking">
            <p className="lead__booking-title">Wann passt es Ihnen für ein kurzes Telefonat?</p>
            <div className="lead__days" role="group" aria-label="Tag wählen">
              {days.map((date, index) => (
                <button
                  type="button"
                  key={date.toISOString()}
                  className="lead__day"
                  aria-pressed={day === index}
                  onClick={() => {
                    setDay(index)
                    setSlot(null)
                  }}
                >
                  {dayFormat.format(date)}
                </button>
              ))}
            </div>
            {day !== null ? (
              <div className="lead__slots" role="group" aria-label="Uhrzeit wählen">
                {slots.map((time) => (
                  <button
                    type="button"
                    key={time}
                    className="lead__slot"
                    aria-pressed={slot === time}
                    onClick={() => setSlot(time)}
                  >
                    {time} Uhr
                  </button>
                ))}
              </div>
            ) : null}
            {day !== null && slot ? (
              <p className="lead__booked">
                Gemerkt: {dayFormat.format(days[day])}, {slot} Uhr. In der Vorschau wird kein Termin gebucht.
              </p>
            ) : null}
          </div>
        ) : null}
        <p className="lead__note">{previewNote}</p>
      </div>
    )
  }

  return (
    <form className="lead" ref={formRef} onSubmit={onSubmit} noValidate>
      {heading ? <h2 className="lead__heading">{heading}</h2> : null}
      {intro ? <p className="lead__intro">{intro}</p> : null}

      <div className="lead__grid">
        <div className="lead__field">
          <label className="lead__label" htmlFor={`${id}-name`}>
            Ihr Name
          </label>
          <input className="lead__input" type="text" autoComplete="name" {...field('name')} />
          {errors.name ? (
            <p className="lead__error" id={`${id}-name-error`}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="lead__field">
          <label className="lead__label" htmlFor={`${id}-betrieb`}>
            Betrieb
          </label>
          <input className="lead__input" type="text" autoComplete="organization" {...field('betrieb')} />
          {errors.betrieb ? (
            <p className="lead__error" id={`${id}-betrieb-error`}>
              {errors.betrieb}
            </p>
          ) : null}
        </div>

        <div className="lead__field">
          <label className="lead__label" htmlFor={`${id}-telefon`}>
            Telefon
          </label>
          <input className="lead__input" type="tel" autoComplete="tel" {...field('telefon')} />
          {errors.telefon ? (
            <p className="lead__error" id={`${id}-telefon-error`}>
              {errors.telefon}
            </p>
          ) : null}
        </div>

        <div className="lead__field">
          <label className="lead__label" htmlFor={`${id}-email`}>
            E-Mail (freiwillig)
          </label>
          <input className="lead__input" type="email" autoComplete="email" {...field('email')} />
          {errors.email ? (
            <p className="lead__error" id={`${id}-email-error`}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="lead__field lead__field--wide">
          <label className="lead__label" htmlFor={`${id}-groesse`}>
            Wie viele Leute arbeiten im Betrieb?
          </label>
          <select className="lead__select" {...field('groesse')}>
            <option value="">Bitte wählen</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.groesse ? (
            <p className="lead__error" id={`${id}-groesse-error`}>
              {errors.groesse}
            </p>
          ) : null}
        </div>

        <div className="lead__field lead__field--wide">
          <label className="lead__label" htmlFor={`${id}-nachricht`}>
            {messageLabel}
          </label>
          <textarea className="lead__textarea" rows={3} {...field('nachricht')} />
        </div>
      </div>

      <div className="lead__actions">
        <button className="lead__button" type="submit">
          {buttonLabel}
        </button>
        <p className="lead__note">{previewNote}</p>
      </div>
    </form>
  )
}
