import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  Statement,
  CTABand,
} from "@/components/marketing";
import { Code2, PenTool, Gavel, Megaphone } from "lucide-react";

export const metadata = {
  title: "Jobs",
  description:
    "Help us build the rails for modern auctions. Open roles across engineering, design, auction operations, and go-to-market.",
};

export default function JobsPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Careers"
        title="Build the rails for modern auctions"
        lede="We're a small team obsessed with the mechanics of bidding — increment tables, live rooms, settlement, the lot. If you love the game and love shipping, we should talk."
        primary={{ label: "Introduce yourself", href: "/contact" }}
      />

      <Statement cite="Our culture">
        We move between four registers — knowing, visionary, precise, and
        reliable — and never let the work get jaded or cold.
      </Statement>

      <FeatureGrid
        eyebrow="Where we're hiring"
        title="Teams at Basta"
        intro="We hire for depth and devotion over pedigree. Don't see your exact role? Reach out anyway."
        items={[
          {
            icon: Code2,
            title: "Engineering",
            body: "Real-time bidding systems, high-frequency infrastructure, APIs, and SDKs that other teams build on.",
          },
          {
            icon: PenTool,
            title: "Design",
            body: "Product and brand craft for a category that has never had a modern default. Type, motion, and interface.",
          },
          {
            icon: Gavel,
            title: "Auction operations",
            body: "The people who know the game — clerking, cataloging, live-room choreography, and customer success.",
          },
          {
            icon: Megaphone,
            title: "Go-to-market",
            body: "Partnerships and growth with houses, charities, and creators bringing their sales onto Basta.",
          },
        ]}
      />

      <CTABand
        title="No open role that fits?"
        sub="We're always glad to meet people who love this world. Tell us what you'd build."
        cta={{ label: "Get in touch", href: "/contact" }}
      />
    </PageFrame>
  );
}
