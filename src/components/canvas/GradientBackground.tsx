"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const CanvasRoot = dynamic(
  () => import("./GradientCanvas").then((m) => m.GradientCanvas),
  { ssr: false },
);

export function GradientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 isolate [transform:translateZ(0)]"
      aria-hidden
    >
      <Suspense fallback={<div className="h-full w-full bg-cream" />}>
        <CanvasRoot />
      </Suspense>
    </div>
  );
}
