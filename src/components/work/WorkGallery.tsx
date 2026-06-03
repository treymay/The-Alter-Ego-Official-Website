"use client";

import Image from "next/image";
import { CASE_STUDIES, type CaseStudy } from "@/lib/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { cn } from "@/lib/utils";

function CaseStudyRow({ item }: { item: CaseStudy }) {
  const isShopify = item.category === "SHOPIFY";

  return (
    <article className="group grid overflow-hidden rounded-2xl border border-ink/10 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] md:grid-cols-[220px_1fr]">
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[200px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="220px"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/20 opacity-0 transition group-hover:opacity-100">
          <span className="rounded border border-white/50 bg-white/20 px-3 py-1.5 font-body text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            Case study soon
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 p-6 md:p-8">
        <h3 className="font-heading text-xl text-ink md:text-2xl">{item.title}</h3>
        {isShopify ? (
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-orange">
            View the website →
          </p>
        ) : (
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-brand-pink">
            Art direction project
          </p>
        )}
        {item.websiteUrl && (
          <a
            href={item.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-magenta hover:underline"
          >
            Open live site
          </a>
        )}
      </div>
    </article>
  );
}

function WorkSection({
  title,
  subtitle,
  accentClass,
  barClass,
  items,
}: {
  title: string;
  subtitle: string;
  accentClass: string;
  barClass: string;
  items: CaseStudy[];
}) {
  return (
    <section className="relative">
      <div className={cn("mb-8 h-1 w-full rounded-full", barClass)} />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className={cn("font-body text-xs font-bold uppercase tracking-[0.3em]", accentClass)}>
            {subtitle}
          </p>
          <h3 className="font-display mt-2 text-3xl text-ink md:text-4xl">{title}</h3>
        </div>
        <p className="font-body max-w-sm text-sm text-ink/55">
          {items.length} projects — placeholders ready for your case study copy and imagery.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {items.map((item) => (
          <CaseStudyRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export function WorkGallery() {
  const shopify = CASE_STUDIES.filter((c) => c.category === "SHOPIFY");
  const artDirection = CASE_STUDIES.filter((c) => c.category === "ART DIRECTION");

  return (
    <div className="px-4 pt-32 pb-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Work"
          title="Case Studies"
          description="Two distinct practices—Shopify web design and art direction—presented separately for clarity."
        />

        <div className="mt-16 space-y-24">
          <WorkSection
            title="Shopify Web Design"
            subtitle="E-commerce flagships"
            accentClass="text-brand-orange"
            barClass="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange/30"
            items={shopify}
          />

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-ink/10" />
            <GlassContainer className="px-4 py-2" subtle>
              <span className="font-body text-[0.65rem] font-semibold uppercase tracking-widest text-ink/50">
                Also
              </span>
            </GlassContainer>
            <div className="h-px flex-1 bg-ink/10" />
          </div>

          <WorkSection
            title="Art Direction"
            subtitle="Campaign & identity"
            accentClass="text-brand-pink"
            barClass="bg-gradient-to-r from-brand-pink via-brand-green to-brand-pink/30"
            items={artDirection}
          />
        </div>
      </div>
    </div>
  );
}
