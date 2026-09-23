"use client";

import { useEffect, useState } from "react";

// Auction houses we power, cycled in the order laid out on the Figma
// "Power Auctions for" reference frame.
const NAMES = [
  "Julien's",
  "Freeman's",
  "Joopiter",
  "Universal Music Group",
  "Fandiem",
  "David Lynch Foundation",
  "Relix",
  "Green Beetz",
];

const N = NAMES.length;
const ITEM_HEIGHT = 20; // px — matches the 20px line height in the Figma spec
const TICK = 2500; // dwell time on each name (ms)
const DUR = 450; // slide duration (ms)

export function PoweringFor() {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Auto-advance, one name at a time (respects reduced motion).
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;
    const id = setInterval(() => setActive((a) => a + 1), TICK);
    return () => clearInterval(id);
  }, []);

  // Seamless loop: once the duplicate copy scrolls into place, snap back to
  // the top with no animation so the cycle repeats forever.
  useEffect(() => {
    if (active < N) return;
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

  return (
    <div className="flex items-center justify-center gap-1.5 border-y border-muted/60 px-6 py-3 text-sm">
      <span className="text-ink/50">Powering Auctions for:</span>
      <span className="relative inline-block h-5 overflow-hidden align-middle">
        <span
          className="flex flex-col"
          style={{
            transform: `translateY(-${active * ITEM_HEIGHT}px)`,
            transition: animate
              ? `transform ${DUR}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
          }}
        >
          {[...NAMES, ...NAMES].map((name, i) => (
            <span
              key={i}
              className="h-5 font-semibold leading-5 whitespace-nowrap text-ink"
            >
              {name}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}
