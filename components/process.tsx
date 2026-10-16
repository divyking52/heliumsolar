"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PROCESS } from "@/lib/content";
import {
  gsap,
  ScrollTrigger,
  registerGsap,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/motion";

registerGsap();

export function Process() {
  const root = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (!root.current) return;

      const steps = PROCESS.steps.length;
      const reduced = prefersReducedMotion();

      if (reduced) {
        setActive(0);
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          // Use px from innerHeight — `vh` units in += end strings can resolve as raw px
          end: () => `+=${(steps - 1) * window.innerHeight * 0.55}`,
          pin: true,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (steps - 1));
            const clamped = Math.min(steps - 1, Math.max(0, idx));
            setActive((current) => (current === clamped ? current : clamped));

            if (progressRef.current) {
              gsap.set(progressRef.current, {
                scaleY: (clamped + 1) / steps,
              });
            }
          },
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => st.kill();
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="process"
      className="relative h-auto overflow-hidden bg-brand-deep text-white lg:h-[100svh]"
    >
      <div className="container-wide grid h-full items-center gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-0">
        <div className="lg:col-span-5">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
            {PROCESS.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-tight">
            {PROCESS.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-[15px]">
            {PROCESS.body}
          </p>

          <div className="relative mt-8">
            <div
              className="absolute left-[1.05rem] top-3 bottom-3 w-px origin-top bg-white/15"
              aria-hidden
            >
              <div
                ref={progressRef}
                className="h-full w-px origin-top bg-accent"
                style={{ transform: `scaleY(${(active + 1) / PROCESS.steps.length})` }}
              />
            </div>

            <ol className="relative space-y-0">
              {PROCESS.steps.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <li key={step.number}>
                    <a
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative flex gap-4 py-3 transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors duration-300 ${
                          isActive || isDone
                            ? "border-accent bg-accent text-brand-deep"
                            : "border-white/30 bg-brand-deep text-white/70"
                        }`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`pt-1 font-display text-base leading-snug transition-colors duration-300 md:text-lg ${
                          isActive ? "font-semibold text-white" : "text-white/80"
                        }`}
                      >
                        {step.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:h-[min(68vh,32rem)]">
            <Image
              src={PROCESS.image}
              alt={PROCESS.steps[active].title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 flex items-end justify-between gap-4 p-5 md:p-7">
              <p className="font-display text-xl font-semibold md:text-3xl">
                {PROCESS.steps[active].title}
              </p>
              <span className="shrink-0 text-sm font-semibold tabular-nums text-accent">
                {PROCESS.steps[active].number}
                <span className="text-white/35">
                  {" "}
                  / {String(PROCESS.steps.length).padStart(2, "0")}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
