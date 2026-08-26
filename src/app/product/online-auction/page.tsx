import {
  Clock,
  Globe,
  LayoutGrid,
  ShieldAlert,
  Smartphone,
  CreditCard,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Online Auction",
  description:
    "Run fully online, timed auctions — no live room required. Bidders compete from anywhere on a fixed schedule, with anti-sniping extensions and automatic settlement.",
};

export default function OnlineAuctionPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Online Auction"
        title="Bid anywhere, close on schedule"
        lede="Run a fully online, timed sale — no live room, no scheduled call-in. Bidders browse and bid whenever suits them, and every lot closes automatically on a schedule you set."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="Built for asynchronous bidding"
        title="A sale that runs itself"
        items={[
          {
            icon: Clock,
            title: "Scheduled close times",
            body: "Set an open and close time per lot or across the whole sale — bidding runs unattended until then.",
          },
          {
            icon: Globe,
            title: "Bid from anywhere",
            body: "No live room to join. Bidders browse the catalog and place bids on their own time, from any device.",
          },
          {
            icon: LayoutGrid,
            title: "Simultaneous or staggered closes",
            body: "Close every lot at once for a single deadline, or stagger closing times to keep bidders engaged across the sale.",
          },
          {
            icon: ShieldAlert,
            title: "Anti-sniping extensions",
            body: "A late bid resets that lot's countdown, so a last-second bid can't end the sale before others get a fair chance to respond.",
          },
          {
            icon: Smartphone,
            title: "Real-time updates",
            body: "Outbid alerts and price updates stream instantly, so bidders always know where they stand without refreshing.",
          },
          {
            icon: CreditCard,
            title: "Automatic settlement",
            body: "When a lot closes, payment processing kicks off immediately — no manual invoicing or reconciliation.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Timed, not live"
        title="All the competition, none of the room"
        body="Online auctions give bidders the freedom to compete on their own schedule, while Basta's engine handles the parts that would otherwise need a live host — timing, fairness, and settlement."
        bullets={[
          {
            title: "No live room needed",
            body: "Skip the overhead of streaming or hosting a live close — the schedule does the work.",
          },
          {
            title: "Same fairness guarantees",
            body: "Anti-sniping and increment rules apply exactly as they would in a live sale.",
          },
          {
            title: "Pairs with live sales",
            body: "Run online-only, or use it alongside live auctions on the same engine and catalog.",
          },
        ]}
      />

      <CTABand
        title="Launch a timed sale"
        sub="See how an online-only auction runs on your own catalog."
      />
    </PageFrame>
  );
}
