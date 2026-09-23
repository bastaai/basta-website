import { Hero } from "@/components/home/hero";
import { PoweringFor } from "@/components/home/powering-for";
import { Showcase } from "@/components/home/showcase";
import { StatsBar } from "@/components/home/stats-bar";
import { CaseStudy } from "@/components/home/case-study";
import { TickerTape } from "@/components/home/ticker-tape";
import { DevTalk } from "@/components/home/dev-talk";
import { GetStarted } from "@/components/home/get-started";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px] border-x border-muted/60">
      <Hero />
      <PoweringFor />
      <Showcase />
      <StatsBar />
      <CaseStudy />
      <TickerTape />
      <DevTalk />
      <GetStarted />
    </div>
  );
}
