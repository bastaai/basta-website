import {
  Image,
  Calendar,
  BarChart3,
  BellRing,
  Smartphone,
  Sparkles,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  Statement,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Marketing",
  description:
    "Basta was built for marketing and growth — dynamic ads, events, analytics, and notifications including SMS reminders and Item Alerts, all built to grow users, first-time bidders, and revenue.",
};

export default function MarketingPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Marketing"
        title="Built to grow the room, not just run the sale"
        lede="Basta was made for marketing and growth. The tools built into the platform exist to bring in more users, turn browsers into first-time bidders, and grow revenue sale after sale — not just process the bids once they arrive."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="Tools built to fuel growth"
        title="Everything a growth-minded auction house needs"
        items={[
          {
            icon: Image,
            title: "Dynamic Ads",
            body: "Turn live lots into ad creative automatically, so your marketing keeps pace with a catalog that changes sale to sale.",
          },
          {
            icon: Calendar,
            title: "Events",
            body: "Build and promote sales as events — the moments that bring bidders back and give a sale something to build toward.",
          },
          {
            icon: BarChart3,
            title: "Analytics",
            body: "See what's actually driving growth — new users, first-time bidders, and revenue — not just how a single sale performed.",
          },
          {
            icon: BellRing,
            title: "Auction reminders",
            body: "Notify bidders before a lot closes or a sale opens, over email, push, or SMS — whichever gets seen.",
          },
          {
            icon: Smartphone,
            title: "SMS notifications",
            body: "Reach bidders where they're most likely to act — SMS reminders keep a sale front of mind without relying on an open inbox.",
          },
          {
            icon: Sparkles,
            title: "Item Alerts",
            body: "Let bidders follow the categories or items they care about, and notify them the moment something matching goes live.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Growth, not just throughput"
        title="Marketing built into the platform, not bolted on"
        body="Most auction platforms treat marketing as something you do around the software. Basta treats it as part of the software — so the tools that bring bidders in are as native as the ones that run the sale."
        reverse
        bullets={[
          {
            title: "More first-time bidders",
            body: "Item Alerts and reminders turn casual browsers into people who actually place a bid.",
          },
          {
            title: "More reasons to come back",
            body: "Events give bidders a reason to return, not just a sale to stumble across.",
          },
          {
            title: "Growth you can see",
            body: "Analytics tie marketing activity back to real outcomes — users, bidders, and revenue.",
          },
        ]}
      />

      <Statement cite="Growth on Basta">
        Auction houses running on Basta have seen real, measurable growth —
        more users, more first-time bidders, and more revenue per sale.
      </Statement>

      <CTABand
        title="Grow the room, not just the sale"
        sub="See the marketing tools built into Basta."
      />
    </PageFrame>
  );
}
