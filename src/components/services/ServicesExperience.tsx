"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ART_DIRECTION_SERVICE, SHOPIFY_SERVICE } from "@/lib/services";
import { WEBSITES_NOTE } from "@/lib/copy";
import {
  ART_DIRECTION_EXAMPLE_IMAGES,
  SHOPIFY_EXAMPLE_IMAGES,
} from "@/lib/service-examples";
import { ServiceExampleCarousel } from "@/components/services/ServiceExampleCarousel";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { ServiceColorPanel } from "@/components/services/ServiceColorPanel";
import { useBrandStore } from "@/store/useBrandStore";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SERVICE_TABS = [
  { id: "shopify" as const, label: SHOPIFY_SERVICE.title, short: "Shopify" },
  {
    id: "art-direction" as const,
    label: ART_DIRECTION_SERVICE.title,
    short: "Art Direction",
  },
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

function DeliverableCard({
  name,
  detail,
  index,
}: {
  name: string;
  detail?: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 24,
        delay: index * 0.03,
      }}
      className="rounded-xl border border-ink/8 bg-white/80 p-5 shadow-sm"
    >
      <p className="font-body text-sm font-semibold text-ink">{name}</p>
      {detail && (
        <p className="font-body mt-2 text-xs leading-relaxed text-ink/60">{detail}</p>
      )}
    </motion.div>
  );
}

function ShopifyScrollPanel() {
  return (
    <motion.div
      key="shopify-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-10"
    >
      <ServiceExampleCarousel
        images={SHOPIFY_EXAMPLE_IMAGES}
        accent="orange"
        shape="wide"
      />

      <GlassContainer className="overflow-hidden p-0">
        <div className="h-2 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-pink" />
        <div className="p-8">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
            Aesthetic clarity
          </p>
          <p className="font-body mt-4 text-lg leading-relaxed text-ink/80">
            {SHOPIFY_SERVICE.lead}
          </p>
        </div>
      </GlassContainer>

      {SHOPIFY_SERVICE.featureGroups.map((group) => (
        <div key={group.title}>
          <h4 className={cn("font-heading text-sm", accentText[group.accent])}>
            {group.title}
          </h4>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {group.items.map((item, i) => (
              <DeliverableCard
                key={item.name}
                name={item.name}
                detail={item.detail}
                index={i}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ArtDirectionScrollPanel() {
  return (
    <motion.div
      key="art-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <ServiceExampleCarousel images={ART_DIRECTION_EXAMPLE_IMAGES} accent="pink" />

      <GlassContainer className="overflow-hidden p-0">
        <div className="h-2 bg-gradient-to-r from-brand-pink via-brand-green to-brand-yellow" />
        <div className="p-8">
          <span className="rounded-full bg-brand-yellow px-3 py-1 font-body text-[0.65rem] font-bold uppercase tracking-widest text-ink">
            {ART_DIRECTION_SERVICE.badge}
          </span>
          <p className="font-body mt-5 text-lg leading-relaxed text-ink/80">
            {ART_DIRECTION_SERVICE.lead}
          </p>
        </div>
      </GlassContainer>

      <div className="space-y-3">
        {ART_DIRECTION_SERVICE.capabilities.map((item, i) => (
          <DeliverableCard key={item} name={item} index={i} />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {ART_DIRECTION_SERVICE.channels.map((ch) => (
          <span
            key={ch}
            className="rounded-full border border-brand-pink/30 bg-brand-pink/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-ink"
          >
            {ch}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function ServicesExperience() {
  const [active, setActive] = useState<"shopify" | "art-direction">("shopify");
  const setServiceEnergy = useBrandStore((s) => s.setServiceEnergy);

  useEffect(() => {
    setServiceEnergy(active);
    return () => setServiceEnergy(null);
  }, [active, setServiceEnergy]);

  const activeTab = SERVICE_TABS.find((t) => t.id === active)!;

  return (
    <PageShell width="wide">
      <PageHero
        eyebrow="Services"
        title="Intentional design"
        description="Sticky navigation, scrolling deliverables, and color that shifts with each practice—Shopify development and art direction."
        size="large"
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(220px,280px)_1fr_minmax(200px,260px)]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <GlassContainer className="p-5">
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-widest text-ink/45">
              Select service
            </p>
            <ul className="mt-4 space-y-2">
              {SERVICE_TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    type="button"
                    onClick={() => setActive(tab.id)}
                    className={cn(
                      "w-full rounded-xl px-4 py-3 text-left transition",
                      active === tab.id
                        ? "bg-magenta text-white"
                        : "hover:bg-white/90",
                    )}
                  >
                    <span className="font-heading block text-sm">{tab.short}</span>
                    <span
                      className={cn(
                        "font-body mt-0.5 block text-[0.65rem] uppercase tracking-wider",
                        active === tab.id ? "text-white/80" : "text-ink/45",
                      )}
                    >
                      {tab.id === "shopify" ? "Live now" : "Coming fall"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </GlassContainer>
          <p className="font-body mt-6 hidden text-sm leading-relaxed text-ink/60 lg:block">
            {active === "shopify"
              ? SHOPIFY_SERVICE.lead
              : ART_DIRECTION_SERVICE.lead}
          </p>
        </aside>

        <div className="min-w-0">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-ink/10 pb-4">
            <h2 className="font-heading text-ink">{activeTab.label}</h2>
            <span className="font-body text-xs uppercase tracking-widest text-magenta">
              Scroll deliverables ↓
            </span>
          </div>
          <AnimatePresence mode="wait">
            {active === "shopify" ? (
              <ShopifyScrollPanel />
            ) : (
              <ArtDirectionScrollPanel />
            )}
          </AnimatePresence>
        </div>

        <ServiceColorPanel energy={active} />
      </div>

      <div className="mt-20 text-center">
        <p className="font-body mx-auto mb-8 max-w-md text-sm leading-relaxed text-ink/60">
          {WEBSITES_NOTE}
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-magenta px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-white hover:bg-ink"
        >
          Start a project
        </Link>
      </div>
    </PageShell>
  );
}
