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
  "border-l-brand-green",
];

const spanClass = [
  "lg:col-span-2",
  "",
  "",
  "lg:row-span-2",
  "",
  "lg:col-span-2",
];

export function ValueGrid() {
  return (
    <section className="relative z-10 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Core tenets"
          title="Style meets strategy"
          description="Creativity with intention. Calm, not chaotic."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {BRAND.values.map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 24,
                delay: i * 0.04,
              }}
              className={spanClass[i]}
            >
              <GlassContainer
                className={`group flex h-full flex-col justify-between border-l-4 p-6 md:p-7 ${accents[i]}`}
              >
                <div>
                  <p className="font-display text-xl text-ink md:text-2xl">{value}</p>
                  <p className="font-body mt-3 text-sm leading-relaxed text-ink/65">
                    Distinct, curated presence for brands ready to bloom past generic
                    ecommerce.
                  </p>
                </div>
                <div
                  className="lotus-orbit mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-brand-pink/50"
                  aria-hidden
                >
                  <div className="h-6 w-6 rounded-full border-2 border-brand-green/70 transition duration-700 group-hover:rotate-180 group-hover:border-brand-orange" />
                </div>
              </GlassContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
