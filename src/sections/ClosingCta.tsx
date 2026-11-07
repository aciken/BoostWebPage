import { AppleLogo } from "../components/AppleLogo";
import { GlowButton } from "../components/GlowButton";
import { Reveal } from "../components/Reveal";
import { APP_STORE_URL } from "../content";
import bg from "../assets/background2.webp";
import "./ClosingCta.css";

export function ClosingCta() {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <img className="closing__bg" src={bg} alt="" loading="lazy" decoding="async" width={1024} height={1536} />
      <div className="closing__shade" aria-hidden="true" />
      <div className="container closing__inner">
        <Reveal className="closing__copy">
          <span className="eyebrow">Ready for liftoff</span>
          <h2 id="closing-title" className="hero-headline">
            Your plan is <span className="hl">ready</span>.
          </h2>
          <p className="body">A few questions, your estimated score, and a plan built around your day. It takes about two minutes.</p>
          <GlowButton href={APP_STORE_URL}>
            <AppleLogo size={18} />
            Download on the App Store
          </GlowButton>
          <p className="caption">Free trial · No payment due now</p>
        </Reveal>
      </div>
    </section>
  );
}
