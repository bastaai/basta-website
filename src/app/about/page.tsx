import { PageFrame, MarketingHero, StatBand } from "@/components/marketing";
import { cta } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Basta builds auction technology for anyone with something to auction. Before this, members of our team led Sotheby's digital transformation, and just couldn't stop there.",
};

export default function AboutPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="About"
        title={
          <>
            We build the rails
            <br className="hidden md:block" /> for modern auctions
          </>
        }
        lede={
          <>
            <p>
              Basta builds auction technology for anyone with something to
              auction. Before this, members of our team led Sotheby&apos;s
              digital transformation, and just couldn&apos;t stop there. So
              here we are.
            </p>
            <p>
              We see auction as a great way to find out what something is
              worth, so we&apos;re building modern auction infrastructure
              that works everywhere it makes sense.
            </p>
            <p>
              Infrastructure that used to take months or years to build —
              bidding, consigning, cataloguing, live rooms, marketplace,
              payments, settlement — we build in weeks, days, minutes. And
              every time we do, great things happen.
            </p>
            <p>
              Basta is majority-owned by Gangverk, a creative software agency
              that has built digital products for Sotheby&apos;s, Phillips,
              CBS Broadcasting, A+E Networks and Expeditions.com to name a
              few.
            </p>
            <p>
              Currently, there are more than 20 people at Basta, and growing.
              With Gangverk, we are total around 180 engineers, designers and
              product specialists behind us. That&apos;s a lot of brain
              power. Bring it on.
            </p>
          </>
        }
      />

      <section className="border-b border-muted/60 px-6 py-14 md:px-12">
        <p className="text-center text-sm text-ink/60">Activity on BASTA</p>
        <div className="mx-auto mt-3">
          <StatBand
            stats={[
              { value: "37k+", label: "items published" },
              { value: "100k+", label: "Registrations" },
              { value: "25m+", label: "Bids placed" },
              { value: "10+", label: "Auction houses" },
              { value: "1k+", label: "Influencers & creators on Basta" },
            ]}
          />
        </div>
      </section>

      <section className="border-b border-muted/60 px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-20">
          <div className="w-full max-w-[280px] shrink-0 md:max-w-none md:flex-1">
            {/* TODO: replace with the real headshot photo (Figma node 2186:557) —
                could not be downloaded automatically in this environment. */}
            <div
              className="flex aspect-[462/512] w-full items-center justify-center rounded-2xl border border-muted/60 bg-muted/20 text-xs text-muted"
            >
              Photo
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-6 text-center">
            <blockquote>
              <p className="font-display text-xl leading-[1.3] uppercase text-ink md:text-3xl">
                &ldquo;We know the tradition of the auction world, we
                understand its potential, and thats why we made basta&rdquo;
              </p>
            </blockquote>
            <footer className="text-sm">
              <span className="font-semibold text-ink">
                Oli Bjorn Stephensen{" "}
              </span>
              <span className="text-ink/60">
                — CEO, Basta
                <br />
                former CPO/CTO at Sotheby&apos;s
              </span>
            </footer>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center md:py-20">
        <div className="mx-auto max-w-[1317px]">
          <Link
            href={cta.bookDemo.href}
            className="font-display flex items-center justify-center rounded-[60px] border-2 border-black bg-acid px-8 py-7 text-lg text-black shadow-hard transition-transform hover:-translate-x-1 hover:translate-y-1 hover:shadow-none md:rounded-[90px] md:py-9 md:text-3xl"
          >
            Schedule a demo now
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
