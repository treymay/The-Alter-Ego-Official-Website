export type ServiceExampleImage = {
  /** Path under public/ e.g. /images/services/shopify/01.jpg */
  src: string;
  alt: string;
  label?: string;
};

/**
 * Add your images to public/images/services/shopify/ and public/images/services/art-direction/
 * then update the src paths below (or keep Unsplash placeholders until ready).
 */
export const SHOPIFY_EXAMPLE_IMAGES: ServiceExampleImage[] = [
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85",
    alt: "Shopify storefront example",
    label: "Storefront",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85",
    alt: "Editorial product layout",
    label: "Product page",
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
    alt: "Mobile commerce",
    label: "Mobile",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85",
    alt: "Lookbook section",
    label: "Lookbook",
  },
  {
    src: "https://images.unsplash.com/photo-1556740758-90de374c12aba?w=900&q=85",
    alt: "Cart and checkout",
    label: "Commerce",
  },
];

export const ART_DIRECTION_EXAMPLE_IMAGES: ServiceExampleImage[] = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=85",
    alt: "Campaign still",
    label: "Campaign",
  },
  {
    src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&q=85",
    alt: "Editorial photography",
    label: "Editorial",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    alt: "Set photography",
    label: "On set",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988351-763728e1935b?w=900&q=85",
    alt: "Fashion direction",
    label: "Fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85",
    alt: "Campaign drop",
    label: "Drop",
  },
];
