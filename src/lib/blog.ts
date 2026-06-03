export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "metamorphosis-of-digital-identity",
    title: "The Metamorphosis of Digital Identity",
    excerpt:
      "Why expressive brands are leaving generic templates behind—and what bloom looks like in practice.",
    category: "Aesthetic Principles",
    date: "May 12, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
  },
  {
    slug: "glass-depth-without-chaos",
    title: "Glass, Depth, and Calm Motion",
    excerpt:
      "How frosted interfaces keep spatial sites readable when the canvas behind them is alive.",
    category: "Motion",
    date: "Apr 28, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=80",
  },
  {
    slug: "lotus-as-creative-symbol",
    title: "Lotus as Creative Symbol",
    excerpt:
      "Rebirth, form, and the balance between floral futurism and wireframe precision.",
    category: "Identity",
    date: "Apr 3, 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80",
  },
  {
    slug: "headless-shopify-for-studios",
    title: "Headless Shopify for Creative Studios",
    excerpt:
      "Decoupling commerce from presentation so your visual world never fights the cart.",
    category: "Presence",
    date: "Mar 15, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostBody(slug: string): string[] {
  const bodies: Record<string, string[]> = {
    "metamorphosis-of-digital-identity": [
      "Digital identity should evolve with emotion. It should feel expressive, intentional, and alive—not assembled from the same sterile components everyone else is using.",
      "The Alter Ego exists at the intersection of strategic design and interactive development. We shape visual worlds where brands can bloom into their next form.",
      "Metamorphosis is not a buzzword here. It is the narrative arc of every project: from expected beige minimalism into a curated garden of color, motion, and presence.",
    ],
    "glass-depth-without-chaos": [
      "Glassmorphism works when it behaves like physical frosted glass: blur, subtle tint, specular edge, and restraint.",
      "We pair heavy backdrop-filter panels with a living WebGL field so hierarchy stays clear. Calm, not chaotic.",
      "Spring-driven UI motion keeps panels grounded. No cartoon bounce—just effortless confidence.",
    ],
    "lotus-as-creative-symbol": [
      "The lotus anchors our identity: rebirth emerging from form. In 3D, we treat it as wireframe futurism—precise, luminous, interactive.",
      "Floral futurism means organic paths and geometric grids in the same breath.",
      "Balance is the value that makes the contrast beautiful. Too much pixel or too much curve, and the whole composition tips.",
    ],
    "headless-shopify-for-studios": [
      "Monolithic themes cannot carry spatial experiences. Headless Shopify lets the storefront API power services, templates, and editorial content while the front end stays fully bespoke.",
      "Your blog, portfolio, and contact flows deserve the same craft as your hero—not a bolted-on template page.",
      "We build for founders, fashion labels, and venture-backed teams who refuse bland tech aesthetics.",
    ],
  };
  return (
    bodies[slug] ?? [
      "Expressive digital identity demands intentional curation.",
      "We design with personality and ship with clarity.",
    ]
  );
}
