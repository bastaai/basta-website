import Link from "next/link";
import { PageFrame, MarketingHero, StatBand, CTABand } from "@/components/marketing";

export const metadata = {
  title: "Customers",
  description:
    "Historic houses, culture-shaping brands, and thousands of creators run their auctions on Basta.",
};

const customers = [
  "Julien's Auctions",
  "Joopiter",
  "Freeman's",
  "UMG",
  "Candy.io",
  "Fandiem",
  "+1,000 creators & influencers",
];

export default function CustomersPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Customers"
        title="Who's selling on Basta"
        lede="From houses with a century of provenance to creators running their first drop — Basta powers bidding and live auctions across the culture spectrum."
        primary={{ label: "Read the Julien's story", href: "/case-studies/juliens" }}
        secondary={{ label: "Book a demo", href: "/book-a-demo" }}
      />

      <section className="border-b border-muted/60 px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-muted/60 bg-muted/40 sm:grid-cols-2 lg:grid-cols-3">
          {customers.map((c) => (
            <div
              key={c}
              className="flex min-h-28 items-center justify-center bg-cream p-6 text-center"
            >
              <span className="font-display text-lg text-ink">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <StatBand
        stats={[
          { value: "150%", label: "increase in bidding volume" },
          { value: "30%", label: "new-user adoption in 12 months" },
          { value: "19,567", label: "items live right now" },
          { value: "1,000+", label: "sellers on the platform" },
        ]}
      />

      <section className="border-b border-muted/60 px-6 py-14 text-center md:py-16">
        <p className="mx-auto max-w-2xl text-base text-ink/70">
          Want to see how a house like yours would run on Basta?{" "}
          <Link href="/book-a-demo" className="font-semibold text-ink underline">
            Book a demo
          </Link>{" "}
          and we&apos;ll walk you through it.
        </p>
      </section>

      <CTABand />
    </PageFrame>
  );
}
