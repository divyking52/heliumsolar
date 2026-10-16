import Image from "next/image";
import {
  ASSETS,
  FOOTER_LINKS,
  NAV,
  NAV_REGIONAL,
  SITE,
} from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-20">
        <div className="md:col-span-4">
          <Image
            src={ASSETS.logoWhite}
            alt="Helium Solar"
            width={160}
            height={48}
            className="h-11 w-auto"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
            {SITE.address}
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={SITE.phoneHref} className="block hover:text-accent">
              {SITE.phone}
            </a>
            <a href={SITE.emailHref} className="block hover:text-accent">
              {SITE.email}
            </a>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Follow Us
            </p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-white/60">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Facebook
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Instagram
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <ul className="space-y-2.5 text-sm text-white/70">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-white"
                  {...(item.href !== "/"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <a
                href={FOOTER_LINKS.residential.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {FOOTER_LINKS.residential.label}
              </a>
            </li>
            <li>
              <a
                href={FOOTER_LINKS.industrial.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {FOOTER_LINKS.industrial.label}
              </a>
            </li>
            <li>
              <a
                href={FOOTER_LINKS.services.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {FOOTER_LINKS.services.label}
              </a>
            </li>
            <li>
              <a
                href={FOOTER_LINKS.product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {FOOTER_LINKS.product.label}
              </a>
            </li>
            {FOOTER_LINKS.customer.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <ul className="space-y-2.5 text-sm text-white/70">
            {NAV_REGIONAL.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{SITE.copyright}</p>
          <div className="flex gap-4">
            {FOOTER_LINKS.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
