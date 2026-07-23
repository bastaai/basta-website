// Auto-scrolling carousel of items up for auction on the home page.
// Update this list to change what shows: each entry needs an image, alt text,
// and the URL of the sale it links to.

export type ShowcaseItem = {
  src: string; // path under /public
  alt: string; // description / item name
  href: string; // link to the item on sale
};

export const showcaseItems: ShowcaseItem[] = [
  {
    src: "/assets/products/dino.png",
    alt: "Triceratops skeleton",
    href: "https://juliensauctions.com",
  },
  {
    src: "/assets/products/lamp.png",
    alt: "Orange mushroom table lamp",
    href: "https://juliensauctions.com",
  },
  {
    src: "/assets/products/skateboard.png",
    alt: "Tony Hawk skateboard",
    href: "https://juliensauctions.com",
  },
  {
    src: "/assets/products/artwork.png",
    alt: "Framed artwork",
    href: "https://juliensauctions.com",
  },
  {
    src: "/assets/products/coffee-maker.png",
    alt: "Glass coffee maker",
    href: "https://juliensauctions.com",
  },
];
