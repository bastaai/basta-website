import Image from "next/image";
import { showcaseItems } from "@/lib/showcase";

// Slight per-item tilt for a playful, hand-placed feel.
const tilts = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6", "rotate-2"];

export function Showcase() {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...showcaseItems, ...showcaseItems];

  return (
    <section className="relative overflow-hidden border-b border-muted/60">
      <p className="pt-8 text-center text-sm font-semibold text-ink md:hidden">
        Items up for auction running on Basta:
      </p>

      {/* Auto-scrolling carousel */}
      <div className="relative py-10 md:py-14">
        <div className="flex w-max animate-marquee items-center gap-10 [animation-play-state:running] hover:[animation-play-state:paused] md:gap-20">
          {loop.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.alt} — view the sale`}
              className={`group relative block size-32 shrink-0 transition-transform hover:!rotate-0 hover:scale-105 md:size-52 ${
                tilts[i % tilts.length]
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 128px, 208px"
                className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)]"
              />
            </a>
          ))}
        </div>

        {/* Just sold pill overlay */}
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
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
