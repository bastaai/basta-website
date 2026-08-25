import {
  Tag,
  Zap,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
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
        title="Jump the hammer, buy now."
        lede="We offer a buy-now function, either as a storefront, or built into an auction. If you want, you can add a fixed buy-now price to any lot so decisive buyers can secure their deal."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        title="This is how we do it"
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
            icon: RefreshCw,
            title: "Real-time inventory",
            body: "Multi-quantity buy-now items sync stock across every device the instant one unit sells, so nobody buys what's gone.",
          },
          {
            icon: ShieldCheck,
            title: "Reserve-aware",
            body: "Tie buy-now availability to reserve and starting-price rules so it only ever shows when it makes sense to.",
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
