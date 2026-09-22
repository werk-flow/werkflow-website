import Image from "next/image";
import { Check, FileText, Users, MessageCircle } from "lucide-react";
import {
  Header,
  PreviewNote,
  ContactButton,
  TourButton,
  WorkBoard,
  Questions,
  Footer,
} from "@/astra/components/shared";

export default function Four() {
  return (
    <div className="design-four">
      <PreviewNote />
      <Header />
      <main id="main">
        <section className="four-hero container">
          <div className="four-copy">
            <span className="audience">
              Für die Menschen hinter gutem Handwerk.
            </span>
            <h1>
              Ihr Betrieb wächst.
              <br />
              Der Überblick
              <br />
              wächst mit.
            </h1>
            <p>
              Das Büro plant. Das Team packt an. Sie halten alles zusammen.
              WerkFlow soll Ihren Alltag leichter machen. Und wir begleiten den
              Start.
            </p>
            <ContactButton />
            <span className="four-afterthought">
              Software für Sanitär, Heizung und Klima.
            </span>
          </div>
          <div className="four-visual">
            <div className="four-image">
              <Image
                src="/astra/workshop.png"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 48vw"
                alt="Illustrative Werkstattszene: Zwei Fachkräfte schauen gemeinsam auf ein Tablet."
              />
            </div>
            <div className="four-image-message">
              <span className="success-icon">
                <Check size={18} />
              </span>
              <span>
                Zusammen auf einem Stand.
                <small>Vom Büro bis zur Baustelle.</small>
              </span>
            </div>
            <span className="image-note">Illustrative Szene</span>
          </div>
        </section>
        <section className="four-statement container">
          <span>Der Wechsel betrifft Ihr ganzes Team.</span>
          <h2>
            Deshalb gehört die Hilfe
            <br />
            zum Start dazu.
          </h2>
          <p>
            Ihre Daten sollen mitkommen. Ihr Team soll sicher arbeiten können.
            Und Sie sollen mit Fragen einen Menschen erreichen.
          </p>
        </section>
        <section id="start" className="four-steps container">
          {[
            {
              icon: FileText,
              title: "Ihre Daten. Ein guter Anfang.",
              text: "Gemeinsam klären wir, welche Daten Ihr Betrieb braucht. Dann planen wir, wie die vereinbarten Daten in WerkFlow kommen.",
              foot: "Datenübernahme nach Absprache",
            },
            {
              icon: Users,
              title: "Ihr Team. Schritt für Schritt.",
              text: "Geplant sind Übungen in Ihrem Betrieb. Jeder lernt die Arbeit, die zur eigenen Rolle gehört. Auch direkt vor Ort beim Auftrag.",
              foot: "Persönliches Lernen vor Ort",
            },
            {
              icon: MessageCircle,
              title: "Ihr Alltag. Wir bleiben dran.",
              text: "In geplanten Gesprächen wollen wir sehen, was gut läuft und wo es hakt. So soll WerkFlow Teil Ihrer täglichen Arbeit werden.",
              foot: "Regelmäßiger Blick auf den Fortschritt",
            },
          ].map(({ icon: Icon, title, text, foot }, index) => (
            <article key={title}>
              <span className="four-step-number">{index + 1}</span>
              <Icon size={29} />
              <h3>{title}</h3>
              <p>{text}</p>
              <span>{foot}</span>
            </article>
          ))}
          <p className="section-note">
            So ist die Begleitung zum Marktstart geplant. Umfang, Termine und
            Region sind noch abzustimmen.
          </p>
        </section>
        <section id="einblick" className="four-product">
          <div className="container four-product-grid">
            <div>
              <span className="small-label">
                Eine Software für die gemeinsame Arbeit
              </span>
              <h2>
                Was heute ansteht.
                <br />
                Und wer es anpackt.
              </h2>
              <p>
                Aufträge, Zeiten, Material und Unterlagen gehören zum gleichen
                Arbeitsalltag. WerkFlow bringt diese Infos zusammen.
              </p>
              <TourButton />
            </div>
            <WorkBoard compact />
          </div>
        </section>
        <div className="container">
          <Questions />
          <section className="four-close">
            <span>Beginnen wir mit Ihrem Alltag.</span>
            <h2>
              Wo wünschen Sie sich
              <br />
              mehr Überblick?
            </h2>
            <ContactButton />
          </section>
        </div>
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
