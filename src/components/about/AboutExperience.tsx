"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHO_WE_ARE } from "@/lib/copy";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FounderPhoto } from "@/components/about/FounderPhoto";

const panels = [
  {
    title: "Who we are",
    body: WHO_WE_ARE,
  },
  {
    title: "Shopify craft",
    body: "Custom flagships where art direction drives conversion—lookbooks, cart drawer, custom type, and modular sections built for fashion and lifestyle.",
  },
  {
    title: "Art direction",
    body: "Coming fall: full production for social, ads, and Shopify. You send the pieces—we book studio, set, photographer, and models, then deliver the vision.",
  },
  {
    title: "Revenue through visuals",
    body: "High-end visuals meet e-commerce UX. We don't ship generic themes—we ship brand identity that sells.",
  },
];

export function AboutExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0.12, 0.88], ["0%", "-72%"]);

  return (
    <div className="px-4 pt-32 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="The Alter Ego"
          description="Scroll the story—then meet the founder."
        />
      </div>

      <div ref={ref} className="relative mt-20 h-[200vh]">
        <div className="sticky top-28 overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex w-[420vw] gap-6 px-4 md:gap-8 md:px-8"
          >
            {panels.map((panel) => (
              <GlassContainer
                key={panel.title}
                className="flex h-[58vh] w-[88vw] shrink-0 flex-col justify-between p-8 md:h-[62vh] md:w-[72vw] md:p-12"
              >
                <h3 className="font-heading text-ink">{panel.title}</h3>
                <p className="font-body max-w-xl text-lg leading-relaxed text-ink/75 md:text-xl">
                  {panel.body}
                </p>
              </GlassContainer>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-7xl gap-12 lg:grid-cols-[minmax(280px,380px)_1fr] lg:items-center">
        <FounderPhoto />
        <GlassContainer className="p-8 md:p-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-magenta">
            Trey May
          </p>
          <p className="font-heading mt-4 text-ink">Founder & creative lead</p>
          <p className="font-body mt-6 leading-relaxed text-ink/75">
            Building custom Shopify flagships and art direction for fashion and
            lifestyle brands—where the storefront is as considered as the
            campaign, and every detail is built to convert.
          </p>
        </GlassContainer>
      </div>
    </div>
  );
}
