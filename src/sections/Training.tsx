import { Chip } from "../components/Chip";
import { GlassCard } from "../components/GlassCard";
import { PhoneFrame } from "../components/PhoneFrame";
import { ProgressRing } from "../components/ProgressRing";
import { Reveal } from "../components/Reveal";
import { StatRow } from "../components/StatRow";
import "./Split.css";
import "./Training.css";

const NEXT = [
  { name: "Bench Press", sets: "3 sets", change: "+2.5 kg" },
  { name: "Overhead Press", sets: "3 sets", change: "+2.5 kg" },
  { name: "Barbell Row", sets: "4 sets", change: "+2.5 kg" },
  { name: "Lat Pulldown", sets: "3 sets", change: "Same weight" },
];

const POINTS = [
  "A gym program matched to your level and your schedule.",
  "Hit your reps and the weight goes up next time.",
  "Every workout ends with a score, so you see the work add up.",
];

export function Training() {
  return (
    <section className="section" aria-labelledby="training-title">
      <div className="container split split--reverse">
        <div className="split__copy">
          <Reveal className="section-head section-head--left">
            <span className="eyebrow">Training</span>
            <h2 id="training-title" className="section-title">
              Heavier as you get <span className="hl">stronger</span>.
            </h2>
            <p className="body">Steady training, every week. Your program progresses on its own, so you always know what to lift.</p>
          </Reveal>
          <ul className="ticks">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p} index={i + 1}>
                {p}
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal index={1} className="split__visual train-visual">
          <PhoneFrame className="train-visual__phone" src="/screens/workout.png" alt="Boost workout screen" placeholder="Workout in progress" />

          <GlassCard size="lg" className="workout" aria-label="Example workout summary">
            <div className="workout__head">
              <div>
                <span className="eyebrow">Workout complete</span>
                <h3 className="workout__title">Upper Body</h3>
              </div>
              <ProgressRing value={75} size={72} stroke={8} label="Sets completed" />
            </div>

            <StatRow
              stats={[
                { value: "15/20", label: "Sets" },
                { value: "6,240 kg", label: "Volume" },
                { value: "52 min", label: "Time" },
              ]}
            />

            <div className="workout__next">
              <span className="workout__next-label num">Next time</span>
              <ul>
                {NEXT.map((n) => (
                  <li key={n.name}>
                    <span className="workout__ex">{n.name}</span>
                    <span className="workout__chips">
                      <Chip>{n.sets}</Chip>
                      <Chip>{n.change}</Chip>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
