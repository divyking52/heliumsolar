"use client";

import Image from "next/image";
import { useRef } from "react";
import { PROJECTS } from "@/lib/content";
import { TextReveal } from "@/components/ui/text-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import {
  gsap,
  registerGsap,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/motion";

registerGsap();

const FEATURED = PROJECTS.items.slice(0, 5);
const REST = PROJECTS.items.slice(5, 17);

export function Projects() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!root.current || prefersReducedMotion()) return;

      gsap.from("[data-project]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current.querySelector("[data-project-grid]"),
          start: "top 80%",
          once: true,
        },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const row = root.current!.querySelector("[data-project-row]");
        if (!row) return;
        gsap.to(row, {
          xPercent: -35,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-brand-deep py-20 text-white md:py-28" id="projects">
      <div className="container-wide mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
        <TextReveal
          text={PROJECTS.title}
          as="h2"
          className="font-display max-w-3xl text-[clamp(1.6rem,3.2vw,2.75rem)] font-semibold leading-[1.15] tracking-tight"
        />
        <CtaButton href={PROJECTS.href} variant="light" className="shrink-0">
          Projects
        </CtaButton>
      </div>

      <div
        data-project-grid
        className="container-wide grid gap-4 md:grid-cols-12 md:gap-5"
      >
        {FEATURED.map((project, i) => (
          <a
            key={project.title}
            href={PROJECTS.href}
            target="_blank"
            rel="noopener noreferrer"
            data-project
            className={`group relative block overflow-hidden ${
              i === 0
                ? "aspect-[16/10] md:col-span-8 md:aspect-auto md:min-h-[28rem]"
                : i === 1
                  ? "aspect-[4/5] md:col-span-4"
                  : "aspect-[16/11] md:col-span-4"
            }`}
          >
            <div className="img-zoom absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-7">
              <h3 className="font-display text-lg font-semibold leading-snug md:text-xl">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 overflow-hidden md:mt-14">
        <div
          data-project-row
          className="flex w-max gap-4 px-4 md:gap-5 md:px-8"
        >
          {REST.map((project) => (
            <a
              key={project.title}
              href={PROJECTS.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-56 w-72 shrink-0 overflow-hidden md:h-72 md:w-[28rem]"
            >
              <div className="img-zoom absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="28rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 to-transparent" />
              </div>
              <p className="absolute bottom-4 left-4 right-4 font-display text-sm font-medium leading-snug md:text-base">
                {project.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
