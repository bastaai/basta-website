"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { cta } from "@/lib/site";

type CaseStudyItem = {
  category: string;
  name?: string;
  image?: string;
  logo?: string;
  logoAlt?: string;
  description?: string;
};

// One entry per rotating category. Only "Auction house" has a real case
// study today — the rest render the shared "coming soon" placeholder card
// until we have a customer story to swap in.
const caseStudies: CaseStudyItem[] = [
  {
    category: "Auction house",
    name: "Julien's Auctions",
    image: "/assets/brand/julliens.jpg",
    logo: "/assets/brand/julliens-logo.svg",
    logoAlt: "Julien's Auctions",
    description:
      "Julien's Auctions integrated Basta as their auction engine for all bidding as well as their live auctions, achieving 150% increase in bidding volume and 30% adoption of new users within 12 months from launch.",
  },
  { category: "Website" },
  { category: "Marketplace" },
  { category: "Charity" },
  { category: "Brand" },
];

export function CaseStudy() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + caseStudies.length) % caseStudies.length);
  const next = () => setI((v) => (v + 1) % caseStudies.length);
  const active = caseStudies[i];

  return (
    <section className="grid gap-10 border-b border-muted/60 px-6 py-14 md:grid-cols-2 md:gap-12 md:px-12 md:py-20">
      {/* Left: rotating headline */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="font-display text-2xl leading-[1.1] text-ink md:text-[29px]">
          The auction platform for your
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

      {/* Right: pitch + case study card */}
      <div className="flex flex-col gap-6">
        <p className="text-lg font-bold leading-[1.4] text-ink/95">
          Built to power high-frequency bidding as well as live auctions Basta
          can easily integrate with the rest of your existing stack or from the
          ground up in no time.
        </p>

        {active.name ? (
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded-lg sm:w-56">
              <Image
                src={active.image!}
                alt={`${active.name} gallery`}
                fill
                sizes="(max-width: 640px) 100vw, 224px"
                className="object-cover"
              />
              <Image
                src={active.logo!}
                alt={active.logoAlt!}
                width={73}
                height={19}
                className="absolute left-1/2 top-1/2 w-16 -translate-x-1/2 -translate-y-1/2 brightness-0 invert"
              />
            </div>
            <div className="flex flex-col justify-between gap-4">
              <p className="text-sm leading-[1.4] text-ink/95">
                {active.description}
              </p>
              <ButtonLink
                href={cta.caseStudy.href}
                variant="outline"
                className="self-start"
              >
                Read the case study
              </ButtonLink>
            </div>
          </div>
        ) : (
          <div key={i} className="flex flex-col gap-5 sm:flex-row">
            <div className="flex aspect-[3/2] w-full shrink-0 items-center justify-center rounded-lg border border-dashed border-muted/60 bg-muted/10 sm:w-56">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Coming soon
              </span>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <p className="text-sm leading-[1.4] text-ink/70">
                We&apos;re still building out our {active.category.toLowerCase()}{" "}
                case study — check back shortly.
              </p>
              <ButtonLink
                href={cta.talkToUs.href}
                variant="outline"
                className="self-start"
              >
                Talk to us
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
