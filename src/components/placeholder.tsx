import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

// Shared in-brand placeholder for routes that aren't built out yet.
export function Placeholder({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-center justify-center border-x border-muted/60 px-6 py-24 text-center">
      {eyebrow && (
        <p className="font-mono mb-4 text-xs uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display max-w-3xl text-4xl leading-[1.05] text-ink md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-md text-base text-ink/70">
        This page is coming soon. We&apos;re still building it out — check back
        shortly.
      </p>
      <div className="mt-10">
        <ButtonLink href="/" variant="primary">
          Back to home
        </ButtonLink>
      </div>
    </div>
  );
}
