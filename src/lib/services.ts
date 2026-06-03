export type ShopifyFeature = {
  name: string;
  detail?: string;
};

export type ShopifyFeatureGroup = {
  title: string;
  accent: "orange" | "pink" | "green";
  items: ShopifyFeature[];
};

export const SHOPIFY_SERVICE = {
  id: "shopify",
  title: "Custom Shopify Development",
  lead:
    "We build custom Shopify flagships where art direction is not decoration—it is the conversion engine. Every layout, type choice, and product moment is curated to move people from browse to buy.",
  featureGroups: [
    {
      title: "Launch fast",
      accent: "orange",
      items: [
        { name: "Minimal setup", detail: "Lean theme architecture, fast to launch." },
        { name: "Clean product pages", detail: "Editorial product storytelling that sells." },
        { name: "Cart drawer", detail: "Frictionless checkout without breaking the aesthetic." },
        { name: "Fastest launch path", detail: "Ship a polished store on an aggressive timeline." },
      ],
    },
    {
      title: "Visual commerce",
      accent: "pink",
      items: [
        { name: "Lookbooks", detail: "Seasonal drops presented like a fashion house." },
        { name: "Custom fonts", detail: "Typography that matches your visual identity." },
        { name: "Image streams", detail: "Continuous visual rhythm across the storefront." },
        { name: "Music player", detail: "Embedded audio for artists and lifestyle brands." },
        { name: "More sections and templates", detail: "Modular blocks built for your catalog." },
      ],
    },
    {
      title: "Depth & evolution",
      accent: "green",
      items: [
        { name: "Interactive spaces", detail: "Scroll moments and layout depth that feel alive." },
        { name: "More motion and depth", detail: "Movement that guides attention to product." },
        { name: "Future visual updates", detail: "Room to evolve the store as your brand grows." },
        {
          name: "Visual Identity and Art Direction",
          detail: "On-store art direction aligned with campaigns and social.",
        },
      ],
    },
  ] satisfies ShopifyFeatureGroup[],
};

export const ART_DIRECTION_SERVICE = {
  id: "art-direction",
  title: "Art Direction",
  badge: "COMING FALL",
  lead:
    "Full visual identity execution—not just the mood board. We concept, produce, and deliver assets for social, advertisements, Shopify, and beyond.",
  capabilities: [
    "Videography, photography, and graphic design",
    "Asset creation for campaigns and product launches",
    "Overall visual identity and narrative direction",
    "You send the items—we secure studio, set, photographer, and models",
    "End-to-end execution of the vision, not concepts alone",
    "Pairs seamlessly with Custom Shopify Development",
  ],
  channels: ["Social media", "Advertisements", "Shopify", "Lookbooks", "Campaign drops"],
};
