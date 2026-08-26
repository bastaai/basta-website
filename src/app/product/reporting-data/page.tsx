import {
  LayoutDashboard,
  MessageSquareText,
  TrendingUp,
  SlidersHorizontal,
  Download,
  Bell,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Reporting & Data",
  description:
    "Real-time dashboards across sales, inventory, and settlement, plus an AI chat interface for asking questions about your data in plain language.",
};

export default function ReportingDataPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Reporting & Data"
        title="Know where every number stands"
        lede="Sales, inventory, and settlement data live in one place — visible on real-time dashboards, or a question away through Basta's AI chat. No waiting on a report to know how a sale is going."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="See it, or just ask"
        title="Data that answers back"
        items={[
          {
            icon: LayoutDashboard,
            title: "Real-time dashboards",
            body: "Sales performance, inventory status, and outstanding settlements update live — no waiting on an overnight report to see where things stand.",
          },
          {
            icon: MessageSquareText,
            title: "Ask in plain language",
            body: "Basta's AI chat lets you ask questions about your data directly — \"what's outstanding this week\" gets an answer, not a spreadsheet to build.",
          },
          {
            icon: TrendingUp,
            title: "Sales performance, at a glance",
            body: "Track bidding volume, hammer prices, and sell-through rate across sales, categories, or specific lots.",
          },
          {
            icon: SlidersHorizontal,
            title: "Drill down from summary to lot",
            body: "Start from a top-line number and get to the individual lot, bidder, or invoice behind it in a couple of clicks.",
          },
          {
            icon: Download,
            title: "Export when you need to",
            body: "Pull data out for finance, board reporting, or your own analysis, without waiting on someone to run a query for you.",
          },
          {
            icon: Bell,
            title: "Alerts on what matters",
            body: "Get notified when something needs attention — an outstanding balance, a stalled sale, a stock discrepancy — instead of hunting for it.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Built for how you actually work"
        title="Dashboards for the overview, chat for the follow-up question"
        body="Most reporting tools make you build a view for every question. Basta gives you dashboards for the numbers you check often, and an AI chat for everything else you'd normally have to ask someone on the team to pull."
        reverse
        bullets={[
          {
            title: "No dashboard-building required",
            body: "Ask a follow-up question in chat instead of constructing a new report or filter view.",
          },
          {
            title: "One source of truth",
            body: "Dashboards and chat both read from the same live data as the rest of Basta — nothing goes stale in a separate export.",
          },
          {
            title: "From the boardroom to the cataloguing room",
            body: "High-level performance for leadership, lot-level detail for the team running the sale — same data, different views.",
          },
        ]}
      />

      <CTABand
        title="See your data, live"
        sub="Get a look at reporting and AI chat on Basta."
      />
    </PageFrame>
  );
}
