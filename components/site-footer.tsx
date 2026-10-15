"use client";

import { scrollToTop } from "@/lib/lenis";
import { ASSETS, SITE } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-white px-5 pt-6 pb-10 md:px-10">
      <img
        src={ASSETS.logo}
        alt={SITE.name}
        referrerPolicy="no-referrer"
        className="mx-auto h-auto w-full max-w-[720px] object-contain"
      />
      <p className="mx-auto mt-6 max-w-[720px] text-center text-[14px] text-muted">
        {SITE.address}
      </p>
      <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-8 text-[16px] text-ink/70">
        <a
          href={SITE.url}
          target="_blank"
          rel="noreferrer"
          className="transition-opacity hover:opacity-60"
        >
          {SITE.copyright}
        </a>
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            scrollToTop();
          }}
          className="transition-opacity hover:opacity-60"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
