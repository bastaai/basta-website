"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { cta } from "@/lib/site";

type CaseStudyItem = {
  category: string;
  body: string;
};

// Mirrors the 4 slides in Figma's "Solution carousel - additional slides" box.
// Every slide's CTA points at the same Book a Demo page.
const caseStudies: CaseStudyItem[] = [
  {
    category: "Auction house",
    body: "We do live, timed, sealed-bid and hybrid auctions. We can replatform your auctions end to end, or put Basta behind the site you already run.",
  },
  {
    category: "Brand",
    body: "Your auction looks and sounds like you. It runs inside your own site, on your domain, and your site stays as it is, while Basta runs underneath.",
  },
  {
    category: "Marketplace",
    body: "On Basta, the same item can be bought outright or bid on, and you decide which. Auction doesn't have to be a separate event; sometimes it's the best way to find out what something is worth.",
  },
  {
    category: "Charity",
    body: "Benefit auctions are their own world, and we've spent a lot of time in it. Bidding should feel as good as the cause it's supporting.",
  },
];

export function CaseStudy() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + caseStudies.length) % caseStudies.length);
  const next = () => setI((v) => (v + 1) % caseStudies.length);
  const active = caseStudies[i];

  return (
    <section className="grid gap-10 px-6 py-14 md:grid-cols-2 md:gap-12 md:px-12 md:py-20">
      {/* Left: rotating headline */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-display text-2xl leading-[1.1] text-ink md:text-[29px]">
          We work with your
        </h2>
        <span
          key={i}
          className="mark-acid font-display mt-2 inline-block px-2 text-2xl uppercase text-ink md:text-[29px]"
        >
          {active.category}
        </span>
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="transition-opacity hover:opacity-60"
          >
            <ArrowLeft className="size-6" strokeWidth={1.75} />
          </button>
          <span className="text-sm text-dark/95">
            {i + 1} / {caseStudies.length}
          </span>
          <button
            onClick={next}
            aria-label="Next"
            className="transition-opacity hover:opacity-60"
          >
            <ArrowRight className="size-6" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Right: pitch + CTA */}
      <div key={i} className="flex flex-col justify-center gap-6">
        <p className="text-lg font-bold leading-[1.4] text-ink/95">{active.body}</p>
        <ButtonLink href={cta.bookDemo.href} variant="outline" className="self-start">
          Book a demo
        </ButtonLink>
      </div>
    </section>
  );
}
