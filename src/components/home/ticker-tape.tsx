// A finance-ticker-style strip: two rows of short feature copy scrolling
// in opposite directions, looping seamlessly. Content mirrors the phrases
// used in the Figma reference video for this section.
const ROW_A = "Full auction infrastructure. Webhook-native. Open data pipelines.";
const ROW_B =
  "Live registration. Unified bid streams. White-label by default. Headless engine. API-first.";
const ROW_C =
  "Agentic chat reporting. LLM options. SEO/GEO optimisation. Server Side Rendering. MCP support.";

function TickerRow({
  text,
  animationClass,
}: {
  text: string;
  animationClass: string;
}) {
  // Two copies of the track keep the loop seamless: the track is 200% wide
  // and animates from 0 to -50% (or the reverse), so copy #2 lines up
  // exactly where copy #1 started.
  return (
    <div className="group overflow-hidden border-y border-ink/80 py-3">
      <div className={`flex w-max shrink-0 gap-8 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-display shrink-0 whitespace-nowrap text-[clamp(20px,3vw,29px)] text-ink"
            aria-hidden={i > 0}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TickerTape() {
  return (
    <section
      className="py-6 md:py-8"
      aria-label="Full auction infrastructure. Webhook-native. Open data pipelines. Live registration. Unified bid streams. White-label by default. Headless engine. API-first. Agentic chat reporting. LLM options. SEO/GEO optimisation. Server Side Rendering. MCP support."
    >
      <div className="flex flex-col gap-3 md:gap-4">
        <TickerRow text={ROW_A} animationClass="animate-[ticker-left_22s_linear_infinite]" />
        <TickerRow text={ROW_B} animationClass="animate-[ticker-right_30s_linear_infinite]" />
        <TickerRow text={ROW_C} animationClass="animate-[ticker-left_26s_linear_infinite]" />
      </div>
    </section>
  );
}
