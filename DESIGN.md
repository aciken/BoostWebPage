# Boost — Website Design Brief

This document tells you how the Boost website should look, feel and read. Boost is an iOS app; the website must feel like the same product. Follow the tokens and rules here exactly. Where something isn't covered, choose what fits the principles below, never a generic template look.

---

## 1. The product in one paragraph

Boost helps men raise their testosterone naturally. New users answer a few questions and get an **estimated testosterone level in ng/dL** (for example 432 ng/dL) and a **potential** (where their plan can take them, for example 950 ng/dL). The app then gives them a **daily plan** across four categories (**Sleep, Nutrition, Training, Habits**) and a gym **workout program** that progresses every week. Logging tasks moves the score up; missing days costs points. As the score climbs, the user's **rocket** ranks up through five rockets, unlocked at **500, 600, 750 and 900 ng/dL**, from plain steel to solid gold. Streaks reward showing up every day.

The core metaphor: **your body is a rocket, your habits are fuel, your score is altitude.**

---

## 2. Design principles

1. **Night sky, warm fire.** Near-black backgrounds lit by amber and orange light, like a rocket engine at night. Light comes from below, the way a flame lights the hull above it.
2. **Premium, calm, confident.** Think high-end watch or car launch page, not a supplement ad. Lots of dark space, few elements, each one crafted.
3. **Glow, not color.** Color is used as *light* (soft amber glows, rim highlights, warm gradients), never as flat fills. No large blocks of saturated color.
4. **Numbers are the hero.** Scores (432 ng/dL), ranks (750 ng/dL) and percentages are shown big, in rounded digits with the amber gradient. They are the emotional center of the brand.
5. **Earned, not hyped.** The tone is honest and grounded. No miracle claims, no shouting, no fake urgency.

---

## 3. Color

Dark mode only. There is no light theme.

```css
:root {
  /* Surfaces */
  --bg:              #090808;   /* page background, warm near-black */
  --card:            #141211;   /* card / panel fill */
  --card-top:        #262626;   /* top of card gradients */
  --card-bottom:     #121212;   /* bottom of card gradients */
  --hairline:        rgba(255,255,255,0.09);  /* dividers, subtle borders */

  /* Text */
  --text:            #FFFFFF;
  --text-secondary:  rgba(255,255,255,0.62);
  --text-tertiary:   rgba(255,255,255,0.40);
  --text-warm:       #FFF0D6;   /* warm white for values inside rings/stats */

  /* Brand */
  --accent:          #FFC25C;   /* amber: labels, highlights, icons, units */
  --accent-deep:     #FF7A29;   /* deep orange: gradient start, glow falloff */
  --streak:          #FABD45;

  /* Flame (outer to core) for glows, fire, particles */
  --flame-outer:     #FF571A;
  --flame-middle:    #FF941F;
  --flame-inner:     #FFD142;
  --flame-core:      #FFF7CC;

  /* States */
  --failure:         #F25247;   /* missed goals, drops, errors only */
  --missed-accent:   #FF7366;
  --missed-deep:     #DB332E;

  /* Gradients */
  --score-gradient:  linear-gradient(90deg, #FF7A29, #FFC25C);   /* numbers, progress */
  --wordmark-gradient: linear-gradient(180deg, #FFFFFF, #FFC25C); /* BOOST logo text */
  --streak-gradient: linear-gradient(180deg, #FFDB73, #F28026);
}
```

**Usage rules**
- Background is always `--bg`. Never pure black `#000`, never white or grey page backgrounds.
- Amber (`--accent`) is for small things: section labels, units ("ng/dL"), icons, highlighted words in headlines, chip text. Keep it to roughly 5–10% of any screen.
- The orange-to-amber `--score-gradient` is reserved for things that measure progress: score numbers, progress rings, bars.
- Red (`--failure`) only ever means a miss or a drop. Never use it decoratively.
- **Never use** blue, purple, teal, neon green or any cool accent. The only "cool" tones allowed are the faint grey-white of stars and smoke.

---

## 4. Typography

The app uses Apple's system fonts: **SF Pro** for text and **SF Pro Rounded** for numbers and labels. On the web:

```css
--font-text:    -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", system-ui, sans-serif;
--font-rounded: ui-rounded, "SF Pro Rounded", "Nunito", -apple-system, system-ui, sans-serif;
```

Use `font-variant-numeric: tabular-nums;` on all changing numbers.

| Role | Font | Size (desktop / mobile) | Weight | Tracking | Color |
|---|---|---|---|---|---|
| Wordmark "BOOST" | text | 96 / 64 px | 800 (heavy) | +2px | `--wordmark-gradient` (clipped to text) + amber glow |
| Wordmark sub "TESTOSTERONE" | text | 15 / 14 px | 500 | 0.45em | `--accent` |
| Hero headline | text | 64 / 40 px | 700 | -0.02em | white; one key phrase in `--accent` |
| Section title | text | 44 / 30 px | 700 | -0.02em | white |
| Section label (eyebrow) | text | 12 px | 600 | 0.2em, UPPERCASE | `--accent` |
| Body | text | 18 / 16 px | 400–500 | 0 | `--text-secondary` |
| Small / caption | text | 13–14 px | 500 | 0 | `--text-tertiary` |
| Big score number | rounded | 120 / 72 px | 500 | 0 | `--score-gradient` (clipped to text) |
| Score unit "ng/dL" | rounded | 28 / 20 px | 600 | 0 | `--accent` |
| Small number label (e.g. "Score") | rounded | 17 px | 600 | 0 | `--accent` |
| Stat value | rounded | 22 px | 600 | 0 | `--text-warm` |
| Button | text | 17 px | 500 | 0 | white 94% |

**Examples of the type system in the app:**
- Over the score: `Score` (rounded 17, amber), then `432` (rounded, big, gradient), then `ng/dL` (rounded, amber) sitting on the number's baseline.
- Eyebrow + title: `WORKOUT COMPLETE` (12px caps, tracked, amber) above `Upper Body` (bold white).
- Headlines highlight one phrase in amber: "We want you to try **Boost** for free."

---

## 5. Layout and spacing

- Max content width **1120px**, centered. Side gutters **24px** on mobile, **48px** on tablet and up.
- Generous vertical rhythm: **140–180px** between sections on desktop, **96px** on mobile.
- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 140.
- Mostly centered, symmetrical compositions with one strong focal point per section (a rocket, a number or a phone).
- Corner radii (always smooth, never sharp):
  - Buttons and pills: full capsule.
  - Chips: 7px.
  - Small cards / rows: 20–22px.
  - Large cards / panels: 30–34px.
  - Phone mockups: match the iPhone's corner radius.
- Mobile-first. Everything must work at 375px wide with no horizontal scroll.

---

## 6. Components

All components share one material: **dark glass lit from below**, with a **rim light** that is bright at the top and warm at the bottom.

### 6.1 Glow button (primary CTA)

The signature button. Never use a flat amber button.

- Shape: capsule, height 56px (desktop) / 50px (mobile), min width 220px.
- Fill: `linear-gradient(180deg, #2B2B2B, #171717)`.
- Warm light pooling up from the bottom edge: an overlay `radial-gradient(ellipse 75% 75% at 45% 115%, rgba(255,194,92,0.55), rgba(255,122,41,0.19) 45%, transparent 75%)`.
- Rim: 1px border with a vertical gradient: `rgba(255,255,255,0.26)` at the top, `rgba(255,255,255,0.06)` in the middle, `rgba(255,194,92,0.45)` at the bottom. Build it with a pseudo-element and a mask, or a padded gradient wrapper.
- Label: 17px medium, white at 94%.
- Hover: brightness +6%, the bottom glow gets slightly stronger. Press: scale 0.97 with a quick spring.
- Secondary variant: same, with glow opacity 0.2 and the rim's warm end at 0.2.

### 6.2 Card / panel

- Fill: `linear-gradient(180deg, #262626, #121212)`, or the warmer `linear-gradient(180deg, #1F1C1A, #141211)`.
- Warm pool from the bottom: `radial-gradient(ellipse at 50% 112%, rgba(255,194,92,0.32), rgba(255,122,41,0.10) 40%, transparent 70%)`.
- Rim: 1px gradient border, `rgba(255,255,255,0.24)` → `rgba(255,255,255,0.06)` → `rgba(255,194,92,0.45)` from top to bottom.
- Optional top sheen instead of a border: `linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015) 35%, transparent 60%)`.
- Shadow: soft and diffuse only, for example `0 1px 3px rgba(0,0,0,.35), 0 10px 36px rgba(0,0,0,.45)`. Never a hard drop shadow.

### 6.3 Chip / pill tag

- Text: 13px semibold, `--accent`.
- Fill: `rgba(255,194,92,0.14)` on a solid dark base (so nothing shows through). Border: 1px `rgba(255,194,92,0.22)`. Radius 7px. Padding 3px 8px.
- Red variant for drops: the same recipe with `--missed-accent`.
- Example uses: "3 sets", "+2.5 kg", "Anytime".

### 6.4 Score display

- `Score` label (rounded 17, amber), then a big rounded number in `--score-gradient` with an amber glow (`text-shadow: 0 0 36px rgba(255,194,92,0.35)`), then `ng/dL` in amber on the number's baseline.
- When it animates, count up smoothly in one ease-out curve over about 1.5s. Plain changing digits, no slot-machine or odometer effect.

### 6.5 Progress ring

- Track: 8px stroke, `rgba(255,255,255,0.12)`.
- Arc: 8px with round caps, `--score-gradient`, starting at 12 o'clock and going clockwise.
- A soft blurred copy of the arc underneath, at about 45% opacity, as a glow.
- Value inside in rounded digits.

### 6.6 Stat row

- Three stats in a box (radius 20, fill `rgba(255,255,255,0.04)`, 1px `--hairline` border), split by 1px × 32px hairline dividers.
- Each stat: value (rounded 19–22, `--text-warm`) over a label (rounded 13 semibold, `--accent`). Example: `15/20 Sets · 6,240 kg Volume · 52 min Time`.

### 6.7 Rank ladder

The five rockets stacked vertically, lowest rank at the bottom. Each has a dotted line out to its tag: `✓ 500 ng/dL` for ranks reached and `🔒 750 ng/dL` for locked ones (a small dark circular lock badge over a slightly blurred rocket at 75% opacity). The current rocket is larger, with its engine lit.

---

## 7. Imagery and illustration

**Use the app's own artwork.** It lives in `App/Boost/Assets.xcassets/`. Export the PNGs (transparent backgrounds):

| Asset | What it is | Use on the site |
|---|---|---|
| `Rocket.imageset` | Rank 1: brushed-steel retro rocket, black nose, brass porthole | Hero, rank ladder |
| `Rocket2.imageset` | Rank 2: polished chrome, black and gold trim | Rank ladder |
| `Rocket3.imageset` | Rank 3: chrome with two side boosters | Rank ladder |
| `Rocket4.imageset` | Rank 4: gloss black and gold, swept gold fins, four engines | Rank ladder, "go further" moments |
| `Rocket5.imageset` | Rank 5: solid gold, glowing porthole, gold halo ring | Final rank, pricing / CTA |
| `Planet.imageset` | Large dusky-red planet | Horizon under the hero rocket |
| `Background2.imageset` | Painted rocket launching over a mountain at dusk | Hero or closing CTA background, darkened on the left and bottom for text |
| `AppIcon.appiconset` | App icon | Header, App Store badges, favicon |

**The hero scene** (the app's Home screen, recreated): a starfield over `--bg`; the top arc of the planet near the bottom of the frame with a thin amber rim light; a rocket hovering above it, bobbing gently, with a soft animated flame (layered teardrops from `--flame-outer` to `--flame-core`, additive blending, blurred); and a warm pool of light on the horizon under the flame.

**Starfield:** small white dots (0.6–2.6px), randomly placed, 20–90% opacity, dense but subtle. Static, or very slow drift.

**Phone mockups:** show real app screens (the Home rocket with its score, a task card, the workout summary card, the rank ladder) in a dark iPhone frame, lit from below with an amber glow.

**Never use:** stock photos (especially shirtless men or gym selfies), cartoon or clip-art rockets, emoji as icons, 3D blobs, gradients in other hues, or AI-looking "futuristic" HUD graphics.

**Icons:** thin-to-medium line icons in the style of SF Symbols (Lucide or Phosphor Regular are fine), in `--accent` or white at 60%. Category icons: moon (Sleep), fork and knife (Nutrition), dumbbell (Training), sun (Habits).

---

## 8. Motion

Motion is soft, physical and slow to settle, like something floating in space.

- **Reveal on scroll:** opacity 0→1, translateY 14px→0, blur 6px→0, scale 0.94→1, over 0.55–0.6s with a smooth ease-out, staggered about 80ms between siblings.
- **Springs, not linear:** interactive things use springs (response about 0.45s, damping about 0.85).
- **Rocket hover:** translateY ±3px on a 3.2s sine loop. The flame flickers subtly (scale and opacity jitter at 2–6Hz, ±4%).
- **Glow pulse:** important numbers can flare once (amber text-shadow 0 → 0.8 → 0.25 over 1.4s) when they appear.
- **Count-ups:** numbers count up together with their ring or bar, from one value, in one ease-out curve (1.3–2s).
- **Signature moment (optional, high impact):** the level-up. The rocket powers up (flame grows, slight rumble), lifts off slowly then accelerates away, shrinking into a soft point of light with a faint exhaust plume. The next rank's rocket then flies back in and settles, with a warm halo behind it and "New rank" above it. Good for the rank section or the final CTA.
- Respect `prefers-reduced-motion`: replace movement with simple fades.

---

## 9. Voice and copy

**Tone:** confident, warm, direct, a little cinematic. Short sentences. Second person ("you", "your"). Plain words. Like a good coach who respects you.

**From the app (match this voice):**
- "Let's build your custom plan"
- "Your plan is ready"
- "You could reach 950 ng/dL. That's 120% higher than today."
- "Every part of it is built around your day. Change anything in My Plan."
- "Sleep better, rise refreshed." · "Meals that fuel your hormones." · "Steady training, every week." · "Small habits that add up."
- "We want you to try Boost for free."

**Rules**
- Always say the score is an **estimate** ("estimated testosterone", "from your answers"). Never claim Boost measures, diagnoses or treats anything.
- No medical promises ("cure low T", "guaranteed results"), no before/after claims, no fake scarcity or countdown timers.
- Use "ng/dL" exactly like that.
- Headlines: 2–6 words, with one highlighted phrase in amber.
- Include a footer disclaimer: *Boost provides general wellness guidance and estimates, not medical advice. Talk to a doctor about your health.*

---

## 10. Suggested page structure (landing page)

1. **Header:** app icon + "Boost" on the left; a few links (How it works, Ranks, Pricing, FAQ); a small secondary glow button "Get the app". Transparent over the hero, then the background with a hairline bottom border once scrolled.
2. **Hero:** the night-sky scene with the planet and hovering rocket. The `BOOST` / `TESTOSTERONE` wordmark, a one-line promise (for example "Raise your testosterone. Naturally."), the primary glow button (App Store), and a small line "Free trial · No payment due now".
3. **Your score:** big animated `432 ng/dL` counting up next to a "potential" `950 ng/dL`. Copy: answer a few questions, see your estimated level and where your plan can take you.
4. **Four pillars:** Sleep, Nutrition, Training, Habits as four glass cards, each with an icon, the app's one-liner, and a small progress ring.
5. **Your daily plan:** a phone mockup of Home with its task cards. Copy about a plan built around your day, with reminders, and logging that moves your score.
6. **Training that progresses:** the workout summary card (score ring, stats, a "Next time" list with "+2.5 kg" chips). Copy about gym workouts that get heavier as you get stronger.
7. **Rank up:** the five-rocket ladder from steel to gold with the unlock scores. Optionally the level-up animation as the signature moment.
8. **Streaks:** show up every day, keep the fire going (flame and streak count in `--streak-gradient`).
9. **Pricing / free trial:** one glass card with the trial offer and the glow button.
10. **FAQ:** an accordion with hairline dividers, amber chevrons, and honest answers (what the score is, that it's an estimate, the equipment needed, cancelling).
11. **Closing CTA:** the `Background2` painting (rocket over the mountain), darkened, with "Your plan is ready" and the glow button.
12. **Footer:** small links, the disclaimer, ©, in `--text-tertiary` on `--bg`.

---

## 11. Do / don't checklist

**Do**
- Keep it dark, warm and quiet, with light coming from below.
- Make numbers big, rounded and gradient-lit.
- Use the real rocket and planet art from the app.
- Give every card and button the rim light and the bottom glow.
- Animate softly and physically, and respect reduced motion.

**Don't**
- Use light backgrounds, cool colors, or flat saturated color blocks.
- Use generic SaaS layouts (rows of identical icon-and-text feature boxes on white).
- Use hard shadows, sharp corners, or thick borders.
- Use stock photos, emoji or cartoon art.
- Make health claims or use hype copy.
