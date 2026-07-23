import { ButtonLink } from "@/components/ui/button-link";
import { cta } from "@/lib/site";

export function Hero() {
  return (
    <section className="px-6 pt-14 pb-10 text-center md:pt-20">
      <h1 className="font-display mx-auto max-w-2xl text-[34px] leading-[1.05] text-ink sm:text-5xl">
        Buy and sell
        <br />
        through auction
      </h1>
      <p className="mx-auto mt-6 max-w-[482px] text-base leading-[1.4] text-ink/95">
        Basta is an out of the box auctions platform made for anyone with
        something to auction. Launch easily in weeks, not months.
      </p>
      <div className="mx-auto mt-8 flex max-w-md flex-col items-stretch justify-center gap-3 sm:flex-row">
        <ButtonLink href={cta.talkToUs.href} variant="primary" className="sm:min-w-[220px]">
          Talk to us
        </ButtonLink>
        <ButtonLink href={cta.readDocs.href} variant="outline" className="sm:min-w-[220px]">
          Read our docs
        </ButtonLink>
      </div>
    </section>
  );
}
