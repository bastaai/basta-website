import { Sparkles, Share2, Flame, CreditCard } from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  Statement,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Influencers",
  description:
    "Turn your followers into bidders. Generate a social-first auction storefront in seconds and sell drops, collectibles, and one-of-ones on your own terms.",
};

export default function InfluencersPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Solutions · Creators & Influencers"
        title="Turn your followers into bidders"
        lede="Auctions built for the social age. Generate a storefront in seconds, embed it wherever your audience already is, and sell drops and one-of-ones without the creative limits of old platforms."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
      />

      <FeatureGrid
        eyebrow="Social-first by design"
        title="Sell to your audience, your way"
        items={[
          {
            icon: Sparkles,
            title: "Storefront in seconds",
            body: "Spin up a branded auction page instantly — no dev team, no multi-week build.",
          },
          {
            icon: Share2,
            title: "Sell where you post",
            body: "Embed auctions natively into your site or social so bidding happens where your followers already are.",
          },
          {
            icon: Flame,
            title: "Drops & limited releases",
            body: "Perfect for exclusive items, collectibles, and one-of-ones — competitive bidding drives the hype.",
          },
          {
            icon: CreditCard,
            title: "Payments handled",
            body: "Bidding through settlement runs on one system, so you focus on the drop, not the logistics.",
          },
        ]}
      />

      <Statement cite="Creators on Basta">
        When Pharrell Williams built Joopiter, he turned to Basta to style his
        auctions his way — without the creative limits of traditional platforms.
      </Statement>

      <CTABand
        title="Launch your first drop"
        sub="See how fast you could be auctioning to your audience."
      />
    </PageFrame>
  );
}
