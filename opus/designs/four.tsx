import { Karla, Zilla_Slab } from 'next/font/google'
import './four.css'

const body = Karla({
  subsets: ['latin'],
  variable: '--font-d4-body',
  display: 'swap',
})

const slab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-d4-slab',
  display: 'swap',
})

const hours = [
  {
    time: '05:40',
    title: 'Das Handy klingelt, bevor der Kaffee fertig ist',
    text: 'Bei Frau Peters ist die Heizung aus. Sie haben die Nummer im Kopf, den Termin auch. Aufgeschrieben ist noch nichts.',
    fix: 'In WerkFlow wird daraus in einer Minute eine Anfrage mit Adresse, Anlage und Wunschtermin.',
  },
  {
    time: '07:10',
    title: 'Auf dem Hof steht die halbe Belegschaft',
    text: 'Wer fährt wohin, wer nimmt welches Material mit, wer holt den Azubi ab. Das klärt sich jeden Morgen neu.',
    fix: 'Die Einsatzplanung steht schon. Jeder sieht seinen Tag auf dem Handy, samt Adresse und Auftrag.',
  },
  {
    time: '09:30',
    title: 'Das Büro ruft an',
    text: 'Welches Teil ist bei dem Kunden verbaut? Wer war letztes Jahr da? Jemand geht in den Keller zum Ordner.',
    fix: 'Kunde, Baustelle und Anlage hängen zusammen. Die alten Einsätze stehen daneben.',
  },
  {
    time: '12:15',
    title: 'Die Baustelle sagt: das war mehr Arbeit',
    text: 'Zwei Stunden extra, ein zusätzliches Teil, zwei Fotos von der alten Leitung. Alles steht auf einem Zettel.',
    fix: 'Der Monteur erfasst Zeit, Material und Fotos direkt am Auftrag. Sie sehen es sofort.',
  },
  {
    time: '16:45',
    title: 'Die Autos kommen zurück',
    text: 'Zettel auf den Tisch, kurz erzählt, was war. Den Rest muss sich jemand merken.',
    fix: 'Der Auftrag ist fertig gemeldet. Das Büro prüft, statt abzutippen.',
  },
  {
    time: '18:20',
    title: 'Abendessen, halb da',
    text: 'Im Kopf läuft schon die Liste für morgen.',
    fix: 'Was morgen ansteht, steht im Kalender, nicht in Ihrem Kopf.',
  },
]

export default function StudyFour() {
  return (
    <div className={`d4 ${body.variable} ${slab.variable}`}>
      <header className="d4__col d4__top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="d4__logo"
          src="/logo-text-light.svg"
          alt="WerkFlow"
          width={160}
          height={28}
        />
        <a className="d4__toplink" href="#gespraech">
          Gespräch anfragen
        </a>
      </header>

      <main id="main">
        <section className="d4__col d4__hero">
          <h1 className="d4__h1">
            Der Tag fängt um zwanzig vor sechs an. Der Papierkram wartet bis abends um
            neun.
          </h1>
          <p className="d4__lede">
            Für viele Chefs im Handwerk ist das normal. WerkFlow soll den zweiten
            Arbeitstag am Abend kleiner machen — nicht durch mehr Software, sondern
            weil die Arbeit schon unterwegs aufgeschrieben ist.
          </p>
          <div className="d4__actions">
            <a className="d4__cta" href="#gespraech">
              Gespräch anfragen
            </a>
            <a className="d4__quiet" href="#inhalt">
              Was heute schon drin ist
            </a>
          </div>
        </section>

        <section className="d4__col d4__day" aria-label="Ein Tag im Betrieb">
          {hours.map((hour) => (
            <article className="d4__hour" key={hour.time}>
              <p className="d4__time">{hour.time}</p>
              <div className="d4__scene">
                <h3>{hour.title}</h3>
                <p>{hour.text}</p>
                <p className="d4__fix">{hour.fix}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="d4__night">
          <div className="d4__col">
            <div className="d4__hour">
              <p className="d4__time">21:15</p>
              <div>
                <span className="d4__night-mark" aria-hidden="true" />
                <h2>Und dann fängt der zweite Arbeitstag an.</h2>
                <p>
                  Stundenzettel abtippen. Fotos suchen. Lieferscheine sortieren.
                  Aufschreiben, was der Kunde morgen hören will. Diese Stunde hat kein
                  Kunde bestellt, und bezahlt hat sie auch keiner.
                </p>
                <p>
                  Genau diese Stunde ist der Grund, warum wir WerkFlow bauen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="d4__col d4__turn" id="inhalt">
          <h2 className="d4__h2">Was WerkFlow heute schon hält</h2>
          <p className="d4__sub">
            Ein Programm für den ganzen Betrieb. Kein leeres Baukastensystem.
          </p>

          <ul className="d4__holds">
            <li>
              <div>
                <strong>Kunden, Baustellen und Anlagen</strong>
                <span>Adressen, Ansprechpartner und die Geräte, die dort stehen.</span>
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
                <strong>Kalender und Einsatzplanung</strong>
                <span>Wer fährt wohin, wer hat noch Luft, was ist geparkt.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Zeiterfassung</strong>
                <span>Kommen, Gehen, Pausen. Korrekturen laufen über eine Freigabe.</span>
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
                <strong>Dokumente und Fotos</strong>
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
              <span className="d4__tag">geplant</span>
            </li>
            <li>
              <div>
                <strong>App fürs Handy</strong>
                <span>
                  Heute läuft WerkFlow im Browser, auch auf dem Handy. Eine eigene App
                  für die Monteure ist geplant.
                </span>
              </div>
              <span className="d4__tag">geplant</span>
            </li>
          </ul>
        </section>

        <section className="d4__col d4__turn">
          <h2 className="d4__h2">Und Sie müssen es nicht alleine einführen</h2>
          <p className="d4__sub">
            Neue Software scheitert selten am Programm. Sie scheitert daran, dass im
            Betrieb niemand Zeit hat, sie einzuführen.
          </p>

          <div className="d4__steps">
            <article className="d4__step">
              <p className="d4__step-when">Tag 1</p>
              <div>
                <h3>Wir bringen Ihre Daten rein</h3>
                <p>
                  Wir kommen zu Ihnen in den Betrieb und richten alles ein: Leute,
                  Kunden, Baustellen, laufende Arbeit, Unterlagen. Was mitkommt, klären
                  wir vorher zusammen.
                </p>
              </div>
            </article>
            <article className="d4__step">
              <p className="d4__step-when">Die Tage danach</p>
              <div>
                <h3>Jeder lernt seinen Teil</h3>
                <p>
                  Büro, Bauleitung und Monteure üben getrennt, und nur das, was sie
                  wirklich brauchen. Wo es passt, fahren wir auf eine Baustelle mit.
                </p>
              </div>
            </article>
            <article className="d4__step">
              <p className="d4__step-when">Danach</p>
              <div>
                <h3>Wir bleiben dran</h3>
                <p>
                  Feste Gespräche mit Ihnen, kurze Video-Anleitungen für die Leute und
                  Hilfe, wenn irgendwo etwas hakt.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="d4__col d4__ask" id="gespraech">
          <h2 className="d4__h2">Erzählen Sie uns von Ihrem Abend</h2>
          <p className="d4__status">
            <strong>WerkFlow ist noch nicht frei zu kaufen.</strong> Wir bauen gerade
            die letzten Teile. Schreiben Sie uns, dann zeigen wir Ihnen den Stand,
            hören uns an, wie es bei Ihnen läuft, und sagen Bescheid, sobald es so weit
            ist. Wenn WerkFlow nicht zu Ihrem Betrieb passt, sagen wir das auch.
          </p>

          <form className="d4__form" aria-describedby="d4-formnote">
            <label className="d4__field">
              <span>Betrieb</span>
              <input name="betrieb" type="text" autoComplete="organization" />
            </label>
            <div className="d4__two">
              <label className="d4__field">
                <span>Ihr Name</span>
                <input name="name" type="text" autoComplete="name" />
              </label>
              <label className="d4__field">
                <span>Telefon</span>
                <input name="telefon" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label className="d4__field">
              <span>E-Mail</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label className="d4__field">
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
            <label className="d4__field">
              <span>Was machen Sie abends noch, das Sie nicht machen wollen?</span>
              <textarea name="nachricht" rows={3} />
            </label>
            <button className="d4__cta" type="button">
              Gespräch anfragen
            </button>
            <p className="d4__formnote" id="d4-formnote">
              Dieses Formular ist ein Entwurf. Es sendet nichts und speichert nichts.
            </p>
          </form>
        </section>
      </main>

      <footer className="d4__col d4__foot">
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
