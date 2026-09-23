import {
  Smartphone,
  Gavel,
  Bell,
  ShieldAlert,
  BookOpen,
  MonitorPlay,
  Layers,
  CreditCard,
} from "lucide-react";
import { PageFrame, MarketingHero, FeatureGrid, CTABand } from "@/components/marketing";
import { ProductMock } from "@/components/mockups";

export const metadata = {
  title: "Live Auction",
  description:
    "Run live sales with high quality streaming, real-time bidding, live countdowns, and anti-sniping extensions that keep the room honest — our live-room client is responsive so it looks and works great on any device.",
};

export default function LiveAuctionPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Live Auction"
        title="Auctions that feel alive"
        lede="Run live sales with high quality streaming, real-time bidding, live countdowns, and anti-sniping extensions that keep the room honest — our live-room client is responsive so it looks and works great on any device."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <ProductMock kind="live" />

      <FeatureGrid
        eyebrow="In the room"
        title="Built for the drama of a live close"
        items={[
          {
            icon: Smartphone,
            title: "Live Bid Client",
            body: "Consumers can access the auction via any device. The client is fully responsive and has full functionality to navigate between lots and place bids or max bids.",
          },
          {
            icon: Gavel,
            title: "Clerk Tool",
            body: "The clerk has full power of the auction via our clerk tool, and can also accept bids from various aggregators such as Live Auctioneers and Invaluable.",
          },
          {
            icon: Bell,
            title: "Real-time notifications",
            body: "Bids and outbid notifications stream instantly to every device — no refresh, no lag, no missed paddle.",
          },
          {
            icon: ShieldAlert,
            title: "Anti-sniping extensions",
            body: "The clerk tool catches late bids and notifies the clerk, allowing them to accept a late bid and continue the bidding instead of closing the lot prematurely.",
          },
          {
            icon: BookOpen,
            title: "Digital Auctioneers book",
            body: "Allow the room to follow the current bids via a large screen customised to your brand guidelines.",
          },
          {
            icon: MonitorPlay,
            title: "Jumbotron",
            body: "Allow the room to follow the current bids via a large screen customised to your brand guidelines.",
          },
          {
            icon: Layers,
            title: "One engine, online + live",
            body: "The same real-time core powers your website, app, and live room, so no bid falls between systems.",
          },
          {
            icon: CreditCard,
            title: "Automatic settlement",
            body: "When bidding ends, payment processing kicks off automatically — no manual reconciliation.",
          },
        ]}
      />

      <CTABand title="Run your next sale live" />
    </PageFrame>
  );
}
