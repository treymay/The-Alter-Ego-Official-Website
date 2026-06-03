"use client";

import { motion } from "framer-motion";
import { STUDIO_MISSION, STUDIO_TAGLINE } from "@/lib/copy";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { FounderPhoto } from "@/components/about/FounderPhoto";

const pillars = [
  {
    title: "Expressive identity",
    body: "Digital presence that evolves with emotion—intentional, bold, and alive.",
    accent: "from-brand-orange/20 to-transparent",
    border: "border-l-brand-orange",
  },
  {
    title: "Commerce craft",
    body: "Custom Shopify flagships where layout, type, and product moments drive revenue.",
    accent: "from-brand-pink/20 to-transparent",
    border: "border-l-brand-pink",
  },
  {
    title: "Full production",
    body: "Art direction from concept to set—photography, video, and assets for every channel.",
    accent: "from-brand-green/20 to-transparent",
    border: "border-l-brand-green",
  },
  {
    title: "One visual world",
    body: "Campaign to checkout in a single curated aesthetic—no generic templates.",
    accent: "from-brand-yellow/25 to-transparent",
    border: "border-l-brand-yellow",
  },
];

export function AboutExperience() {
  return (
    <PageShell width="wide">
      <PageHero
        eyebrow="About"
        title="The Alter Ego"
        description="Creative direction with a point of view—for fashion, music, and lifestyle."
        size="large"
      />

      <section className="mb-20 max-w-4xl">
        <p className="font-heading text-2xl leading-snug text-ink md:text-3xl">
          {STUDIO_TAGLINE}
        </p>
        <p className="font-body mt-6 text-lg leading-relaxed text-ink/75 md:text-xl">
          {STUDIO_MISSION}
        </p>
        <p className="font-body mt-8 max-w-2xl text-sm leading-relaxed text-ink/55">
          We reject template fatigue. Every project is built to turn brand identity
          into revenue—not another sterile storefront.
        </p>
      </section>

      <div className="mb-24 grid gap-5 md:grid-cols-2">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 24,
              delay: i * 0.05,
            }}
          >
            <GlassContainer
              className={`relative overflow-hidden border-l-4 p-8 md:p-10 ${pillar.border}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accent}`}
                aria-hidden
              />
              <div className="relative">
                <h3 className="font-heading text-ink">{pillar.title}</h3>
                <p className="font-body mt-4 leading-relaxed text-ink/75">
                  {pillar.body}
                </p>
              </div>
            </GlassContainer>
          </motion.div>
        ))}
      </div>

      <section className="border-t border-ink/10 pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <FounderPhoto />
          </div>
          <div className="lg:col-span-7">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-magenta">
              Founder
            </p>
            <h2 className="font-display mt-4 text-ink">Trey May</h2>
            <p className="font-body mt-6 text-lg leading-relaxed text-ink/75">
              Building custom Shopify flagships and art direction for fashion, music,
              and lifestyle—where the storefront is as considered as the campaign.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: "Shopify", label: "Flagship builds" },
                { value: "Art direction", label: "Coming fall" },
                { value: "Revenue", label: "Through visuals" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-heading text-brand-orange">{item.value}</p>
                  <p className="font-body mt-1 text-xs uppercase tracking-widest text-ink/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
