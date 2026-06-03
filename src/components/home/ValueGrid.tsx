"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accents = [
  "border-l-brand-green",
  "border-l-brand-yellow",
  "border-l-brand-orange",
  "border-l-brand-pink",
  "border-l-magenta",
  "border-l-ink/30",
];

export function ValueGrid() {
  return (
    <section className="relative z-10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Core Tenets"
          title="STYLE MEETS STRATEGY"
          description="Creativity with intention. Calm, not chaotic—every interaction earns its place."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BRAND.values.map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 24,
                mass: 1.2,
                delay: i * 0.05,
              }}
            >
              <GlassContainer
                className={`group border-l-4 p-6 ${accents[i]} transition hover:scale-[1.02]`}
              >
                <p className="font-display text-lg text-ink">{value}</p>
                <p className="font-body mt-3 text-sm text-ink/60">
                  Curated presence for brands ready to bloom beyond generic tech
                  aesthetics.
                </p>
                <div
                  className="mt-6 h-16 w-16 rounded-full border border-dashed border-magenta/40 opacity-60 transition group-hover:rotate-45 group-hover:opacity-100"
                  aria-hidden
                />
              </GlassContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
