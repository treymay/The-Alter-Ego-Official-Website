"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHO_WE_ARE } from "@/lib/copy";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { FounderPhoto } from "@/components/about/FounderPhoto";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const LotusScene = dynamic(
  () => import("@/components/canvas/LotusScene").then((m) => m.LotusScene),
  { ssr: false },
);

const panels = [
  {
    title: "Escape generic",
    body: "We reject template fatigue—the sterile white ecommerce default fashion brands are forced to inherit.",
    accent: "border-l-brand-orange",
  },
  {
    title: "Bloom with intention",
    body: WHO_WE_ARE,
    accent: "border-l-brand-pink",
  },
  {
    title: "Philosophy",
    body: "We believe digital identity should evolve with emotion—expressive, intentional, and alive.",
    accent: "border-l-brand-green",
    featured: true,
  },
  {
    title: "Shopify + art direction",
    body: "One studio from campaign to checkout—flagship stores and full production launching fall.",
    accent: "border-l-magenta",
  },
];

export function AboutExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["2%", "-75%"]);

  return (
    <>
      <PageShell>
        <PageHero
          eyebrow="About"
          title="Identity in motion"
          description="Vertical scroll becomes horizontal narrative—then meet the founder behind the work."
          size="large"
        />
      </PageShell>

      <div ref={ref} className="relative h-[240vh]">
        <div className="sticky top-24 overflow-hidden px-4 md:px-8">
          <motion.div style={{ x }} className="flex gap-6 md:gap-8">
            {panels.map((panel) => (
              <GlassContainer
                key={panel.title}
                className={cn(
                  "flex h-[65vh] w-[85vw] shrink-0 flex-col justify-between border-l-4 p-8 md:w-[65vw] md:p-12",
                  panel.accent,
                )}
              >
                {panel.featured ? (
                  <div className="grid h-full gap-6 lg:grid-cols-2 lg:items-center">
                    <div>
                      <h3 className="font-heading text-ink">{panel.title}</h3>
                      <p className="font-body mt-6 text-lg leading-relaxed text-ink/75 md:text-xl">
                        {panel.body}
                      </p>
                    </div>
                    <div className="relative h-48 overflow-hidden rounded-xl border border-white/50 lg:h-64">
                      <LotusScene />
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-ink">{panel.title}</h3>
                    <p className="font-body max-w-lg text-lg leading-relaxed text-ink/75">
                      {panel.body}
                    </p>
                  </>
                )}
              </GlassContainer>
            ))}
          </motion.div>
        </div>
      </div>

      <PageShell className="pt-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(300px,380px)_1fr] lg:items-start">
          <FounderPhoto />
          <div className="space-y-8">
            <GlassContainer className="p-8 md:p-10">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-magenta">
                Trey May · Founder
              </p>
              <p className="font-heading mt-4 text-2xl text-ink">Creative lead</p>
              <p className="font-body mt-6 leading-relaxed text-ink/75">
                Building custom Shopify flagships and art direction for fashion and
                lifestyle brands—where the storefront is as considered as the
                campaign.
              </p>
            </GlassContainer>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { stat: "2", label: "Core services" },
                { stat: "9+", label: "Case studies" },
                { stat: "1", label: "Visual world" },
              ].map((item) => (
                <GlassContainer key={item.label} className="p-5 text-center">
                  <p className="font-display text-3xl text-magenta">{item.stat}</p>
                  <p className="font-body mt-1 text-xs uppercase tracking-widest text-ink/55">
                    {item.label}
                  </p>
                </GlassContainer>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}
