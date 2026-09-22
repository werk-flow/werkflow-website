import {
  Check,
  ArrowUpRight,
  CalendarDays,
  FileText,
  Users,
} from "lucide-react";
import {
  Header,
  PreviewNote,
  LeadForm,
  TourButton,
  WorkBoard,
  Adoption,
  Questions,
  Footer,
} from "@/astra/components/shared";

export default function Five() {
  return (
    <div className="design-five">
      <PreviewNote />
      <Header dark compact />
      <main id="main">
        <section className="five-hero">
          <div className="five-copy">
            <div className="audience">
              <span />
              Für SHK-Betriebe mit Team
            </div>
            <h1>
              Die Arbeit läuft.
              <br />
              Behalten Sie
              <br />
              den Überblick.
            </h1>
            <p>
              WerkFlow soll Aufträge, Team und Büro verbinden. Mit Hilfe bei
              Ihren Daten und beim Start im Alltag.
            </p>
            <a className="button" href="#kennenlernen">
              Betrieb kennenlernen <ArrowUpRight size={18} />
            </a>
            <div className="five-checks">
              <span>
                <Check size={17} /> Die Infos beim Auftrag
              </span>
              <span>
                <Check size={17} /> Hilfe für Ihr ganzes Team
              </span>
            </div>
          </div>
          <div className="five-preview">
            <div className="five-preview-heading">
              <span>So könnte Ihr Arbeitstag aussehen.</span>
              <span className="live-dot">Designvorschau</span>
            </div>
            <WorkBoard compact />
            <div className="five-tour">
              <TourButton
                className="play-button"
                label="Den Ablauf kennenlernen"
              />
              <span>
                Vom Plan bis zur Rückmeldung.
                <br />
                Ein Beispiel in drei Schritten.
              </span>
            </div>
          </div>
        </section>
        <section className="five-ribbon">
          <div className="container">
            <span>
              <CalendarDays size={20} /> Im Büro planen
            </span>
            <span>
              <FileText size={20} /> Vor Ort festhalten
            </span>
            <span>
              <Users size={20} /> Gemeinsam weiterarbeiten
            </span>
          </div>
        </section>
        <section id="einblick" className="five-problem container section-space">
          <div>
            <span className="small-label">Kommt Ihnen das bekannt vor?</span>
            <h2>
              Die Arbeit ist fertig.
              <br />
              Das Suchen geht los.
            </h2>
          </div>
          <div className="problem-list">
            <article>
              <span>Die Fotos?</span>
              <p>Noch im Chat mit dem Monteur.</p>
            </article>
            <article>
              <span>Die Zeiten?</span>
              <p>Auf dem Zettel im Wagen.</p>
            </article>
            <article>
              <span>Der Stand?</span>
              <p>Erst mal beim Team nachfragen.</p>
            </article>
            <p className="problem-resolution">
              Die Idee von WerkFlow: Infos dort festhalten, wo die Arbeit
              passiert. Und beim Auftrag wiederfinden.
            </p>
          </div>
        </section>
        <div className="container">
          <Adoption title="Damit der Wechsel im Alltag klappt." />
        </div>
        <section id="kennenlernen" className="five-conversion">
          <div className="container five-conversion-grid">
            <div>
              <span className="small-label">
                Schauen wir auf Ihren Betrieb.
              </span>
              <h2>
                Wo bleibt
                <br />
                Ihre Zeit?
              </h2>
              <p>
                In einem ersten Gespräch geht es um Ihre Arbeit. Wir wollen
                verstehen, was Sie heute bremst und was Ihr Team braucht.
              </p>
              <ul>
                <li>
                  <Check size={18} /> Ihre Abläufe verstehen
                </li>
                <li>
                  <Check size={18} /> Fragen zur Umstellung klären
                </li>
                <li>
                  <Check size={18} /> Den nächsten Schritt besprechen
                </li>
              </ul>
              <p className="section-note">
                Vorschau des geplanten Gesprächsablaufs.
                <br />
                Der Marktstart steht noch nicht fest.
              </p>
            </div>
            <div className="five-form">
              <LeadForm />
            </div>
          </div>
        </section>
        <div className="container">
          <Questions />
        </div>
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
