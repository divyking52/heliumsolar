"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/content";
import { TextReveal } from "@/components/ui/text-reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const item = TESTIMONIALS.items[index];

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + TESTIMONIALS.items.length) % TESTIMONIALS.items.length);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TESTIMONIALS.items.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section className="bg-paper py-20 md:py-28" id="testimonials" aria-roledescription="carousel">
      <div className="container-wide">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-mid">
          {TESTIMONIALS.eyebrow}
        </p>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <TextReveal
            text={TESTIMONIALS.title}
            as="h2"
            className="font-display max-w-xl text-[clamp(1.85rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-brand"
          />
          <div className="flex gap-2" role="group" aria-label="Testimonial controls">
            <button
              type="button"
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center border border-line-strong text-brand transition-colors hover:bg-brand hover:text-white"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center border border-line-strong text-brand transition-colors hover:bg-brand hover:text-white"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="grid gap-10 lg:grid-cols-12 lg:gap-16"
          onTouchStart={(e) => {
            touchX.current = e.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) {
              if (dx > 0) prev();
              else next();
            }
            touchX.current = null;
          }}
        >
          <div className="relative aspect-square overflow-hidden bg-brand-deep lg:col-span-4 lg:aspect-[4/5]">
            <Image
              key={item.image}
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700"
            />
          </div>

          <figure className="flex flex-col justify-center lg:col-span-8">
            <blockquote className="font-display text-[clamp(1.25rem,2.4vw,2rem)] font-medium leading-snug text-brand">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-10 border-t border-line pt-6">
              <p className="font-display text-xl font-semibold text-brand">
                {item.name}
              </p>
              <p className="mt-1 text-sm text-muted">{item.role}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
                {index + 1} / {TESTIMONIALS.items.length}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 flex gap-2" role="tablist" aria-label="Select testimonial">
          {TESTIMONIALS.items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${t.name}`}
              className={`h-1.5 flex-1 transition-colors ${
                i === index ? "bg-brand" : "bg-line-strong"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
