// All copy and product numbers live here so they can be edited in one place.

/** TODO: replace with the real App Store link once the app is live. */
export const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXX";

/** The questions flow that produces the user's estimated score (page to be built). */
export const QUIZ_URL = "/questions";

export const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const SCORE = { estimate: 432, potential: 950 };
export const SCORE_GAIN_PCT = Math.round((SCORE.potential / SCORE.estimate - 1) * 100);

export const PILLARS = [
  { key: "sleep", title: "Sleep", line: "Sleep better, rise refreshed.", progress: 72 },
  { key: "nutrition", title: "Nutrition", line: "Meals that fuel your hormones.", progress: 64 },
  { key: "training", title: "Training", line: "Steady training, every week.", progress: 58 },
  { key: "habits", title: "Habits", line: "Small habits that add up.", progress: 80 },
] as const;

export const RANKS = [
  { level: 1, unlock: 0, name: "Steel", alt: "Rank 1 rocket: brushed steel with a black nose and brass porthole" },
  { level: 2, unlock: 500, name: "Chrome", alt: "Rank 2 rocket: polished chrome with black and gold trim" },
  { level: 3, unlock: 600, name: "Twin Booster", alt: "Rank 3 rocket: chrome with two side boosters" },
  { level: 4, unlock: 750, name: "Black Gold", alt: "Rank 4 rocket: gloss black and gold with four engines" },
  { level: 5, unlock: 900, name: "Solid Gold", alt: "Rank 5 rocket: solid gold with a glowing porthole" },
] as const;

/** TODO: confirm trial length and price wording. */
export const PRICING = {
  bullets: [
    "Your estimated score and potential",
    "A daily plan across sleep, nutrition, training and habits",
    "A gym program that progresses every week",
  ],
  note: "Free trial · No payment due now · Cancel anytime in the App Store",
};

export const FAQ = [
  {
    q: "What is the score?",
    a: "It's an estimate of your testosterone level in ng/dL, worked out from your answers about sleep, diet, training, body and lifestyle. It gives you a starting point and a way to see your habits add up. It's not a lab result.",
  },
  {
    q: "Is Boost a medical app?",
    a: "No. Boost gives general wellness guidance and estimates. It doesn't measure, diagnose or treat anything. If you're worried about your hormones, a blood test and a conversation with your doctor are the right next step.",
  },
  {
    q: "What equipment do I need?",
    a: "Your phone, and access to a gym for the workout program. The sleep, nutrition and habit parts of the plan need nothing extra.",
  },
  {
    q: "How do ranks work?",
    a: "Your rocket ranks up as your score climbs. New rockets unlock at 500, 600, 750 and 900 ng/dL. Log your tasks to move up; missed days cost points.",
  },
  {
    q: "How do I cancel the free trial?",
    a: "In your iPhone's Settings, tap your name, then Subscriptions, then Boost. Cancel before the trial ends and you won't be charged.",
  },
];

export const DISCLAIMER =
  "Boost provides general wellness guidance and estimates, not medical advice. Talk to a doctor about your health.";
