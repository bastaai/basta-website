import { Layers, Gauge, Palette, Puzzle } from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  StatBand,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Auction Houses",
  description:
    "Retire clunky, outdated auction tech. Unify online and live bidding on modern rails built by auction insiders — and proven at houses like Julien's.",
};

export default function AuctionHousesPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Solutions · Auction Houses"
        title="Modern rails for established houses"
        lede="Built by auction insiders who were tired of broken tech. Move your online and live sales onto one modern engine — without the multi-year rebuild."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
      />

      <FeatureGrid
        eyebrow="Why houses switch"
        title="Everything the salesroom needs"
        items={[
          {
            icon: Layers,
            title: "Online and live, unified",
            body: "Run timed and live sales on one engine so no bid — and no bidder — falls between systems.",
          },
          {
            icon: Gauge,
            title: "High-frequency bidding",
            body: "Carry the intensity of headline lots with real-time bidding that doesn't buckle under the crowd.",
          },
          {
            icon: Palette,
            title: "Unmistakably yours",
            body: "Keep your brand and your experience — Basta powers the mechanics behind the scenes.",
          },
          {
            icon: Puzzle,
            title: "Integrates with your stack",
            body: "Plug-and-play APIs and webhooks connect to the CRM, CMS, and data systems you already run.",
          },
        ]}
      />

      <StatBand
        stats={[
          { value: "150%", label: "increase in bidding volume at Julien's" },
          { value: "30%", label: "new-user adoption in 12 months" },
          { value: "Weeks", label: "to launch, not years" },
          { value: "Ex-Sotheby's", label: "leadership behind the platform" },
        ]}
      />

      <CTABand
        title="Bring your house onto Basta"
        sub="See how your next sale would run on modern rails."
      />
    </PageFrame>
  );
}
