"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ASSETS, FOOTER_LINKS, NAV, SITE } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-paper/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="border-b border-white/10 bg-brand-deep text-[11px] text-white/80">
        <div className="container-wide flex flex-wrap items-center justify-between gap-2 py-2">
          <p className="tracking-wide">{SITE.hours}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={SITE.emailHref} className="hover:text-accent transition-colors">
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="hover:text-accent transition-colors">
              {SITE.phone}
            </a>
            <a
              href={FOOTER_LINKS.careers.href}
              className="hidden sm:inline hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {FOOTER_LINKS.careers.label}
            </a>
            <a
              href={FOOTER_LINKS.enquire.href}
              className="hidden sm:inline hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="container-wide flex items-center justify-between gap-6 py-3 md:py-4">
        <Link href="/" className="relative z-10 shrink-0" aria-label="Helium Solar home">
          <Image
            src={ASSETS.logo}
            alt="Helium Solar"
            width={160}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link text-[13px] font-medium tracking-wide ${
                scrolled || open ? "text-ink" : "text-white drop-shadow-sm"
              }`}
              {...(item.href !== "/"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { "aria-current": "page" as const })}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={FOOTER_LINKS.enquire.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-sm px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors sm:inline-flex ${
              scrolled || open
                ? "bg-brand text-white hover:bg-brand-mid"
                : "bg-white/95 text-brand hover:bg-accent"
            }`}
          >
            For Enquiry
          </a>

          <button
            type="button"
            className={`relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm border lg:hidden ${
              scrolled || open
                ? "border-brand/20 text-ink"
                : "border-white/40 text-white"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span className={`block h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[7.5rem] z-40 bg-paper transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="container-site flex flex-col gap-1 py-8" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="border-b border-line py-4 font-display text-2xl text-brand"
              onClick={() => setOpen(false)}
              {...(item.href !== "/"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          ))}
          <a
            href={FOOTER_LINKS.enquire.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-brand px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white"
            onClick={() => setOpen(false)}
          >
            For Enquiry
          </a>
        </nav>
      </div>
    </header>
  );
}
