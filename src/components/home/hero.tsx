import { ButtonLink } from "@/components/ui/button-link";
import { cta } from "@/lib/site";

export function Hero() {
  return (
    <section className="px-6 pt-14 pb-10 text-center md:pt-20">
      <h1 className="font-display mx-auto max-w-2xl text-[34px] leading-[1.05] text-ink sm:text-5xl">
        The auction rails of the internet.
      </h1>
      <p className="mx-auto mt-6 max-w-[482px] text-base leading-[1.4] text-ink/95">
        Basta is ready-to-use auction infrastructure, built for anyone with
        something to auction.
      </p>
      <div className="mt-8 flex justify-center">
        <ButtonLink
          href={cta.talkToUs.href}
          variant="primary"
          className="min-w-[240px]"
        >
          Talk to us
        </ButtonLink>
      </div>
    </section>
  );
}
