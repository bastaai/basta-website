import Link from "next/link";
import Image from "next/image";
import { PageFrame, MarketingHero, CTABand } from "@/components/marketing";

export const metadata = {
  title: "Case Studies",
  description:
    "How houses, brands, and creators run their auctions on Basta — starting with Julien's Auctions.",
};

const studies = [
  {
    name: "Julien's Auctions",
    href: "/case-studies/juliens",
    image: "/assets/brand/julliens.jpg",
    summary:
      "150% increase in bidding volume and 30% new-user adoption within 12 months of launch.",
    live: true,
  },
  { name: "Joopiter", summary: "Case study coming soon.", live: false },
  { name: "Freeman's", summary: "Case study coming soon.", live: false },
];

export default function CaseStudiesPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Case studies"
        title="Auctions, running on Basta"
        lede="The proof is in the sale room. Here's how our customers put Basta to work."
      />

      <section className="border-b border-muted/60 px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {studies.map((s) =>
            s.live ? (
              <Link
                key={s.name}
                href={s.href!}
                className="group flex flex-col overflow-hidden rounded-2xl border border-muted/60 transition-colors hover:border-black"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-dark">
                  <Image
                    src={s.image!}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-lg text-ink">{s.name}</h2>
                  <p className="mt-2 text-sm leading-[1.5] text-ink/70">
                    {s.summary}
                  </p>
                  <span className="font-mono mt-4 text-xs uppercase tracking-[0.15em] text-ink group-hover:underline">
                    Read the case study →
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={s.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-dashed border-muted/60"
              >
                <div className="flex aspect-[3/2] w-full items-center justify-center bg-muted/10">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    Coming soon
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-lg text-ink/70">{s.name}</h2>
                  <p className="mt-2 text-sm leading-[1.5] text-ink/50">
                    {s.summary}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <CTABand />
    </PageFrame>
  );
}
