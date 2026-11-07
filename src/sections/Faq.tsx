import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { FAQ } from "../content";
import "./Faq.css";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container faq">
        <Reveal className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-title" className="section-title">
            Honest <span className="hl">answers</span>.
          </h2>
        </Reveal>

        <Reveal index={1} as="ul" className="faq__list">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            const btnId = `${base}-q${i}`;
            const panelId = `${base}-a${i}`;
            return (
              <li key={item.q} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    id={btnId}
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown className="faq__chev" size={20} strokeWidth={2} aria-hidden="true" />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} className="faq__a" inert={!isOpen}>
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
