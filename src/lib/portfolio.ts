export type CaseStudyCategory = "SHOPIFY" | "ART DIRECTION";

export type CaseStudyAspect = "portrait" | "landscape" | "wide";

export type CaseStudy = {
  id: string;
  title: string;
  category: CaseStudyCategory;
  aspect: CaseStudyAspect;
  image: string;
  websiteUrl?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "heart-of-steel",
    title: "HEART OF STEEL",
    category: "SHOPIFY",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
  },
  {
    id: "kelela",
    title: "KELELA",
    category: "SHOPIFY",
    aspect: "wide",
    image:
      "https://images.unsplash.com/photo-1483985988351-763728e1935b?w=1400&q=80",
  },
  {
    id: "erl",
    title: "ERL",
    category: "SHOPIFY",
    aspect: "landscape",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
  },
  {
    id: "federico-cina",
    title: "FEDERICO CINA",
    category: "SHOPIFY",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
  },
  {
    id: "no-faith-studios",
    title: "NO FAITH STUDIOS",
    category: "SHOPIFY",
    aspect: "landscape",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=80",
  },
  {
    id: "royoko-rain",
    title: "ROYOKO RAIN",
    category: "SHOPIFY",
    aspect: "wide",
    image:
      "https://images.unsplash.com/photo-1529139574461-a303027c1d8b?w=1400&q=80",
  },
  {
    id: "lux-aeterna",
    title: "LUX AETERNA",
    category: "ART DIRECTION",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&q=80",
  },
  {
    id: "trey-may",
    title: "TREY MAY",
    category: "ART DIRECTION",
    aspect: "landscape",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&q=80",
  },
  {
    id: "the-geminis",
    title: "THE GEMINIS",
    category: "ART DIRECTION",
    aspect: "wide",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80",
  },
];

export const CASE_STUDY_FILTERS: Array<"All" | CaseStudyCategory> = [
  "All",
  "SHOPIFY",
  "ART DIRECTION",
];
