import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { Showcase } from "@/components/home/showcase";
import { TickerTape } from "@/components/home/ticker-tape";
import { CaseStudy } from "@/components/home/case-study";
import { DevTalk } from "@/components/home/dev-talk";
import { GetStarted } from "@/components/home/get-started";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px] border-x border-muted/60">
      <Hero />
      <StatsBar />
      <Showcase />
      <TickerTape />
      <CaseStudy />
      <DevTalk />
      <GetStarted />
    </div>
  );
}
