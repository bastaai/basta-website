// Single source of truth for every link in the design.
// Footer columns + primary CTAs. Used by the header, footer, menu, and the
// placeholder-page generator (scripts/gen-placeholders.mjs).

export type NavLink = { label: string; href: string };

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Jobs", href: "/jobs" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Demo", href: "/book-a-demo" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Bidding", href: "/product/bidding" },
      { label: "Cataloging", href: "/product/cataloging" },
      { label: "Live Auction", href: "/product/live-auction" },
      { label: "Marketplace", href: "/product/marketplace" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/developers" },
      { label: "Webhooks", href: "/developers/webhooks" },
      { label: "API's", href: "/developers/api" },
      { label: "SDK's", href: "/developers/sdks" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Auction Houses", href: "/solutions/auction-houses" },
      { label: "Charities", href: "/solutions/charities" },
      { label: "Non-Profits", href: "/solutions/non-profits" },
      { label: "Influencers", href: "/solutions/influencers" },
    ],
  },
];

// Primary calls to action used across the home page.
export const cta = {
  talkToUs: { label: "Talk to us", href: "/contact" },
  readDocs: { label: "Read our docs", href: "/developers" },
  exploreApi: { label: "Explore our API's", href: "/developers/api" },
  caseStudy: { label: "Read the case study", href: "/case-studies/juliens" },
  bookDemo: { label: "Schedule a demo now", href: "/book-a-demo" },
} as const;

// Flattened, de-duplicated list of every internal route the site links to.
// Consumed by the placeholder generator so no link 404s.
export const allRoutes: NavLink[] = [
  ...footerNav.flatMap((c) => c.links),
  cta.caseStudy,
].filter(
  (link, i, arr) => arr.findIndex((l) => l.href === link.href) === i,
);
