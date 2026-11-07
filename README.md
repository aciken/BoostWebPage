# BoostWebPage

Landing page for the Boost iOS app. Vite + React + TypeScript + plain CSS, built to `DESIGN.md`.

```sh
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the build
```

## Where things live
- `src/styles/tokens.css`: every color, gradient, font, spacing and radius token from DESIGN.md
- `src/content.ts`: all copy, numbers (score, ranks, streak), FAQ, App Store URL
- `src/components/`: GlowButton, GlassCard, Chip, ScoreDisplay, ProgressRing, StatRow, Rocket (with flame), Starfield, PhoneFrame
- `src/sections/`: one file per page section, in page order in `src/App.tsx`
- `src/assets/`: rocket, planet and painting art from the app, converted to WebP

## Still to provide
- [ ] App Store URL: `APP_STORE_URL` in `src/content.ts`, and the `apple-itunes-app` meta in `index.html`
- [ ] App icon (1024px PNG): replaces `public/rocket-mark.png` (favicon + header mark)
- [ ] Screenshots: `public/screens/home.png`, `tasks.png`, `workout.png` (a placeholder shows until they exist)
- [ ] Trial length / price wording: `PRICING` in `src/content.ts`
- [ ] Footer links (Privacy, Terms, Support) in `src/sections/Footer.tsx`
- [ ] OG share image in `index.html`
