import { Bell, Check, SlidersHorizontal, TrendingUp, Sun } from "lucide-react";
import { Chip } from "../components/Chip";
import { GlassCard } from "../components/GlassCard";
import { PhoneFrame } from "../components/PhoneFrame";
import { Reveal } from "../components/Reveal";
import "./Split.css";
import "./DailyPlan.css";

const POINTS = [
  { icon: SlidersHorizontal, title: "Built around your day", text: "Tasks fit your wake time, your meals and your gym days. Change anything in My Plan." },
  { icon: Bell, title: "Reminders at the right time", text: "A nudge when it’s time to get sunlight, eat, train or wind down." },
  { icon: TrendingUp, title: "Logging moves your score", text: "Every task you log lifts your score. Missed days cost points." },
];

export function DailyPlan() {
  return (
    <section className="section" aria-labelledby="plan-title">
      <div className="container split">
        <div className="split__copy">
          <Reveal className="section-head section-head--left">
            <span className="eyebrow">Daily plan</span>
            <h2 id="plan-title" className="section-title">
              A plan for your <span className="hl">whole day</span>.
            </h2>
            <p className="body">Every part of it is built around your day. Open the app, see what’s next, tap it done.</p>
          </Reveal>

          <ul className="points">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p.title} index={i + 1} className="point">
                <span className="point__icon">
                  <p.icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="point__title">{p.title}</h3>
                  <p className="point__text">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal index={1} className="split__visual plan-visual">
          <PhoneFrame className="plan-visual__back" src="/screens/tasks.png" alt="Boost task list for today" placeholder="Today’s tasks" />
          <PhoneFrame className="plan-visual__front" src="/screens/home.png" alt="Boost home screen with the rocket and score" placeholder="Home: rocket and score" />

          <GlassCard className="task-float" glow="soft" aria-hidden="true">
            <span className="task-float__icon">
              <Sun size={18} strokeWidth={1.75} />
            </span>
            <span className="task-float__text">
              <strong>Morning sunlight</strong>
              <span>10 min outside</span>
            </span>
            <span className="task-float__check">
              <Check size={14} strokeWidth={2.5} />
            </span>
          </GlassCard>
          <Chip className="chip-float chip-float--a">Anytime</Chip>
          <Chip className="chip-float chip-float--b">+4 ng/dL</Chip>
        </Reveal>
      </div>
    </section>
  );
}
