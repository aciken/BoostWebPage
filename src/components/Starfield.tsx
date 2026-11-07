import { useEffect, useRef } from "react";
import "./Starfield.css";

// Small seeded PRNG so the sky looks the same on every load.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** DESIGN.md §7: 0.6–2.6px white dots, 20–90% opacity, dense but subtle. */
export function Starfield({ density = 1 / 2600, seed = 7, className = "" }: { density?: number; seed?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const rand = mulberry32(seed);
      const count = Math.round(width * height * density);
      for (let i = 0; i < count; i++) {
        const x = rand() * width;
        const y = rand() * height;
        // skew towards small stars
        const d = 0.6 + Math.pow(rand(), 3) * 2;
        const a = 0.2 + rand() * 0.7;
        ctx.beginPath();
        ctx.arc(x, y, d / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(2)})`;
        ctx.fill();
        if (d > 2) {
          ctx.beginPath();
          ctx.arc(x, y, d * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${(a * 0.08).toFixed(3)})`;
          ctx.fill();
        }
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [density, seed]);

  return <canvas ref={ref} className={`starfield ${className}`} aria-hidden="true" />;
}
