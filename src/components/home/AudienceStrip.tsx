"use client";

import { motion } from "framer-motion";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Fashion & lifestyle",
    copy: "Lookbooks, drops, and flagship Shopify built to feel like your campaign—not a template.",
    accent: "text-brand-orange",
  },
  {
    title: "Artists & labels",
    copy: "Music players, editorial product pages, and visual rhythm that matches your release cycle.",
    accent: "text-brand-pink",
  },
  {
    title: "Premium boutiques",
    copy: "Negative space, glass hierarchy, and art direction that turns identity into revenue.",
    accent: "text-brand-green",
  },
];

export function AudienceStrip() {
  return (
    <section className="relative z-10 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who we serve"
          title="Built for brands that sell through visuals"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 24,
                delay: i * 0.07,
              }}
            >
              <GlassContainer className="h-full p-8">
                <span
                  className={`font-body text-xs font-bold uppercase tracking-widest ${item.accent}`}
                >
                  0{i + 1}
                </span>
                <h3 className="font-heading mt-4 text-ink">{item.title}</h3>
                <p className="font-body mt-3 text-sm leading-relaxed text-ink/70">
                  {item.copy}
                </p>
              </GlassContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
