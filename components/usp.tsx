"use client";

import Image from "next/image";
import { useRef } from "react";
import { ASSETS, USP } from "@/lib/content";
import { TextReveal } from "@/components/ui/text-reveal";
import { ImageReveal } from "@/components/ui/image-reveal";
import {
  gsap,
  registerGsap,
  useGSAP,
  prefersReducedMotion,
} from "@/lib/motion";

registerGsap();

export function Usp() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!root.current || prefersReducedMotion()) return;
      gsap.from("[data-usp-item]", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          once: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-paper-warm py-20 md:py-28" id="usp">
      <div className="container-wide">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-mid">
          {USP.eyebrow}
        </p>
        <TextReveal
          text={USP.title}
          as="h2"
          className="font-display mb-14 max-w-4xl text-[clamp(1.85rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-brand"
        />

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-10 lg:col-span-4">
            {USP.items.slice(0, 2).map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                data-usp-item
                className="group border-t border-line-strong pt-6"
              >
                <div className="mb-3 flex items-start gap-3">
                  <Image src={ASSETS.check} alt="" width={24} height={24} />
                  <h3 className="font-display text-lg font-semibold leading-snug text-brand transition-colors group-hover:text-brand-mid">
                    {item.title}
                  </h3>
                </div>
                <p className="pl-9 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </a>
            ))}
          </div>

          <div className="lg:col-span-4">
            <ImageReveal
              src={USP.image}
              alt="Helium Solar"
              className="aspect-[3/4] w-full"
              parallax
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          <div className="flex flex-col gap-10 lg:col-span-4">
            {USP.items.slice(2).map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                data-usp-item
                className="group border-t border-line-strong pt-6"
              >
                <div className="mb-3 flex items-start gap-3">
                  <Image src={ASSETS.check} alt="" width={24} height={24} />
                  <h3 className="font-display text-lg font-semibold leading-snug text-brand transition-colors group-hover:text-brand-mid">
                    {item.title}
                  </h3>
                </div>
                <p className="pl-9 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
