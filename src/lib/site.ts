// Single source of truth for every link in the design.
// Footer columns + primary CTAs, used by the header, footer, and menu.

export type NavLink = { label: string; href: string };

// External links (docs, auction houses) open in a new tab.
export const isExternal = (href: string) => href.startsWith("http");

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
      { label: "Buy Now", href: "/product/buy-now" },
      { label: "Cataloging", href: "/product/cataloging" },
      { label: "Cataloging & Image Management", href: "/product/cataloging-image-management" },
      { label: "Consignment", href: "/product/consignment" },
      { label: "Dutch Auction", href: "/product/dutch-auction" },
      { label: "Inventory & Barcoding", href: "/product/inventory-barcoding" },
      { label: "Invoicing & Settlement", href: "/product/invoicing-settlement" },
      { label: "Live Auction", href: "/product/live-auction" },
      { label: "Marketplace", href: "/product/marketplace" },
      { label: "Online Auction", href: "/product/online-auction" },
      { label: "Quick Auctions", href: "/product/quick-auction" },
      { label: "Registration & Authentication", href: "/product/registration-authentication" },
      { label: "Reporting & Data", href: "/product/reporting-data" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "https://docs.basta.app/" },
      { label: "Webhooks", href: "https://docs.basta.app/" },
      { label: "API's", href: "https://docs.basta.app/" },
      { label: "SDK's", href: "https://docs.basta.app/" },
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
  readDocs: { label: "Read our docs", href: "https://docs.basta.app/" },
  exploreApi: { label: "Explore our API's", href: "https://docs.basta.app/" },
  caseStudy: { label: "Read the case study", href: "/case-studies/juliens" },
  bookDemo: { label: "Schedule a demo now", href: "/book-a-demo" },
} as const;
