"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassContainer } from "@/components/ui/GlassContainer";

/** Replace src paths with your campaign / lookbook / storefront stills */
const FEATURED = {
  hero: {
    label: "Lookbook · Campaign",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=85",
    alt: "Editorial campaign frame",
  },
  secondary: [
    {
      label: "Shopify flagship",
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=85",
      alt: "Storefront capture",
    },
    {
      label: "Art direction",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=85",
      alt: "Art direction still",
    },
  ],
} as const;

export function HomePhotoGallery() {
  return (
    <section className="relative z-10 px-4 pb-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected frames"
          title="Visual proof"
          description="Three intentional placements—swap in your lookbook, storefront, and campaign stills."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-12 md:grid-rows-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 24 }}
            className="md:col-span-8 md:row-span-2"
          >
            <GlassContainer className="group relative aspect-[16/10] overflow-hidden p-0 md:aspect-auto md:h-full md:min-h-[420px]">
              <Image
                src={FEATURED.hero.src}
                alt={FEATURED.hero.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-white">
                {FEATURED.hero.label}
              </p>
            </GlassContainer>
          </motion.div>

          {FEATURED.secondary.map((frame, i) => (
            <motion.div
              key={frame.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 24,
                delay: 0.08 + i * 0.06,
              }}
              className="md:col-span-4"
            >
              <GlassContainer className="group relative aspect-[4/3] overflow-hidden p-0 md:aspect-[16/11]">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
                <p className="absolute bottom-4 left-4 font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/95">
                  {frame.label}
                </p>
              </GlassContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
