import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { Solutions } from "@/components/solutions";
import { WhyChoose } from "@/components/why-choose";
import { Usp } from "@/components/usp";
import { Process } from "@/components/process";
import { Financing } from "@/components/financing";
import { Testimonials } from "@/components/testimonials";
import { Projects } from "@/components/projects";
import { Insights } from "@/components/insights";
import { ContactCta } from "@/components/contact-cta";
import { SiteFooter } from "@/components/site-footer";
import { MotionRoot } from "@/components/motion-root";

export default function HomePage() {
  return (
    <MotionRoot>
      <Header />
      <main id="top">
        <Hero />
        <Partners />
        <Solutions />
        <WhyChoose />
        <Usp />
        <Process />
        <Financing />
        <Testimonials />
        <Projects />
        <Insights />
        <ContactCta />
      </main>
      <SiteFooter />
    </MotionRoot>
  );
}
