import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from `from` to `to` in one ease-out curve once `start` is true.
 * Plain changing digits (DESIGN.md §6.4), no odometer effect.
 */
export function useCountUp(to: number, start: boolean, { from = 0, duration = 1500 } = {}) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!start) {
      setValue(from);
      return;
    }
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      setValue(from + (to - from) * easeOutCubic(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, from, duration, reduced]);

  return value;
}
