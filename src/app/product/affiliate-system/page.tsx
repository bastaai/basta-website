import {
  Link2,
  Percent,
  Wallet,
  LayoutDashboard,
  Users,
  BarChart3,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Affiliate System",
  description:
    "Turn partners and referrers into a growth channel — unique referral links, automatic commission tracking, and payouts, all visible in a dedicated affiliate dashboard.",
};

export default function AffiliateSystemPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Affiliate System"
        title="Let your network sell for you"
        lede="Turn partners, influencers, and referrers into a real growth channel. Every affiliate gets a unique link, every referred bid is tracked automatically, and commissions get calculated and paid out without a spreadsheet in sight."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="Referrals, tracked automatically"
        title="Everything an affiliate program needs"
        items={[
          {
            icon: Link2,
            title: "Unique referral links",
            body: "Every affiliate gets their own trackable link to a sale, a lot, or your storefront — no manual codes to distribute or reconcile.",
          },
          {
            icon: BarChart3,
            title: "Automatic attribution",
            body: "Bids and sales that come through a referral link are tracked back to the affiliate automatically, from click to close.",
          },
          {
            icon: Percent,
            title: "Flexible commission rules",
            body: "Set commission rates by affiliate, by sale, or by category — a flat rate for everyone, or tiered rates for your top partners.",
          },
          {
            icon: Wallet,
            title: "Automatic payouts",
            body: "Commissions are calculated as sales close, so paying affiliates doesn't mean totaling up spreadsheets at the end of the month.",
          },
          {
            icon: LayoutDashboard,
            title: "Affiliate dashboard",
            body: "Partners can see their own clicks, referrals, and earnings in real time, without emailing your team for an update.",
          },
          {
            icon: Users,
            title: "Built for any kind of partner",
            body: "Works for influencers driving a single drop, or long-term partners referring buyers across every sale you run.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Growth without the overhead"
        title="A channel that runs itself"
        body="Affiliate programs usually fall apart on tracking and payout admin. Basta handles both automatically, so the program keeps running without someone chasing numbers every month."
        reverse
        bullets={[
          {
            title: "Nothing gets missed",
            body: "Automatic attribution means a referral doesn't go uncredited just because no one logged it.",
          },
          {
            title: "Partners see their own numbers",
            body: "A self-serve dashboard cuts down on 'how much have I earned' messages to your team.",
          },
          {
            title: "Scales with your network",
            body: "Whether it's five partners or five hundred, the tracking and payout logic works the same way.",
          },
        ]}
      />

      <CTABand
        title="Turn referrals into revenue"
        sub="See how the affiliate system works on Basta."
      />
    </PageFrame>
  );
}
