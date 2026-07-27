import { HeartHandshake, Zap, MonitorSmartphone, CreditCard } from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  Statement,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Charities",
  description:
    "Run fundraising auctions that raise more with less lift — real-time bidding for galas and campaigns, embeddable on your own site.",
};

export default function CharitiesPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Solutions · Charities"
        title="Raise more, with less lift"
        lede="Turn a gala or a campaign into a room full of bidders. Basta brings the energy of a live auction to your fundraising — set up in minutes, hosted on your own site."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
      />

      <FeatureGrid
        eyebrow="Fundraising, upgraded"
        title="Everything a benefit auction needs"
        items={[
          {
            icon: HeartHandshake,
            title: "Fundraiser-ready",
            body: "Silent tables, live lots, or a full online sale — Basta handles the format your event calls for.",
          },
          {
            icon: Zap,
            title: "Bidding that builds energy",
            body: "Live countdowns and real-time outbid alerts create the competitive push that lifts final numbers.",
          },
          {
            icon: MonitorSmartphone,
            title: "Bid from any seat",
            body: "Supporters bid from their phones in the room or from home — no clunky sign-up in the way.",
          },
          {
            icon: CreditCard,
            title: "Settlement handled",
            body: "Winning and payment processing happen automatically, so your team isn't chasing paperwork after.",
          },
        ]}
      />

      <Statement cite="Built for the cause">
        A better auction is a bigger donation. Give your supporters a room worth
        raising a paddle in.
      </Statement>

      <CTABand
        title="Fundraise on Basta"
        sub="See how your next benefit auction could run."
      />
    </PageFrame>
  );
}
