import { Caveat, Courier_Prime, Schibsted_Grotesk } from 'next/font/google'
import './one.css'

const sans = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-d1-sans',
  display: 'swap',
})

const mono = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-d1-mono',
  display: 'swap',
})

const hand = Caveat({
  subsets: ['latin'],
  variable: '--font-d1-hand',
  display: 'swap',
})

export default function StudyOne() {
  return (
    <div className={`d1 ${sans.variable} ${mono.variable} ${hand.variable}`}>
      <header className="d1__wrap d1__top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="d1__logo"
          src="/logo-text-light.svg"
          alt="WerkFlow"
          width={160}
          height={28}
        />
        <a className="d1__toplink" href="#gespraech">
          Gespräch anfragen
        </a>
      </header>

      <main id="main">
        <section className="d1__wrap d1__hero">
          <div>
            <h1 className="d1__h1">Am Abend liegt der ganze Tag auf dem Tisch.</h1>
            <p className="d1__lede">
              Notizzettel, Stundenzettel, Lieferschein. Erst danach fängt die
              Büroarbeit an. WerkFlow sammelt dieselben Angaben schon während der
              Arbeit — an einer Stelle, die jeder im Betrieb findet.
            </p>
            <div className="d1__actions">
              <a className="d1__cta" href="#gespraech">
                Gespräch anfragen
              </a>
              <a className="d1__quiet" href="#inhalt">
                Was heute schon drin ist
              </a>
            </div>
            <p className="d1__note">
              WerkFlow ist Software für Betriebe in Sanitär, Heizung und Klima. Sie
              ist noch nicht frei zu kaufen.
            </p>
          </div>

          <div className="d1__stage">
            <figure className="d1__paper d1__paper--note">
              <div className="d1__paper-head">
                <span>Notiz</span>
                <span>Di, 8:40</span>
              </div>
              <p className="d1__hand">
                Müller, Bad oben.
                <br />
                Thermostat tropft.
                <br />
                <em>Mittwoch früh?</em>
              </p>
              <p className="d1__paper-foot">Handy-Nr. steht im alten Ordner</p>
            </figure>

            <figure className="d1__paper d1__paper--hours">
              <div className="d1__paper-head">
                <span>Stundenzettel KW 39</span>
                <span>Blatt 1</span>
              </div>
              <ul>
                <li className="d1__paper-row">
                  <span>Mo Neubau Ahlers</span>
                  <span>7,5 h</span>
                </li>
                <li className="d1__paper-row">
                  <span>Di Müller + Fahrt</span>
                  <span>4,0 h</span>
                </li>
                <li className="d1__paper-row">
                  <span>Mi ?</span>
                  <span>— </span>
                </li>
              </ul>
              <p className="d1__paper-foot">Abgabe Freitag im Büro</p>
            </figure>

            <figure className="d1__paper d1__paper--delivery">
              <div className="d1__paper-head">
                <span>Lieferschein 88-2417</span>
                <span>Kopie</span>
              </div>
              <ul>
                <li className="d1__paper-row">
                  <span>Thermostatkopf</span>
                  <span>1 St.</span>
                </li>
                <li className="d1__paper-row">
                  <span>Dichtung 1/2&quot;</span>
                  <span>4 St.</span>
                </li>
              </ul>
              <p className="d1__paper-foot">Unterschrift Kunde fehlt</p>
            </figure>

            <figure className="d1__record" aria-label="Derselbe Vorgang in WerkFlow">
              <div className="d1__record-head">
                <span className="d1__record-title">Auftrag 2417</span>
                <span className="d1__record-state">Fertig gemeldet</span>
              </div>
              <ul className="d1__record-list">
                <li>
                  <span className="d1__record-key">Kunde</span>
                  <span className="d1__record-val">Müller, Bad im 1. OG</span>
                </li>
                <li>
                  <span className="d1__record-key">Termin</span>
                  <span className="d1__record-val">Mittwoch, 7:30 bis 11:00</span>
                </li>
                <li>
                  <span className="d1__record-key">Monteur</span>
                  <span className="d1__record-val">K. Adamski</span>
                </li>
                <li>
                  <span className="d1__record-key">Zeit</span>
                  <span className="d1__record-val">3,5 Stunden, erfasst vor Ort</span>
                </li>
                <li>
                  <span className="d1__record-key">Material</span>
                  <span className="d1__record-val">
                    1 Thermostatkopf, 4 Dichtungen
                  </span>
                </li>
                <li>
                  <span className="d1__record-key">Dokumente</span>
                  <span className="d1__record-val">2 Fotos, Lieferschein</span>
                </li>
              </ul>
              <p className="d1__record-foot">
                Alles am selben Auftrag. Das Büro muss nichts abtippen.
              </p>
            </figure>
          </div>
        </section>

        <section className="d1__band">
          <div className="d1__wrap">
            <h2 className="d1__h2">Der Zettel kostet keine Zeit. Der Weg danach schon.</h2>
            <p className="d1__sub">
              Ein Zettel ist schnell geschrieben. Teuer wird er danach: beim Suchen,
              beim Nachfragen, beim Abtippen.
            </p>

            <div className="d1__problems">
              <article className="d1__problem">
                <span className="d1__strip">liegt im Auto</span>
                <h3>Die Notiz ist nur an einem Ort</h3>
                <p>
                  Wer im Büro sitzt, weiß nicht, was der Kunde am Morgen gesagt hat.
                  Also ruft jemand an und fragt noch einmal nach.
                </p>
              </article>
              <article className="d1__problem">
                <span className="d1__strip">kommt Freitag</span>
                <h3>Die Stunden kommen zu spät</h3>
                <p>
                  Am Freitag weiß niemand mehr genau, wie lange Dienstag gedauert hat.
                  Geschätzte Stunden kosten Geld.
                </p>
              </article>
              <article className="d1__problem">
                <span className="d1__strip">auf einem Handy</span>
                <h3>Die Fotos gehören zu keinem Auftrag</h3>
                <p>
                  Bilder von der Baustelle liegen in einem Chat. Beim Streit über die
                  Rechnung findet sie keiner wieder.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="d1__band" id="inhalt">
          <div className="d1__wrap">
            <h2 className="d1__h2">Was heute schon drin ist</h2>
            <p className="d1__sub">
              WerkFlow ist kein leeres Programm, das Sie erst selbst bauen müssen. Das
              hier gibt es und wird täglich weiter gebaut.
            </p>

            <ul className="d1__inside">
              <li>
                <div>
                  <strong>Kunden, Baustellen und Anlagen</strong>
                  <span>
                    Ansprechpartner, Adressen und die Geräte, die dort verbaut sind.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Anfragen</strong>
                  <span>
                    Was der Kunde will, landet an einer Stelle und wird genau einmal
                    zum Auftrag.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Aufträge und Projekte</strong>
                  <span>
                    Mit Checklisten, Vorlagen und einem klaren Stand: geplant, in
                    Arbeit, geparkt, fertig.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Kalender und Einsatzplanung</strong>
                  <span>
                    Tag, Woche, Monat. Wer fährt wohin, wer hat noch Luft, was ist
                    geparkt.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Mitarbeiter</strong>
                  <span>
                    Urlaub, Krankheit, Teams und Qualifikationen an einer Stelle.
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
                  <strong>Dokumente</strong>
                  <span>
                    Fotos, Pläne und Schreiben hängen am Auftrag, am Kunden oder an der
                    Anlage.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Lager</strong>
                  <span>
                    Artikel, Lagerorte, Bestand und das Material, das am Auftrag
                    verbraucht wird.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Service und Wartung</strong>
                  <span>
                    Servicefälle und Wartungspläne, aus denen die fällige Arbeit
                    entsteht.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Angebote und Rechnungen</strong>
                  <span>
                    Der kaufmännische Teil wird gerade gebaut und kommt später dazu.
                  </span>
                </div>
                <span className="d1__soon">geplant</span>
              </li>
              <li>
                <div>
                  <strong>App fürs Handy</strong>
                  <span>
                    Für die Monteure ist eine eigene App geplant. Heute läuft WerkFlow
                    im Browser, auch auf dem Handy.
                  </span>
                </div>
                <span className="d1__soon">geplant</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="d1__start">
          <div className="d1__wrap">
            <h2 className="d1__h2">So soll der Start ablaufen</h2>
            <p className="d1__sub">
              Neue Software scheitert selten am Programm. Sie scheitert daran, dass
              niemand Zeit hat, sie einzuführen. Darum machen wir das.
            </p>

            <div className="d1__steps">
              <article className="d1__step">
                <p className="d1__step-when">Am ersten Tag</p>
                <h3>Wir bringen Ihre Daten rein</h3>
                <p>
                  Wir kommen in den Betrieb und richten WerkFlow ein: Leute, Kunden,
                  Baustellen, laufende Arbeit, Unterlagen. Was genau mitkommt, klären
                  wir vorher zusammen.
                </p>
              </article>
              <article className="d1__step">
                <p className="d1__step-when">In den Tagen danach</p>
                <h3>Jeder lernt seinen Teil</h3>
                <p>
                  Büro, Bauleitung und Monteure üben getrennt, und nur das, was sie
                  wirklich brauchen. Wo es passt, fahren wir auf eine Baustelle mit.
                </p>
              </article>
              <article className="d1__step">
                <p className="d1__step-when">Danach laufend</p>
                <h3>Wir bleiben dran</h3>
                <p>
                  Regelmäßige Gespräche mit dem Chef, kurze Video-Anleitungen und Hilfe,
                  wenn irgendwo etwas hakt.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="d1__wrap d1__ask" id="gespraech">
          <div>
            <h2 className="d1__h2">Reden wir über Ihren Betrieb</h2>
            <p className="d1__status">
              <strong>WerkFlow ist noch nicht frei zu kaufen.</strong> Wir bauen gerade
              die letzten Teile. Schreiben Sie uns, dann zeigen wir Ihnen den Stand,
              hören uns an, wie es bei Ihnen läuft, und sagen Bescheid, sobald es so
              weit ist.
            </p>
            <p className="d1__status">
              Wenn WerkFlow nicht zu Ihrem Betrieb passt, sagen wir Ihnen das.
            </p>
          </div>

          <form className="d1__form" aria-describedby="d1-formnote">
            <label className="d1__field">
              <span>Betrieb</span>
              <input name="betrieb" type="text" autoComplete="organization" />
            </label>
            <div className="d1__two">
              <label className="d1__field">
                <span>Ihr Name</span>
                <input name="name" type="text" autoComplete="name" />
              </label>
              <label className="d1__field">
                <span>Telefon</span>
                <input name="telefon" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label className="d1__field">
              <span>E-Mail</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label className="d1__field">
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
            <label className="d1__field">
              <span>Was ärgert Sie im Moment am meisten?</span>
              <textarea name="nachricht" rows={3} />
            </label>
            <button className="d1__cta" type="button">
              Gespräch anfragen
            </button>
            <p className="d1__formnote" id="d1-formnote">
              Dieses Formular ist ein Entwurf. Es sendet nichts und speichert nichts.
            </p>
          </form>
        </section>
      </main>

      <footer className="d1__wrap d1__foot">
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
