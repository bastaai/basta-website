import {
  ArrowRightLeft,
  FileText,
  PenTool,
  Activity,
  UserCircle2,
  Feather,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Consignment",
  description:
    "From appraisal to consignment without re-entry, fast document generation with built-in e-signature, lifecycle reporting, and a dedicated My Account area for consignors.",
};

export default function ConsignmentPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Consignment"
        title="An easy consignment journey, for you and your clients"
        lede="Basta's consignment tools adapt to how you work — move items from appraisal straight into consignment without re-entering a thing, or bring items in directly. Either way, the paperwork and the admin get out of your way."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="From intake to signature"
        title="Built to adapt to your workflow"
        items={[
          {
            icon: ArrowRightLeft,
            title: "Appraisal to consignment, no re-entry",
            body: "Carry item details straight from an appraisal into a consignment — or start a consignment directly. Basta fits the path you already use.",
          },
          {
            icon: FileText,
            title: "Fast document generation",
            body: "Capture the details once and generate consignment agreements and paperwork straight from them — no rebuilding documents by hand.",
          },
          {
            icon: PenTool,
            title: "Built-in e-signature",
            body: "Get agreements signed without leaving the flow — e-signature is integrated, so there's no separate tool to chase clients through.",
          },
          {
            icon: Activity,
            title: "Lifecycle reporting",
            body: "Track a consigned item from intake through to sale and settlement, so both your team and the consignor know exactly where it stands.",
          },
          {
            icon: UserCircle2,
            title: "Dedicated My Account area",
            body: "Consignors get their own space to check on their items — cutting down the status-update emails and calls to your team.",
          },
          {
            icon: Feather,
            title: "Less admin, every step",
            body: "Quick capture, generated paperwork, and self-serve tracking add up to meaningfully less manual admin on every consignment.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Adapts to you"
        title="Your workflow, not a rigid process"
        body="Some items arrive through an appraisal, others go straight to consignment — Basta handles both without forcing a single path or duplicate data entry."
        reverse
        bullets={[
          {
            title: "One record, start to finish",
            body: "Item details captured once carry through appraisal, consignment, and sale — nothing gets typed twice.",
          },
          {
            title: "Signatures without friction",
            body: "Built-in e-signature means agreements get signed as part of the process, not as a separate errand.",
          },
          {
            title: "Consignors stay informed, on their own",
            body: "My Account gives clients visibility into their consignments whenever they want it, without a call to your team.",
          },
        ]}
      />

      <CTABand
        title="Make consignment easier"
        sub="See how Basta handles consignment from intake to settlement."
      />
    </PageFrame>
  );
}
