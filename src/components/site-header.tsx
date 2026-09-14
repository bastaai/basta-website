"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BastaLogo } from "@/components/basta-logo";
import { footerNav, cta, isExternal } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Lock scroll while the menu overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-muted/60 bg-cream/70 backdrop-blur-md">
        <div className="relative flex h-[84px] items-stretch justify-between md:h-[92px]">
          {/* Left rail — Book a demo (flush to edge, full height, divider on the right) */}
          <Link
            href={cta.bookDemo.href}
            className="flex w-10 shrink-0 items-center justify-center border-r border-muted/60 text-[11px] tracking-wide text-ink transition-opacity hover:opacity-60"
          >
            <span className="rotate-180 whitespace-nowrap [writing-mode:vertical-rl]">
              BOOK A DEMO
            </span>
          </Link>

          {/* Centered logo */}
          <Link
            href="/"
            aria-label="Basta home"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <BastaLogo shadow className="h-10 w-auto md:h-12" />
          </Link>

          {/* Right rail — Menu (flush to edge, full height, divider on the left) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex w-12 shrink-0 flex-col items-center justify-center gap-1 border-l border-muted/60 text-[11px] tracking-wide text-ink transition-opacity hover:opacity-60 md:w-10"
          >
            <Menu className="size-5 md:size-6" strokeWidth={1.75} />
            <span className="whitespace-nowrap [writing-mode:vertical-rl]">
              MENU
            </span>
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-cream">
          <div className="flex h-[84px] items-center justify-between border-b border-muted/60 px-4 md:h-[92px]">
            <BastaLogo shadow className="h-8 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex items-center gap-2 text-[11px] tracking-wide transition-opacity hover:opacity-60"
            >
              <X className="size-6" strokeWidth={1.75} />
              CLOSE
            </button>
          </div>

          <nav className="grid flex-1 grid-cols-1 gap-x-8 gap-y-10 overflow-y-auto px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h2 className="font-display mb-4 text-xs text-muted">
                  {col.title}
                </h2>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        {...(isExternal(link.href)
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="font-display text-2xl leading-tight transition-colors hover:text-acid hover:[-webkit-text-stroke:1px_#000] lg:text-3xl"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="border-t border-muted/60 p-6">
            <Link
              href={cta.bookDemo.href}
              onClick={() => setOpen(false)}
              className="font-display flex items-center justify-center rounded-full border-2 border-black bg-acid px-8 py-5 text-lg text-black transition-transform hover:-translate-y-0.5"
            >
              {cta.bookDemo.label}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
