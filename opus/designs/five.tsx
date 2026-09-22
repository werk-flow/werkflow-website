'use client'

import { useId, useState } from 'react'

type Role = 'chef' | 'buero' | 'monteur'

const roles: { id: Role; label: string; nav: string; title: string; note: string }[] = [
  {
    id: 'chef',
    label: 'Chef',
    nav: 'Übersicht',
    title: 'Heute im Betrieb',
    note: 'Dienstag, 23. September',
  },
  {
    id: 'buero',
    label: 'Büro',
    nav: 'Anfragen',
    title: 'Anfragen',
    note: '4 offen, 1 heute neu',
  },
  {
    id: 'monteur',
    label: 'Monteur',
    nav: 'Meine Arbeit',
    title: 'Mein Dienstag',
    note: 'K. Adamski',
  },
]

const navItems = [
  'Übersicht',
  'Kalender',
  'Aufträge',
  'Anfragen',
  'Kunden',
  'Zeiten',
  'Lager',
  'Dokumente',
]

export default function StudyFive() {
  const [role, setRole] = useState<Role>('chef')
  const current = roles.find((entry) => entry.id === role) ?? roles[0]
  const panelId = useId()

  return (
    <>
      <header className="d5__wrap d5__top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="d5__logo"
          src="/logo-text-light.svg"
          alt="WerkFlow"
          width={160}
          height={28}
        />
        <a className="d5__toplink" href="#gespraech">
          Gespräch anfragen
        </a>
      </header>

      <main id="main">
        <section className="d5__wrap d5__hero">
          <div className="d5__narrow">
            <h1 className="d5__h1">Ein Betrieb, ein Programm, drei Ansichten.</h1>
            <p className="d5__lede">
              Der Chef will wissen, wie der Tag läuft. Das Büro will die Anfrage
              loswerden. Der Monteur will nur sehen, wo er hin muss. Alle drei arbeiten
              in WerkFlow an denselben Daten.
            </p>
            <div className="d5__actions">
              <a className="d5__cta" href="#gespraech">
                Gespräch anfragen
              </a>
              <a className="d5__quiet" href="#inhalt">
                Was heute schon drin ist
              </a>
            </div>
          </div>

          <div className="d5__app">
            <div className="d5__appbar">
              <p>
                WerkFlow <span>Beispielbetrieb, 18 Mitarbeiter</span>
              </p>
              <div className="d5__choose">
                <span className="d5__choose-label">Ansicht:</span>
                {roles.map((entry) => (
                  <button
                    key={entry.id}
                    type="button"
                    aria-pressed={role === entry.id}
                    aria-controls={panelId}
                    className="d5__role"
                    onClick={() => setRole(entry.id)}
                  >
                    {entry.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="d5__body">
              <nav className="d5__nav" aria-label="Bereiche im Programm">
                <ul>
                  {navItems.map((item) => (
                    <li key={item} data-active={item === current.nav}>
                      {item}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="d5__screen" key={role} id={panelId}>
                <h3>{current.title}</h3>
                <p className="d5__screen-note">{current.note}</p>

                {role === 'chef' ? (
                  <div className="d5__rows">
                    <div className="d5__row">
                      <div>
                        <b>Bad Müller, Thermostat</b>
                        <span>K. Adamski, seit 7:30 vor Ort</span>
                      </div>
                      <span className="d5__pill d5__pill--running">läuft</span>
                    </div>
                    <div className="d5__row">
                      <div>
                        <b>Kundendienst, Tagestour</b>
                        <span>T. Weiß, 3 von 5 Terminen erledigt</span>
                      </div>
                      <span className="d5__pill d5__pill--running">läuft</span>
                    </div>
                    <div className="d5__row">
                      <div>
                        <b>Abnahme Kolb Immobilien</b>
                        <span>M. Brinkmann, mit Kunde, 14:00</span>
                      </div>
                      <span className="d5__pill d5__pill--wait">wartet</span>
                    </div>
                    <div className="d5__row">
                      <div>
                        <b>Heizung tauschen, Peters</b>
                        <span>S. Ergün, fertig gemeldet, Büro prüft</span>
                      </div>
                      <span className="d5__pill d5__pill--done">fertig</span>
                    </div>
                    <div className="d5__row">
                      <div>
                        <b>Bad Vogt</b>
                        <span>wartet auf den Fliesenleger</span>
                      </div>
                      <span className="d5__pill d5__pill--park">geparkt</span>
                    </div>
                    <div className="d5__row">
                      <div>
                        <b>3 Zeitkorrekturen warten auf Ihre Freigabe</b>
                        <span>aus der letzten Woche</span>
                      </div>
                      <button className="d5__btn" type="button">
                        Ansehen
                      </button>
                    </div>
                  </div>
                ) : null}

                {role === 'buero' ? (
                  <>
                    <div className="d5__rows">
                      <div className="d5__row">
                        <div>
                          <b>Peters, Heizung bleibt kalt</b>
                          <span>angerufen heute 5:40, Wunsch: diese Woche</span>
                        </div>
                        <span className="d5__pill d5__pill--wait">neu</span>
                      </div>
                      <div className="d5__row">
                        <div>
                          <b>Kolb Immobilien, 4 Thermen warten auf Wartung</b>
                          <span>aus dem Wartungsplan, fällig im Oktober</span>
                        </div>
                        <span className="d5__pill d5__pill--park">geplant</span>
                      </div>
                      <div className="d5__row">
                        <div>
                          <b>Ahlers, Änderung im 2. OG</b>
                          <span>Mail von gestern, Bauleitung informiert</span>
                        </div>
                        <span className="d5__pill d5__pill--wait">offen</span>
                      </div>
                      <div className="d5__row">
                        <div>
                          <b>Vogt, Termin verschieben</b>
                          <span>Fliesenleger kommt später</span>
                        </div>
                        <span className="d5__pill d5__pill--wait">offen</span>
                      </div>
                    </div>
                    <div className="d5__inline">
                      <button className="d5__btn d5__btn--primary" type="button">
                        Auftrag anlegen
                      </button>
                      <button className="d5__btn" type="button">
                        Termin vorschlagen
                      </button>
                      <button className="d5__btn" type="button">
                        Kunde anrufen
                      </button>
                    </div>
                    <p className="d5__screen-note" style={{ marginTop: '1rem' }}>
                      Aus einer Anfrage wird genau ein Auftrag. Danach ist sie
                      erledigt und taucht nicht zweimal auf.
                    </p>
                  </>
                ) : null}

                {role === 'monteur' ? (
                  <div className="d5__field">
                  <div className="d5__phone">
                    <div className="d5__clock">
                      <div>
                        <b>02:14</b>
                        <span>Bad Müller, seit 7:30</span>
                      </div>
                      <button type="button">Pause</button>
                    </div>
                    <div className="d5__rows">
                      <div className="d5__row">
                        <div>
                          <b>7:30 Bad Müller</b>
                          <span>Thermostat tauschen, 1. OG</span>
                        </div>
                        <span className="d5__pill d5__pill--running">jetzt</span>
                      </div>
                      <div className="d5__row">
                        <div>
                          <b>11:00 Kolb Immobilien</b>
                          <span>Wartung, 2 Thermen</span>
                        </div>
                        <span className="d5__pill d5__pill--park">danach</span>
                      </div>
                      <div className="d5__row">
                        <div>
                          <b>14:30 Neubau Ahlers</b>
                          <span>Stränge stellen, mit T. Weiß</span>
                        </div>
                        <span className="d5__pill d5__pill--park">danach</span>
                      </div>
                    </div>
                    <div className="d5__inline">
                      <button className="d5__btn" type="button">
                        Foto aufnehmen
                      </button>
                      <button className="d5__btn" type="button">
                        Material buchen
                      </button>
                      <button className="d5__btn d5__btn--primary" type="button">
                        Fertig melden
                      </button>
                    </div>
                  </div>
                  <p className="d5__fieldnote">
                    Der Monteur sieht nur seine eigene Arbeit. Zeit, Fotos und
                    Material gehen direkt an den richtigen Auftrag. Das Büro muss
                    nichts abtippen und niemand muss abends Zettel sortieren.
                  </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="d5__wrap d5__section" id="inhalt">
          <h2 className="d5__h2">Was heute schon drin ist</h2>
          <p className="d5__sub">
            WerkFlow ist kein leeres Baukastensystem. Das hier ist gebaut und wird
            jeden Tag weiter gebaut.
          </p>

          <ul className="d5__holds">
            <li>
              <div>
                <strong>Kunden, Baustellen und Anlagen</strong>
                <span>Adressen, Ansprechpartner und die Geräte, die dort stehen.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Anfragen</strong>
                <span>Werden genau einmal zu einem Auftrag.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Aufträge und Projekte</strong>
                <span>Checklisten, Vorlagen und ein klarer Stand.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Kalender und Einsatzplanung</strong>
                <span>Wer fährt wohin, wer hat noch Luft, was ist geparkt.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Mitarbeiter</strong>
                <span>Urlaub, Krankheit, Teams und Qualifikationen.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Zeiterfassung</strong>
                <span>Kommen, Gehen, Pausen und eine Freigabe für Korrekturen.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Dokumente</strong>
                <span>Hängen am Auftrag, am Kunden oder an der Anlage.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Lager</strong>
                <span>Artikel, Lagerorte, Bestand und Material am Auftrag.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Service und Wartung</strong>
                <span>Servicefälle und Wartungspläne, die fällige Arbeit erzeugen.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Angebote und Rechnungen</strong>
                <span>Der kaufmännische Teil wird gerade gebaut.</span>
              </div>
              <span className="d5__tag">geplant</span>
            </li>
            <li>
              <div>
                <strong>App fürs Handy</strong>
                <span>
                  Heute läuft WerkFlow im Browser, auch auf dem Handy. Eine eigene App
                  für die Monteure ist geplant.
                </span>
              </div>
              <span className="d5__tag">geplant</span>
            </li>
            <li>
              <div>
                <strong>Hilfe direkt im Programm</strong>
                <span>Kurze Anleitungen und Videos zu den Bereichen.</span>
              </div>
              <span className="d5__tag">geplant</span>
            </li>
          </ul>
        </section>

        <section className="d5__band">
          <div className="d5__wrap">
            <h2 className="d5__h2">Sie müssen es nicht alleine einführen</h2>
            <p className="d5__sub">
              Neue Software scheitert selten am Programm. Sie scheitert daran, dass im
              Betrieb niemand Zeit hat, sie einzuführen. Darum machen wir das.
            </p>

            <div className="d5__steps">
              <article className="d5__step">
                <p className="d5__step-when">Am ersten Tag</p>
                <h3>Wir bringen Ihre Daten rein</h3>
                <p>
                  Wir kommen in den Betrieb und richten alles ein: Leute, Kunden,
                  Baustellen, laufende Arbeit, Unterlagen. Was mitkommt, klären wir
                  vorher zusammen.
                </p>
              </article>
              <article className="d5__step">
                <p className="d5__step-when">In den Tagen danach</p>
                <h3>Jeder lernt seinen Teil</h3>
                <p>
                  Büro, Bauleitung und Monteure üben getrennt, und nur das, was sie
                  wirklich brauchen. Wo es passt, fahren wir auf eine Baustelle mit.
                </p>
              </article>
              <article className="d5__step">
                <p className="d5__step-when">Danach laufend</p>
                <h3>Wir bleiben dran</h3>
                <p>
                  Feste Gespräche mit dem Chef, kurze Video-Anleitungen und Hilfe, wenn
                  irgendwo etwas hakt.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="d5__wrap d5__ask" id="gespraech">
          <div>
            <h2 className="d5__h2">Schauen Sie es sich an</h2>
            <p className="d5__status">
              <strong>WerkFlow ist noch nicht frei zu kaufen.</strong> Wir bauen gerade
              die letzten Teile. Schreiben Sie uns, dann zeigen wir Ihnen den Stand,
              hören uns an, wie es bei Ihnen läuft, und sagen Bescheid, sobald es so
              weit ist.
            </p>
            <p className="d5__status">
              Wenn WerkFlow nicht zu Ihrem Betrieb passt, sagen wir das auch.
            </p>
          </div>

          <form className="d5__form" aria-describedby="d5-formnote">
            <label className="d5__field">
              <span>Betrieb</span>
              <input name="betrieb" type="text" autoComplete="organization" />
            </label>
            <div className="d5__two">
              <label className="d5__field">
                <span>Ihr Name</span>
                <input name="name" type="text" autoComplete="name" />
              </label>
              <label className="d5__field">
                <span>Telefon</span>
                <input name="telefon" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label className="d5__field">
              <span>E-Mail</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label className="d5__field">
              <span>Wie viele Leute arbeiten bei Ihnen?</span>
              <select name="groesse" defaultValue="">
                <option value="" disabled>
                  Bitte wählen
                </option>
                <option>bis 10</option>
                <option>11 bis 25</option>
                <option>26 bis 50</option>
                <option>mehr als 50</option>
              </select>
            </label>
            <label className="d5__field">
              <span>Womit arbeiten Sie heute?</span>
              <textarea name="nachricht" rows={3} />
            </label>
            <button className="d5__cta" type="button">
              Gespräch anfragen
            </button>
            <p className="d5__formnote" id="d5-formnote">
              Dieses Formular ist ein Entwurf. Es sendet nichts und speichert nichts.
            </p>
          </form>
        </section>
      </main>

      <footer className="d5__wrap d5__foot">
        <p>WerkFlow — Software für Sanitär, Heizung, Klima</p>
        <nav aria-label="Rechtliches">
          <a href="#gespraech">Kontakt</a>
          <a href="#gespraech">Impressum</a>
          <a href="#gespraech">Datenschutz</a>
        </nav>
      </footer>
    </>
  )
}
