"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ASSETS, COPY } from "@/lib/content";

export function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.15, 0.45], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="visual-showcase" ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 md:px-10">
        <p className="max-w-[360px] text-[14px] leading-[1.15] text-muted">
          {COPY.showcaseEyebrow}
        </p>

        <motion.div
          style={{ y }}
          className="relative aspect-video w-full md:w-[636px] xl:w-[609px]"
        >
          <img
            src={ASSETS.installation}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="pointer-events-none absolute inset-0 h-full w-full scale-[1.12] object-cover opacity-45 blur-3xl"
          />
          <motion.figure
            style={{ scale }}
            className="relative h-full w-full overflow-hidden bg-neutral-100 shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
          >
            <img
              src={ASSETS.installation}
              alt="Helium Solar installation"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30" />
          </motion.figure>
        </motion.div>

        <h2 className="max-w-[1100px] text-[34px] leading-[0.95] font-medium tracking-[-0.03em] text-ink uppercase md:text-[52px] xl:text-[64px]">
          {COPY.showcaseHeadline}
        </h2>
        <p className="max-w-[520px] text-[14px] leading-[1.15] text-muted">{COPY.showcaseBody}</p>
      </div>
    </section>
  );
}
