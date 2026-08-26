import {
  TrendingDown,
  Layers,
  Users,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Dutch Auction",
  description:
    "Run descending-price drops with a public price ladder, uniform clearing, and per-bidder caps — multi-unit sales where the price falls until buyers claim it. Beta.",
};

export default function DutchAuctionPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Dutch Auction · Beta"
        title="The price falls until it's claimed"
        lede="List a multi-unit drop with a price that steps down on a public schedule. Buyers accept at the current clock price, and everyone who wins pays the same clearing price — no guessing, no gaming the ladder."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/dutch-auctions-(beta)" }}
      />

      <FeatureGrid
        eyebrow="How the drop works"
        title="A staircase, not a guessing game"
        items={[
          {
            icon: TrendingDown,
            title: "Public price ladder",
            body: "Set an opening price and every timed drop in advance — the full descent is visible to buyers before the lot even opens.",
          },
          {
            icon: Layers,
            title: "Multi-unit lots",
            body: "Sell a whole run from one lot. Available units are fixed at creation and count down as bids are accepted.",
          },
          {
            icon: ShieldCheck,
            title: "Uniform clearing price",
            body: "Every winner pays the same final price — the lowest accepted price, or the floor if the run doesn't sell out — regardless of when they bought in.",
          },
          {
            icon: Users,
            title: "Per-bidder caps",
            body: "Limit how many bids or units any one buyer can claim, so a single account can't take an outsized share of the drop.",
          },
          {
            icon: Radio,
            title: "Live clock, pushed in real time",
            body: "The current price, next drop, and remaining units stream to every device the instant something changes — no polling required.",
          },
          {
            icon: Sparkles,
            title: "Available in beta",
            body: "Dutch auctions are enabled per account — get in touch to turn it on for yours.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Why a clearing price"
        title="Fair to the first buyer and the last"
        body="Bidders accept at whatever the clock shows when they act — but nobody is punished for buying early. Once the drop ends, every winner settles at the same price."
        bullets={[
          {
            title: "No mismatch risk",
            body: "If the clock ticks past a drop before a bid lands, it's rejected and re-priced automatically — buyers never pay a stale figure.",
          },
          {
            title: "Sells out or floors out",
            body: "A lot closes the moment every unit is claimed, or at its scheduled end if the floor price is reached first.",
          },
          {
            title: "Built on the same engine",
            body: "Dutch drops share Basta's real-time bidding core with live and online auctions — one system, another format.",
          },
        ]}
      />

      <CTABand
        title="Run your first drop"
        sub="Dutch auctions are in beta — talk to us about enabling it for your account."
      />
    </PageFrame>
  );
}
