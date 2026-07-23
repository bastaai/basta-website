import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "outlineDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.08em] transition-all";

const variants: Record<Variant, string> = {
  // Filled acid pill with black border (e.g. "Talk to us").
  primary: "bg-acid border border-black text-black hover:-translate-y-0.5",
  // White pill with hairline border (e.g. "Read our docs").
  outline:
    "bg-white border border-black/50 text-black hover:border-black hover:-translate-y-0.5",
  // White pill on dark backgrounds.
  outlineDark:
    "bg-white border border-white/20 text-black hover:-translate-y-0.5",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: { variant?: Variant } & ComponentProps<typeof Link>) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}
