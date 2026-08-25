import {
  Tag,
  Zap,
  ShieldCheck,
  RefreshCw,
  CreditCard,
  Bell,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

// Placeholder copy — covers the capabilities most fixed-price "Buy Now"
// features offer alongside an auction. Swap in real Basta specifics once
// the feature is built.
export const metadata = {
  title: "Buy Now",
  description:
    "Skip the bidding — let buyers purchase a lot instantly at a fixed price, with real-time inventory and automatic settlement.",
};

export default function BuyNowPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Buy Now"
        title="Build your store. Buy now."
        lede="Not every buyer wants to wait for the hammer. Add a fixed buy-now price to any lot so a ready buyer can check out instantly — while everyone else keeps bidding."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="How buy now works"
        title="The fast lane, built in"
        items={[
          {
            icon: Tag,
            title: "Fixed buy-now price",
            body: "Set an instant-purchase price per lot, above or independent of the reserve — buyers pay it and skip bidding entirely.",
          },
          {
            icon: Zap,
            title: "Instant settlement",
            body: "The moment a buy-now purchase clears, the lot closes automatically — bidding stops and the item is marked sold.",
          },
          {
            icon: ShieldCheck,
            title: "Reserve-aware",
            body: "Tie buy-now availability to reserve and starting-price rules so it only ever shows when it makes sense to.",
          },
          {
            icon: RefreshCw,
            title: "Real-time inventory",
            body: "Multi-quantity buy-now items sync stock across every device the instant one unit sells, so nobody buys what's gone.",
          },
          {
            icon: CreditCard,
            title: "One-tap checkout",
            body: "Saved payment methods and a single confirmation step turn buy-now into a true impulse purchase.",
          },
          {
            icon: Bell,
            title: "Instant notifications",
            body: "Buyers, sellers, and underbidders all get notified the moment a lot sells — in-app, email, or via webhook.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Bidding or buying — one engine"
        title="Two ways to win the same lot"
        body="Buy Now isn't a separate storefront — it's a mode on top of the same bidding engine, so sellers can offer either path without running two systems."
        bullets={[
          {
            title: "Mixed-mode listings",
            body: "A lot can carry both a live bid and a buy-now price at once. Whichever happens first wins — bid or buy.",
          },
          {
            title: "Time-boxed availability",
            body: "Offer buy-now only for a window — say, until the first bid lands — then let the lot revert to a pure auction.",
          },
          {
            title: "Multi-lot checkout",
            body: "Let a buyer add several buy-now lots to a single cart and pay once, instead of checking out lot by lot.",
          },
        ]}
      />

      <CTABand
        title="Give bidders a fast lane"
        sub="Add a buy-now price to your next sale and see how many buyers skip the wait."
      />
    </PageFrame>
  );
}
