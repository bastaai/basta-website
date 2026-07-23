// Generates an in-brand placeholder page for every internal route in the
// design. Re-run any time links change:  node scripts/gen-placeholders.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// href -> { title, eyebrow }
const pages = {
  "/about": { title: "About Us", eyebrow: "Company" },
  "/customers": { title: "Customers", eyebrow: "Company" },
  "/jobs": { title: "Jobs", eyebrow: "Company" },
  "/case-studies": { title: "Case Studies", eyebrow: "Company" },
  "/case-studies/juliens": { title: "Julien's Auctions", eyebrow: "Case Study" },
  "/contact": { title: "Contact Us", eyebrow: "Company" },
  "/book-a-demo": { title: "Book a Demo", eyebrow: "Get started" },
  "/product/bidding": { title: "Bidding", eyebrow: "Product" },
  "/product/cataloging": { title: "Cataloging", eyebrow: "Product" },
  "/product/live-auction": { title: "Live Auction", eyebrow: "Product" },
  "/product/marketplace": { title: "Marketplace", eyebrow: "Product" },
  "/developers": { title: "Documentation", eyebrow: "Developers" },
  "/developers/webhooks": { title: "Webhooks", eyebrow: "Developers" },
  "/developers/api": { title: "API's", eyebrow: "Developers" },
  "/developers/sdks": { title: "SDK's", eyebrow: "Developers" },
  "/solutions/auction-houses": { title: "Auction Houses", eyebrow: "Solutions" },
  "/solutions/charities": { title: "Charities", eyebrow: "Solutions" },
  "/solutions/non-profits": { title: "Non-Profits", eyebrow: "Solutions" },
  "/solutions/influencers": { title: "Influencers", eyebrow: "Solutions" },
};

const root = join(process.cwd(), "src", "app");

for (const [href, { title, eyebrow }] of Object.entries(pages)) {
  const file = join(root, href, "page.tsx");
  mkdirSync(dirname(file), { recursive: true });
  const body = `import { Placeholder } from "@/components/placeholder";

export const metadata = { title: ${JSON.stringify(title)} };

export default function Page() {
  return <Placeholder title={${JSON.stringify(title)}} eyebrow={${JSON.stringify(eyebrow)}} />;
}
`;
  writeFileSync(file, body);
  console.log("wrote", href);
}
console.log(`\n${Object.keys(pages).length} placeholder pages generated.`);
