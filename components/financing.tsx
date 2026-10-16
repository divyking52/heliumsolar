"use client";

import Image from "next/image";
import { useRef } from "react";
import { FINANCING } from "@/lib/content";
import { TextReveal } from "@/components/ui/text-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import { ImageReveal } from "@/components/ui/image-reveal";
import {
  gsap,
  registerGsap,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/motion";

registerGsap();

export function Financing() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!root.current || prefersReducedMotion()) return;
      gsap.from("[data-loan-step]", {
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current.querySelector("[data-loan-steps]"),
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-white py-20 md:py-28" id="financing">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-mid">
            {FINANCING.eyebrow}
          </p>
          <TextReveal
            text={FINANCING.title}
            as="h2"
            className="font-display text-[clamp(1.85rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-brand"
          />
          <p className="mt-6 text-[15px] leading-relaxed text-muted">
            {FINANCING.body}
          </p>
          <div className="mt-8">
            <CtaButton href={FINANCING.cta.href}>{FINANCING.cta.label}</CtaButton>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ImageReveal
            src={FINANCING.image}
            alt={FINANCING.title}
            className="aspect-[16/10] w-full"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>

      <div
        data-loan-steps
        className="container-wide mt-16 grid gap-6 md:grid-cols-3"
      >
        {FINANCING.steps.map((step) => (
          <article
            key={step.title}
            data-loan-step
            className="group flex flex-col border border-line bg-paper p-1"
          >
            <div className="img-zoom relative aspect-[16/10] overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold text-brand">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
              <a
                href={step.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-mid"
              >
                {step.cta.label}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
