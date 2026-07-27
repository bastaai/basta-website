import {
  Timer,
  Radio,
  ShieldAlert,
  LayoutGrid,
  CreditCard,
  Layers,
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
  title: "Live Auction",
  description:
    "Real-time auctions with live countdowns, anti-sniping time extensions, and automatic settlement — timed or live, online and in the room.",
};

export default function LiveAuctionPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Live Auction"
        title="Auctions that feel alive"
        lede="Run timed or live sales with real-time bidding, live countdowns, and anti-sniping extensions that keep the room honest — then settle automatically when the hammer falls."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <ProductMock kind="live" />

      <FeatureGrid
        eyebrow="In the room"
        title="Built for the drama of a live close"
        items={[
          {
            icon: Timer,
            title: "Live countdowns",
            body: "Every lot runs its own clock, counting down in real time so bidders feel the pressure of the close.",
          },
          {
            icon: Radio,
            title: "Real-time updates",
            body: "Bids and outbid notifications stream instantly to every device — no refresh, no lag, no missed paddle.",
          },
          {
            icon: ShieldAlert,
            title: "Anti-sniping extensions",
            body: "A bid in the final moments resets the countdown, giving everyone a fair chance to respond before it closes.",
          },
          {
            icon: LayoutGrid,
            title: "Simultaneous or staggered",
            body: "Close every lot at once, or stagger their starts for a sequential, one-after-another feel with overlap.",
          },
          {
            icon: CreditCard,
            title: "Automatic settlement",
            body: "When bidding ends, payment processing kicks off automatically — no manual reconciliation.",
          },
          {
            icon: Layers,
            title: "One engine, online + live",
            body: "The same real-time core powers your website, app, and live room, so no bid falls between systems.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Anti-sniping, explained"
        title="Nobody wins by lurking"
        body="Last-second bids don't end a lot on Basta — they extend it. The countdown resets within its window so genuine competition, not timing tricks, decides the winner."
        reverse
        bullets={[
          {
            title: "Fair by design",
            body: "A late bid gives every other bidder time to answer before the lot can close.",
          },
          {
            title: "Bounded extensions",
            body: "Extensions never run longer than the lot's countdown, so sales still finish on schedule.",
          },
          {
            title: "Higher hammers",
            body: "More responsive competition in the final moments means stronger closing prices.",
          },
        ]}
      />

      <CTABand
        title="Run your next sale live"
        sub="See a live close on Basta with your own lots."
      />
    </PageFrame>
  );
}
