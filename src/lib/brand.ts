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
    "Creativity",
    "Innovation",
    "Identity",
    "Originality",
    "Collaboration",
    "Balance",
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
