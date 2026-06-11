export type CaseStudyCategory = "SHOPIFY" | "ART DIRECTION";

export type CaseStudyAspect = "portrait" | "landscape" | "wide";

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type CaseStudyGalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  id: string;
  title: string;
  category: CaseStudyCategory;
  aspect: CaseStudyAspect;
  image: string;
  /** Natural dimensions of `image`; when set, the case study hero renders uncropped */
  imageSize?: { width: number; height: number };
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
    imageSize: { width: 1024, height: 581 },
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
    imageSize: { width: 1024, height: 525 },
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
    id: "federico-cina",
    title: "FEDERICO CINA",
    category: "SHOPIFY",
    aspect: "portrait",
    image: "/work/federico-cina.png",
    imageSize: { width: 1024, height: 615 },
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
    id: "lux-aeterna",
    title: "LUX AETERNA",
    category: "ART DIRECTION",
    aspect: "portrait",
    image: "/work/lux-aeterna/01.jpg",
    imageSize: { width: 819, height: 1024 },
    tagline:
      "Pearl and chain jewelry shot boyish, relaxed, and candid—so anyone can see themselves wearing it.",
    sections: [
      {
        heading: "The collection",
        body: "Lux Aeterna is a set of handmade pearl-and-chain pieces—layered lariat necklaces with crystal and gold-bead stations, draped swag chains with charm drops, and matching bracelets in gold and silver. Delicate materials, fine wire work, and pendants that fall past the collarbone: jewelry that traditionally gets shot on velvet, under glass, untouchable.",
      },
      {
        heading: "Boyish on purpose",
        body: "The direction went the other way. Casting and wardrobe are deliberately boyish—mesh football jerseys, open button-downs, light-wash denim, zip hoodies, house slippers. Putting pearls on that canvas breaks the default that fine jewelry is formal or feminine. The contrast does the arguing: if it works over a practice jersey, it works on anyone.",
      },
      {
        heading: "Relaxed and candid",
        body: "Nothing is posed stiff. Models read books, lie across the bed, run a hand through their hair, cover a laugh. The bedroom-and-bare-wall settings keep it diaristic—like film photos of a friend who happens to be wearing the pieces. That candid energy makes the jewelry feel like everyday wear instead of occasion wear.",
      },
      {
        heading: "Why it converts",
        body: "The biggest silent objection in jewelry is \"that's not for me.\" This shoot removes it. Multiple models, multiple skin tones, zero glamour styling—the customer sees a person, not a mannequin. And the detail crops still do retail work: pearls, wire wrapping, and charm drops stay tack-sharp so craft quality reads up close.",
      },
    ],
    gallery: [
      {
        src: "/work/lux-aeterna/01.jpg",
        alt: "Portrait in an open button-down wearing the layered gold pearl lariat necklace",
        width: 819,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/02.jpg",
        alt: "Gold and pearl bracelet on a wrist with a hand tucked into light-wash denim",
        width: 682,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/03.jpg",
        alt: "Silver chain necklace with crystal stations worn over an open hoodie",
        width: 682,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/04.jpg",
        alt: "Close-up of the gold pearl swag necklace over a cream button-down",
        width: 819,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/05.jpg",
        alt: "Candid frame reading a book in denim shorts and slippers wearing the silver necklace",
        width: 682,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/06.jpg",
        alt: "Pearl bracelet on a raised arm in a white mesh jersey",
        width: 819,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/07.jpg",
        alt: "Portrait in a vintage mesh football jersey",
        width: 683,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/08.jpg",
        alt: "Arms crossed showing the pearl bracelet and silver ring",
        width: 819,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/09.jpg",
        alt: "Seated portrait in glasses wearing the layered silver necklace",
        width: 682,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/10.jpg",
        alt: "Candid seated frame with the pearl bracelet, hand over mouth",
        width: 819,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/11.jpg",
        alt: "Lying across the bed wearing the silver crystal necklace",
        width: 682,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/12.jpg",
        alt: "Standing portrait with the silver lariat necklace and star charm drop",
        width: 682,
        height: 1024,
      },
      {
        src: "/work/lux-aeterna/13.jpg",
        alt: "Reading on the bed beside a mirror wearing the layered necklace",
        width: 819,
        height: 1024,
      },
    ],
  },
  {
    id: "trey-may",
    title: "BLOOD & TEARS",
    category: "ART DIRECTION",
    aspect: "landscape",
    image: "/work/trey-may/03-brooch-fronds.jpg",
    imageSize: { width: 1024, height: 682 },
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
        width: 682,
        height: 1024,
      },
      {
        src: "/work/trey-may/01-ear-cuff-palms.jpg",
        alt: "Gold ear cuff and hair claw with palm trees and white architecture",
        width: 682,
        height: 1024,
      },
      {
        src: "/work/trey-may/03-brooch-fronds.jpg",
        alt: "Close-up of the Blood & Tears brooch through palm fronds",
        width: 1024,
        height: 682,
      },
      {
        src: "/work/trey-may/04-yellow-window.jpg",
        alt: "Portrait with the brooch beside a yellow window",
        width: 682,
        height: 1024,
      },
      {
        src: "/work/trey-may/05-ear-cuff-profile.jpg",
        alt: "Profile close-up of the gold winged ear cuff with pearl drop",
        width: 682,
        height: 1024,
      },
    ],
  },
  {
    id: "the-geminis",
    title: "THE GEMINIS",
    category: "ART DIRECTION",
    aspect: "wide",
    image: "/work/the-geminis/02.jpg",
    imageSize: { width: 819, height: 1024 },
    tagline:
      "SHYNE magazine covers for a pop duo—DDR, East Asian pop, Euphoria, and Y2K in one visual world.",
    sections: [
      {
        heading: "The project",
        body: "A cover series for SHYNE magazine starring The Geminis, a pop duo, plus solo covers for each member. Full art direction end to end: concept, styling, makeup direction, photography, compositing, and the cover graphics themselves—custom logotype, vertical Japanese callouts, and the colorway system that ties the set together.",
      },
      {
        heading: "The inspiration mash",
        body: "Four references run through every frame. Dance Dance Revolution brings the arcade energy—candy colors, platform shoes, poses caught mid-move. East Asian pop styles the covers like J-pop and K-pop idol magazines, down to the vertical Japanese cover lines. Euphoria drives the makeup: graphic neon eye bars and face gems. And Y2K supplies the finish—liquid chrome type, glossy 3D hearts, bubble insets, and miniature city sets the talent towers over.",
      },
      {
        heading: "A system, not just covers",
        body: "Each cover is its own colorway—hot pink, baby pink, powder blue, and teal-and-gold—but the grid never changes: SHYNE logotype up top, issue date right, vertical name rail, Japanese callout on the spine side. That's what makes four wildly different images read instantly as one collectible series.",
      },
      {
        heading: "Why it works",
        body: "Magazine framing turns artists into icons—a cover implies the world already decided they matter. The repeated system builds brand recognition by the second image, and the colorway-per-cover approach gives every fan a favorite to share. It's the same logic as variant vinyl: one drop, multiple covetable versions.",
      },
    ],
    gallery: [
      {
        src: "/work/the-geminis/01.jpg",
        alt: "SHYNE cover — Cebrea in a hot pink fringe dress crouching over a miniature city",
        width: 819,
        height: 1024,
      },
      {
        src: "/work/the-geminis/02.jpg",
        alt: "SHYNE cover — The Geminis back to back in metallic lilac and pink sequin checkerboard",
        width: 819,
        height: 1024,
      },
      {
        src: "/work/the-geminis/03.jpg",
        alt: "SHYNE cover — Aaliyah in a lavender fringe dress lounging in a miniature city set",
        width: 819,
        height: 1024,
      },
      {
        src: "/work/the-geminis/04.jpg",
        alt: "SHYNE cover — The Geminis laughing in matching lavender and pink fringe dresses",
        width: 819,
        height: 1024,
      },
    ],
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
