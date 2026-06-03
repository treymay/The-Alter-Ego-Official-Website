"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ART_DIRECTION_SERVICE,
  SHOPIFY_SERVICE,
  type ShopifyFeatureGroup,
} from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SERVICE_TABS = [
  { id: "shopify" as const, label: SHOPIFY_SERVICE.title },
  { id: "art-direction" as const, label: ART_DIRECTION_SERVICE.title },
];

const accentBar = {
  orange: "bg-brand-orange",
  pink: "bg-brand-pink",
  green: "bg-brand-green",
};

const accentText = {
  orange: "text-brand-orange",
  pink: "text-brand-pink",
  green: "text-brand-green",
};

function ShopifyPanel() {
  return (
    <motion.div
      key="shopify-panel"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 120, damping: 24 }}
      className="space-y-8"
    >
      <GlassContainer className="overflow-hidden p-0">
        <div className="h-2 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-green" />
        <div className="p-8 md:p-10">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
            Conversion through art direction
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            {SHOPIFY_SERVICE.lead}
          </p>
        </div>
      </GlassContainer>

      <div className="grid gap-6 lg:grid-cols-3">
        {SHOPIFY_SERVICE.featureGroups.map((group) => (
          <FeatureGroupColumn key={group.title} group={group} />
        ))}
      </div>
    </motion.div>
  );
}

function FeatureGroupColumn({ group }: { group: ShopifyFeatureGroup }) {
  return (
    <GlassContainer className="flex h-full flex-col p-0 overflow-hidden">
      <div className={cn("h-1.5 w-full", accentBar[group.accent])} />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h4 className={cn("font-heading text-sm", accentText[group.accent])}>
          {group.title}
        </h4>
        <ul className="mt-5 flex flex-1 flex-col gap-4">
          {group.items.map((item) => (
            <li
              key={item.name}
              className="rounded-xl border border-ink/8 bg-white/60 p-4"
            >
              <p className="font-body text-sm font-semibold text-ink">{item.name}</p>
              {item.detail && (
                <p className="font-body mt-1.5 text-xs leading-relaxed text-ink/60">
                  {item.detail}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </GlassContainer>
  );
}

function ArtDirectionPanel() {
  return (
    <motion.div
      key="art-panel"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 120, damping: 24 }}
      className="space-y-6"
    >
      <GlassContainer className="overflow-hidden p-0">
        <div className="h-2 bg-gradient-to-r from-brand-pink via-brand-yellow to-brand-green" />
        <div className="p-8 md:p-10">
          <span className="inline-block rounded-full bg-brand-yellow px-3 py-1 font-body text-[0.65rem] font-bold uppercase tracking-widest text-ink">
            {ART_DIRECTION_SERVICE.badge}
          </span>
          <p className="font-body mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
            {ART_DIRECTION_SERVICE.lead}
          </p>
        </div>
      </GlassContainer>

      <div className="grid gap-4 md:grid-cols-2">
        {ART_DIRECTION_SERVICE.capabilities.map((item, i) => (
          <div
            key={item}
            className="flex gap-4 rounded-2xl border border-ink/10 bg-white/70 p-5 shadow-sm"
          >
            <span className="font-body text-lg font-bold text-brand-pink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-body text-sm leading-relaxed text-ink/80">{item}</p>
          </div>
        ))}
      </div>

      <GlassContainer className="p-6 md:p-8">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
          Delivered across
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {ART_DIRECTION_SERVICE.channels.map((ch) => (
            <span
              key={ch}
              className="rounded-full border border-brand-green/40 bg-brand-green/15 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-ink"
            >
              {ch}
            </span>
          ))}
        </div>
      </GlassContainer>
    </motion.div>
  );
}

export function ServicesExperience() {
  const [active, setActive] = useState<"shopify" | "art-direction">("shopify");
  const isShopify = active === "shopify";

  return (
    <div className="px-4 pt-32 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Shopify & Art Direction"
          description="Select a service—the panel on the right reshapes into a dedicated layout."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(260px,1fr)_2.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <GlassContainer className="p-6">
              <ul className="space-y-2">
                {SERVICE_TABS.map((tab) => (
                  <li key={tab.id}>
                    <button
                      type="button"
                      onClick={() => setActive(tab.id)}
                      className={cn(
                        "w-full rounded-xl px-4 py-3 text-left font-heading text-sm transition",
                        active === tab.id
                          ? "bg-magenta text-white"
                          : "text-ink/45 hover:bg-white/80 hover:text-ink",
                      )}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-brand-orange via-brand-pink to-brand-green" />
            </GlassContainer>
          </div>

          <div className="min-h-[480px]">
            <AnimatePresence mode="wait">
              {isShopify ? <ShopifyPanel /> : <ArtDirectionPanel />}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-magenta px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-white hover:bg-ink"
          >
            Start a project
          </Link>
        </div>
      </div>
    </div>
  );
}
