import { ButtonLink } from "@/components/ui/button-link";
import { cta } from "@/lib/site";

export function DevTalk() {
  return (
    <section className="border-b border-muted/60 px-6 py-10 md:px-12 md:py-14">
      <div className="mx-auto max-w-[1360px] rounded-2xl bg-dark px-6 py-14 text-center md:py-20">
        <h2 className="font-display text-2xl text-acid">Build on Basta</h2>
        <p className="mx-auto mt-2 max-w-[450px] text-base leading-[1.4] text-white">
          The docs cover the whole integration, from your first API key to
          your first sale, and they&apos;re open to read.
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
