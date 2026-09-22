import { ArrowDownRight, Check, FileText, MapPin } from "lucide-react";
import {
  Header,
  PreviewNote,
  ContactButton,
  TourButton,
  PhoneCard,
  Adoption,
  Questions,
  Closing,
  Footer,
} from "@/astra/components/shared";
import { WorkflowExplorer } from "@/astra/components/workflow-explorer";

export default function Three() {
  return (
    <div className="design-three">
      <PreviewNote />
      <Header />
      <main id="main">
        <section className="three-hero container">
          <div className="three-intro">
            <span>WerkFlow für Ihren SHK-Betrieb</span>
            <span>Im Büro. Unterwegs. Vor Ort.</span>
          </div>
          <h1>Arbeit im Fluss.</h1>
          <div className="three-hero-grid">
            <div className="three-lead">
              <p>
                Ein Auftrag geht durch viele Hände. Die Infos sollten mitgehen.
              </p>
              <p className="body-copy">
                WerkFlow verbindet die Arbeit von Büro und Baustelle. Damit Ihr
                Team auf einem gemeinsamen Stand weiterarbeiten kann.
              </p>
              <ContactButton />
              <TourButton />
            </div>
            <div className="flow-scene">
              <div className="paper-job">
                <div>
                  <FileText size={22} />
                  <span>Im Büro geplant</span>
                </div>
                <h3>Wartung Heizung</h3>
                <p>
                  <MapPin size={13} /> Musterstraße 12
                </p>
                <hr />
                <span>Team zugewiesen</span>
                <div className="paper-person">
                  <span className="avatar">MS</span>Martin Schneider
                  <Check size={16} />
                </div>
                <span className="paper-caption">Beispielauftrag</span>
              </div>
              <ArrowDownRight className="flow-arrow" size={72} />
              <PhoneCard />
              <span className="flow-tag">
                <Check size={15} /> Vor Ort dabei
              </span>
            </div>
          </div>
        </section>
        <section id="einblick" className="workflow-section">
          <div className="container">
            <div className="section-heading">
              <h2>
                Ein Auftrag.
                <br />
                Drei Perspektiven.
              </h2>
              <p>
                Wechseln Sie die Ansicht. So könnte Ihr Team mit WerkFlow
                zusammenarbeiten.
              </p>
            </div>
            <WorkflowExplorer />
          </div>
        </section>
        <div className="container">
          <Adoption title="Aus neuer Software wird Alltag." />
          <Questions />
          <Closing title="Wie läuft die Arbeit bei Ihnen?" />
        </div>
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
