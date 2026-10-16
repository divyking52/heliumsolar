import { CONTACT, SITE } from "@/lib/content";
import { CtaButton } from "@/components/ui/cta-button";

export function ContactCta() {
  return (
    <section className="bg-white py-20 md:py-28" id="contact">
      <div className="container-wide grid gap-12 border border-line bg-paper p-8 md:grid-cols-12 md:p-14 lg:p-16">
        <div className="md:col-span-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brand-mid">
            {CONTACT.title}
          </p>
          <h2 className="font-display text-[clamp(1.85rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-brand">
            {CONTACT.survey.label}
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href={CONTACT.survey.href}>{CONTACT.survey.label}</CtaButton>
            <CtaButton href={CONTACT.cta.href} variant="secondary">
              {CONTACT.cta.label}
            </CtaButton>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 border-t border-line pt-8 text-sm leading-relaxed text-brand md:col-span-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p>{CONTACT.address}</p>
          <a href={SITE.phoneHref} className="hover:text-brand-mid">
            {CONTACT.phone}
          </a>
          <a href={SITE.emailHref} className="hover:text-brand-mid">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
