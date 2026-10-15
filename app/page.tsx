import { About } from "@/components/about";
import { Closing } from "@/components/closing";
import { Founder } from "@/components/founder";
import { Hero } from "@/components/hero";
import { Logo } from "@/components/logo";
import { Marquee } from "@/components/marquee";
import { Pillars } from "@/components/pillars";
import { Showcase } from "@/components/showcase";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function HomePage() {
  return (
    <main id="top">
      <SmoothScroll />
      <Logo />
      <Hero />
      <About />
      <Founder />
      <Marquee />
      <Showcase />
      <Pillars />
      <Closing />
      <SiteFooter />
    </main>
  );
}
