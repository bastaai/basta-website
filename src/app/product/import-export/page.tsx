import {
  Users,
  Database,
  FileSpreadsheet,
  Code2,
  Download,
  LifeBuoy,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Import / Export",
  description:
    "Bring your existing bidders, consignors, and auction history into Basta without starting from zero — and export your data back out whenever you need to.",
};

export default function ImportExportPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Import / Export"
        title="Bring your data with you"
        lede="Moving to a new platform shouldn't mean starting from zero. Import your existing bidders, consignors, and auction history into Basta, and export it back out whenever you need to."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="Migrate without the rebuild"
        title="Get your data in, cleanly"
        items={[
          {
            icon: Users,
            title: "Bulk user import",
            body: "Bring existing bidder and consignor accounts into Basta in bulk, so no one has to re-register from scratch.",
          },
          {
            icon: Database,
            title: "Auction and catalog history",
            body: "Import past sales, lots, and item records, so your history moves with you instead of staying trapped in the old system.",
          },
          {
            icon: FileSpreadsheet,
            title: "Spreadsheet mapping",
            body: "Map your existing CSV or spreadsheet columns to Basta's fields, instead of manually reformatting every row by hand.",
          },
          {
            icon: Code2,
            title: "API-driven migration",
            body: "For larger moves, script the import through the Management API rather than uploading files one at a time.",
          },
          {
            icon: Download,
            title: "Export anytime",
            body: "Pull your bidder, catalog, and sales data back out whenever you need it — migrating in doesn't mean losing the ability to move again.",
          },
          {
            icon: LifeBuoy,
            title: "Migration support",
            body: "Our team helps plan and run the move, so records don't get duplicated or dropped along the way.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="No cold start"
        title="Switching platforms shouldn't mean losing years of history"
        body="Auction houses build up years of bidder relationships and sale history. Basta is built to bring that with you, not force you to rebuild it from a blank slate."
        reverse
        bullets={[
          {
            title: "Bidders don't start over",
            body: "Existing accounts carry across, so your community doesn't have to re-register to keep bidding.",
          },
          {
            title: "History stays intact",
            body: "Past sales and provenance move with your catalog instead of getting left behind.",
          },
          {
            title: "Data stays yours",
            body: "Import in, export out — the same ownership principle that runs through the rest of Basta.",
          },
        ]}
      />

      <CTABand
        title="Bring your data over"
        sub="Talk to us about migrating to Basta."
      />
    </PageFrame>
  );
}
