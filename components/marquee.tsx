import { ASSETS } from "@/lib/content";

const ROW_ONE = ASSETS.partners.slice(0, 5);
const ROW_TWO = ASSETS.partners.slice(5);

function Row({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  const loop = [...images, ...images, ...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {loop.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex h-[140px] w-[140px] shrink-0 items-center justify-center border border-black/5 bg-white p-4 transition-transform duration-500 hover:scale-[1.04]"
          >
            <img
              src={src}
              alt=""
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section id="marquee" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="mb-10 text-[28px] leading-none font-medium tracking-[-0.02em] text-ink md:text-[34px]">
          PARTNERS
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Row images={ROW_ONE} direction="left" />
        <Row images={ROW_TWO} direction="right" />
      </div>
    </section>
  );
}
