import { COPY } from "@/lib/content";

export function Pillars() {
  return (
    <section id="pillars" className="bg-white">
      {COPY.pillars.map((pillar) => (
        <article
          key={pillar.title}
          className={`${pillar.tone} border-t border-white/15 px-5 py-16 text-white md:px-10 md:py-20`}
        >
          <div className="mx-auto grid max-w-[1440px] items-end gap-8 lg:grid-cols-12">
            <h1 className="text-[64px] leading-none font-normal tracking-[-0.09em] lg:col-span-7 lg:text-[80px] xl:text-[96px]">
              {pillar.title}
            </h1>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="text-[14px] leading-[1.1] text-white/80">{pillar.label}</p>
              <p className="mt-3 max-w-[640px] text-[18px] leading-[1.45] font-medium md:text-[20px]">
                {pillar.body}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
