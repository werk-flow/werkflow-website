import Image from "next/image";
import { ArrowDown, Check, CalendarDays, FileText, Users } from "lucide-react";
import {
  Header,
  PreviewNote,
  ContactButton,
  TourButton,
  WorkBoard,
  Adoption,
  Questions,
  Footer,
} from "@/astra/components/shared";

export default function Two() {
  return (
    <div className="design-two">
      <PreviewNote />
      <Header dark />
      <main id="main">
        <section className="two-hero">
          <div className="two-hero-copy">
            <span className="audience">Software für SHK-Betriebe</span>
            <h1>
              Gutes Handwerk.
              <br />
              Klarer Kopf.
            </h1>
            <p>
              Ihr Team hat viel vor. WerkFlow soll Ihnen helfen, die Arbeit zu
              planen und den Papierkram im Griff zu behalten.
            </p>
            <ContactButton />
            <a className="scroll-link" href="#einblick">
              <span>Mehr Raum für die eigentliche Arbeit.</span>
              <ArrowDown size={20} />
            </a>
          </div>
          <div className="two-photo">
            <Image
              src="/astra/workshop.png"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 55vw"
              alt="Illustration: Zwei Fachkräfte besprechen einen Auftrag am Tablet in einer Werkstatt."
            />
            <div className="photo-caption">
              <span>Vom Büro bis vor Ort.</span>
              <small>Ein gemeinsamer Blick auf die Arbeit.</small>
            </div>
            <span className="image-note">Illustrative Szene</span>
          </div>
        </section>
        <div className="two-bridge">
          <span>Sanitär</span>
          <span>Heizung</span>
          <span>Klima</span>
          <p>
            Viele Aufgaben.
            <br />
            Ein gemeinsamer Arbeitsstand.
          </p>
        </div>
        <section id="einblick" className="two-product container section-space">
          <div className="section-heading">
            <h2>
              Der Auftrag fährt mit.
              <br />
              Die Infos auch.
            </h2>
            <p>
              Zettel im Auto. Fotos im Chat. Zeiten im Kopf. WerkFlow führt die
              Infos beim Auftrag zusammen.
            </p>
          </div>
          <div className="two-product-grid">
            <div className="two-feature-list">
              {[
                [
                  CalendarDays,
                  "Im Büro planen",
                  "Aufträge und Termine mit dem Team abstimmen.",
                ],
                [
                  FileText,
                  "Vor Ort festhalten",
                  "Notizen, Zeiten und Fotos der Arbeit zuordnen.",
                ],
                [
                  Users,
                  "Zusammen weiterkommen",
                  "Im Büro prüfen, was fertig ist und was noch fehlt.",
                ],
              ].map(([Icon, title, text]) => {
                const FeatureIcon = Icon as typeof Check;
                return (
                  <article key={String(title)}>
                    <FeatureIcon size={22} />
                    <div>
                      <h3>{String(title)}</h3>
                      <p>{String(text)}</p>
                    </div>
                  </article>
                );
              })}
              <TourButton />
            </div>
            <WorkBoard compact />
          </div>
        </section>
        <div className="two-adoption">
          <div className="container">
            <Adoption title="Wir planen den Wechsel mit Ihnen." />
          </div>
        </div>
        <div className="container">
          <Questions />
        </div>
        <section className="two-close container">
          <span>Der nächste Schritt für Ihren Betrieb.</span>
          <h2>
            Ordnung in der Arbeit.
            <br />
            Luft für den Kopf.
          </h2>
          <ContactButton />
        </section>
      </main>
      <div className="container">
        <Footer dark />
      </div>
    </div>
  );
}
