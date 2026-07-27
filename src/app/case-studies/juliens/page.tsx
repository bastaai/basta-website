import Image from "next/image";
import {
  PageFrame,
  MarketingHero,
  StatBand,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Julien's Auctions",
  description:
    "Julien's Auctions integrated Basta as their auction engine for all bidding and live auctions — a 150% increase in bidding volume and 30% new-user adoption within 12 months.",
};

export default function JuliensCaseStudy() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Case study"
        title="Julien's Auctions"
        lede="The house behind some of the most iconic pop-culture sales in the world made Basta the engine for all of their bidding — online and in the live room."
      />

      <section className="border-b border-muted/60">
        <div className="relative aspect-[16/7] w-full overflow-hidden bg-dark">
          <Image
            src="/assets/brand/julliens.jpg"
            alt="Julien's Auctions live sale room"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <StatBand
        stats={[
          { value: "150%", label: "increase in bidding volume" },
          { value: "30%", label: "new-user adoption in 12 months" },
          { value: "All", label: "bidding run on Basta" },
          { value: "Live", label: "+ online auctions unified" },
        ]}
      />

      <CapabilitySplit
        eyebrow="The challenge"
        title="A storied house, ready for high-frequency demand"
        body="Julien's needed an engine that could carry the intensity of headline sales — online and live — without stitching together tools or slowing the room down."
        bullets={[
          {
            title: "One engine, every channel",
            body: "Unify online bidding and the live room so no bid — and no bidder — falls between systems.",
          },
          {
            title: "Built for peak moments",
            body: "Handle high-frequency bidding on marquee lots without buckling under the load.",
          },
          {
            title: "Room to grow the audience",
            body: "Bring new bidders in and keep them, sale after sale.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="The results"
        title="150% more bidding, and a bigger room"
        body="Within twelve months of launching on Basta, Julien's saw bidding volume climb and a new generation of buyers join the paddle."
        reverse
        bullets={[
          {
            title: "+150% bidding volume",
            body: "More bids, more competition, higher hammer prices across the catalog.",
          },
          {
            title: "+30% new-user adoption",
            body: "New bidders onboarded and active within the first year on the platform.",
          },
          {
            title: "One system to run",
            body: "All bidding — live and online — consolidated onto Basta's rails.",
          },
        ]}
      />

      <CTABand
        title="Want results like these?"
        sub="See how Basta would run your house's next sale."
      />
    </PageFrame>
  );
}
