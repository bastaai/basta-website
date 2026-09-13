"use client";

import { useEffect, useState } from "react";
import { Tag } from "lucide-react";

// Live "items running on Basta" counter.
//
// - Anchored to the Figma reference value (3,567) at ANCHOR_TIME.
// - Trends upward by WEEKLY_GROWTH (100) items every week, so the long-run
//   trajectory always climbs — never net negative over any given week.
// - On top of that trend, each hour gets its own small pseudo-random swing
//   of up to HOURLY_SWING (30) items in either direction, so the number
//   visibly ticks up and down hour to hour instead of moving in a straight
//   line.
const ANCHOR_TIME = Date.parse("2026-09-14T00:00:00Z");
const ANCHOR_COUNT = 3567;
const WEEKLY_GROWTH = 100;
const HOURLY_SWING = 30;

const MS_PER_HOUR = 60 * 60 * 1000;
const MS_PER_WEEK = 7 * 24 * MS_PER_HOUR;

// Deterministic pseudo-random value in [-1, 1), seeded by an integer index.
// Same index always produces the same swing, so the count doesn't jitter
// between renders within the same hour, and matches on server + client.
function seededUnit(index: number) {
  const x = Math.sin(index * 12.9898) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
}

function computeLiveCount(now: number) {
  const elapsed = now - ANCHOR_TIME;
  const weeks = elapsed / MS_PER_WEEK;
  const trend = ANCHOR_COUNT + weeks * WEEKLY_GROWTH;

  const hourIndex = Math.floor(elapsed / MS_PER_HOUR);
  const swing = Math.round(seededUnit(hourIndex) * HOURLY_SWING);

  return Math.max(0, Math.round(trend) + swing);
}

export function StatsBar() {
  const [count, setCount] = useState(() => computeLiveCount(Date.now()));

  useEffect(() => {
    const tick = () => setCount(computeLiveCount(Date.now()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1.5 border-y border-muted/60 px-6 py-3 text-sm">
      <Tag className="size-4" strokeWidth={2} />
      <span className="font-semibold text-ink">
        {count.toLocaleString("en-US")} items live now
      </span>
      <span className="text-ink/50">running on Basta</span>
    </div>
  );
}
