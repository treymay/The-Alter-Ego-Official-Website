"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ServiceExampleImage } from "@/lib/service-examples";
import { cn } from "@/lib/utils";

type Props = {
  images: ServiceExampleImage[];
  accent?: "orange" | "pink";
};

export function ServiceExampleCarousel({ images, accent = "orange" }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: -1 | 1) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  const ring =
    accent === "orange" ? "ring-brand-orange/25" : "ring-brand-pink/25";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white/90 text-ink shadow-md transition hover:text-magenta md:flex"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white/90 text-ink shadow-md transition hover:text-magenta md:flex"
        aria-label="Next"
      >
        →
      </button>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img) => (
          <figure
            key={img.src}
            className={cn(
              "relative w-[min(78vw,300px)] shrink-0 snap-center overflow-hidden rounded-2xl ring-1",
              ring,
            )}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
