"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const accentBars = [
  "bg-brand-green",
  "bg-brand-yellow",
  "bg-brand-orange",
  "bg-brand-pink",
  "bg-magenta",
  "bg-brand-green",
] as const;

export function ValueGrid() {
  return (
    <section className="relative z-10 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Core tenets"
          title="Style meets strategy"
          description="Creativity with intention. Calm, not chaotic."
          className="mx-auto text-center md:max-w-2xl"
          titleClassName="text-center"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {BRAND.values.map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 24,
                delay: i * 0.04,
              }}
              className="h-full"
            >
              <GlassContainer className="flex h-full min-h-[200px] flex-col items-center justify-center p-6 text-center md:min-h-[220px] md:p-8">
                <span
                  className={cn("mb-4 block h-1 w-10 rounded-full", accentBars[i])}
                  aria-hidden
                />
                <p className="font-display text-xl text-ink">{value}</p>
                <p className="font-body mt-3 max-w-[16rem] text-sm leading-relaxed text-ink/60">
                  Curated presence for brands moving past generic ecommerce.
                </p>
              </GlassContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
