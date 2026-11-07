import { ArrowRight } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { GlowButton } from "../components/GlowButton";
import { Reveal } from "../components/Reveal";
import { ScoreDisplay } from "../components/ScoreDisplay";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { QUIZ_URL, SCORE } from "../content";
import "./YourScore.css";

const SCALE_MAX = 1100;

export function YourScore() {
  const [barRef, inView] = useInView<HTMLDivElement>();
  const pot = useCountUp(SCORE.potential, inView, { duration: 1900 });

  return (
    <section className="section score-sec" id="how-it-works" aria-labelledby="score-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Your score</span>
          <h2 id="score-title" className="section-title">
            See where you <span className="hl">stand</span>.
          </h2>
          <p className="body">
            Answer a few questions about your sleep, food, training and day. Boost estimates your testosterone level and
            shows where your plan can take you.
          </p>
        </Reveal>

        <Reveal index={1}>
          <GlassCard size="lg" warm className="score-card">
            <div className="score-card__pair">
              {/* Today's score stays hidden until the user answers the questions */}
              <div className="score score--xl score-locked">
                <span className="score__label num">Your score</span>
                <span className="score__row score-locked__row" aria-hidden="true">
                  <span className="score__value num gradient-text score-locked__digits">587</span>
                  <span className="score__unit num">ng/dL</span>
                </span>
                <div className="score-locked__cta">
                  <GlowButton href={QUIZ_URL}>
                    Find out your score
                    <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                  </GlowButton>
                </div>
              </div>

              <span className="score-card__arrow" aria-hidden="true">
                <ArrowRight size={22} strokeWidth={1.75} />
              </span>
              <ScoreDisplay label="Potential" value={SCORE.potential} duration={1900} size="xl" />
            </div>

            <div className="score-bar" ref={barRef} aria-hidden="true">
              <div className="score-bar__track">
                <div className="score-bar__potential" style={{ width: `${(pot / SCALE_MAX) * 100}%` }} />
                <div className="score-bar__fill score-bar__fill--hidden" />
              </div>
              <div className="score-bar__ticks num">
                <span>0</span>
                <span>500</span>
                <span>1100</span>
              </div>
            </div>

            <p className="score-card__line">
              Most men have room to grow. Answer a few questions to see <strong>your number</strong> and how far your plan
              can take you.
            </p>
          </GlassCard>
        </Reveal>

        <Reveal index={2} className="score-sec__note">
          <p className="caption">An estimate from your answers, not a lab result.</p>
        </Reveal>
      </div>
    </section>
  );
}
