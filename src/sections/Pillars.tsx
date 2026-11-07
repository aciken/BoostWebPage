import { Dumbbell, Moon, Sun, Utensils } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { ProgressRing } from "../components/ProgressRing";
import { Reveal } from "../components/Reveal";
import { PILLARS } from "../content";
import "./Pillars.css";

const ICONS = { sleep: Moon, nutrition: Utensils, training: Dumbbell, habits: Sun } as const;

export function Pillars() {
  return (
    <section className="section" aria-labelledby="pillars-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Your plan</span>
          <h2 id="pillars-title" className="section-title">
            Four kinds of <span className="hl">fuel</span>.
          </h2>
          <p className="body">Each day your plan gives you a few small tasks in every part of your life. Together they add up.</p>
        </Reveal>

        <ul className="pillars">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[p.key];
            return (
              <Reveal as="li" key={p.key} index={i}>
                <GlassCard className="pillar" glow="soft">
                  <div className="pillar__top">
                    <span className="pillar__icon">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <ProgressRing value={p.progress} size={56} stroke={6} label={`${p.title} today`} />
                  </div>
                  <h3 className="pillar__title">{p.title}</h3>
                  <p className="pillar__line">{p.line}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
