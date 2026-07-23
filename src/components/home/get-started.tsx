import Link from "next/link";
import { cta } from "@/lib/site";

export function GetStarted() {
  return (
    <section className="px-6 py-16 text-center md:py-20">
      <h2 className="font-display text-4xl text-ink md:text-5xl">Get started</h2>
      <p className="mt-4 text-sm text-ink/95">
        Book a demo today and see what&apos;s possible.
      </p>
      <div className="mx-auto mt-10 max-w-[1317px]">
        <Link
          href={cta.bookDemo.href}
          className="font-display flex items-center justify-center rounded-[60px] border-2 border-black bg-acid px-8 py-8 text-xl text-black shadow-hard transition-transform hover:-translate-x-1 hover:translate-y-1 hover:shadow-none md:rounded-[90px] md:py-10 md:text-3xl"
        >
          Schedule a demo now
        </Link>
      </div>
    </section>
  );
}
