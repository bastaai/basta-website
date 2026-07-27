import { Repeat, Wallet, Globe, Database } from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Non-Profits",
  description:
    "Turn supporters into bidders year-round. Low-overhead auction fundraising you can embed anywhere and connect to your existing systems.",
};

export default function NonProfitsPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Solutions · Non-Profits"
        title="Turn supporters into bidders"
        lede="Fundraising isn't only one night a year. Basta gives your organization modern auction rails you can run again and again — without the overhead of legacy tools."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
      />

      <FeatureGrid
        eyebrow="Made for mission"
        title="Fundraising that scales with you"
        items={[
          {
            icon: Repeat,
            title: "Run it again and again",
            body: "Stand up recurring campaigns and seasonal drives on the same platform, without rebuilding each time.",
          },
          {
            icon: Wallet,
            title: "Low overhead",
            body: "Modern, plug-and-play tech replaces expensive, hard-to-maintain auction software.",
          },
          {
            icon: Globe,
            title: "Embed anywhere",
            body: "Drop auctions natively into your existing website or social channels — meet donors where they are.",
          },
          {
            icon: Database,
            title: "Connects to your systems",
            body: "APIs and webhooks keep your CRM and donor data in sync automatically.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="From clunky to compelling"
        title="Legacy fundraising tech, retired"
        body="The old way was complicated sign-ups, poor engagement, and platforms that were hard to connect to your data. Basta is the modern default for mission-driven auctions."
        reverse
        bullets={[
          {
            title: "2-minute setup",
            body: "Get a campaign live fast — no drawn-out onboarding or IT project.",
          },
          {
            title: "Real engagement",
            body: "Real-time bidding keeps supporters coming back and giving more.",
          },
          {
            title: "Own your audience",
            body: "Everything runs on your site and your brand, feeding your systems, not a walled garden.",
          },
        ]}
      />

      <CTABand
        title="Fundraise smarter"
        sub="See how your non-profit could run auctions on Basta."
      />
    </PageFrame>
  );
}
