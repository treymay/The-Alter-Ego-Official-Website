"use client";

import { motion } from "framer-motion";
import { GlassContainer } from "@/components/ui/GlassContainer";

const audiences = [
  {
    title: "Venture-Backed Tech",
    copy: "Spatial storefronts with the seriousness your investors expect—and none of the template fatigue.",
  },
  {
    title: "Fashion & Personal Brands",
    copy: "Editorial motion, bold color, and identity systems that feel as curated as your feed.",
  },
  {
    title: "Boutique & Luxury",
    copy: "Premium negative space, glass depth, and portfolio interactions that command attention.",
  },
];

export function AudienceStrip() {
  return (
    <section className="relative z-10 px-4 pb-32 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {audiences.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 24,
              delay: i * 0.08,
            }}
          >
            <GlassContainer className="h-full p-8">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="font-body mt-4 text-sm leading-relaxed text-ink/70">
                {item.copy}
              </p>
            </GlassContainer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
