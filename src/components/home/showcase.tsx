import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  box: string; // wrapper sizing
  extra?: string; // rotation / offset / visibility
};

const items: Item[] = [
  {
    src: "/assets/products/dino.png",
    alt: "Triceratops skeleton",
    box: "w-56 h-40 md:w-72 md:h-52",
    extra: "rotate-[6deg] sm:-ml-20",
  },
  {
    src: "/assets/products/lamp.png",
    alt: "Orange mushroom table lamp",
    box: "w-32 h-32 md:w-44 md:h-44",
    extra: "rotate-[-6deg] hidden sm:block",
  },
  {
    src: "/assets/products/skateboard.png",
    alt: "Tony Hawk skateboard",
    box: "w-24 h-56 md:w-32 md:h-72",
    extra: "rotate-[-10deg] z-10",
  },
  {
    src: "/assets/products/artwork.png",
    alt: "Framed artwork",
    box: "w-32 h-44 md:w-44 md:h-56",
    extra: "rotate-[4deg] hidden sm:block",
  },
  {
    src: "/assets/products/coffee-maker.png",
    alt: "Glass coffee maker",
    box: "w-28 h-36 md:w-40 md:h-48",
    extra: "rotate-[8deg] hidden md:block",
  },
  {
    src: "/assets/products/dino.png",
    alt: "Triceratops skeleton",
    box: "w-56 h-40 md:w-72 md:h-52",
    extra: "-mr-24 rotate-[-6deg] hidden lg:block",
  },
];

export function Showcase() {
  return (
    <section className="relative overflow-hidden border-b border-muted/60">
      <p className="pt-8 text-center text-sm font-semibold text-ink md:hidden">
        Items up for auction running on Basta:
      </p>

      <div className="relative mx-auto flex h-[300px] max-w-[1200px] items-center justify-center gap-2 px-4 md:h-[420px] md:gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative shrink-0 ${item.box} ${item.extra ?? ""}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 40vw, 20vw"
              className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)]"
            />
          </div>
        ))}

        {/* Just sold pill */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border border-black bg-white/90 py-1.5 pl-1.5 pr-4 backdrop-blur">
            <span className="relative size-7 overflow-hidden rounded-full bg-white">
              <Image
                src="/assets/products/skateboard.png"
                alt=""
                fill
                sizes="28px"
                className="object-contain"
              />
            </span>
            <span className="font-mono text-[10px] font-bold uppercase text-pill">
              Just sold
            </span>
            <span className="text-xs text-pill">
              Tony Hawk Skateboard&nbsp;&nbsp;•&nbsp;&nbsp;
              <span className="font-semibold">$1,152,000</span>
            </span>
          </div>
        </div>
      </div>

      {/* Trusted by */}
      <div className="flex items-center justify-center gap-3 border-t border-muted/60 py-4">
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink">
          Trusted by:
        </span>
        <Image
          src="/assets/logos/joopiter-text.svg"
          alt="Joopiter"
          width={90}
          height={16}
          className="h-4 w-auto"
        />
      </div>
    </section>
  );
}
