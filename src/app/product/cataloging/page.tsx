import { Boxes, Tags, CalendarClock, Workflow, KeyRound, Webhook } from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";
import { ProductMock } from "@/components/mockups";

export const metadata = {
  title: "Cataloging",
  description:
    "Build sales and lots with starting bids, reserves, and closing windows — managed from the dashboard or entirely through Basta's API.",
};

export default function CatalogingPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Cataloging"
        title="From lot to live in minutes"
        lede="Organize sales, price your lots, and schedule how they open and close — from the dashboard, or programmatically through an API-first engine that fits your existing stack."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <ProductMock kind="cataloging" />

      <FeatureGrid
        eyebrow="Structure your sale"
        title="Everything a catalog needs"
        items={[
          {
            icon: Boxes,
            title: "Sales & lots",
            body: "Group items into a sale, then add each lot with its own details, timing, and pricing.",
          },
          {
            icon: Tags,
            title: "Pricing controls",
            body: "Set a starting bid to open competition and a hidden reserve that protects the floor.",
          },
          {
            icon: CalendarClock,
            title: "Scheduling",
            body: "Give each lot its own open and closing window — simultaneous, or staggered for a sequential feel.",
          },
          {
            icon: Workflow,
            title: "Clear lifecycle",
            body: "Every sale moves through a defined lifecycle — unpublished, published, then open — with Basta managing the transitions.",
          },
          {
            icon: KeyRound,
            title: "API-first management",
            body: "A dedicated Management API lets you create, price, and publish inventory straight from your systems.",
          },
          {
            icon: Webhook,
            title: "Status webhooks",
            body: "Subscribe to sale and item status changes to keep your catalog, CMS, and CRM in sync.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Fits your stack"
        title="Manage inventory your way"
        body="Run everything from Basta's dashboard, or drive it from the tools you already use. The engine is built to slot into your existing catalog and content workflows."
        reverse
        bullets={[
          {
            title: "Dashboard or API",
            body: "Non-technical teams work in the dashboard; engineers automate the same actions over the API.",
          },
          {
            title: "Keep systems in sync",
            body: "Idempotent webhooks fire on every status change, so downstream systems never drift.",
          },
          {
            title: "One source of truth",
            body: "The catalog that powers bidding is the same one your storefront and live room read from.",
          },
        ]}
      />

      <CTABand
        title="Ready to build your first sale?"
        sub="We'll help you get a catalog live on Basta."
      />
    </PageFrame>
  );
}
