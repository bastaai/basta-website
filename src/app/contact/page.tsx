import Link from "next/link";
import { PageFrame, MarketingHero } from "@/components/marketing";
import { DemoForm } from "@/components/demo-form";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Basta — sales, support, partnerships, or just to talk auctions.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Contact"
        title="Talk to us"
        lede="Questions about the platform, a partnership, or your next sale? Drop us a line and a human will get back to you."
      />
      <section className="px-6 py-14 md:py-20">
        <DemoForm kind="contact" />
        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink/60">
          Ready to see it live?{" "}
          <Link href="/book-a-demo" className="font-semibold text-ink underline">
            Book a demo
          </Link>{" "}
          instead — or explore the{" "}
          <a
            href="https://docs.basta.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink underline"
          >
            developer docs
          </a>
          .
        </p>
      </section>
    </PageFrame>
  );
}
