export type CaseStudyCategory = "SHOPIFY" | "ART DIRECTION";

export type CaseStudyAspect = "portrait" | "landscape" | "wide";

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type CaseStudyGalleryImage = {
  src: string;
  alt: string;
  aspect: "portrait" | "landscape";
};

export type CaseStudy = {
  id: string;
  title: string;
  category: CaseStudyCategory;
  aspect: CaseStudyAspect;
  image: string;
  /** One-line positioning shown on the card and case study hero */
  tagline?: string;
  /** Live site (password-protected dev stores supported) */
  websiteUrl?: string;
  /** Storefront password shown next to the link inside the case study */
  websitePassword?: string;
  /** Art-direction-for-conversion breakdown */
  sections?: CaseStudySection[];
  /** Campaign / lookbook photography */
  gallery?: CaseStudyGalleryImage[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "heart-of-steel",
    title: "HEART OF STEEL",
    category: "SHOPIFY",
    aspect: "portrait",
    image: "/work/heart-of-steel.png",
    tagline: "Alternative jewelry and streetwear from the underground.",
    websiteUrl: "https://trey-may-jewelry-and-streetwear.myshopify.com",
    websitePassword: "trey",
    sections: [
      {
        heading: "A world before a catalog",
        body: "The store opens on a full-bleed campaign image—chains, gothic styling, direct eye contact—with chrome display type stacked over it. Visitors are dropped into a subculture, not a product list. That emotional buy-in is what lets a new brand charge $80–$110 for a hoodie or necklace.",
      },
      {
        heading: "One red button",
        body: "Everything on the hero is monochrome except SHOP NOW in red. There is exactly one place for the eye to land and one decision to make. The secondary OUR STORY button is intentionally quiet—an outline, not a fill—so the conversion path stays dominant.",
      },
      {
        heading: "Dark world, clean shelf",
        body: "The SEASON ONE carousel flips to white-background product shots. After the moody campaign sets the vibe, products are presented like artifacts in a case—named pieces (\"Winged Heart\" necklace, \"Cupid's Revenge\" hoodie) with prices visible immediately. No clicks needed to know what something costs.",
      },
      {
        heading: "Drop framing builds urgency",
        body: "Calling the collection SEASON ONE implies a season two—and an expiry date. Naming each piece turns SKUs into collectibles, which supports premium pricing and repeat visits between drops.",
      },
    ],
  },
  {
    id: "kelela",
    title: "KELELA",
    category: "SHOPIFY",
    aspect: "wide",
    image: "/work/kelela.png",
    tagline: "Album launch hub for the New Avatar world tour.",
    websiteUrl: "https://kelela-b4zs178g.myshopify.com/",
    websitePassword: "kelela",
    sections: [
      {
        heading: "The whole site has one job",
        body: "This is a launch hub, not a general store: pre-order the album. The nav mirrors the fan journey—Pre-Order, Stream, Tour, Merch, Follow—and the hero pairs the album art with a single gradient PRE-ORDER ALBUM button. \"Ships July 10\" microcopy sits right under the CTA, answering the buyer's first objection before it forms.",
      },
      {
        heading: "Art direction carries the dark theme",
        body: "Inverted, spectral album art glows against a near-black cityscape. Editorial serif type for \"new avatar\" against letter-spaced eyebrow labels creates hierarchy without clutter. The whole palette is pulled from the record—so every section feels like the album, and the merch photography matches it 1:1.",
      },
      {
        heading: "Sold Out as social proof",
        body: "The tour list shows Sold Out tags on New York, LA, Chicago, and Toronto next to cities that still have tickets. Scarcity does the selling: if Brooklyn Paramount sold out twice, you buy your city now. Sold-out dates convert to Join Waitlist—captured demand instead of a dead end.",
      },
      {
        heading: "Bundles raise order value",
        body: "Merch leads with Vinyl + T-shirt and CD + T-shirt bundles before single items, anchoring buyers at the higher price point. Limited colored-vinyl variants add a collector's reason to choose the bigger cart.",
      },
    ],
  },
  {
    id: "erl",
    title: "ERL",
    category: "SHOPIFY",
    aspect: "landscape",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80",
    tagline: "California-soaked fashion flagship.",
  },
  {
    id: "federico-cina",
    title: "FEDERICO CINA",
    category: "SHOPIFY",
    aspect: "portrait",
    image: "/work/federico-cina.png",
    tagline: "Italian craft and seasonal storytelling, runway to checkout.",
    websiteUrl: "https://federico-cina-oth6xhds.myshopify.com/",
    websitePassword: "cina",
    sections: [
      {
        heading: "Runway video as the front door",
        body: "The homepage opens on a full-bleed runway film with a whisper-thin centered logo and almost no chrome. It signals fashion-house credibility instantly—this brand shows collections, it doesn't just list products. Motion holds attention through the first seconds that decide a bounce.",
      },
      {
        heading: "Poetry that sells the collection",
        body: "Each collection card (SS25, FW24, SS24) carries a short seasonal narrative—broom flowers blooming yellow in Sarsina before summer. The storytelling gives every garment a reason to exist, which is what separates a €500 cardigan from a commodity. Emotional context first, price second.",
      },
      {
        heading: "Editorial rhythm, retail clarity",
        body: "The page alternates: video, clean product strip on white, lookbook imagery edge-to-edge, product strip again. Customers never scroll far from a buyable moment, but products always arrive after the imagery has built desire. Custom pixel-display type keeps even the product grid on-brand.",
      },
      {
        heading: "Archive sale as brand story",
        body: "Instead of a SALE banner, the archive section frames discounts as 'giving a second life' to pieces made by Romagna artisans. Clearance becomes sustainability and heritage—margin recovery without cheapening the brand.",
      },
    ],
  },
  {
    id: "no-faith-studios",
    title: "NO FAITH STUDIOS",
    category: "SHOPIFY",
    aspect: "landscape",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=80",
    tagline: "Statement streetwear with editorial bite.",
  },
  {
    id: "royoko-rain",
    title: "ROYOKO RAIN",
    category: "SHOPIFY",
    aspect: "wide",
    image:
      "https://images.unsplash.com/photo-1529139574461-a303027c1d8b?w=1400&q=80",
    tagline: "Atmospheric fashion flagship.",
  },
  {
    id: "lux-aeterna",
    title: "LUX AETERNA",
    category: "ART DIRECTION",
    aspect: "portrait",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&q=80",
    tagline: "Campaign identity and visual narrative.",
  },
  {
    id: "trey-may",
    title: "TREY MAY - JEWELRY",
    category: "ART DIRECTION",
    aspect: "landscape",
    image: "/work/trey-may/03-brooch-fronds.jpg",
    tagline:
      "Blood & Tears — narrative jewelry, designed and fabricated by Trey, shot like a campaign.",
    websiteUrl: "https://www.treymayofficial.com/works/blood-and-tears",
    sections: [
      {
        heading: "The piece: Blood & Tears",
        body: "An eye that weeps what words can't hold. Designed and fabricated by Trey as his final for Introduction to Jewelry at SCAD, the brooch is an eye that cries blood—a monument to the specific agony of watching someone you loved move on. Brass and copper sheet metal, custom wire-fabricated eyelashes, pearls and ruby-red gemstone beads for the tears, a UV-resin-sealed iris, and a hand-soldered hinge and catch so it wears like a proper brooch.",
      },
      {
        heading: "West Palm Beach was the mood",
        body: "The direction for the shoot came from a vacation. West Palm Beach made Trey feel classy—like he could live there one day—and that feeling became the entire visual world: white historic architecture, wrought-iron fences, palm fronds, warm film grain. The campaign isn't set-dressed luxury; it's a real place that made the work feel at home.",
      },
      {
        heading: "Styling so the jewelry wins",
        body: "Cream blazer, white mesh, soft neutrals—the wardrobe stays in the same family as the buildings, so the only saturated thing in any frame is the blood-red bead tears of the brooch. The gold winged ear cuff and pearl drop get the same treatment: close crops, profile angles, hair pulled back. Every styling decision routes the eye to the metal.",
      },
      {
        heading: "Campaign logic",
        body: "Wide frames sell the lifestyle, close frames sell the craft. The set alternates between environmental portraits (the world you're buying into) and detail shots where the piercing work, patination, and beadwork are sharp enough to inspect. It's the same desire-then-detail rhythm we build into Shopify flagships—just executed on film.",
      },
    ],
    gallery: [
      {
        src: "/work/trey-may/02-brooch-portrait.jpg",
        alt: "Blood & Tears brooch worn on a white blazer in front of historic West Palm Beach architecture",
        aspect: "portrait",
      },
      {
        src: "/work/trey-may/01-ear-cuff-palms.jpg",
        alt: "Gold ear cuff and hair claw with palm trees and white architecture",
        aspect: "portrait",
      },
      {
        src: "/work/trey-may/03-brooch-fronds.jpg",
        alt: "Close-up of the Blood & Tears brooch through palm fronds",
        aspect: "landscape",
      },
      {
        src: "/work/trey-may/04-yellow-window.jpg",
        alt: "Portrait with the brooch beside a yellow window",
        aspect: "portrait",
      },
      {
        src: "/work/trey-may/05-ear-cuff-profile.jpg",
        alt: "Profile close-up of the gold winged ear cuff with pearl drop",
        aspect: "portrait",
      },
    ],
  },
  {
    id: "the-geminis",
    title: "THE GEMINIS",
    category: "ART DIRECTION",
    aspect: "wide",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&q=80",
    tagline: "Duo identity, photography, and rollout.",
  },
];

export function getCaseStudy(id: string) {
  return CASE_STUDIES.find((c) => c.id === id);
}

export const CASE_STUDY_FILTERS: Array<"All" | CaseStudyCategory> = [
  "All",
  "SHOPIFY",
  "ART DIRECTION",
];
