import {
  LayoutDashboard,
  ListChecks,
  Signature,
  Truck,
  Wrench,
  BellRing,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Shipping & Logistics",
  description:
    "Dashboards showing what's arriving and what's leaving, pick lists, signature release, integrations with third-party shippers or support for in-house shipping, and automatic collection reminders.",
};

export default function ShippingLogisticsPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Shipping & Logistics"
        title="Know what's coming in, what's going out"
        lede="Getting items to buyers is where a lot of auction operations quietly break down. Basta gives you a clear view of what's arriving and what's leaving, the tools to pick and release it properly, and the flexibility to ship however you already do."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="From the loading dock to the doorstep"
        title="Built for the physical side of a sale"
        items={[
          {
            icon: LayoutDashboard,
            title: "Arrivals and departures, at a glance",
            body: "A dashboard shows what's due in and what's due out, so nothing sits waiting because no one noticed it was ready.",
          },
          {
            icon: ListChecks,
            title: "Pick lists",
            body: "Generate pick lists straight from won lots, so warehouse staff know exactly what to pull and where it's going.",
          },
          {
            icon: Signature,
            title: "Signature release",
            body: "Require a signature before an item leaves, so there's a clear record of who collected what, and when.",
          },
          {
            icon: Truck,
            title: "Third-party shipper integrations",
            body: "Connect the couriers and freight partners you already use, so shipping doesn't mean a second system to manage.",
          },
          {
            icon: Wrench,
            title: "Built for in-house shipping too",
            body: "Prefer to handle logistics yourself? Basta's tools support your own shipping process just as well as a third-party integration.",
          },
          {
            icon: BellRing,
            title: "Automatic collection reminders",
            body: "Chase buyers who haven't collected or arranged shipping yet, without your team having to track and follow up manually.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Flexible by design"
        title="Fits how you already move items"
        body="Some houses ship in-house, others lean on couriers and freight partners — often both, depending on the sale. Basta doesn't force a single path."
        reverse
        bullets={[
          {
            title: "Nothing leaves unaccounted for",
            body: "Pick lists and signature release keep a clear trail from won lot to collected item.",
          },
          {
            title: "Use your existing partners",
            body: "Third-party shipper integrations mean you're not ripping out relationships that already work.",
          },
          {
            title: "Fewer items left waiting",
            body: "Automatic reminders mean collections and shipments don't stall just because a buyer forgot.",
          },
        ]}
      />

      <CTABand
        title="Get items out the door faster"
        sub="See how shipping and logistics work on Basta."
      />
    </PageFrame>
  );
}
