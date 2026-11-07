import { useId } from "react";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import "./ProgressRing.css";

type Props = {
  value: number; // 0–100
  size?: number;
  stroke?: number;
  label?: string;
  showValue?: boolean;
  valueSuffix?: string;
};

/** DESIGN.md §6.5: track, gradient arc from 12 o'clock with a blurred glow copy. */
export function ProgressRing({ value, size = 64, stroke = 8, label, showValue = true, valueSuffix = "%" }: Props) {
  const id = useId().replace(/:/g, "");
  const [ref, inView] = useInView<HTMLDivElement>();
  const shown = useCountUp(value, inView, { duration: 1600 });
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - shown / 100);

  return (
    <div
      ref={ref}
      className="ring"
      style={{ width: size, height: size }}
      role="img"
      aria-label={label ? `${label}: ${value}${valueSuffix}` : `${value}${valueSuffix}`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF7A29" />
            <stop offset="100%" stopColor="#FFC25C" />
          </linearGradient>
          <filter id={`b${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={stroke * 0.7} />
          </filter>
        </defs>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} />
          {shown > 0.5 && (
            <>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={`url(#g${id})`}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={offset}
                filter={`url(#b${id})`}
                opacity={0.45}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={`url(#g${id})`}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={offset}
              />
            </>
          )}
        </g>
      </svg>
      {showValue && (
        <span className="ring__value num" style={{ fontSize: Math.max(13, size * 0.24) }} aria-hidden="true">
          <span>
            {Math.round(shown)}
            {valueSuffix && <small>{valueSuffix}</small>}
          </span>
        </span>
      )}
    </div>
  );
}
