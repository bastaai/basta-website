import {
  ShieldCheck,
  KeyRound,
  Database,
  LogOut,
  Share2,
  Users,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Registration & Authentication",
  description:
    "Best-of-breed, tenant-based identity for every account — you own your Ory tenant and the bidder data in it, so nothing is locked into Basta.",
};

export default function RegistrationAuthenticationPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Registration & Authentication"
        title="Your accounts. Your data. Yours to keep."
        lede="Registration and login run on a dedicated, best-of-breed identity platform — not a homegrown auth system. Every account gets its own tenant, and the auction house owns it, not Basta."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="Identity, done properly"
        title="Built on a dedicated tenant, not a shared table"
        items={[
          {
            icon: ShieldCheck,
            title: "Best-of-breed, not homegrown",
            body: "Registration and authentication run on a proven, purpose-built identity platform instead of a bolted-on auth table — the parts most platforms get wrong, handled properly.",
          },
          {
            icon: KeyRound,
            title: "Your own tenant",
            body: "Every auction house gets its own isolated tenant for bidder accounts — not a shared pool mixed in with every other account on Basta.",
          },
          {
            icon: Database,
            title: "You own the account",
            body: "The tenant belongs to you, not to Basta. Your bidders, your data, under your control from day one.",
          },
          {
            icon: LogOut,
            title: "Leave with your data",
            body: "If you ever move off Basta, your identity tenant comes with you — no export negotiation, no bidder accounts left behind.",
          },
          {
            icon: Share2,
            title: "Shared sessions, on request",
            body: "Auction houses that want to collaborate can share sessions across sales, so a bidder signed in with one house can move to another without logging in again.",
          },
          {
            icon: Users,
            title: "One identity, every surface",
            body: "The same account and session work across your website, app, and the live room — bidders sign in once.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="No lock-in by design"
        title="We'd rather you stay because it works, not because you're stuck"
        body="A lot of platforms make your bidder accounts hard to leave with on purpose. Basta does the opposite — you own the tenant that holds your data, so staying is always a choice, never a trap."
        bullets={[
          {
            title: "Isolated, not shared",
            body: "Your tenant keeps your bidder data separate from every other account on the platform.",
          },
          {
            title: "Portable by default",
            body: "Ownership sits with you from the start, so there's nothing special to arrange if you ever leave.",
          },
          {
            title: "Built for collaboration",
            body: "Session sharing between auction houses is opt-in — useful for partners, never forced.",
          },
        ]}
      />

      <CTABand
        title="Own your bidder accounts"
        sub="Talk to us about how identity and data ownership work on Basta."
      />
    </PageFrame>
  );
}
