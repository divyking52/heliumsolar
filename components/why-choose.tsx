"use client";

import Image from "next/image";
import { useRef } from "react";
import { ASSETS, WHY_CHOOSE } from "@/lib/content";
import { CtaButton } from "@/components/ui/cta-button";
import {
  gsap,
  registerGsap,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/motion";

registerGsap();

export function WhyChoose() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!root.current || prefersReducedMotion()) return;

      gsap.from("[data-why-line]", {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current.querySelector("[data-benefits]"),
          start: "top 82%",
          once: true,
        },
      });

      const img = root.current.querySelector("[data-why-img]");
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="border-t border-line bg-white"
      id="why-choose"
    >
      <div className="container-wide py-10 md:py-12">
        {/* Dense header band */}
        <div className="grid gap-4 border-b border-line pb-6 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-7">
          <div className="lg:col-span-5">
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-mid">
              {WHY_CHOOSE.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(1.4rem,2.6vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-brand">
              {WHY_CHOOSE.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-muted">
              {WHY_CHOOSE.body}
            </p>
          </div>
          <div className="lg:col-span-2 lg:justify-self-end">
            <CtaButton
              href={WHY_CHOOSE.cta.href}
              variant="secondary"
              className="!px-4 !py-2.5 text-xs"
            >
              {WHY_CHOOSE.cta.label}
            </CtaButton>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:mt-7 lg:grid-cols-12 lg:gap-8">
          {/* Image strip — not a tall empty column */}
          <div className="relative aspect-[16/11] overflow-hidden bg-brand-deep lg:col-span-5 lg:aspect-auto lg:h-full lg:min-h-[22rem]">
            <div data-why-img className="absolute inset-0 will-change-transform">
              <Image
                src={ASSETS.gallery[0]}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/50 to-transparent" />
          </div>

          {/* Benefits as editorial list — no cards */}
          <div data-benefits className="lg:col-span-7">
            <ul className="divide-y divide-line">
              {WHY_CHOOSE.benefits.map((benefit, i) => (
                <li key={benefit.title} data-why-line>
                  <a
                    href={benefit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 gap-y-1 py-3.5 transition-colors hover:bg-paper/80 md:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,14rem)_auto] md:gap-x-5 md:py-4"
                  >
                    <span className="font-display text-xs tabular-nums text-brand-mid/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-start gap-2.5">
                      <Image
                        src={ASSETS.check}
                        alt=""
                        width={18}
                        height={18}
                        className="mt-0.5 shrink-0 opacity-70"
                      />
                      <span className="font-display text-[15px] font-semibold leading-snug text-brand md:text-base">
                        {benefit.title}
                      </span>
                    </span>
                    <span className="col-start-2 text-sm leading-snug text-muted md:col-start-auto">
                      {benefit.body}
                    </span>
                    <span
                      aria-hidden
                      className="text-brand-mid transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
