import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './three.css'

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-d3-sans',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-d3-mono',
  display: 'swap',
})

const stations = [
  { x: 45, name: 'Anfrage', caption: 'Anruf, Mail, Kunde' },
  { x: 255, name: 'Auftrag', caption: 'eine Nummer' },
  { x: 465, name: 'Termin', caption: 'Kalender, Monteur' },
  { x: 675, name: 'Einsatz', caption: 'vor Ort' },
  { x: 885, name: 'Abschluss', caption: 'geprüft im Büro' },
]

const parts = [
  {
    pos: '01',
    name: 'Kunden und Baustellen',
    note: 'Adressen, Ansprechpartner und die Anlagen, die dort stehen.',
    planned: false,
  },
  {
    pos: '02',
    name: 'Anfragen',
    note: 'Was der Kunde will, landet an einer Stelle und wird genau einmal zum Auftrag.',
    planned: false,
  },
  {
    pos: '03',
    name: 'Aufträge und Projekte',
    note: 'Checklisten, Vorlagen und ein klarer Stand: geplant, in Arbeit, geparkt, fertig.',
    planned: false,
  },
  {
    pos: '04',
    name: 'Kalender und Planung',
    note: 'Tag, Woche, Monat. Wer fährt wohin, wer hat noch Luft, was ist geparkt.',
    planned: false,
  },
  {
    pos: '05',
    name: 'Mitarbeiter',
    note: 'Urlaub, Krankheit, Teams und Qualifikationen an einer Stelle.',
    planned: false,
  },
  {
    pos: '06',
    name: 'Zeiterfassung',
    note: 'Kommen, Gehen, Pausen. Korrekturen laufen über eine Freigabe.',
    planned: false,
  },
  {
    pos: '07',
    name: 'Dokumente',
    note: 'Fotos, Pläne und Schreiben hängen am Auftrag, am Kunden oder an der Anlage.',
    planned: false,
  },
  {
    pos: '08',
    name: 'Lager',
    note: 'Artikel, Lagerorte, Bestand und das Material, das am Auftrag verbraucht wird.',
    planned: false,
  },
  {
    pos: '09',
    name: 'Service und Wartung',
    note: 'Servicefälle und Wartungspläne, aus denen die fällige Arbeit entsteht.',
    planned: false,
  },
  {
    pos: '10',
    name: 'Angebote und Rechnungen',
    note: 'Der kaufmännische Teil wird gerade gebaut.',
    planned: true,
  },
  {
    pos: '11',
    name: 'App fürs Handy',
    note: 'Heute läuft WerkFlow im Browser, auch auf dem Handy. Eine eigene App für die Monteure ist geplant.',
    planned: true,
  },
]

export default function StudyThree() {
  return (
    <div className={`d3 ${sans.variable} ${mono.variable}`}>
      <div className="d3__sheet">
        <header className="d3__top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="d3__logo"
            src="/logo-text-light.svg"
            alt="WerkFlow"
            width={160}
            height={28}
          />
          <a className="d3__toplink" href="#gespraech">
            Gespräch anfragen
          </a>
        </header>

        <main id="main">
          <p className="d3__mark">
            <span>Blatt 1 von 4</span>
            <span>Ablauf eines Auftrags</span>
          </p>

          <section className="d3__hero">
            <h1 className="d3__h1">
              Ein Auftrag geht durch den ganzen Betrieb. Er sollte dabei nicht
              auseinanderfallen.
            </h1>
            <p className="d3__lede">
              Vom Anruf bis zur geprüften Arbeit gehört alles zu einem Vorgang: der
              Termin, der Monteur, die Stunden, die Fotos, das Material. WerkFlow hält
              diese Kette zusammen, damit niemand am Ende sucht.
            </p>
            <div className="d3__actions">
              <a className="d3__cta" href="#gespraech">
                Gespräch anfragen
              </a>
              <a className="d3__quiet" href="#stueckliste">
                Was heute schon drin ist
              </a>
            </div>

            <figure className="d3__drawing">
              <svg
                viewBox="0 0 1080 350"
                role="img"
                aria-label="Schema: Anfrage, Auftrag, Termin, Einsatz, Abschluss. Beim Einsatz kommen Zeit, Fotos und Material dazu."
              >
                {/* bracket for the three inputs */}
                <g stroke="#4b5d6b" strokeWidth="1" fill="none">
                  <path d="M620 105 H880" />
                  <path d="M650 105 V78 M750 105 V78 M850 105 V78" />
                  <path d="M750 105 V144" />
                </g>
                <path d="M744 138 L750 150 L756 138 Z" fill="#4b5d6b" />
                <g className="d3-svgmono" fill="#4b5d6b" fontSize="13" textAnchor="middle">
                  <text x="650" y="68">Zeit</text>
                  <text x="750" y="68">Fotos</text>
                  <text x="850" y="68">Material</text>
                </g>

                {/* main run */}
                <g stroke="#16202a" strokeWidth="1.5" fill="none">
                  <path d="M195 181 H255 M405 181 H465 M615 181 H675 M825 181 H885" />
                </g>
                <g fill="#f2f5f6" stroke="#16202a" strokeWidth="1.5">
                  {[225, 435, 645, 855].map((cx) => (
                    <circle key={cx} cx={cx} cy={181} r="5" />
                  ))}
                </g>

                {stations.map((station) => (
                  <g key={station.name}>
                    <rect
                      x={station.x}
                      y={150}
                      width={150}
                      height={62}
                      fill="#ffffff"
                      stroke="#16202a"
                      strokeWidth="1.5"
                    />
                    <text
                      x={station.x + 75}
                      y={177}
                      textAnchor="middle"
                      fill="#16202a"
                      fontSize="17"
                      fontWeight="600"
                    >
                      {station.name}
                    </text>
                    <text
                      x={station.x + 75}
                      y={197}
                      textAnchor="middle"
                      className="d3-svgmono"
                      fill="#4b5d6b"
                      fontSize="12"
                    >
                      {station.caption}
                    </text>
                  </g>
                ))}

                {/* the one orange mark: where the information is created */}
                <rect x="669" y="144" width="12" height="12" fill="#ff7900" />

                {/* what stays afterwards */}
                <g stroke="#3e3659" strokeWidth="1.5" fill="none">
                  <path d="M960 212 V248" />
                </g>
                <text
                  x="960"
                  y="268"
                  textAnchor="middle"
                  fill="#3e3659"
                  fontSize="14"
                  fontWeight="500"
                >
                  bleibt am Kunden und an der Anlage
                </text>

                {/* dimension line */}
                <g stroke="#4b5d6b" strokeWidth="1" fill="none">
                  <path d="M45 218 V318 M1035 218 V318" />
                  <path d="M45 305 H430 M650 305 H1035" />
                  <path d="M38 312 L52 298 M1028 312 L1042 298" />
                </g>
                <text
                  x="540"
                  y="310"
                  textAnchor="middle"
                  className="d3-svgmono"
                  fill="#16202a"
                  fontSize="13"
                >
                  ein Vorgang, eine Nummer, ein Ort
                </text>
              </svg>
            </figure>
            <p className="d3__legend">
              <span>
                <i className="d3__swatch" aria-hidden="true" /> hier entsteht die
                Information
              </span>
              <span>
                <i className="d3__swatch d3__swatch--deep" aria-hidden="true" /> das
                bleibt danach im Betrieb
              </span>
            </p>
          </section>

          <p className="d3__mark">
            <span>Blatt 2 von 4</span>
            <span>Stückliste</span>
          </p>

          <section className="d3__section" id="stueckliste">
            <h2 className="d3__h2">Woraus WerkFlow besteht</h2>
            <p className="d3__sub">
              Kein leeres Programm, das Sie sich erst selbst zusammenbauen müssen. Das
              hier ist gebaut und wird jeden Tag weiter gebaut.
            </p>

            <div className="d3__partswrap">
            <table className="d3__parts">
              <caption>Stand: September 2026</caption>
              <thead>
                <tr>
                  <th scope="col">Pos.</th>
                  <th scope="col">Benennung</th>
                  <th scope="col">Was es macht</th>
                  <th scope="col">Stand</th>
                </tr>
              </thead>
              <tbody>
                {parts.map((part) => (
                  <tr key={part.pos}>
                    <td>{part.pos}</td>
                    <td>{part.name}</td>
                    <td>{part.note}</td>
                    <td>
                      <span
                        className={`d3__state${part.planned ? ' d3__state--planned' : ''}`}
                      >
                        {part.planned ? 'geplant' : 'fertig'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </section>

          <p className="d3__mark">
            <span>Blatt 3 von 4</span>
            <span>Einführung</span>
          </p>

          <section className="d3__section">
            <h2 className="d3__h2">So soll der Start ablaufen</h2>
            <p className="d3__sub">
              Neue Software scheitert selten am Programm. Sie scheitert daran, dass im
              Betrieb niemand Zeit hat, sie einzuführen. Darum machen wir das.
            </p>

            <div className="d3__steps">
              <article className="d3__step">
                <p className="d3__step-when">Tag 1</p>
                <h3>Wir bringen Ihre Daten rein</h3>
                <p>
                  Wir kommen in den Betrieb und richten alles ein: Leute, Kunden,
                  Baustellen, laufende Arbeit, Unterlagen. Welche Daten mitkommen,
                  klären wir vorher zusammen.
                </p>
              </article>
              <article className="d3__step">
                <p className="d3__step-when">Tage danach</p>
                <h3>Jeder lernt seinen Teil</h3>
                <p>
                  Büro, Bauleitung und Monteure üben getrennt, und nur das, was sie
                  wirklich brauchen. Wo es passt, fahren wir auf eine Baustelle mit.
                </p>
              </article>
              <article className="d3__step">
                <p className="d3__step-when">laufend</p>
                <h3>Wir bleiben dran</h3>
                <p>
                  Feste Gespräche mit dem Chef, kurze Video-Anleitungen und Hilfe, wenn
                  irgendwo etwas hakt.
                </p>
              </article>
            </div>
          </section>

          <p className="d3__mark">
            <span>Blatt 4 von 4</span>
            <span>Kontakt</span>
          </p>

          <section className="d3__section d3__contact" id="gespraech">
            <div>
              <h2 className="d3__h2">Reden wir über Ihren Betrieb</h2>
              <p className="d3__status">
                <strong>WerkFlow ist noch nicht frei zu kaufen.</strong> Wir bauen
                gerade die letzten Teile. Schreiben Sie uns, dann zeigen wir Ihnen den
                Stand, hören uns an, wie es bei Ihnen läuft, und sagen Bescheid, sobald
                es so weit ist.
              </p>
              <p className="d3__sub">
                Wenn WerkFlow nicht zu Ihrem Betrieb passt, sagen wir das auch.
              </p>
            </div>

            <form className="d3__form" aria-describedby="d3-formnote">
              <label className="d3__field">
                <span>Betrieb</span>
                <input name="betrieb" type="text" autoComplete="organization" />
              </label>
              <div className="d3__two">
                <label className="d3__field">
                  <span>Ihr Name</span>
                  <input name="name" type="text" autoComplete="name" />
                </label>
                <label className="d3__field">
                  <span>Telefon</span>
                  <input name="telefon" type="tel" autoComplete="tel" />
                </label>
              </div>
              <label className="d3__field">
                <span>E-Mail</span>
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label className="d3__field">
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
              <label className="d3__field">
                <span>Wo klemmt es gerade</span>
                <textarea name="nachricht" rows={3} />
              </label>
              <button className="d3__cta" type="button">
                Gespräch anfragen
              </button>
              <p className="d3__formnote" id="d3-formnote">
                Dieses Formular ist ein Entwurf. Es sendet nichts und speichert nichts.
              </p>
            </form>
          </section>
        </main>

        <footer>
          <dl className="d3__block">
            <div>
              <dt>Benennung</dt>
              <dd>WerkFlow — Software für Sanitär, Heizung, Klima</dd>
            </div>
            <div>
              <dt>Stand</dt>
              <dd>September 2026</dd>
            </div>
            <div>
              <dt>Blatt</dt>
              <dd>4 von 4</dd>
            </div>
            <div>
              <dt>Rechtliches</dt>
              <dd>
                <nav aria-label="Rechtliches">
                  <a href="#gespraech">Impressum</a>
                  <a href="#gespraech">Datenschutz</a>
                </nav>
              </dd>
            </div>
          </dl>
        </footer>
      </div>
    </div>
  )
}
