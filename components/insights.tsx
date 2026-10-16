"use client";

import Image from "next/image";
import { useRef } from "react";
import { INSIGHTS } from "@/lib/content";
import { TextReveal } from "@/components/ui/text-reveal";
import { CtaButton } from "@/components/ui/cta-button";
import {
  gsap,
  registerGsap,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/motion";

registerGsap();

export function Insights() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!root.current || prefersReducedMotion()) return;
      gsap.from("[data-blog]", {
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-paper py-20 md:py-28" id="insights">
      <div className="container-wide mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <TextReveal
          text={INSIGHTS.title}
          as="h2"
          className="font-display max-w-2xl text-[clamp(1.85rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-brand"
        />
        <CtaButton href={INSIGHTS.viewAll.href} variant="secondary">
          {INSIGHTS.viewAll.label}
        </CtaButton>
      </div>

      <div className="container-wide grid gap-8 md:grid-cols-3">
        {INSIGHTS.items.map((post) => (
          <article key={post.href} data-blog className="group flex flex-col">
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="img-zoom relative mb-5 block aspect-[16/10] overflow-hidden bg-brand-deep"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </a>
            <div className="mb-3 flex items-center gap-3 text-xs text-muted">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <time>{post.date}</time>
            </div>
            <h3 className="font-display text-xl font-semibold leading-snug text-brand">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-mid"
              >
                {post.title}
              </a>
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand"
            >
              Read More
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
