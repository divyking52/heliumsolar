"use client";

import { useRef } from "react";
import { gsap, registerGsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

registerGsap();

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  mode?: "words" | "lines";
  delay?: number;
  once?: boolean;
};

export function TextReveal({
  text,
  as: Tag = "h2",
  className = "",
  mode = "words",
  delay = 0,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const parts = mode === "words" ? text.split(" ") : text.split("\n");

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = ref.current.querySelectorAll("[data-reveal]");
      if (prefersReducedMotion()) {
        gsap.set(targets, { y: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        targets,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: mode === "words" ? 0.035 : 0.12,
          delay,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none none",
            once,
          },
        },
      );
    },
    { scope: ref, dependencies: [text] },
  );

  return (
    <Tag ref={ref as never} className={className}>
      {parts.map((part, i) => (
        <span key={`${part}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span data-reveal className="inline-block will-change-transform">
            {part}
            {mode === "words" && i < parts.length - 1 ? "\u00A0" : null}
          </span>
          {mode === "lines" && i < parts.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  );
}
