"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ServiceExampleImage } from "@/lib/service-examples";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  images: ServiceExampleImage[];
  accent?: "orange" | "pink";
};

export function ServiceExampleCarousel({
  title = "Example work",
  images,
  accent = "orange",
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: -1 | 1) {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  const accentRing =
    accent === "orange" ? "ring-brand-orange/30" : "ring-brand-pink/30";

  return (
    <GlassContainer className="overflow-hidden p-0">
      <div className="flex items-center justify-between gap-4 border-b border-ink/8 px-5 py-4 md:px-6">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
            {title}
          </p>
          <p className="font-body mt-1 text-[0.65rem] text-ink/45">
            Scroll horizontally · add images in{" "}
            <code className="text-ink/60">public/images/services/</code>
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-white/80 text-ink transition hover:border-magenta hover:text-magenta"
            aria-label="Previous examples"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-white/80 text-ink transition hover:border-magenta hover:text-magenta"
            aria-label="Next examples"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={cn(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 py-5 md:px-6",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-ink/15",
        )}
      >
        {images.map((img) => (
          <figure
            key={img.src + img.label}
            className={cn(
              "relative w-[min(85vw,320px)] shrink-0 snap-center overflow-hidden rounded-xl border border-white/60 bg-white/50 shadow-sm ring-1",
              accentRing,
            )}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            {img.label && (
              <figcaption className="border-t border-ink/8 px-4 py-3">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/70">
                  {img.label}
                </p>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </GlassContainer>
  );
}
