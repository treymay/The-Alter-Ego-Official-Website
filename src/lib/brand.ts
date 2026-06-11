export const BRAND = {
  colors: {
    green: "#A7C51B",
    yellow: "#FEEA11",
    orange: "#FE8402",
    pink: "#FF8299",
    magenta: "#FE027B",
    cream: "#F9F9F6",
    beige: "#F5F5DC",
    ink: "#1A1A18",
  },
  values: [
    {
      name: "Creativity",
      description:
        "Imagination shaped with intent—every visual choice in service of the story.",
    },
    {
      name: "Innovation",
      description:
        "New craft when the brief demands it, never novelty for its own sake.",
    },
    {
      name: "Identity",
      description:
        "A visual and narrative presence that reads unmistakably as yours.",
    },
    {
      name: "Originality",
      description:
        "Work that could only belong to this brand—not a template wearing your logo.",
    },
    {
      name: "Collaboration",
      description:
        "Built alongside you, with your voice in the room from day one.",
    },
    {
      name: "Balance",
      description:
        "Expressive enough to bloom, restrained enough to convert—calm, not chaotic.",
    },
  ] as const,
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ] as const,
} as const;
