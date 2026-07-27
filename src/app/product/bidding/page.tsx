import {
  Gauge,
  Bot,
  ListOrdered,
  Timer,
  ShieldCheck,
  Radio,
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
  title: "Bidding",
  description:
    "High-frequency bidding with automatic max bids, tiered increment tables, and real-time updates — the engine behind every Basta sale.",
};

export default function BiddingPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Bidding"
        title="A bidding engine built for the moment"
        lede="Automatic max bids, tiered increments, and real-time updates — the mechanics that keep competition high and the room moving, whether it's one lot or ten thousand."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <ProductMock kind="bidding" />

      <FeatureGrid
        eyebrow="How bidding works"
        title="Every bid type, handled"
        items={[
          {
            icon: Bot,
            title: "Automatic max bids",
            body: "Bidders set the most they'll pay; Basta bids incrementally on their behalf up to that ceiling — and they often win for less.",
          },
          {
            icon: Gauge,
            title: "Normal bids",
            body: "One-time bids at a specific amount, validated against the increment table so every bid is a legal step up.",
          },
          {
            icon: ListOrdered,
            title: "Tiered increment tables",
            body: "Define the minimum step between bids by price range. Steps scale as the price climbs, right off the grid.",
          },
          {
            icon: Timer,
            title: "Next-ask amounts",
            body: "The engine computes the next valid bids for every item, so your bid buttons and presets are always correct.",
          },
          {
            icon: ShieldCheck,
            title: "Starting bids & reserves",
            body: "Open low to spark competition and set a hidden reserve that must be met before a winner is declared.",
          },
          {
            icon: Radio,
            title: "Real-time everything",
            body: "Bids, outbids, and status changes stream to every device over WebSocket subscriptions — no refresh required.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Built for peak demand"
        title="High-frequency bidding, without the buckling"
        body="Marquee lots draw a crowd. Basta's engine is designed to carry that intensity and keep every bidder in sync in real time."
        bullets={[
          {
            title: "Reactive bids",
            body: "When a max bid absorbs a challenge, everyone sees the new high instantly — competition stays honest.",
          },
          {
            title: "Increment integrity",
            body: "Continuous, validated increment rules mean no ambiguous or off-grid bids, ever.",
          },
          {
            title: "One engine, any surface",
            body: "The same bidding core powers your website, app, and the live room through one API.",
          },
        ]}
      />

      <CTABand
        title="Put it to the test"
        sub="See the bidding engine run on your own catalog."
      />
    </PageFrame>
  );
}
