import { Code2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { cta } from "@/lib/site";

export function DevTalk() {
  return (
    <section className="border-b border-muted/60 px-6 py-10 md:px-12 md:py-14">
      <div className="mx-auto max-w-[1360px] rounded-2xl bg-dark px-6 py-14 text-center md:py-20">
        <div className="flex items-center justify-center gap-2 text-acid">
          <Code2 className="size-6" strokeWidth={2} />
          <h2 className="font-display text-xl md:text-2xl">Dev talk</h2>
        </div>
        <p className="mx-auto mt-6 max-w-[450px] text-base leading-[1.4] text-white">
          Whether you&apos;re building a marketplace, powering high-frequency
          bidding, or enabling custom pricing flows — these docs will guide your
          integration from zero to production.
        </p>
        <p className="mt-8 text-sm font-bold uppercase tracking-wide text-acid">
          Explore our API&apos;s
        </p>
        <div className="mt-4 flex justify-center">
          <ButtonLink href={cta.readDocs.href} variant="outlineDark">
            Read our docs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
