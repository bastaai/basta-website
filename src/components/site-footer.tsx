import Link from "next/link";
import { BastaLogo } from "@/components/basta-logo";
import { footerNav } from "@/lib/site";

const wordmarkLabels = ["Buy", "and", "Sell", "through", "Auction"];

export function SiteFooter() {
  return (
    <footer className="border-t border-muted/60 bg-cream">
      <div className="relative mx-auto max-w-[1400px] border-muted/60 lg:border-x">
        {/* Full-height vertical cell dividers (desktop grid) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden grid-cols-5 lg:grid"
        >
          <div className="border-r border-muted/60" />
          <div className="border-r border-muted/60" />
          <div className="border-r border-muted/60" />
          <div className="border-r border-muted/60" />
          <div />
        </div>

        {/* Column labels — BUY / AND / SELL / THROUGH / AUCTION */}
        <div className="relative hidden grid-cols-5 border-b border-muted/60 lg:grid">
          {wordmarkLabels.map((w) => (
            <div key={w} className="px-5 py-2">
              <span className="font-display text-[10px] text-muted">{w}</span>
            </div>
          ))}
        </div>

        {/* Giant wordmark */}
        <div className="relative overflow-hidden px-4 pt-6 pb-2 lg:py-4">
          <BastaLogo className="extrude block h-auto w-full pr-3" />
        </div>

        {/* Nav columns (aligned to the same 5-column grid on desktop) */}
        <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 md:grid-cols-4 lg:grid-cols-5 lg:gap-0 lg:py-0">
          {footerNav.map((col) => (
            <div key={col.title} className="lg:px-5 lg:py-10">
              <h2 className="font-display mb-4 text-sm text-ink">{col.title}</h2>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/85 transition-colors hover:text-ink hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-xs leading-relaxed text-ink/50 lg:px-5 lg:py-10">
            Basta Ventures ehf. © 2025,
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
