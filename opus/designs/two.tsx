import { Saira, Saira_Condensed } from 'next/font/google'
import './two.css'

const body = Saira({
  subsets: ['latin'],
  variable: '--font-d2-body',
  display: 'swap',
})

const cond = Saira_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-d2-cond',
  display: 'swap',
})

type Strip = {
  col: string
  title: string
  sub: string
  kind?: 'strong' | 'absence' | 'park'
}

const days = [
  { day: 'Montag', date: '22. Sep' },
  { day: 'Dienstag', date: '23. Sep' },
  { day: 'Mittwoch', date: 'heute' },
  { day: 'Donnerstag', date: '25. Sep' },
  { day: 'Freitag', date: '26. Sep' },
]

const rows: { who: string; role: string; park?: boolean; strips: Strip[] }[] = [
  {
    who: 'K. Adamski',
    role: 'Monteur',
    strips: [
      { col: '2 / span 2', title: 'Wartung Gasthermen', sub: 'Kolb Immobilien' },
      { col: '4 / span 1', title: 'Bad Müller', sub: 'Thermostat', kind: 'strong' },
      { col: '5 / span 2', title: 'Neubau Ahlers', sub: 'Stränge stellen' },
    ],
  },
  {
    who: 'T. Weiß',
    role: 'Monteur',
    strips: [
      { col: '2 / span 2', title: 'Neubau Ahlers', sub: 'Stränge stellen' },
      { col: '4 / span 1', title: 'Kundendienst', sub: 'Tagestour', kind: 'strong' },
      { col: '5 / span 2', title: 'Urlaub', sub: 'genehmigt', kind: 'absence' },
    ],
  },
  {
    who: 'M. Brinkmann',
    role: 'Bauleitung',
    strips: [
      { col: '2 / span 1', title: 'Aufmaß Schule', sub: 'Nord, 2. Bauabschnitt' },
      { col: '4 / span 1', title: 'Abnahme Kolb', sub: 'mit Kunde', kind: 'strong' },
      { col: '6 / span 1', title: 'Baubesprechung', sub: 'Ahlers, 9:00' },
    ],
  },
  {
    who: 'S. Ergün',
    role: 'Monteur',
    strips: [
      { col: '2 / span 1', title: 'Störung Heizung', sub: 'Peters' },
      { col: '3 / span 2', title: 'Heizung tauschen', sub: 'Peters, zwei Tage' },
      { col: '5 / span 1', title: 'Kundendienst', sub: 'Tagestour' },
    ],
  },
  {
    who: 'L. Tran',
    role: 'Azubi, 2. Jahr',
    strips: [
      { col: '2 / span 2', title: 'mit T. Weiß', sub: 'Neubau Ahlers' },
      { col: '4 / span 3', title: 'Berufsschule', sub: 'Mittwoch bis Freitag', kind: 'absence' },
    ],
  },
  {
    who: 'Parkplatz',
    role: 'ohne Termin',
    park: true,
    strips: [
      { col: '2 / span 2', title: 'Bad Vogt', sub: 'wartet auf Fliesenleger', kind: 'park' },
      { col: '4 / span 2', title: 'Lüftung warten', sub: 'Kunde meldet sich', kind: 'park' },
    ],
  },
]

export default function StudyTwo() {
  return (
    <div className={`d2 ${body.variable} ${cond.variable}`}>
      <header className="d2__wrap d2__top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="d2__logo"
          src="/logo-text-dark.svg"
          alt="WerkFlow"
          width={160}
          height={28}
        />
        <a className="d2__toplink" href="#gespraech">
          Gespräch anfragen
        </a>
      </header>

      <main id="main">
        <section className="d2__wrap d2__intro">
          <h1 className="d2__h1">Die Woche hängt an der Wand.</h1>
          <p className="d2__lede">
            Auf der Tafel steht, wer wohin fährt. Was dort passiert ist, steht
            woanders: auf Zetteln, in Chats, im Kopf. WerkFlow hält beides an einer
            Stelle zusammen.
          </p>
          <div className="d2__actions">
            <a className="d2__cta" href="#gespraech">
              Gespräch anfragen
            </a>
            <a className="d2__quiet" href="#inhalt">
              Was heute schon drin ist
            </a>
          </div>
        </section>

        <div className="d2__boardzone">
          <div className="d2__board">
            <div className="d2__board-top">
              <p className="d2__board-title">Einsatzplanung, Kalenderwoche 39</p>
              <p className="d2__board-meta">6 Personen, 1 Parkplatz</p>
            </div>

            <div className="d2__grid">
              <div className="d2__day" aria-hidden="true" />
              {days.map((entry) => (
                <div
                  key={entry.day}
                  className={`d2__day${entry.date === 'heute' ? ' d2__day--today' : ''}`}
                >
                  {entry.day}
                  <span>{entry.date}</span>
                </div>
              ))}

              {rows.map((row, rowIndex) => {
                const gridRow = rowIndex + 2
                return (
                  <div
                    key={row.who}
                    style={{ display: 'contents' }}
                    className={row.park ? 'd2__row-park' : undefined}
                  >
                    <div className="d2__who" style={{ gridRow, gridColumn: 1 }}>
                      {row.who}
                      <span>{row.role}</span>
                    </div>
                    {days.map((entry, dayIndex) => (
                      <div
                        key={entry.day}
                        className={`d2__cell${entry.date === 'heute' ? ' d2__cell--today' : ''}`}
                        style={{ gridRow, gridColumn: dayIndex + 2 }}
                      />
                    ))}
                    {row.strips.map((strip) => (
                      <div
                        key={strip.col + strip.title}
                        className={`d2__strip${strip.kind ? ` d2__strip--${strip.kind}` : ''}`}
                        style={{
                          gridRow,
                          gridColumn: strip.col,
                          alignSelf: 'start',
                          margin: '5px',
                          zIndex: 1,
                        }}
                      >
                        <b>{strip.title}</b>
                        {strip.sub}
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <p className="d2__caption">
          So sieht eine Woche in WerkFlow aus: geplante Arbeit, Urlaub, Berufsschule
          und Arbeit ohne Termin auf dem <b>Parkplatz</b>. Der orange Strich steht auf
          heute.
        </p>

        <section className="d2__col d2__section">
          <h2 className="d2__h2">Was eine Tafel aus Magneten nicht kann</h2>
          <p className="d2__sub">
            Die Tafel plant gut. Alles danach macht sie nicht mit.
          </p>

          <div className="d2__points">
            <article className="d2__point">
              <span className="d2__point-mark" aria-hidden="true" />
              <h3>Sie weiß nicht, wie lange es gedauert hat</h3>
              <p>
                Die geplanten vier Stunden stehen an der Wand. Die echten sechs stehen
                auf einem Zettel im Auto.
              </p>
            </article>
            <article className="d2__point">
              <span className="d2__point-mark" aria-hidden="true" />
              <h3>Sie fährt nicht mit</h3>
              <p>
                Der Monteur auf der Baustelle sieht die Tafel nicht. Er ruft an, oder
                er rät.
              </p>
            </article>
            <article className="d2__point">
              <span className="d2__point-mark" aria-hidden="true" />
              <h3>Sie merkt sich nichts</h3>
              <p>
                Nächstes Jahr weiß niemand mehr, was bei dem Kunden gemacht wurde und
                welches Teil verbaut ist.
              </p>
            </article>
          </div>
        </section>

        <section className="d2__col d2__section" id="inhalt">
          <h2 className="d2__h2">Was WerkFlow sonst noch hält</h2>
          <p className="d2__sub">
            Ein Programm für den ganzen Betrieb, nicht nur für den Plan.
          </p>

          <ul className="d2__holds">
            <li>
              <div>
                <strong>Kunden, Baustellen und Anlagen</strong>
                <span>Adressen, Ansprechpartner und die verbauten Geräte.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Anfragen und Aufträge</strong>
                <span>
                  Vom Anruf bis zum fertigen Auftrag, mit Checklisten und klarem Stand.
                </span>
              </div>
            </li>
            <li>
              <div>
                <strong>Zeiterfassung</strong>
                <span>
                  Kommen, Gehen, Pausen. Korrekturen laufen über eine Freigabe.
                </span>
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
                <strong>Dokumente</strong>
                <span>Fotos, Pläne und Schreiben hängen am richtigen Vorgang.</span>
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
              <span className="d2__tag">geplant</span>
            </li>
            <li>
              <div>
                <strong>App fürs Handy</strong>
                <span>
                  Heute läuft WerkFlow im Browser, auch auf dem Handy. Eine eigene App
                  für die Monteure ist geplant.
                </span>
              </div>
              <span className="d2__tag">geplant</span>
            </li>
          </ul>
        </section>

        <section className="d2__panel" id="gespraech">
          <div className="d2__col">
            <h2 className="d2__h2">So soll der Start ablaufen</h2>
            <p className="d2__sub">
              Neue Software scheitert selten am Programm. Sie scheitert daran, dass im
              Betrieb niemand Zeit hat, sie einzuführen. Darum machen wir das.
            </p>

            <div className="d2__steps">
              <article className="d2__step">
                <p className="d2__step-when">Am ersten Tag</p>
                <h3>Wir bringen Ihre Daten rein</h3>
                <p>
                  Wir kommen zu Ihnen und richten alles ein: Leute, Kunden, Baustellen,
                  laufende Arbeit, Unterlagen. Was mitkommt, klären wir vorher.
                </p>
              </article>
              <article className="d2__step">
                <p className="d2__step-when">In den Tagen danach</p>
                <h3>Jeder lernt seinen Teil</h3>
                <p>
                  Büro, Bauleitung und Monteure üben getrennt, und nur das, was sie
                  wirklich brauchen.
                </p>
              </article>
              <article className="d2__step">
                <p className="d2__step-when">Danach laufend</p>
                <h3>Wir bleiben dran</h3>
                <p>
                  Feste Gespräche mit dem Chef, kurze Video-Anleitungen und Hilfe, wenn
                  etwas hakt.
                </p>
              </article>
            </div>

            <p className="d2__status">
              <strong>WerkFlow ist noch nicht frei zu kaufen.</strong> Wir bauen gerade
              die letzten Teile. Schreiben Sie uns, dann zeigen wir Ihnen den Stand,
              hören uns an, wie es bei Ihnen läuft, und sagen Bescheid, sobald es so
              weit ist.
            </p>

            <form className="d2__form" aria-describedby="d2-formnote">
              <label className="d2__field">
                <span>Betrieb</span>
                <input name="betrieb" type="text" autoComplete="organization" />
              </label>
              <div className="d2__two">
                <label className="d2__field">
                  <span>Ihr Name</span>
                  <input name="name" type="text" autoComplete="name" />
                </label>
                <label className="d2__field">
                  <span>Telefon</span>
                  <input name="telefon" type="tel" autoComplete="tel" />
                </label>
              </div>
              <label className="d2__field">
                <span>E-Mail</span>
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label className="d2__field">
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
              <label className="d2__field">
                <span>Wo klemmt es bei Ihnen gerade?</span>
                <textarea name="nachricht" rows={3} />
              </label>
              <button className="d2__cta" type="button">
                Gespräch anfragen
              </button>
              <p className="d2__formnote" id="d2-formnote">
                Dieses Formular ist ein Entwurf. Es sendet nichts und speichert nichts.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="d2__wrap d2__foot">
        <p>WerkFlow — Software für Sanitär, Heizung, Klima</p>
        <nav aria-label="Rechtliches">
          <a href="#gespraech">Kontakt</a>
          <a href="#gespraech">Impressum</a>
          <a href="#gespraech">Datenschutz</a>
        </nav>
      </footer>
    </div>
  )
}
