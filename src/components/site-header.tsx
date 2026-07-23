"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BastaLogo } from "@/components/basta-logo";
import { footerNav, cta } from "@/lib/site";

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
        <div className="relative flex h-[68px] items-center justify-between px-4 md:h-[76px]">
          {/* Left rail — Book a demo (vertical on desktop) */}
          <div className="flex w-24 items-center md:w-10">
            <Link
              href={cta.bookDemo.href}
              className="hidden text-[11px] tracking-wide text-ink transition-opacity hover:opacity-60 md:block md:[writing-mode:vertical-rl] md:rotate-180"
            >
              BOOK A DEMO
            </Link>
          </div>

          {/* Centered logo */}
          <Link
            href="/"
            aria-label="Basta home"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <BastaLogo className="h-7 w-auto drop-shadow-[2px_2px_0_#000] md:h-8" />
          </Link>

          {/* Right rail — Menu toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex w-24 items-center justify-end gap-1 text-[11px] tracking-wide text-ink transition-opacity hover:opacity-60 md:w-10 md:flex-col md:justify-center md:gap-1"
          >
            <Menu className="size-6 md:size-7" strokeWidth={1.75} />
            <span className="md:[writing-mode:vertical-rl]">MENU</span>
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-cream">
          <div className="flex h-[68px] items-center justify-between border-b border-muted/60 px-4 md:h-[76px]">
            <BastaLogo className="h-7 w-auto drop-shadow-[2px_2px_0_#000]" />
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
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
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
