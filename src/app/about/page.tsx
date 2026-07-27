import { ShieldCheck, Compass, Layers, Hammer } from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  Statement,
  FeatureGrid,
  StatBand,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "About Us",
  description:
    "Basta is an out-of-the-box auctions platform built for anyone with something to auction — from historic houses to first-time sellers.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="About"
        title="We build the rails for modern auctions"
        lede="Basta is an out-of-the-box auctions platform made for anyone with something to auction. We take the machinery that used to take houses years to build — bidding, cataloging, live rooms, settlement — and make it something you can launch in weeks."
      />

      <Statement cite="Our opportunity">
        Culture is opening, but the openings aren&apos;t necessarily
        auction-shaped. Well — depends on what gets built.
      </Statement>

      <FeatureGrid
        eyebrow="What we value"
        title="How we show up"
        intro="Four registers we move between, depending on what the moment calls for."
        items={[
          {
            icon: ShieldCheck,
            title: "Integrity",
            body: "Love for the game. We know the auction world and treat it with the respect of an old master — knowing, and quietly nudging it forward.",
          },
          {
            icon: Compass,
            title: "Curiosity",
            body: "A belief in possibility. We're a new master: alive and visionary about what an auction can be when the rails are modern.",
          },
          {
            icon: Layers,
            title: "Depth",
            body: "Precision over hand-waving. We sweat increment tables, settlement, and edge cases so you never have to.",
          },
          {
            icon: Hammer,
            title: "Devotion",
            body: "Getting things done. We're the producer in the room — reliable, and focused on shipping auctions that actually close.",
          },
        ]}
      />

      <StatBand
        stats={[
          { value: "19,567", label: "items live right now" },
          { value: "150%", label: "avg. lift in bidding volume" },
          { value: "Weeks", label: "to launch, not months" },
          { value: "1,000+", label: "creators & houses on Basta" },
        ]}
      />

      <section className="border-b border-muted/60 px-6 py-16 text-center md:py-20">
        <blockquote className="mx-auto max-w-3xl">
          <p className="font-display text-xl leading-[1.3] text-ink md:text-3xl">
            &ldquo;Created by auction insiders tired of broken tech. Basta has
            built the tools we always wished we had.&rdquo;
          </p>
          <footer className="mt-6 text-sm text-ink/60">
            <span className="font-semibold text-ink">Oli Stephensen</span> — CEO,
            Basta · former CPO/CTO at Sotheby&apos;s
          </footer>
        </blockquote>
      </section>

      <CTABand
        title="Come build with us"
        sub="Whether you're a historic house or launching your first sale, we'd love to talk."
      />
    </PageFrame>
  );
}
