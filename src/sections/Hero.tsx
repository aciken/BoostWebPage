import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "../components/GlowButton";
import { Rocket } from "../components/Rocket";
import { Starfield } from "../components/Starfield";
import { QUIZ_URL } from "../content";
import planet from "../assets/planet.webp";
import rocket1 from "../assets/rocket.webp";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Starfield density={1 / 2200} />

      <div className="hero__planet" aria-hidden="true">
        <img src={planet} alt="" width={1800} height={1800} fetchPriority="high" decoding="async" />
        <span className="hero__rim" />
      </div>
      <div className="hero__pool" aria-hidden="true" />

      <div className="container hero__content">
        <div className="wordmark hero__in" style={{ "--d": "0ms" } as CSSProperties}>
          <span className="wordmark__main">BOOST</span>
          <span className="wordmark__sub">TESTOSTERONE</span>
        </div>

        <h1 id="hero-title" className="hero-headline hero__headline hero__in" style={{ "--d": "120ms" } as CSSProperties}>
          Raise your testosterone. <span className="hl">Naturally.</span>
        </h1>

        <div className="hero__cta hero__in" style={{ "--d": "240ms" } as CSSProperties}>
          <GlowButton href={QUIZ_URL}>
            Find out your score
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </GlowButton>
          <p className="caption">A few questions · Takes about 2 minutes</p>
        </div>
      </div>

      <div className="hero__stage">
        <Rocket src={rocket1} alt="The Boost rocket, brushed steel, hovering above a planet" width="var(--rocket-w)" priority />
      </div>
    </section>
  );
}
