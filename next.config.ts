import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/reviews", permanent: true },
      { source: "/blog/:slug", destination: "/reviews", permanent: true },
      { source: "/work/trey-may", destination: "/work/west-palm-reverie", permanent: true },
    ];
  },
};

export default nextConfig;
