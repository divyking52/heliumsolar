"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ASSETS, COPY } from "@/lib/content";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const fill = useTransform(scrollYProgress, [0, 0.34, 0.48], ["34%", "86%", "100%"]);
  const stageOne = useTransform(scrollYProgress, [0, 0.2, 0.32], [1, 1, 0]);
  const stageTwo = useTransform(scrollYProgress, [0.38, 0.5, 0.62, 0.74], [0, 1, 1, 0]);
  const stageThree = useTransform(scrollYProgress, [0.7, 0.86], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <section id="spacer-grid" ref={ref} className="relative h-[420vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center justify-center px-5 md:px-16 lg:px-[8vw]">
        <motion.div
          style={{ y: cardY }}
          className="relative mx-auto aspect-square w-[min(520px,calc(100vw-40px))] overflow-hidden border border-black bg-white"
        >
          <motion.div style={{ height: fill }} className="absolute inset-x-0 bottom-0 bg-solar" />

          <motion.div
            style={{ opacity: stageOne }}
            className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-8"
          >
            {COPY.aboutStage1.map((line) => (
              <p
                key={line}
                className="text-[22px] leading-[1.2] font-medium tracking-[-0.03em] text-ink md:text-[26px]"
              >
                {line}
              </p>
            ))}
          </motion.div>

          <motion.div
            style={{ opacity: stageTwo }}
            className="absolute inset-0 z-10 flex flex-col justify-start px-7 pt-16 md:px-8 md:pt-20"
          >
            {COPY.aboutStage2.map((line) => (
              <p
                key={line}
                className="text-[22px] leading-[1.18] font-medium tracking-[-0.03em] text-ink md:text-[28px]"
              >
                {line}
              </p>
            ))}
          </motion.div>

          <motion.img
            src="/images/helium-circle.png"
            alt="Helium Solar — Solar For Every One"
            style={{ opacity: stageThree }}
            className="absolute inset-0 z-20 h-full w-full bg-white object-contain object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
