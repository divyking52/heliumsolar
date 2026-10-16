"use client";

import Image from "next/image";
import { useRef } from "react";
import { HERO } from "@/lib/content";
import { CtaButton } from "@/components/ui/cta-button";
import {
  gsap,
  registerGsap,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/motion";

registerGsap();

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const slide = HERO.slides[0];

  useGSAP(
    () => {
      if (!root.current) return;
      const reduced = prefersReducedMotion();
      const words = root.current.querySelectorAll("[data-hero-word]");
      const img = root.current.querySelector("[data-hero-img]");
      const rest = root.current.querySelectorAll("[data-hero-fade]");

      if (reduced) {
        gsap.set([words, rest, img], { clearProps: "all", opacity: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        img,
        { scale: 1.12, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 1.6 },
        0,
      )
        .fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.045 },
          0.2,
        )
        .fromTo(
          rest,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
          0.55,
        );

      gsap.to(img, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  const words = slide.title.split(" ");

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-brand-deep text-white"
      aria-label="Hero"
    >
      <div className="absolute inset-0" aria-hidden>
        <div data-hero-img className="absolute inset-0 will-change-transform">
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/55 to-brand-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/70 via-transparent to-transparent" />
      </div>

      <div className="container-wide relative z-10 w-full pb-16 pt-40 md:pb-24 md:pt-48">
        <h1 className="font-display max-w-4xl text-[clamp(2.4rem,6vw,5.2rem)] font-semibold leading-[1.05] tracking-tight">
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
              <span data-hero-word className="inline-block will-change-transform">
                {word}
                {i < words.length - 1 ? "\u00A0" : null}
              </span>
            </span>
          ))}
        </h1>

        <p
          data-hero-fade
          className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          {slide.body}
        </p>

        <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
          <CtaButton href={HERO.ctaPrimary.href} variant="light">
            {HERO.ctaPrimary.label}
          </CtaButton>
          <a
            href={HERO.ctaVideo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-b border-white/40 pb-1 text-sm text-white/90 transition-colors hover:border-accent hover:text-accent"
          >
            {HERO.ctaVideo.label}
          </a>
        </div>
      </div>

      <div
        data-hero-fade
        className="motion-safe-only absolute bottom-8 right-6 hidden flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/60 md:flex"
        aria-hidden
      >
        <span>Scroll</span>
        <span className="scroll-indicator-dot block h-8 w-px bg-white/50" />
      </div>
    </section>
  );
}
