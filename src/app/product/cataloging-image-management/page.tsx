import {
  ClipboardList,
  CheckCircle2,
  Camera,
  ImagePlus,
  Upload,
  Mic,
} from "lucide-react";
import {
  PageFrame,
  MarketingHero,
  FeatureGrid,
  CapabilitySplit,
  CTABand,
} from "@/components/marketing";

export const metadata = {
  title: "Cataloging & Image Management",
  description:
    "Customizable cataloguing requirements by item type, optional proofing workflows, and photography tools that take the pain out of naming and uploading images.",
};

export default function CatalogingImageManagementPage() {
  return (
    <PageFrame>
      <MarketingHero
        eyebrow="Product · Cataloging & Image Management"
        title="Get every lot catalog-ready, fast"
        lede="Cataloguing and photography are the workflows a sale lives or dies on. Basta gives your team tools built for the pace of intake — accurate fields, a proofing step when you need one, and photography that doesn't slow anyone down."
        primary={{ label: "Book a demo", href: "/book-a-demo" }}
        secondary={{ label: "Read the docs", href: "https://docs.basta.app/" }}
      />

      <FeatureGrid
        eyebrow="Built for the cataloguing room"
        title="Right and tight, from intake to upload"
        items={[
          {
            icon: ClipboardList,
            title: "Custom fields by item type",
            body: "Set the cataloguing requirements for each category — jewelry, furniture, art, or anything else — so specialists are always asked for the right details, nothing more.",
          },
          {
            icon: CheckCircle2,
            title: "Optional proofing workflow",
            body: "Route a lot through review and approval before it goes live, or skip it entirely for teams that catalog straight to publish.",
          },
          {
            icon: Camera,
            title: "Photography built for the shoot",
            body: "Capture images against a lot right at the table, so nothing gets separated from its item between the studio and the catalog.",
          },
          {
            icon: ImagePlus,
            title: "Automatic naming",
            body: "Images are matched and named against the correct lot automatically — no manual renaming, no guessing which file goes where.",
          },
          {
            icon: Upload,
            title: "Bulk upload",
            body: "Drop in a whole shoot at once and let Basta sort images to their lots, instead of uploading and tagging one at a time.",
          },
          {
            icon: Mic,
            title: "Voice-to-text cataloguing",
            body: "Dictate condition notes and descriptions instead of typing them out — useful for specialists moving fast through a high-volume intake day.",
          },
        ]}
      />

      <CapabilitySplit
        eyebrow="Consistency at speed"
        title="A workflow that keeps up with intake, not one you fight against"
        body="Cataloguing errors and photo mix-ups are expensive to fix once a sale is live. Basta is built to catch them at the source — with the right fields for each item type and a proofing step for teams that want one."
        reverse
        bullets={[
          {
            title: "Nothing goes live unreviewed",
            body: "Turn on proofing for sales where a second set of eyes matters, and turn it off where it doesn't.",
          },
          {
            title: "Fewer mistakes per lot",
            body: "Item-type-specific fields mean specialists aren't guessing what to capture — or missing it.",
          },
          {
            title: "Photography that keeps pace",
            body: "Automatic naming and bulk upload mean the shoot doesn't become the bottleneck before a sale goes live.",
          },
        ]}
      />

      <CTABand
        title="See cataloging in action"
        sub="Get your team cataloguing on Basta."
      />
    </PageFrame>
  );
}
