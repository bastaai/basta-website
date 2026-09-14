// Items in the auto-jumping showcase carousel on the home page.
// Update this list to change what shows: each entry needs an image, the item
// name + sale price (shown in the "Just sold" pill), and the URL it links to.

export type ShowcaseItem = {
  src: string; // path under /public
  name: string; // item name (shown in the pill)
  price: string; // sale price (shown in the pill)
  seller: string; // auction house selling it (shown in "Trusted by")
  href: string; // link to the item on sale
};

export const showcaseItems: ShowcaseItem[] = [
  {
    src: "/assets/products/dino.png",
    name: "Trey the Triceratops",
    price: "$5,550,000",
    seller: "Joopiter",
    href: "https://www.joopiter.com/stories/trey-the-triceratops",
  },
  {
    src: "/assets/products/lamp.png",
    name: "Flower Lamp",
    price: "$250,000",
    seller: "Joopiter",
    href: "https://joopiter.com",
  },
  {
    src: "/assets/products/skateboard.png",
    name: "Tony Hawk Skateboard",
    price: "$1,152,000",
    seller: "Julien's",
    href: "https://juliensauctions.com",
  },
  {
    src: "/assets/products/artwork.png",
    name: "Josef Sima – Europa",
    price: "$1,522,000",
    seller: "Freeman's",
    href: "https://freemansauction.com",
  },
  {
    src: "/assets/products/coffee-maker.png",
    name: 'David Lynch "Mr Coffee" Coffeemaker',
    price: "$4,550",
    seller: "Julien's",
    href: "https://juliensauctions.com",
  },
];
