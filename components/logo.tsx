"use client";

import { ASSETS, SITE } from "@/lib/content";
import { useEffect, useState } from "react";

export function Logo() {
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const hero = document.getElementById("hero");
      const founder = document.getElementById("founder");
      const heroHeight = hero?.offsetHeight ?? 0;
      const heroDark = y < heroHeight * 0.22;

      let founderDark = false;
      if (founder) {
        const rect = founder.getBoundingClientRect();
        founderDark =
          rect.top < window.innerHeight * 0.45 && rect.bottom > window.innerHeight * 0.35;
      }

      setOnDark(heroDark || founderDark);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      href="#top"
      aria-label={SITE.name}
      className="fixed top-5 left-1/2 z-50 -translate-x-1/2"
    >
      <img
        src={onDark ? ASSETS.logoWhite : ASSETS.logo}
        alt={SITE.name}
        referrerPolicy="no-referrer"
        className="h-10 w-auto transition duration-500 md:h-12"
      />
    </a>
  );
}
