"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type WordRevealProps = {
  text: string;
  progress: MotionValue<number>;
  start?: number;
  end?: number;
  className?: string;
  dim?: number;
  accent?: string;
};

function Word({
  word,
  index,
  total,
  progress,
  start,
  end,
  dim,
  accent,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  start: number;
  end: number;
  dim: number;
  accent?: string;
}) {
  const span = (end - start) / total;
  const from = start + index * span;
  const to = from + span * 0.85;
  const opacity = useTransform(progress, [from, to], [dim, 1]);
  const color = useTransform(
    progress,
    accent ? [from, to, Math.min(end, to + span * 0.45)] : [from, to],
    accent ? ["rgba(255,255,255,0.28)", accent, "#ffffff"] : ["rgba(14,14,14,1)", "rgba(14,14,14,1)"],
  );

  return (
    <motion.span style={{ opacity, color }} className="inline-block">
      {word}
    </motion.span>
  );
}

export function WordReveal({
  text,
  progress,
  start = 0.15,
  end = 0.8,
  className,
  dim = 0.2,
  accent,
}: WordRevealProps) {
  const words = text.split(/\s+/);

  return (
    <p className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <Word
            word={word}
            index={index}
            total={words.length}
            progress={progress}
            start={start}
            end={end}
            dim={dim}
            accent={accent}
          />
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </p>
  );
}
