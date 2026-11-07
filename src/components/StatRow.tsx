import { Fragment } from "react";
import "./StatRow.css";

/** DESIGN.md §6.6: value over label, split by hairline dividers. */
export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <dl className="stats">
      {stats.map((s, i) => (
        <Fragment key={s.label}>
          {i > 0 && <div className="stats__div" aria-hidden="true" />}
          <div className="stats__item">
            <dt className="stats__label num">{s.label}</dt>
            <dd className="stats__value num">{s.value}</dd>
          </div>
        </Fragment>
      ))}
    </dl>
  );
}
