import {
  Calculator,
  FileCheck2,
  CreditCard,
  BellRing,
  ShieldCheck,
  Gauge,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Invoicing & Settlement",
  description:
    "Automatic commission, fee, and deduction calculations with a full audit trail. Stripe, Opayo, and other major payment providers, automatic reminders, and customizable AML workflows.",
};

export default function InvoicingSettlementPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Invoicing & Settlement"
        title="Fast to get paid, accurate to settle"
        lede="Invoicing and settlement are the backbone of any auction house. Basta gets cash in fast on the buyer side and settles consignors accurately on the other — with every commission, fee, and deduction calculated automatically and a full audit trail behind every figure."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="From hammer to payout"
        title="Every figure, calculated and traceable"
        items={[
          {
            icon: Calculator,
            title: "Automatic settlement math",
            body: "Commissions, fees, and deductions are calculated automatically the moment a lot closes — no spreadsheets, no manual reconciliation.",
          },
          {
            icon: FileCheck2,
            title: "Full audit trail",
            body: "Every figure on every invoice and payout is traceable back to how it was calculated — clear for your team, and for consignors who ask.",
          },
          {
            icon: CreditCard,
            title: "Pay however buyers prefer",
            body: "Integrate with Stripe, Opayo, and other major payment providers, so buyers can settle their invoice using the method they already trust.",
          },
          {
            icon: BellRing,
            title: "Automatic reminders",
            body: "Chase outstanding invoices without lifting a finger — reminders go out on schedule so stragglers don't fall through the cracks.",
          },
          {
            icon: ShieldCheck,
            title: "Customizable AML workflows",
            body: "Stay compliant with anti-money-laundering checks you can tune to your business, without adding friction for legitimate buyers.",
          },
          {
            icon: Gauge,
            title: "Real-time dashboard",
            body: "See exactly what's outstanding and what's owed at any moment, across every sale — no waiting on a report to know where you stand.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Cash in, consignors paid"
        title="The backbone your finance team can trust"
        body="Settlement is where trust is won or lost — with buyers, and with consignors. Basta handles the calculation and the chasing, so your team can focus on the sale, not the reconciliation."
        reverse
        bullets={[
          {
            title: "Accurate every time",
            body: "Commission and fee logic runs the same way on every lot, so consignor statements are consistent and defensible.",
          },
          {
            title: "Compliance without friction",
            body: "AML workflows apply where you need them, tuned so genuine buyers aren't slowed down by unnecessary checks.",
          },
          {
            title: "Nothing goes unnoticed",
            body: "Outstanding balances surface in real time, so nothing sits unpaid because no one was watching.",
          },
        ]}
      />

      <CTABand
        title="See settlement done right"
        sub="Talk to us about invoicing and settlement on Basta."
      />
    </PageFrame>
  );
}
