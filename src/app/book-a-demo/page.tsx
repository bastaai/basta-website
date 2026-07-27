import { PageFrame, MarketingHero } from "@/components/marketing";
import { ButtonLink } from "@/components/ui/button-link";
import { DemoForm } from "@/components/demo-form";

export const metadata = {
  title: "Book a Demo",
  description:
    "See Basta in action. Book a demo and we'll show you how to launch bidding and live auctions in weeks, not months.",
};

export default function BookADemoPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Book a demo"
        title="See what's possible"
        lede="Tell us what you'd like to auction and we'll walk you through launching it on Basta — bidding, cataloging, live closes, and settlement, end to end."
      />

      <section className="border-b border-muted/60 px-6 py-14 text-center md:py-16">
        <p className="mx-auto mb-6 max-w-lg text-base text-ink/70">
          Prefer to grab a time right now? Pick a slot that works for you.
        </p>
        <ButtonLink
          href="https://cal.com/jake-goodman-99w6om"
          variant="primary"
          className="sm:min-w-[240px]"
        >
          Pick a time
        </ButtonLink>
      </section>

      <section className="px-6 py-14 md:py-20">
        <p className="mx-auto mb-8 max-w-xl text-center text-sm uppercase tracking-[0.15em] text-muted">
          Or send us the details
        </p>
        <DemoForm kind="demo" />
      </section>
    </PageFrame>
  );
}
