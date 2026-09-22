"use client";

import { useState } from "react";
import { CalendarDays, Wrench, CheckCheck } from "lucide-react";
import { WorkBoard, PhoneCard } from "./shared";

const views = [
  {
    name: "Büro",
    icon: CalendarDays,
    title: "Der Tag hat einen Plan.",
    text: "Wer fährt wohin? Was steht an? Das Büro ordnet Aufträge und Team zu. Die nötigen Infos bleiben zusammen.",
  },
  {
    name: "Vor Ort",
    icon: Wrench,
    title: "Die Infos sind dabei.",
    text: "Das Team sieht den Auftrag und hält fest, was es erledigt hat. Zeiten, Fotos und Notizen bekommen ihren Platz.",
  },
  {
    name: "Rückmeldung",
    icon: CheckCheck,
    title: "Das Büro kann weiterarbeiten.",
    text: "Die Arbeit ist erfasst. Das Büro prüft die Angaben und sieht, was für den Abschluss noch fehlt.",
  },
];

export function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  return (
    <div className="workflow-explorer">
      <div className="workflow-navigation">
        <div role="tablist" aria-label="Perspektive auswählen">
          {views.map(({ name, icon: Icon }, index) => (
            <button
              key={name}
              role="tab"
              id={`flow-tab-${index}`}
              aria-controls="flow-panel"
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (
                  ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
                ) {
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? 2
                        : (active + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                  setActive(next);
                  document.getElementById(`flow-tab-${next}`)?.focus();
                }
              }}
            >
              <Icon size={20} />
              <span>{name}</span>
              <span>0{index + 1}</span>
            </button>
          ))}
        </div>
        <div
          id="flow-panel"
          role="tabpanel"
          aria-labelledby={`flow-tab-${active}`}
          tabIndex={0}
        >
          <h3>{views[active].title}</h3>
          <p>{views[active].text}</p>
        </div>
      </div>
      <div className="workflow-visual">
        {active === 0 ? (
          <WorkBoard compact />
        ) : active === 1 ? (
          <PhoneCard />
        ) : (
          <div className="handover-card">
            <span className="handover-icon">
              <CheckCheck size={38} />
            </span>
            <span>Wartung Heizung</span>
            <h3>
              Bereit für den
              <br />
              Blick aus dem Büro.
            </h3>
            <div>
              <span>Zeiten erfasst</span>
              <CheckCheck size={17} />
            </div>
            <div>
              <span>Fotos zugeordnet</span>
              <CheckCheck size={17} />
            </div>
            <div>
              <span>Notizen beim Auftrag</span>
              <CheckCheck size={17} />
            </div>
            <small>Beispielansicht mit erfundenen Daten</small>
          </div>
        )}
      </div>
    </div>
  );
}
