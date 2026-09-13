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
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Contact Us", href: "/contact" },
      { label: "Jobs", href: "/jobs" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Live Auction", href: "/product/live-auction" },
      { label: "Online Auction", href: "/product/online-auction" },
      { label: "Buy Now", href: "/product/buy-now" },
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
];

// Primary calls to action used across the home page.
export const cta = {
  talkToUs: { label: "Talk to us", href: "/contact" },
  readDocs: { label: "Read our docs", href: "https://docs.basta.app/" },
  exploreApi: { label: "Explore our API's", href: "https://docs.basta.app/" },
  bookDemo: { label: "Schedule a demo now", href: "/book-a-demo" },
} as const;
