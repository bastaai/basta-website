"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { showcaseItems } from "@/lib/showcase";

const N = showcaseItems.length;
const COPIES = 3;
// Render three copies so there's always a full set of neighbours on each side.
const strip = Array.from({ length: N * COPIES }, (_, i) => showcaseItems[i % N]);

const TICK = 2400; // dwell time on each item (ms)
const DUR = 500; // jump duration (ms)

// The strip rides the rim of one big, mostly off-screen circle: each item
// rotates and dips away from the centre the further it sits from the
// active one, instead of a fixed per-item tilt.
const WHEEL_RADIUS = 640; // px — bigger radius = gentler, wider curve
const ANGLE_STEP = 13; // degrees of arc between neighbouring items
const MAX_STEPS = 4; // clamp the arc so far-off items don't flip past vertical

export function Showcase() {
  const [active, setActive] = useState(N); // start in the middle copy
  const [animate, setAnimate] = useState(true);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const featured = showcaseItems[active % N];

  // Center the active item under the pill.
  useLayoutEffect(() => {
    const recompute = () => {
      const vp = viewportRef.current;
      const track = trackRef.current;
      const child = track?.children[active] as HTMLElement | undefined;
      if (!vp || !child) return;
      setOffset(vp.clientWidth / 2 - (child.offsetLeft + child.offsetWidth / 2));
    };
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, [active]);

  // Auto-advance (respects reduced-motion + hover pause).
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced || paused) return;
    const id = setInterval(() => setActive((a) => a + 1), TICK);
    return () => clearInterval(id);
  }, [paused]);

  // Seamless loop: when we reach the 3rd copy, snap back a copy with no animation.
  useEffect(() => {
    if (active < N * 2) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setActive((a) => a - N);
    }, DUR + 40);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    if (animate) return;
    const r = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true)),
    );
    return () => cancelAnimationFrame(r);
  }, [animate]);

  const transitionStyle = animate
    ? `transform ${DUR}ms cubic-bezier(0.22, 1, 0.36, 1)`
    : "none";

  return (
    <section className="relative overflow-hidden border-b border-muted/60">
      <p className="pt-8 text-center text-sm font-semibold text-ink md:hidden">
        Items up for auction running on Basta:
      </p>

      <div
        className="relative pt-10 pb-[60px] md:pt-14 md:pb-[72px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={viewportRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max items-center gap-10 md:gap-20"
            style={{
              transform: `translateX(${offset}px)`,
              transition: transitionStyle,
            }}
          >
            {strip.map((item, i) => {
              const isActive = i === active;
              // Signed distance from the centred item, clamped so the arc
              // never rotates a far-off item past vertical.
              const steps = Math.max(
                -MAX_STEPS,
                Math.min(MAX_STEPS, i - active),
              );
              const theta = steps * ANGLE_STEP;
              const rad = (theta * Math.PI) / 180;
              // How far the item hangs below the top of the wheel, and how
              // much it shrinks as it curves away — same rim, same circle.
              const drop = WHEEL_RADIUS * (1 - Math.cos(rad));
              const scale = isActive ? 1.1 : 0.95 - 0.06 * Math.abs(steps);

              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} — view the sale`}
                  className={`relative block size-32 shrink-0 md:size-52 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                  style={{
                    transform: `translateY(${drop}px) rotate(${theta}deg) scale(${scale})`,
                    transition: transitionStyle,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 128px, 208px"
                    className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)]"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Just sold pill — sits under the centered item and changes on each jump */}
        <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 w-max max-w-[92vw] -translate-x-1/2 md:bottom-12">
          <div className="flex items-center gap-2 rounded-full border border-black bg-acid py-1.5 pl-1.5 pr-4">
            <span className="relative size-8 shrink-0 overflow-hidden rounded-full border border-black bg-white">
              <Image
                key={featured.src}
                src={featured.src}
                alt=""
                fill
                sizes="32px"
                className="object-contain p-0.5"
              />
            </span>
            <span className="shrink-0 font-mono text-[10px] font-bold uppercase text-pill">
              Just sold
            </span>
            <span className="flex min-w-0 items-center gap-1.5 text-xs text-pill">
              <span className="truncate">{featured.name}</span>
              <span className="shrink-0">•</span>
              <span className="shrink-0 font-semibold">{featured.price}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Trusted by — updates to the seller of the featured item */}
      <div className="flex items-center justify-center gap-3 py-4">
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink">
          Trusted by:
        </span>
        <span
          key={featured.seller}
          className="font-display text-sm text-ink"
        >
          {featured.seller}
        </span>
      </div>
    </section>
  );
}
