"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { WordReveal } from "@/components/word-reveal";
import { ASSETS, COPY } from "@/lib/content";

const IMAGE_SOURCES = [
  ASSETS.services[0].src,
  ASSETS.services[1].src,
  ASSETS.services[2].src,
  ASSETS.services[3].src,
  ASSETS.services[4].src,
  ASSETS.services[5].src,
  ASSETS.gallery[0],
  ASSETS.gallery[1],
  ASSETS.gallery[2],
  ASSETS.gallery[3],
  ASSETS.gallery[4],
  ASSETS.gallery[5],
];

const SIZES = [
  { w: 210, h: 148 },
  { w: 176, h: 124 },
  { w: 196, h: 138 },
  { w: 158, h: 112 },
  { w: 188, h: 132 },
  { w: 168, h: 118 },
  { w: 200, h: 140 },
  { w: 150, h: 108 },
  { w: 182, h: 128 },
  { w: 164, h: 116 },
  { w: 192, h: 136 },
  { w: 170, h: 120 },
];

type TileData = {
  src: string;
  w: number;
  h: number;
  angle: number;
  radiusScale: number;
};

type Viewport = { w: number; h: number };

function buildTiles(): TileData[] {
  const count = IMAGE_SOURCES.length;
  return IMAGE_SOURCES.map((src, index) => {
    const size = SIZES[index % SIZES.length];
    // Even 360° spacing — start at top and walk clockwise
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    return { src, ...size, angle, radiusScale: 1 };
  });
}

function Tile({
  tile,
  progress,
  orbit,
  viewport,
  index,
}: {
  tile: TileData;
  progress: MotionValue<number>;
  orbit: MotionValue<number>;
  viewport: Viewport;
  index: number;
}) {
  const expand = useTransform(progress, [0.12, 0.38], [0.08, 1]);
  const opacity = useTransform(progress, [0.1, 0.26, 0.64, 0.8], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.1, 0.38], [0.45, 1]);

  // Near-circular ring that still fits the viewport
  const base = Math.min(viewport.w * 0.36, viewport.h * 0.36, 420) * tile.radiusScale;
  const radiusX = base * 1.15;
  const radiusY = base;

  const x = useTransform([expand, orbit], ([spread, spin]) => {
    const angle = tile.angle + Number(spin);
    // Offset by half size so cards orbit from their true center
    return Math.cos(angle) * radiusX * Number(spread) - tile.w / 2;
  });

  const y = useTransform([expand, orbit], ([spread, spin]) => {
    const angle = tile.angle + Number(spin);
    return Math.sin(angle) * radiusY * Number(spread) - tile.h / 2;
  });

  return (
    <motion.img
      src={tile.src}
      alt=""
      referrerPolicy="no-referrer"
      style={{
        x,
        y,
        opacity,
        scale,
        width: tile.w,
        height: tile.h,
        zIndex: index,
      }}
      className="absolute top-1/2 left-1/2 max-w-[38vw] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.12)] md:max-w-none"
    />
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const tiles = useMemo(() => buildTiles(), []);
  const [viewport, setViewport] = useState<Viewport>({ w: 1440, h: 900 });
  const orbitRaw = useMotionValue(0);
  const orbit = useSpring(orbitRaw, { stiffness: 40, damping: 20, mass: 0.6 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const update = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      const p = scrollYProgress.get();
      if (p > 0.12 && p < 0.82) {
        orbitRaw.set(orbitRaw.get() + delta * 0.18);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [orbitRaw, scrollYProgress]);

  const photoOpacity = useTransform(scrollYProgress, [0.16, 0.36], [1, 0]);
  const photoScale = useTransform(scrollYProgress, [0, 0.36], [1, 1.08]);
  const glow = useTransform(scrollYProgress, [0, 0.3], [0.25, 0.7]);
  const yellow = useTransform(scrollYProgress, [0.14, 0.34], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [0, -24]);
  const headlineOpacity = useTransform(scrollYProgress, [0.08, 0.24], [1, 0]);
  const statementOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.42, 0.64, 0.76],
    [0, 1, 1, 0],
  );
  const finalOpacity = useTransform(scrollYProgress, [0.72, 0.88], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.72, 0.9], [28, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-[520vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <motion.div style={{ opacity: yellow }} className="absolute inset-0 bg-solar" />

        <motion.div style={{ opacity: photoOpacity, scale: photoScale }} className="absolute inset-0">
          <img
            src={ASSETS.heroSlides[0]}
            alt=""
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <motion.div
            style={{ opacity: glow }}
            className="pointer-events-none absolute inset-x-0 top-0 h-[42%] bg-[radial-gradient(ellipse_at_top,rgba(11,79,156,0.35),transparent_68%)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-10">
          {tiles.map((tile, index) => (
            <Tile
              key={tile.src}
              tile={tile}
              progress={scrollYProgress}
              orbit={orbit}
              viewport={viewport}
              index={index}
            />
          ))}
        </div>

        <motion.h1
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="absolute right-5 bottom-9 left-5 z-20 max-w-[920px] text-[27px] leading-none font-semibold tracking-[-0.065em] text-white md:text-[32px] lg:text-[38px]"
        >
          <span className="block">{COPY.heroLine1}</span>
          <span className="block text-white/85">{COPY.heroLine2.trim()}</span>
        </motion.h1>

        <motion.div
          style={{ opacity: statementOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-[920px] rounded-[18px] border border-black/5 bg-[rgba(255,252,235,0.88)] px-6 py-5 shadow-[0_20px_60px_rgba(14,14,14,0.08)] backdrop-blur-md md:px-11 md:py-9">
            <WordReveal
              text={COPY.statement}
              progress={scrollYProgress}
              start={0.34}
              end={0.62}
              dim={0.28}
              className="text-center font-display text-[18px] leading-[1.25] font-semibold tracking-[-0.02em] text-ink md:text-[26px] lg:text-[34px]"
            />
          </div>
        </motion.div>

        <motion.h2
          style={{ opacity: finalOpacity, y: finalY }}
          className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center font-display text-[28px] leading-[1.02] font-medium tracking-[-0.03em] text-ink md:text-[44px] lg:text-[64px]"
        >
          {COPY.final}
        </motion.h2>
      </div>
    </section>
  );
}
