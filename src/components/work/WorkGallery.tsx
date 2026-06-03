"use client";

import Image from "next/image";
import { CASE_STUDIES, type CaseStudy } from "@/lib/portfolio";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { cn } from "@/lib/utils";

const aspectClass = {
  portrait: "row-span-2 min-h-[320px]",
  landscape: "min-h-[240px]",
  wide: "md:col-span-2 min-h-[260px]",
};

function GalleryCard({ item }: { item: CaseStudy }) {
  const isShopify = item.category === "SHOPIFY";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-[0_10px_40px_rgba(0,0,0,0.08)]",
        aspectClass[item.aspect],
      )}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:saturate-110"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="font-heading text-xl text-white md:text-2xl">{item.title}</h3>
        {isShopify ? (
          <p className="font-body mt-2 text-xs font-semibold uppercase tracking-widest text-brand-yellow">
            View the website →
          </p>
        ) : (
          <p className="font-body mt-2 text-xs font-semibold uppercase tracking-widest text-brand-pink">
            Art direction
          </p>
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
        <span className="rounded border border-white/50 bg-white/15 px-4 py-2 font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Case study — coming soon
        </span>
      </div>
    </article>
  );
}

function GallerySection({
  title,
  subtitle,
  barClass,
  items,
}: {
  title: string;
  subtitle: string;
  barClass: string;
  items: CaseStudy[];
}) {
  return (
    <section className="space-y-10">
      <div>
        <div className={cn("h-1.5 w-full rounded-full", barClass)} />
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-ink/50">
              {subtitle}
            </p>
            <h2 className="font-display mt-2 text-ink">{title}</h2>
          </div>
          <p className="font-body max-w-xs text-sm text-ink/55">
            Premium negative space. Hover to bring color back into each frame.
          </p>
        </div>
      </div>
      <div className="grid auto-rows-[200px] grid-cols-1 gap-6 md:grid-cols-2 lg:auto-rows-[220px]">
        {items.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export function WorkGallery() {
  const shopify = CASE_STUDIES.filter((c) => c.category === "SHOPIFY");
  const artDirection = CASE_STUDIES.filter((c) => c.category === "ART DIRECTION");

  return (
    <PageShell width="wide">
      <PageHero
        eyebrow="Work"
        title="Case studies"
        description="A digital gallery—Shopify web design and art direction in two distinct chapters, masonry rhythm, and room to breathe."
        size="large"
      />

      <div className="space-y-28">
        <GallerySection
          title="Shopify web design"
          subtitle="E-commerce flagships"
          barClass="bg-gradient-to-r from-brand-orange via-brand-yellow to-transparent"
          items={shopify}
        />

        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-ink/10" />
          <p className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-ink/40">
            Separate practice
          </p>
          <div className="h-px flex-1 bg-ink/10" />
        </div>

        <GallerySection
          title="Art direction"
          subtitle="Campaign & identity"
          barClass="bg-gradient-to-r from-brand-pink via-brand-green to-transparent"
          items={artDirection}
        />
      </div>
    </PageShell>
  );
}
