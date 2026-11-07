import { Check } from "lucide-react";
import { AppleLogo } from "../components/AppleLogo";
import { GlassCard } from "../components/GlassCard";
import { GlowButton } from "../components/GlowButton";
import { Reveal } from "../components/Reveal";
import { Rocket } from "../components/Rocket";
import { APP_STORE_URL, PRICING } from "../content";
import rocket5 from "../assets/rocket5.webp";
import "./Pricing.css";

export function Pricing() {
  return (
    <section className="section pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <Reveal className="pricing__wrap">
          <Rocket className="pricing__rocket" src={rocket5} alt="" width="110px" power={0.9} />
          <GlassCard size="lg" warm className="pricing__card">
            <span className="eyebrow">Free trial</span>
            <h2 id="pricing-title" className="section-title">
              We want you to try <span className="hl">Boost</span> for free.
            </h2>
            <ul className="pricing__list">
              {PRICING.bullets.map((b) => (
                <li key={b}>
                  <span className="pricing__check" aria-hidden="true">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <GlowButton href={APP_STORE_URL}>
              <AppleLogo size={18} />
              Start your free trial
            </GlowButton>
            <p className="caption">{PRICING.note}</p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
