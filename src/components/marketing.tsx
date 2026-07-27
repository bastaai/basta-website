import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

type CTA = { label: string; href: string };

// Framed page container matching the home page (vertical rails).
export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1400px] border-x border-muted/60">{children}</div>
  );
}

export function MarketingHero({
  eyebrow,
  title,
  lede,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  primary?: CTA;
  secondary?: CTA;
}) {
  return (
    <section className="border-b border-muted/60 px-6 py-16 text-center md:py-24">
      {eyebrow && (
        <p className="font-mono mb-5 text-xs uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display mx-auto max-w-4xl text-[34px] leading-[1.05] text-ink md:text-6xl">
        {title}
      </h1>
      {lede && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.5] text-ink/80">
          {lede}
        </p>
      )}
      {(primary || secondary) && (
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {primary && (
            <ButtonLink href={primary.href} variant="primary" className="sm:min-w-[220px]">
              {primary.label}
            </ButtonLink>
          )}
          {secondary && (
            <ButtonLink href={secondary.href} variant="outline" className="sm:min-w-[220px]">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      )}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="font-mono mb-4 text-xs uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl leading-[1.1] text-ink md:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5] text-ink/70">
          {intro}
        </p>
      )}
    </div>
  );
}

export type Feature = { icon?: LucideIcon; title: string; body: string };

export function FeatureGrid({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: Feature[];
}) {
  return (
    <section className="border-b border-muted/60 px-6 py-14 md:px-12 md:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-muted/60 bg-white/40 p-6 transition-colors hover:border-black"
          >
            {f.icon && (
              <span className="mb-4 flex size-10 items-center justify-center rounded-full border border-black bg-acid">
                <f.icon className="size-5" strokeWidth={2} />
              </span>
            )}
            <h3 className="font-display mb-2 text-base text-ink">{f.title}</h3>
            <p className="text-sm leading-[1.5] text-ink/70">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Two-column: heading/body on one side, a bulleted capability list on the other.
export function CapabilitySplit({
  eyebrow,
  title,
  body,
  bullets,
  reverse,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  bullets: { title: string; body: string }[];
  reverse?: boolean;
}) {
  return (
    <section className="grid gap-10 border-b border-muted/60 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-12 md:py-20">
      <div className={reverse ? "md:order-2" : ""}>
        {eyebrow && (
          <p className="font-mono mb-4 text-xs uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-2xl leading-[1.1] text-ink md:text-4xl">
          {title}
        </h2>
        {body && (
          <p className="mt-5 max-w-md text-base leading-[1.5] text-ink/70">{body}</p>
        )}
      </div>
      <ul className={`space-y-6 ${reverse ? "md:order-1" : ""}`}>
        {bullets.map((b) => (
          <li key={b.title} className="border-l-2 border-acid pl-4">
            <h3 className="font-display text-base text-ink">{b.title}</h3>
            <p className="mt-1 text-sm leading-[1.5] text-ink/70">{b.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function StatBand({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="border-b border-muted/60 px-6 py-14 md:px-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-4xl text-ink md:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-ink/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Big display statement on the dark surface (brand register: "alive and visionary").
export function Statement({
  children,
  cite,
}: {
  children: React.ReactNode;
  cite?: string;
}) {
  return (
    <section className="border-b border-muted/60 px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl rounded-2xl bg-dark px-6 py-16 text-center md:py-24">
        <p className="font-display text-2xl leading-[1.2] text-cream md:text-4xl">
          {children}
        </p>
        {cite && (
          <p className="font-mono mt-6 text-xs uppercase tracking-[0.2em] text-acid">
            {cite}
          </p>
        )}
      </div>
    </section>
  );
}

// Closing call to action, echoing the home page's big yellow button.
export function CTABand({
  title = "Get started",
  sub = "Book a demo today and see what's possible.",
  cta = { label: "Schedule a demo now", href: "/book-a-demo" },
}: {
  title?: string;
  sub?: string;
  cta?: CTA;
}) {
  return (
    <section className="px-6 py-16 text-center md:py-20">
      <h2 className="font-display text-3xl text-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm text-ink/95">{sub}</p>
      <div className="mx-auto mt-10 max-w-[1317px]">
        <Link
          href={cta.href}
          className="font-display flex items-center justify-center rounded-[60px] border-2 border-black bg-acid px-8 py-7 text-lg text-black shadow-hard transition-transform hover:-translate-x-1 hover:translate-y-1 hover:shadow-none md:rounded-[90px] md:py-9 md:text-3xl"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
