"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, registerGsap, useGSAP, prefersReducedMotion } from "@/lib/motion";

registerGsap();

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
};

export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  parallax = false,
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrap.current || !imgRef.current) return;
      if (prefersReducedMotion()) {
        gsap.set(wrap.current, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(imgRef.current, { scale: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        wrap.current,
        { clipPath: "inset(12% 12% 12% 12%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        imgRef.current,
        { scale: 1.12 },
        {
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      if (parallax) {
        gsap.to(imgRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: wrap, dependencies: [src, parallax] },
  );

  return (
    <div ref={wrap} className={`relative overflow-hidden ${className}`}>
      <div ref={imgRef} className="relative h-full w-full will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    </div>
  );
}
