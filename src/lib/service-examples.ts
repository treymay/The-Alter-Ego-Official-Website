export type ServiceExampleImage = {
  /** Path under public/ e.g. /images/services/shopify/01.jpg */
  src: string;
  alt: string;
  label?: string;
};

export const SHOPIFY_EXAMPLE_IMAGES: ServiceExampleImage[] = [
  {
    src: "/work/heart-of-steel.png",
    alt: "Heart of Steel storefront hero",
    label: "Heart of Steel",
  },
  {
    src: "/work/kelela.png",
    alt: "Kelela New Avatar album launch storefront",
    label: "Kelela",
  },
  {
    src: "/work/federico-cina.png",
    alt: "Federico Cina runway video homepage",
    label: "Federico Cina",
  },
];

export const ART_DIRECTION_EXAMPLE_IMAGES: ServiceExampleImage[] = [
  {
    src: "/work/the-geminis/01.jpg",
    alt: "SHYNE magazine cover with Cebrea over a miniature city",
    label: "The Geminis",
  },
  {
    src: "/work/trey-may/02-brooch-portrait.jpg",
    alt: "Blood & Tears brooch worn on a white blazer",
    label: "Trey May Jewelry",
  },
  {
    src: "/work/lux-aeterna/01.jpg",
    alt: "Layered gold pearl necklace over an open button-down",
    label: "Lux Aeterna",
  },
  {
    src: "/work/the-geminis/04.jpg",
    alt: "The Geminis laughing in matching fringe dresses",
    label: "The Geminis",
  },
  {
    src: "/work/trey-may/05-ear-cuff-profile.jpg",
    alt: "Gold winged ear cuff close-up",
    label: "Trey May Jewelry",
  },
  {
    src: "/work/lux-aeterna/06.jpg",
    alt: "Pearl bracelet on a raised arm in a mesh jersey",
    label: "Lux Aeterna",
  },
];
