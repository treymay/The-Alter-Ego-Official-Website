"use client";

import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useBrandStore } from "@/store/useBrandStore";
import { GlassContainer } from "@/components/ui/GlassContainer";

const STAGES = [
  {
    label: "01",
    title: "Sterile start",
    body: "White and beige—the generic ecommerce default most fashion brands are stuck inside.",
  },
  {
    label: "02",
    title: "Color breaks through",
    body: "Orange, pink, and green emerge—art direction pushing past template fatigue.",
  },
  {
    label: "03",
    title: "Full bloom",
    body: "A living gradient field behind every section—identity that feels intentional, not accidental.",
  },
];

export function HomeMetamorphosisTrack({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const setMetamorphosis = useBrandStore((s) => s.setMetamorphosis);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, [0, 0.22, 0.55, 0.78, 1], [0, 0.25, 0.65, 0.92, 1]);

  useEffect(() => {
    setMetamorphosis(0);
    return progress.on("change", (v) => setMetamorphosis(v));
  }, [progress, setMetamorphosis]);

  const stageIndex = useTransform(scrollYProgress, [0.18, 0.4, 0.62], [0, 1, 2]);

  return (
    <div ref={ref} className="relative">
      <section className="relative h-[220vh]">
        <div className="sticky top-0 flex h-screen items-center px-4 md:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                Metamorphosis
              </p>
              <h2 className="font-display mt-4 text-ink">White to gradient</h2>
              <p className="font-body mt-4 max-w-md text-ink/70">
                Scroll the full home journey—background shifts from blank canvas to
                orange, pink, green, and yellow brand light.
              </p>
            </div>
            <div className="relative min-h-[280px]">
              {STAGES.map((stage, i) => (
                <MetamorphosisStageCard
                  key={stage.label}
                  stage={stage}
                  index={i}
                  stageIndex={stageIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
}

function MetamorphosisStageCard({
  stage,
  index,
  stageIndex,
}: {
  stage: (typeof STAGES)[number];
  index: number;
  stageIndex: MotionValue<number>;
}) {
  const opacity = useTransform(stageIndex, (v) => {
    const active = Math.round(v);
    if (active === index) return 1;
    if (Math.abs(active - index) === 1) return 0.2;
    return 0;
  });
  const y = useTransform(stageIndex, (v) => {
    const active = Math.round(v);
    return active === index ? 0 : active > index ? 24 : -24;
  });

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center"
    >
      <GlassContainer className="w-full p-6 md:p-8">
        <span className="font-body text-xs font-bold text-brand-orange">
          {stage.label}
        </span>
        <h3 className="font-heading mt-2 text-ink">{stage.title}</h3>
        <p className="font-body mt-3 text-sm leading-relaxed text-ink/75">
          {stage.body}
        </p>
        <div className="mt-5 flex gap-2">
          <span className="h-2 w-8 rounded-full bg-brand-orange" />
          <span className="h-2 w-8 rounded-full bg-brand-pink" />
          <span className="h-2 w-8 rounded-full bg-brand-green" />
          <span className="h-2 w-8 rounded-full bg-brand-yellow" />
        </div>
      </GlassContainer>
    </motion.div>
  );
}
