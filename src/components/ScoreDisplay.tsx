import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import "./ScoreDisplay.css";

type Props = {
  label: string;
  value: number;
  from?: number;
  duration?: number;
  size?: "xl" | "lg";
  muted?: boolean;
};

/** DESIGN.md §6.4: label, big gradient number with glow, unit on the baseline. */
export function ScoreDisplay({ label, value, from = 0, duration = 1500, size = "xl", muted }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const shown = useCountUp(value, inView, { from, duration });

  return (
    <div ref={ref} className={`score score--${size} ${muted ? "score--muted" : ""} ${inView ? "is-live" : ""}`}>
      <span className="score__label num">{label}</span>
      <span className="score__row">
        <span className="score__value num gradient-text" aria-hidden="true">
          {Math.round(shown)}
        </span>
        <span className="score__unit num">ng/dL</span>
        <span className="visually-hidden">
          {value} ng/dL
        </span>
      </span>
    </div>
  );
}
