"use client";

import Image from "next/image";
import { CASE_STUDIES, type CaseStudy } from "@/lib/portfolio";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { cn } from "@/lib/utils";

function CaseStudyCard({ item }: { item: CaseStudy }) {
  const isShopify = item.category === "SHOPIFY";

  return (
    <article className="group overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02] group-hover:saturate-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex items-start justify-between gap-4 border-t border-ink/8 px-5 py-5 md:px-6 md:py-6">
        <div>
          <p
            className={cn(
              "font-body text-[0.65rem] font-bold uppercase tracking-[0.25em]",
              isShopify ? "text-brand-orange" : "text-brand-pink",
            )}
          >
            {isShopify ? "Shopify" : "Art direction"}
          </p>
          <h3 className="font-heading mt-2 text-lg text-ink md:text-xl">{item.title}</h3>
        </div>
        <span className="shrink-0 font-body text-[0.65rem] font-semibold uppercase tracking-widest text-ink/35">
          Soon
        </span>
      </div>
      {isShopify && (
        <div className="border-t border-ink/8 px-5 py-3 md:px-6">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-green">
            View the website →
          </p>
        </div>
      )}
    </article>
  );
}

function CaseStudySection({
  title,
  subtitle,
  accentBar,
  items,
}: {
  title: string;
  subtitle: string;
  accentBar: string;
  items: CaseStudy[];
}) {
  return (
    <section>
      <GlassContainer className="mb-8 p-6 md:p-8">
        <div className={cn("mb-5 h-1 w-16 rounded-full", accentBar)} />
        <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-ink/45">
          {subtitle}
        </p>
        <h2 className="font-display mt-2 text-ink">{title}</h2>
        <p className="font-body mt-3 max-w-lg text-sm text-ink/55">
          {items.length} projects — replace placeholders with your case study imagery and links.
        </p>
      </GlassContainer>

      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((item) => (
          <CaseStudyCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export function WorkGallery() {
  const shopify = CASE_STUDIES.filter((c) => c.category === "SHOPIFY");
  const artDirection = CASE_STUDIES.filter((c) => c.category === "ART DIRECTION");

  return (
    <PageShell width="default">
      <PageHero
        eyebrow="Work"
        title="Case studies"
        description="Shopify web design and art direction—two clean sections, consistent cards, room to scan."
        size="large"
      />

      <div className="space-y-20">
        <CaseStudySection
          title="Shopify web design"
          subtitle="E-commerce flagships"
          accentBar="bg-brand-orange"
          items={shopify}
        />

        <CaseStudySection
          title="Art direction"
          subtitle="Campaign & identity"
          accentBar="bg-brand-pink"
          items={artDirection}
        />
      </div>
    </PageShell>
  );
}
