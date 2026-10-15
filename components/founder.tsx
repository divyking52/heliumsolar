"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { WordReveal } from "@/components/word-reveal";
import { COPY } from "@/lib/content";

export function Founder() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.muted = true;
      void video.play().catch(() => undefined);
    };

    play();
    const onInteract = () => play();
    document.addEventListener("pointerdown", onInteract, { once: true });
    document.addEventListener("scroll", onInteract, { once: true, passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) play();
        });
      },
      { threshold: 0.2 },
    );
    io.observe(video);

    return () => {
      document.removeEventListener("pointerdown", onInteract);
      document.removeEventListener("scroll", onInteract);
      io.disconnect();
    };
  }, []);

  return (
    <section id="founder" ref={ref} className="relative h-[240vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden bg-neutral-900">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://www.heliumsolar.in/Content/Website-Image-new/Home%20Page/Solar%20Installation.jpg"
        >
          <source src="/videos/helium-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/20" />

        <div className="absolute right-5 bottom-10 left-5 max-w-[340px] sm:right-10 sm:left-auto md:max-w-[380px]">
          <WordReveal
            text={COPY.founderQuote}
            progress={scrollYProgress}
            start={0.08}
            end={0.72}
            dim={0.28}
            accent="#FFEC88"
            className="text-[15px] leading-[1.35] font-normal tracking-[-0.02em] text-white md:text-[18px]"
          />
          <h2 className="mt-4 text-[22px] leading-none font-medium text-white md:text-[24px]">
            {COPY.founderLabel}
          </h2>
        </div>
      </div>
    </section>
  );
}
