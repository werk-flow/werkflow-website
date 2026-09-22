import { ArrowUpRight, FileText, Clock3, Package, Check } from "lucide-react";
import {
  Header,
  PreviewNote,
  WorkBoard,
  PhoneCard,
  ContactButton,
  TourButton,
  Adoption,
  Questions,
  Closing,
  Footer,
  TradeLine,
} from "@/astra/components/shared";

export default function One() {
  return (
    <div className="design-one">
      <PreviewNote />
      <Header />
      <main id="main">
        <section className="one-hero container">
          <div className="hero-copy">
            <div className="audience">
              <span />
              Für Sanitär, Heizung und Klima
            </div>
            <h1>
              Ihr Betrieb.
              <br />
              Klar im Blick.
            </h1>
            <p>
              Aufträge, Team und Büro gehören zusammen. WerkFlow bringt Ihren
              Arbeitsalltag an einen Ort. Mit persönlicher Hilfe beim Start.
            </p>
            <div className="hero-actions">
              <ContactButton />
              <TourButton />
            </div>
            <div className="hero-points">
              <span>
                <Check size={15} /> Für Büro und Baustelle
              </span>
              <span>
                <Check size={15} /> Gemeinsam einführen
              </span>
            </div>
          </div>
          <div className="one-stage">
            <span className="stage-heading">
              Vom ersten Auftrag bis zum letzten Handgriff.
            </span>
            <WorkBoard />
            <div className="floating-note">
              <span className="success-icon">
                <Check size={18} />
              </span>
              <span>
                Die Infos sind da.<small>Direkt beim richtigen Auftrag.</small>
              </span>
            </div>
            <span className="stage-footnote">
              Ein Blick auf die Idee hinter WerkFlow
            </span>
          </div>
        </section>
        <div className="container">
          <TradeLine />
        </div>
        <section id="einblick" className="one-features container section-space">
          <div className="section-heading">
            <div>
              <span className="small-label">
                Ein gemeinsamer Stand für alle
              </span>
              <h2>
                Weniger suchen.
                <br />
                Besser zusammenarbeiten.
              </h2>
            </div>
            <p>
              Im Büro wird geplant. Vor Ort wird gearbeitet. WerkFlow soll die
              Infos dort verbinden, wo Ihr Team sie braucht.
            </p>
          </div>
          <div className="feature-composition">
            <div className="feature-main">
              <div>
                <FileText size={27} />
                <h3>Alles beim Auftrag.</h3>
                <p>
                  Was ist zu tun? Wer fährt hin? Welche Infos fehlen? Ein Ort
                  für die Arbeit und alles, was dazugehört.
                </p>
                <a href="#start">
                  Den gemeinsamen Start ansehen <ArrowUpRight size={17} />
                </a>
              </div>
              <PhoneCard />
            </div>
            <div className="feature-side">
              <article>
                <Clock3 size={27} />
                <h3>Zeiten gleich festhalten.</h3>
                <p>
                  Arbeit, Fahrt und Pause dem Tag zuordnen. Damit das Büro die
                  Zeiten später prüfen kann.
                </p>
                <div className="time-strip">
                  <span>Arbeit</span>
                  <span>Fahrt</span>
                  <span>Pause</span>
                </div>
              </article>
              <article>
                <Package size={27} />
                <h3>Material im Blick.</h3>
                <p>
                  Sehen, was ein Auftrag braucht. Entnahmen und Rückgaben beim
                  Auftrag festhalten.
                </p>
              </article>
            </div>
          </div>
        </section>
        <div className="container">
          <Adoption />
          <Questions />
          <Closing />
        </div>
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
