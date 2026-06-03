import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { GradientBackground } from "@/components/canvas/GradientBackground";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BrandProvider } from "@/components/providers/BrandProvider";

const bodyFont = Outfit({
  subsets: ["latin"],
  variable: "--font-body-sans",
});

export const metadata: Metadata = {
  title: "The Alter Ego | Custom Shopify & Art Direction",
  description:
    "Custom Shopify flagships and art direction for fashion and lifestyle brands. High-end visuals meet e-commerce UX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} h-full`}>
      <body className="min-h-full antialiased">
        <BrandProvider>
          <GradientBackground />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
        </BrandProvider>
      </body>
    </html>
  );
}
