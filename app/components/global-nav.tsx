'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useId, useState } from 'react'
import { designSlugs, models, type ModelKey } from '../designs'
import './global-nav.css'

/**
 * The single switcher for all ten designs. It sits above every page, groups the
 * designs by the model that built them, and is not part of any design: it keeps
 * its own neutral chrome and never uses the brand orange.
 *
 * Keys: 1–5 pick a design inside the current set, A and O jump between the two
 * sets at the same position, 0 opens the overview.
 */
export function GlobalNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  const [, modelKey, slug] = pathname.split('/')
  const current = models.find((model) => model.key === modelKey)
  const index = current ? current.designs.findIndex((d) => d.slug === slug) : -1
  const design = current && index >= 0 ? current.designs[index] : undefined

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.isContentEditable ||
          ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
      ) {
        return
      }

      const key = event.key.toLowerCase()

      if (key === 'escape') {
        setOpen(false)
        return
      }
      if (key === '0') {
        router.push('/')
        return
      }
      if (key === 'a' || key === 'o') {
        const nextModel: ModelKey = key === 'a' ? 'astra' : 'opus'
        const position = index >= 0 ? index : 0
        router.push(`/${nextModel}/${designSlugs[position]}`)
        return
      }
      if (key >= '1' && key <= '5') {
        const position = Number(key) - 1
        router.push(`/${current?.key ?? 'astra'}/${designSlugs[position]}`)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [router, current, index])

  return (
    <nav className="gnav" aria-label="Entwürfe">
      {open ? (
        <div className="gnav__panel" id={panelId}>
          <p className="gnav__title">
            Zehn Entwürfe für die WerkFlow-Seite, je fünf pro Modell.
          </p>
          <div className="gnav__groups">
            {models.map((model) => (
              <section className="gnav__group" key={model.key}>
                <h2>
                  <span className="gnav__chip" data-model={model.key} aria-hidden="true">
                    {model.name.charAt(0)}
                  </span>
                  {model.name}
                </h2>
                <p>{model.note}</p>
                <ul className="gnav__list">
                  {model.designs.map((entry, entryIndex) => {
                    const href = `/${model.key}/${entry.slug}`
                    return (
                      <li key={entry.slug}>
                        <Link
                          className="gnav__link"
                          href={href}
                          aria-current={pathname === href ? 'page' : undefined}
                          onClick={() => setOpen(false)}
                        >
                          <span className="gnav__num">{entryIndex + 1}</span>
                          <span className="gnav__label">{entry.name}</span>
                          <span
                            className="gnav__swatch"
                            style={{ background: entry.swatch }}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </section>
            ))}
          </div>
          <p className="gnav__hint">
            <kbd>1</kbd>–<kbd>5</kbd> wechselt den Entwurf, <kbd>A</kbd> und{' '}
            <kbd>O</kbd> wechseln das Modell, <kbd>0</kbd> zeigt alle.
          </p>
        </div>
      ) : null}

      <div className="gnav__bar">
        <Link className="gnav__home" href="/" onClick={() => setOpen(false)}>
          <svg
            className="gnav__mark"
            viewBox="0 0 721.5 832.5"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M349.3.1c-5.9 0-19.7 1.3-35.4 11.2L36.2 173.7S1 192.4 0 239.6v138.5a10 10 0 0 0 10 10h140.9a10 10 0 0 0 10-10v-74.6s-.8-20 20.3-30l160.8-93.2s8.5-5.9 15.3-6.6c6.9.7 15.4 6.6 15.4 6.6l160.8 93.2c21.1 10.1 20.3 30 20.3 30v74.6a10 10 0 0 0 10 10h140.9a10 10 0 0 0 10-10V239.6c-1-47.2-36.1-65.9-36.1-65.9L390.8 11.3C369.9-2 352.3.3 352.3.3S351.2.1 349.3.1z"
            />
          </svg>
          <span>Alle Entwürfe</span>
        </Link>
        <span className="gnav__sep" aria-hidden="true" />
        <button
          type="button"
          className="gnav__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {current && design ? (
            <>
              <span className="gnav__chip" data-model={current.key} aria-hidden="true">
                {current.name.charAt(0)}
              </span>
              <span className="gnav__model">{current.name}</span>
              <span className="gnav__name">{design.name}</span>
              <span className="gnav__count">{index + 1}/5</span>
            </>
          ) : (
            <span className="gnav__model">Entwurf wählen</span>
          )}
          <svg
            className="gnav__caret"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d={open ? 'M2 7.5 6 3.5l4 4' : 'M2 4.5 6 8.5l4-4'}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
