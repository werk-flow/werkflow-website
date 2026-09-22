"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  CalendarDays,
  Package,
  Users,
  LayoutGrid,
  MapPin,
  Play,
  Plus,
  X,
  Menu,
  Wrench,
  CircleCheck,
  MessageCircle,
  Pause,
  Building2,
} from "lucide-react";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a className="logo" href="#main" aria-label="WerkFlow, zum Seitenanfang">
      <Image
        src={dark ? "/logo-text-dark.svg" : "/logo-text-light.svg"}
        width={170}
        height={38}
        alt="WerkFlow"
        priority
      />
    </a>
  );
}

export function Header({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  const [menu, setMenu] = useState(false);
  return (
    <header className={`site-header ${dark ? "header-dark" : ""}`}>
      <div className="header-inner">
        <Logo dark={dark} />
        <nav
          className={menu ? "header-nav is-open" : "header-nav"}
          aria-label="Hauptnavigation"
        >
          <a href="#einblick" onClick={() => setMenu(false)}>
            So geht WerkFlow
          </a>
          <a href="#start" onClick={() => setMenu(false)}>
            Gemeinsam starten
          </a>
          {!compact && (
            <a href="#fragen" onClick={() => setMenu(false)}>
              Fragen
            </a>
          )}
        </nav>
        <ContactButton className="header-cta">
          Betrieb kennenlernen <ArrowUpRight size={16} />
        </ContactButton>
        <button
          className="mobile-menu"
          aria-label={menu ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function PreviewNote() {
  return (
    <div className="preview-note">
      Designvorschau{" "}
      <span>
        WerkFlow entsteht. Gezeigte Abläufe und Angebote sind Entwürfe.
      </span>
    </div>
  );
}

export function ContactButton({
  children,
  className = "button",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button className={className} onClick={() => dialog.current?.showModal()}>
        {children ?? (
          <>
            Betrieb kennenlernen <ArrowUpRight size={18} />
          </>
        )}
      </button>
      <dialog
        ref={dialog}
        className="contact-dialog"
        aria-label="Betrieb kennenlernen"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Dialog schließen"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <LeadForm />
      </dialog>
    </>
  );
}

export function LeadForm() {
  const [complete, setComplete] = useState(false);
  if (complete)
    return (
      <div className="form-complete" role="status">
        <CircleCheck size={42} />
        <h3>So würde es weitergehen.</h3>
        <p>
          Im fertigen Ablauf würden wir uns bei Ihnen melden und Ihren Betrieb
          kennenlernen.
        </p>
        <p className="fine-print">
          Dies ist eine Vorschau. Ihre Angaben wurden nicht gesendet oder
          gespeichert.
        </p>
        <button
          className="button button-neutral"
          onClick={() => setComplete(false)}
        >
          Formular erneut ansehen
        </button>
      </div>
    );
  return (
    <form
      className="lead-form"
      onSubmit={(event) => {
        event.preventDefault();
        setComplete(true);
      }}
    >
      <span className="small-label">Der erste Schritt</span>
      <h3>Was braucht Ihr Betrieb?</h3>
      <p>Erzählen Sie uns kurz von Ihrem Alltag.</p>
      <div className="form-row">
        <label>
          Ihr Name
          <input
            name="name"
            autoComplete="name"
            placeholder="Vor- und Nachname"
            required
          />
        </label>
        <label>
          Ihr Betrieb
          <input
            name="company"
            autoComplete="organization"
            placeholder="Name des Betriebs"
            required
          />
        </label>
      </div>
      <label>
        E-Mail
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@betrieb.de"
          required
        />
      </label>
      <label>
        Was kostet Sie gerade viel Zeit?
        <select name="challenge" defaultValue="" required>
          <option value="" disabled>
            Bitte wählen
          </option>
          <option>Aufträge und Team planen</option>
          <option>Zettel und Daten suchen</option>
          <option>Zeiten und Material erfassen</option>
          <option>Den Betrieb auf eine neue Software umstellen</option>
        </select>
      </label>
      <button className="button" type="submit">
        Nächsten Schritt ansehen <ArrowRight size={18} />
      </button>
      <p className="fine-print">
        Formularvorschau. Es werden keine Angaben gesendet oder gespeichert.
        Noch keine Terminbuchung.
      </p>
    </form>
  );
}

const tourSteps = [
  {
    title: "Im Büro planen.",
    text: "Auftrag, Ort und Team gehören zusammen. So wird klar, wer welche Arbeit übernimmt.",
    icon: CalendarDays,
  },
  {
    title: "Vor Ort festhalten.",
    text: "Das Team erfasst Zeiten, Fotos und Notizen beim Auftrag. Die Infos bleiben bei der Arbeit.",
    icon: Wrench,
  },
  {
    title: "Im Büro weiterarbeiten.",
    text: "Das Büro sieht die erfassten Infos. Es prüft, was fertig ist und was noch fehlt.",
    icon: CheckCheck,
  },
];

export function TourButton({
  label = "Ablauf ansehen",
  className = "text-button",
}: {
  label?: string;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState(0);
  const active = tourSteps[step];
  const Icon = active.icon;
  return (
    <>
      <button
        className={className}
        onClick={() => {
          setStep(0);
          dialog.current?.showModal();
        }}
      >
        <Play size={16} fill="currentColor" />
        {label}
      </button>
      <dialog
        ref={dialog}
        className="tour-dialog"
        aria-label="WerkFlow Ablauf ansehen"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Einblick schließen"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <span className="small-label">Ein Beispiel aus dem Arbeitsalltag</span>
        <div className="tour-stage" aria-live="polite">
          <Icon size={58} />
          <h3>{active.title}</h3>
          <p>{active.text}</p>
        </div>
        <div className="tour-controls">
          <button
            className="icon-button"
            aria-label="Voriger Schritt"
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
          >
            <ChevronLeft />
          </button>
          <span>Schritt {step + 1} von 3</span>
          <button
            className="icon-button"
            aria-label={step === 2 ? "Einblick beenden" : "Nächster Schritt"}
            onClick={() => {
              if (step === 2) dialog.current?.close();
              else setStep(step + 1);
            }}
          >
            {step === 2 ? <Check /> : <ChevronRight />}
          </button>
        </div>
        <p className="fine-print">Gestaltete Vorschau mit Beispieldaten.</p>
      </dialog>
    </>
  );
}

const jobs = [
  {
    time: "08:00",
    name: "Heizung warten",
    place: "Musterstraße 12",
    team: "MS",
    state: "In Arbeit",
    className: "job-lilac",
  },
  {
    time: "10:30",
    name: "Wärmepumpe einbauen",
    place: "Am Park 8",
    team: "JK",
    state: "Geplant",
    className: "job-neutral",
  },
  {
    time: "13:00",
    name: "Bad sanieren",
    place: "Gartenweg 4",
    team: "LW",
    state: "Geplant",
    className: "job-neutral",
  },
];

export function WorkBoard({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState("Heute");
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className={`work-board ${compact ? "board-compact" : ""}`}>
      <aside className="board-sidebar">
        <Image src="/logo-icon-light.svg" width={30} height={34} alt="" />
        <span className="sidebar-active">
          <LayoutGrid size={17} />
        </span>
        <CalendarDays size={17} />
        <FileText size={17} />
        <Users size={17} />
        <Package size={17} />
        <span className="sidebar-bottom">M</span>
      </aside>
      <div className="board-main">
        <div className="board-breadcrumb">
          <span>Musterbetrieb</span>
          <span>Arbeitsübersicht</span>
          <span className="avatar">MK</span>
        </div>
        <div className="board-title">
          <div>
            <span className="small-label">Alles an seinem Platz.</span>
            <h3>
              Ein guter Tag beginnt
              <br />
              mit einem klaren Plan.
            </h3>
          </div>
          <span className="board-date">
            <CalendarDays size={17} /> Dienstag, 22. September
          </span>
        </div>
        <div className="board-tabs" role="group" aria-label="Tag auswählen">
          {["Heute", "Morgen"].map((name) => (
            <button
              key={name}
              aria-pressed={tab === name}
              onClick={() => {
                setTab(name);
                setSelected(null);
              }}
            >
              {name}
            </button>
          ))}
          <span>{tab === "Heute" ? "3 Aufträge" : "2 Aufträge"}</span>
        </div>
        <div className="job-list">
          {jobs.slice(0, tab === "Heute" ? 3 : 2).map((job, index) => (
            <button
              className={`job-row ${job.className} ${selected === index ? "job-selected" : ""}`}
              key={job.name}
              aria-expanded={selected === index}
              onClick={() => setSelected(selected === index ? null : index)}
            >
              <span className="job-time">{job.time}</span>
              <span className="job-description">
                <strong>{job.name}</strong>
                <small>
                  <MapPin size={11} />
                  {job.place}
                </small>
                {selected === index && (
                  <span className="job-detail">
                    Auftrag öffnen: Material, Zeiten und Notizen sind hier
                    gebündelt. Beispielansicht.
                  </span>
                )}
              </span>
              <span className="avatar">{job.team}</span>
              <span
                className={
                  index === 0 && tab === "Heute"
                    ? "status status-working"
                    : "status"
                }
              >
                {index === 0 && tab === "Heute" ? "In Arbeit" : "Geplant"}
              </span>
              <ChevronRight size={15} />
            </button>
          ))}
        </div>
        <div className="board-summary">
          <span>
            <CircleCheck size={15} /> Team eingeplant
          </span>
          <span>
            <FileText size={15} /> Infos beim Auftrag
          </span>
        </div>
        <div className="mockup-caption">
          Designbeispiel mit erfundenen Daten
        </div>
      </div>
    </div>
  );
}

export function PhoneCard() {
  const [done, setDone] = useState(false);
  return (
    <div className="phone-card">
      <div className="phone-top">
        <span>9:41</span>
        <span className="phone-camera" />
        <span>•••</span>
      </div>
      <div className="phone-content">
        <div className="phone-app">
          <Image src="/logo-icon-light.svg" width={23} height={27} alt="" />
          <span>Mein Auftrag</span>
        </div>
        <span className="small-label">Heute, 08:00 Uhr</span>
        <h3>Heizung warten</h3>
        <p>
          <MapPin size={13} /> Musterstraße 12
        </p>
        <div className="phone-task">
          <Wrench size={20} />
          <span>
            Wartung vor Ort<small>Alle Infos beim Auftrag</small>
          </span>
        </div>
        <h4>Das steht an</h4>
        <div className="phone-check">
          <CircleCheck size={16} /> Anlage prüfen
        </div>
        <div className="phone-check">
          <CircleCheck size={16} /> Werte festhalten
        </div>
        <button
          className={`phone-check interactive-check ${done ? "is-done" : ""}`}
          aria-pressed={done}
          onClick={() => setDone(!done)}
        >
          {done ? <CircleCheck size={16} /> : <span className="empty-check" />}{" "}
          Foto hinzufügen {done && <Check size={13} />}
        </button>
        <div className="phone-clock">
          <Clock3 size={19} />
          <span>
            Arbeitszeit<small>Beim Auftrag erfasst</small>
          </span>
          <Pause size={15} />
        </div>
        <span className="mockup-caption">Mobile Designstudie</span>
      </div>
    </div>
  );
}

export function Adoption({
  title = "Der Start gelingt gemeinsam.",
}: {
  title?: string;
}) {
  return (
    <section id="start" className="adoption section-space">
      <div className="section-heading">
        <div>
          <span className="small-label">
            Software. Und Menschen, die mithelfen.
          </span>
          <h2>{title}</h2>
        </div>
        <p>
          Ein neues Programm allein ändert noch keinen Alltag. Deshalb planen
          wir den Start mit Ihrem Team.
        </p>
      </div>
      <div className="adoption-grid">
        {[
          {
            title: "Daten mitnehmen",
            text: "Wir klären vorab, welche Daten Sie brauchen. Die vereinbarten Daten sollen wir gemeinsam in WerkFlow bringen.",
            icon: FileText,
          },
          {
            title: "Im Alltag lernen",
            text: "Büro, Monteure und Leitung üben die Schritte, die sie wirklich brauchen. Geplant sind Termine bei Ihnen vor Ort.",
            icon: Users,
          },
          {
            title: "Gemeinsam dranbleiben",
            text: "Wir wollen mit Ihnen prüfen, was schon klappt. Und dort helfen, wo Ihr Team noch nicht weiterkommt.",
            icon: MessageCircle,
          },
        ].map(({ title, text, icon: Icon }, index) => (
          <article key={title}>
            <span className="step-number">0{index + 1}</span>
            <Icon size={25} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className="section-note">
        Geplante Begleitung zum Marktstart. Umfang, Termine und Region werden
        vorab vereinbart.
      </p>
    </section>
  );
}

export function Questions() {
  return (
    <section id="fragen" className="questions section-space">
      <div>
        <span className="small-label">Gut zu wissen</span>
        <h2>
          Fragen vor
          <br />
          dem ersten Schritt.
        </h2>
      </div>
      <div className="question-list">
        {[
          [
            "Für wen ist WerkFlow gedacht?",
            "Für mittlere und größere Betriebe im Bereich Sanitär, Heizung und Klima. Für das Büro, die Leitung und das Team vor Ort.",
          ],
          [
            "Können wir unsere Daten mitnehmen?",
            "Wir planen Hilfe bei der Übernahme Ihrer Daten. Vor einem Kauf klären wir die Quellen und den Umfang gemeinsam. Das gilt auch für alte Unterlagen.",
          ],
          [
            "Wie lernt unser Team die neue Software?",
            "Geplant sind Übungen vor Ort für die einzelnen Rollen. So lernt jeder die Schritte für seine eigene Arbeit. Dazu sollen Hilfe-Texte und kurze Videos kommen.",
          ],
          [
            "Wann können wir starten?",
            "WerkFlow wird derzeit entwickelt und mit einem Beta-Betrieb erprobt. Für den öffentlichen Start gibt es noch kein festes Datum. Diese Seite zeigt einen Entwurf.",
          ],
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <Plus size={18} />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Closing({
  title = "Mehr Überblick beginnt mit einem Gespräch.",
}: {
  title?: string;
}) {
  return (
    <section className="closing">
      <div>
        <span className="small-label">Ihr Betrieb gibt die Richtung vor.</span>
        <h2>{title}</h2>
        <p>Wir wollen verstehen, wo in Ihrem Alltag Zeit verloren geht.</p>
      </div>
      <ContactButton />
    </section>
  );
}

export function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <footer className={dark ? "site-footer footer-dark" : "site-footer"}>
      <div>
        <Logo dark={dark} />
        <span>Für das Handwerk. Für Ihren Alltag.</span>
      </div>
      <p>
        © 2026 WerkFlow <span>Entwurf · Noch kein öffentliches Angebot</span>
      </p>
    </footer>
  );
}

export function TradeLine() {
  return (
    <div className="trade-line">
      <span>Für Betriebe, in denen viele Hände zusammenarbeiten.</span>
      <div>
        <span>
          <Wrench size={17} /> Sanitär
        </span>
        <span>
          <Building2 size={17} /> Heizung
        </span>
        <span>
          <LayoutGrid size={17} /> Klima
        </span>
      </div>
    </div>
  );
}
