"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SOLUTIONS } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/motion";

const ITEMS = SOLUTIONS.items;

export function Solutions() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const focus = hovered ?? active;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % ITEMS.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="solutions"
      aria-label={SOLUTIONS.title}
      className="relative h-[100svh] overflow-hidden bg-brand-deep text-white"
    >
      {/* Overlay chrome — images run full-bleed underneath */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-end justify-between gap-4 bg-gradient-to-b from-brand-deep via-brand-deep/80 to-transparent px-4 pb-4 pt-[5.5rem] md:px-6 md:pt-[6rem] xl:px-8">
        <div className="pointer-events-auto min-w-0">
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
            {SOLUTIONS.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(1.15rem,2vw,1.7rem)] font-semibold leading-tight tracking-tight drop-shadow-sm">
            {SOLUTIONS.title}
          </h2>
        </div>
        <p className="pointer-events-auto shrink-0 font-display text-xs tabular-nums text-white/60">
          {String(focus + 1).padStart(2, "0")}
          <span className="mx-1 text-white/30">/</span>
          {String(ITEMS.length).padStart(2, "0")}
        </p>
      </div>

      {/* Desktop expanding panels — full viewport */}
      <div
        className="absolute inset-0 hidden md:flex"
        onMouseLeave={() => setHovered(null)}
      >
        {ITEMS.map((item, i) => {
          const isFocus = i === focus;
          return (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => {
                setHovered(i);
                setActive(i);
              }}
              onFocus={() => {
                setHovered(i);
                setActive(i);
              }}
              aria-current={isFocus ? "true" : undefined}
              className="group relative min-w-0 overflow-hidden border-r border-white/10 last:border-r-0 transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ flexGrow: isFocus ? 5.5 : 1 }}
            >
              <Image
                src={item.image}
                alt={item.description}
                fill
                sizes="(max-width: 1024px) 45vw, 60vw"
                className={`object-cover transition-transform duration-700 ${
                  isFocus ? "scale-100" : "scale-[1.08]"
                }`}
                priority={i < 2}
              />
              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isFocus
                    ? "bg-gradient-to-t from-brand-deep/95 via-brand-deep/20 to-brand-deep/30"
                    : "bg-brand-deep/50"
                }`}
              />

              {/* Collapsed */}
              <div
                className={`absolute inset-x-0 bottom-0 p-3 xl:p-4 ${
                  isFocus ? "pointer-events-none opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              >
                <p className="text-[10px] font-semibold tabular-nums tracking-[0.18em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-1 text-sm font-semibold leading-tight xl:text-[15px]">
                  {item.title}
                </h3>
              </div>

              {/* Expanded */}
              <div
                className={`absolute inset-x-0 bottom-0 p-6 xl:p-8 ${
                  isFocus
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-5 opacity-0"
                } transition-all duration-500`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 max-w-lg text-3xl font-semibold leading-tight xl:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 xl:text-[15px]">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                  {item.title}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mobile full-bleed slides */}
      <div className="absolute inset-0 md:hidden">
        {ITEMS.map((item, i) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === active ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={i !== active}
            tabIndex={i === active ? 0 : -1}
          >
            <Image
              src={item.image}
              alt={item.description}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/35 to-brand-deep/40" />
            <div className="absolute inset-x-0 bottom-0 p-5 pb-20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {item.description}
              </p>
            </div>
          </a>
        ))}

        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex gap-1.5">
            {ITEMS.map((item, i) => (
              <button
                key={item.title}
                type="button"
                aria-label={item.title}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1 w-6 transition-colors ${
                  i === active ? "bg-accent" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              aria-label="Previous"
              onClick={() =>
                setActive((i) => (i - 1 + ITEMS.length) % ITEMS.length)
              }
              className="flex h-8 w-8 items-center justify-center border border-white/30 text-xs"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => setActive((i) => (i + 1) % ITEMS.length)}
              className="flex h-8 w-8 items-center justify-center border border-white/30 text-xs"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
