import {
  ScanLine,
  Truck,
  Footprints,
  Search,
  BarChart3,
  RefreshCcw,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Inventory & Barcoding",
  description:
    "Inventory management that starts with a barcode — track items in transit, scan-as-you-go location updates with Move Mode, a searchable inventory database, and real-time stock reports.",
};

export default function InventoryBarcodingPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Inventory & Barcoding"
        title="Every item, tracked from the first scan"
        lede="Inventory management that starts with a barcode. Know where an item is even while it's in transit, and once it's with you, scan as you go and let locations update themselves."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="Barcode first"
        title="The heavy lifting, done for you"
        items={[
          {
            icon: ScanLine,
            title: "Starts with a barcode",
            body: "Every item gets a barcode from intake, so tracking it never depends on someone remembering to log a location by hand.",
          },
          {
            icon: Truck,
            title: "Tracked in transit",
            body: "Know where an item is even when it's moving between locations — not just when it's sitting on a shelf.",
          },
          {
            icon: Footprints,
            title: "Move Mode",
            body: "Scan items as you go and let their location update automatically — no separate step to record where something ended up.",
          },
          {
            icon: Search,
            title: "Fully searchable database",
            body: "Find any item instantly across your whole inventory, not just the sale it's currently attached to.",
          },
          {
            icon: BarChart3,
            title: "Real-time stock reports",
            body: "See what you're holding and where, updated the moment a scan happens — not from a report run last night.",
          },
          {
            icon: RefreshCcw,
            title: "Full lifecycle support",
            body: "Follow an item from intake through storage, moves, sale, and dispatch — one record, the whole way through.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Less guessing, more scanning"
        title="Inventory that keeps up as items move"
        body="Auction houses move a lot of physical stock through a lot of locations. Barcoding and Move Mode mean the system tracks that movement in real time, instead of someone reconciling it after the fact."
        reverse
        bullets={[
          {
            title: "Nothing goes missing on paper",
            body: "A scan updates the record instantly, so locations never drift out of sync with reality.",
          },
          {
            title: "Faster than manual logging",
            body: "Move Mode turns relocating items into a scan, not a form to fill out afterwards.",
          },
          {
            title: "One source of truth",
            body: "The same inventory record follows an item from intake to sale, so nothing needs re-entering along the way.",
          },
        ]}
      />

      <CTABand
        title="Put a barcode on it"
        sub="See how inventory tracking works on Basta."
      />
    </PageFrame>
  );
}
