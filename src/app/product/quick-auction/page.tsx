import {
  Zap,
  Share2,
  Sparkles,
  Smartphone,
  CreditCard,
  Link2,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  Statement,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Quick Auctions",
  description:
    "A single-lot, self-service auction you can launch in seconds and share anywhere — built for creators and influencers selling one-of-ones directly to their audience.",
};

export default function QuickAuctionPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Quick / Social Auctions"
        title="One item, one link, one auction"
        lede="Skip the storefront build. Create a single-lot auction in seconds, share the link wherever your audience already is, and let bidding do the rest — no dev team, no setup call."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="Self-service by design"
        title="Built for a single drop, not a catalog"
        items={[
          {
            icon: Zap,
            title: "Live in seconds",
            body: "Set a title, a photo, and a starting price — no account manager, no onboarding call, no waiting on a build.",
          },
          {
            icon: Link2,
            title: "One shareable link",
            body: "Every quick auction gets its own page you can drop straight into a bio, a story, or a DM.",
          },
          {
            icon: Share2,
            title: "Sell where you post",
            body: "Embed the lot natively in your site or app, or just link out — bidding happens wherever your audience is.",
          },
          {
            icon: Sparkles,
            title: "Built for one-of-ones",
            body: "Perfect for a single collectible, a piece of merch, or an exclusive drop — the format that suits a single hero item.",
          },
          {
            icon: Smartphone,
            title: "Real-time bidding",
            body: "The same live bidding engine that powers full auction houses, scaled down to a single lot your fans can follow instantly.",
          },
          {
            icon: CreditCard,
            title: "Payments handled",
            body: "Bidding through settlement runs on one system, so the winner pays and you get paid — no separate checkout to build.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Quick auction vs. marketplace"
        title="Not every drop needs a storefront"
        body="Marketplace is for running an ongoing auction destination with a full catalog. Quick Auctions is the fast path for a single item — the same engine, without the setup."
        bullets={[
          {
            title: "No catalog to manage",
            body: "One lot, one page — nothing to organize or maintain after the sale closes.",
          },
          {
            title: "Self-service from the start",
            body: "Built for creators and individual sellers to launch on their own, without a sales conversation first.",
          },
          {
            title: "Upgrade path built in",
            body: "Outgrow a single lot? The same account moves to Marketplace on the same underlying engine.",
          },
        ]}
      />

      <Statement cite="Creators on Basta">
        When Pharrell Williams built Joopiter, he turned to Basta to style his
        auctions his way — without the creative limits of traditional platforms.
      </Statement>

      <CTABand
        title="Launch your first quick auction"
        sub="Get a single lot live and shareable in minutes."
      />
    </PageFrame>
  );
}
