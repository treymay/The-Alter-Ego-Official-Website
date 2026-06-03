"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useBrandStore } from "@/store/useBrandStore";

/** Drives white → brand gradient from home scroll only (no extra metamorphosis section). */
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
  const progress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.75, 1],
    [0, 0.3, 0.7, 0.95, 1],
  );

  useEffect(() => {
    setMetamorphosis(0);
    return progress.on("change", (v) => setMetamorphosis(v));
  }, [progress, setMetamorphosis]);

  return <div ref={ref}>{children}</div>;
}
