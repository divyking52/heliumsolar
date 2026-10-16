"use client";

import Image from "next/image";
import { PARTNERS } from "@/lib/content";

export function Partners() {
  const logos = [...PARTNERS, ...PARTNERS];

  return (
    <section
      className="border-y border-line bg-white py-10 md:py-14"
      aria-label="Partner logos"
    >
      <div className="overflow-hidden">
        <div className="partners-track flex w-max items-center gap-12 px-6 md:gap-16">
          {logos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative flex h-12 w-28 shrink-0 items-center justify-center opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-14 md:w-36"
            >
              <Image
                src={src}
                alt=""
                width={144}
                height={56}
                className="max-h-12 w-auto object-contain md:max-h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
