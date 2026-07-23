import Link from "next/link";
import { BastaLogo } from "@/components/basta-logo";
import { footerNav } from "@/lib/site";

const wordmarkLabels = ["Buy", "and", "Sell", "through", "Auction"];

export function SiteFooter() {
  return (
    <footer className="border-t border-muted/60 bg-cream">
      {/* Giant wordmark band */}
      <div className="border-b border-muted/60">
        <div className="mx-auto max-w-[1400px] px-4 pt-6">
          <div className="flex justify-between font-display text-[10px] text-muted sm:text-xs">
            {wordmarkLabels.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden px-4 pb-2">
          <BastaLogo className="extrude mx-auto block h-auto w-full max-w-[1360px] pr-3" />
        </div>
      </div>

      {/* Nav columns */}
      <div className="mx-auto max-w-[1400px] px-4 py-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-5">
          {footerNav.map((col) => (
            <div key={col.title} className="lg:border-l lg:border-muted/50 lg:pl-6">
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
          <p className="text-xs leading-relaxed text-ink/50 lg:border-l lg:border-muted/50 lg:pl-6">
            Basta Ventures ehf. © 2025,
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
