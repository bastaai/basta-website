import Image from "next/image";

/*
  Illustrative product visuals (not literal app screenshots) — stylized
  app-window panels built from the design system + real auction imagery.
  Used on the product pages to show the concept.
*/

function AppWindow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[-10px_12px_0_0_#000]">
      <div className="flex items-center gap-3 border-b border-muted/60 bg-cream px-4 py-3">
        <span className="flex gap-1.5">
          <span className="size-3 rounded-full border border-black/70" />
          <span className="size-3 rounded-full border border-black/70" />
          <span className="size-3 rounded-full border border-black/70" />
        </span>
        <span className="font-mono text-[11px] tracking-wide text-ink/60">
          {label}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Thumb({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative block size-12 shrink-0 overflow-hidden rounded-lg border border-muted/60 bg-cream">
      <Image src={src} alt={alt} fill sizes="48px" className="object-contain p-1" />
    </span>
  );
}

// Wrapper section so pages just drop <ProductMock kind="..." /> under the hero.
export function ProductMock({
  kind,
}: {
  kind: "bidding" | "cataloging" | "live" | "marketplace";
}) {
  return (
    <section className="border-b border-muted/60 px-6 py-14 md:py-20">
      {kind === "bidding" && <BiddingMock />}
      {kind === "cataloging" && <CatalogingMock />}
      {kind === "live" && <LiveAuctionMock />}
      {kind === "marketplace" && <MarketplaceMock />}
    </section>
  );
}

// Same live-room mockup, presented in the labeled "desktop view" carousel
// chrome from the Figma reference (eyebrow label above, view switcher below).
// Only one illustrative view exists today, so the prev/next controls are
// omitted rather than faked — add real slides + pager once more views ship.
export function LiveAuctionCarousel() {
  return (
    <section className="border-b border-muted/60 px-6 py-14 md:py-20">
      <p className="font-mono mb-8 text-center text-xs uppercase tracking-[0.2em] text-muted">
        Desktop view
      </p>
      <LiveAuctionMock />
    </section>
  );
}

function BiddingMock() {
  return (
    <AppWindow label="basta · bidding">
      <div className="flex items-center gap-4">
        <Thumb src="/assets/products/skateboard.png" alt="Tony Hawk Skateboard" />
        <div className="min-w-0">
          <p className="truncate font-display text-sm text-ink">
            Tony Hawk Skateboard
          </p>
          <p className="text-xs text-ink/50">Lot 042 · 12 bidders</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-[10px] uppercase tracking-wide text-ink/50">
            Current bid
          </p>
          <p className="font-display text-lg text-ink">$1,140,000</p>
        </div>
      </div>

      <p className="mt-6 mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/50">
        Next bids
      </p>
      <div className="flex flex-wrap gap-2">
        {["$1,152,000", "$1,164,000", "$1,176,000"].map((v, i) => (
          <span
            key={v}
            className={`rounded-full border px-3 py-1.5 text-xs ${
              i === 0
                ? "border-black bg-acid font-semibold text-black"
                : "border-muted/60 text-ink/70"
            }`}
          >
            {v}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <div className="flex flex-1 items-center rounded-full border border-muted/60 px-4 py-2 text-xs text-ink/40">
          Set your max bid
        </div>
        <span className="rounded-full border border-black bg-black px-4 py-2 text-xs font-semibold text-cream">
          Place max bid
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-black/10 bg-cream px-3 py-2">
        <span className="size-2 rounded-full bg-acid ring-2 ring-black" />
        <span className="text-xs text-ink/70">
          New high bid <span className="font-semibold text-ink">$1,152,000</span>{" "}
          from @sircollectalot
        </span>
      </div>
    </AppWindow>
  );
}

function CatalogingMock() {
  const lots = [
    {
      src: "/assets/products/artwork.png",
      name: "Josef Sima — Europa",
      start: "$400,000",
      status: "Open",
    },
    {
      src: "/assets/products/lamp.png",
      name: "Flower Lamp",
      start: "$5,000",
      status: "Open",
    },
    {
      src: "/assets/products/coffee-maker.png",
      name: '"Mr Coffee" Coffeemaker',
      start: "$500",
      status: "Scheduled",
    },
  ];
  return (
    <AppWindow label="dashboard.basta.app · sale">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-display text-sm text-ink">Modern Masters — Spring Sale</p>
          <p className="text-xs text-ink/50">3 lots · USD</p>
        </div>
        <span className="rounded-full border border-black bg-acid px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
          Published
        </span>
      </div>
      <div className="overflow-hidden rounded-xl border border-muted/60">
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-muted/60 bg-cream px-4 py-2 font-mono text-[10px] uppercase tracking-wide text-ink/50">
          <span>Lot</span>
          <span className="text-right">Starting bid</span>
          <span className="text-right">Status</span>
        </div>
        {lots.map((l) => (
          <div
            key={l.name}
            className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-muted/40 px-4 py-3 last:border-0"
          >
            <div className="flex min-w-0 items-center gap-3">
              <Thumb src={l.src} alt={l.name} />
              <span className="truncate text-sm text-ink">{l.name}</span>
            </div>
            <span className="text-right text-sm text-ink/70">{l.start}</span>
            <span className="text-right">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${
                  l.status === "Open"
                    ? "bg-acid text-black"
                    : "border border-muted/60 text-ink/50"
                }`}
              >
                {l.status}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 inline-flex rounded-full border border-dashed border-muted/60 px-4 py-2 text-xs text-ink/50">
        + Add lot
      </div>
    </AppWindow>
  );
}

function LiveAuctionMock() {
  return (
    <AppWindow label="basta · live room">
      <div className="grid gap-5 sm:grid-cols-[auto_1fr]">
        <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-xl border border-muted/60 bg-cream">
          <Image
            src="/assets/products/artwork.png"
            alt="Josef Sima — Europa"
            fill
            sizes="160px"
            className="object-contain p-3"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-display text-sm text-ink">Josef Sima — Europa</p>
          <p className="text-xs text-ink/50">Lot 007 · Live now</p>

          <div className="mt-3 flex items-end gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink/50">
                Current bid
              </p>
              <p className="font-display text-2xl text-ink">$1,522,000</p>
            </div>
            <div className="ml-auto rounded-xl bg-dark px-4 py-2 text-center">
              <p className="font-display text-2xl text-acid tabular-nums">0:12</p>
              <p className="text-[9px] uppercase tracking-wide text-cream/70">
                closing
              </p>
            </div>
          </div>

          <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-black bg-acid px-3 py-1 text-[10px] font-bold uppercase text-black">
            ⏱ Extended +20s
          </span>

          <div className="mt-4 space-y-1.5 text-xs text-ink/70">
            <p>
              <span className="font-semibold text-ink">@essexflowers</span> bid
              $1,522,000
            </p>
            <p className="text-ink/50">@frederickrasuk bid $1,498,000</p>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

function MarketplaceMock() {
  const cards = [
    { src: "/assets/products/dino.png", name: "Trey the Triceratops", bid: "$840,000" },
    { src: "/assets/products/lamp.png", name: "Flower Lamp", bid: "$250,000" },
    { src: "/assets/products/coffee-maker.png", name: "Mr Coffee", bid: "$4,550" },
  ];
  return (
    <AppWindow label="yourbrand.com/auctions">
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.name}
            className="flex flex-col overflow-hidden rounded-xl border border-muted/60"
          >
            <div className="relative aspect-square bg-cream">
              <Image
                src={c.src}
                alt={c.name}
                fill
                sizes="180px"
                className="object-contain p-4"
              />
              <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2 py-0.5 text-[9px] font-semibold uppercase text-cream">
                Live
              </span>
            </div>
            <div className="flex flex-col gap-2 p-3">
              <p className="truncate text-xs font-semibold text-ink">{c.name}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-ink/60">{c.bid}</span>
                <span className="rounded-full border border-black bg-acid px-3 py-1 text-[10px] font-bold uppercase text-black">
                  Bid
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppWindow>
  );
}
