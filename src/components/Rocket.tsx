import type { CSSProperties } from "react";
import "./Rocket.css";

type Props = {
  src: string;
  alt: string;
  /** CSS width of the rocket, e.g. "220px" or "min(44vw, 260px)". */
  width: string;
  lit?: boolean;
  bob?: boolean;
  /** Multiplier for flame length. */
  power?: number;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
};

/** The app's rocket art with the layered, additive flame (DESIGN.md §7, §8). */
export function Rocket({ src, alt, width, lit = true, bob = true, power = 1, priority, className = "", style }: Props) {
  return (
    <div
      className={`rocket ${bob ? "rocket--bob" : ""} ${lit ? "rocket--lit" : ""} ${className}`}
      style={{ "--w": width, "--power": power, ...style } as CSSProperties}
    >
      {lit && <Flame />}
      <img
        className="rocket__img"
        src={src}
        alt={alt}
        width={640}
        height={960}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

export function Flame({ className = "" }: { className?: string }) {
  return (
    <div className={`flame ${className}`} aria-hidden="true">
      <span className="flame__glow" />
      <span className="flame__layer flame__layer--outer" />
      <span className="flame__layer flame__layer--middle" />
      <span className="flame__layer flame__layer--inner" />
      <span className="flame__layer flame__layer--core" />
    </div>
  );
}
