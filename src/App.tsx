import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { YourScore } from "./sections/YourScore";
import { Pillars } from "./sections/Pillars";
import { DailyPlan } from "./sections/DailyPlan";
import { Training } from "./sections/Training";
import { Pricing } from "./sections/Pricing";
import { Faq } from "./sections/Faq";
import { ClosingCta } from "./sections/ClosingCta";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <YourScore />
        <Pillars />
        <DailyPlan />
        <Training />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
