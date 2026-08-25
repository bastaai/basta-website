import {
  Store,
  Code2,
  Share2,
  Rocket,
  CreditCard,
  Puzzle,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";
import { ProductMock } from "@/components/mockups";

export const metadata = {
  title: "Marketplace",
  description:
    "Launch a modern, social-first auction destination — or embed auctions natively into any site or app. Enterprise-grade to embeddable, all on Basta.",
};

export default function MarketplacePage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Marketplace"
        title="Your marketplace, your brand"
        lede="Launch a sleek, social-first auction destination in weeks — or embed auctions natively into the website, app, or store you already have. Enterprise-grade to embeddable, all on the same engine."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <ProductMock kind="marketplace" />

      <FeatureGrid
        eyebrow="Sell your way"
        title="A marketplace that bends to you"
        items={[
          {
            icon: Store,
            title: "Branded storefront",
            body: "Spin up a modern auction destination that looks and feels like you — not a template everyone else uses.",
          },
          {
            icon: Code2,
            title: "Headless & API-first",
            body: "Embed auctions natively into any web platform without bending to someone else's UX or UI rules.",
          },
          {
            icon: Share2,
            title: "Social-first selling",
            body: "Turn your followers into bidders — surface auctions where your audience already is.",
          },
          {
            icon: Rocket,
            title: "Live in weeks, not years",
            body: "Skip the multi-year rebuild. Generate a storefront in seconds and go live in weeks.",
          },
          {
            icon: CreditCard,
            title: "Payments built in",
            body: "Bidding, winning, and payment processing flow through one system, start to settlement.",
          },
          {
            icon: Puzzle,
            title: "Fits your stack",
            body: "Plug-and-play APIs and webhooks connect Basta to your CRM, CMS, and data systems.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="From outdated to unmistakable"
        title="Yesterday's auction tech, retired"
        body="The old way meant clunky software, complicated sign-ups, and platforms that were expensive to maintain and easy to outgrow. Basta is the modern default."
        bullets={[
          {
            title: "2-minute signup",
            body: "No drawn-out onboarding — get in and start building a sale right away.",
          },
          {
            title: "Proven engagement",
            body: "Modern, intuitive bidding that grows the room and lifts revenue.",
          },
          {
            title: "Scales with you",
            body: "From an embeddable widget to an enterprise-grade destination on the same rails.",
          },
        ]}
      />

      <CTABand
        title="Launch your marketplace"
        sub="See how fast you could be live on Basta."
      />
    </PageFrame>
  );
}
