"use client";

import { motion } from "framer-motion";
import type { ServiceEnergy } from "@/store/useBrandStore";

const presets = {
  shopify: {
    blobs: [
      "bg-brand-orange/70",
      "bg-brand-yellow/60",
      "bg-brand-pink/50",
    ],
    label: "Conversion through curated commerce",
  },
  "art-direction": {
    blobs: [
      "bg-brand-pink/70",
      "bg-brand-green/55",
      "bg-brand-yellow/50",
    ],
    label: "Vision executed end to end",
  },
};

export function ServiceColorPanel({ energy }: { energy: ServiceEnergy }) {
  if (!energy) return null;
  const preset = presets[energy];

  return (
    <div className="relative hidden h-full min-h-[420px] overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow-[0_12px_48px_rgba(0,0,0,0.1)] backdrop-blur-xl lg:block">
      <motion.div
        key={energy}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 22 }}
        className="absolute inset-0"
      >
        <div
          className={`absolute -left-8 top-1/4 h-48 w-48 rounded-full blur-3xl ${preset.blobs[0]}`}
        />
        <div
          className={`absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl ${preset.blobs[1]}`}
        />
        <div
          className={`absolute bottom-8 left-1/3 h-44 w-44 rounded-full blur-3xl ${preset.blobs[2]}`}
        />
      </motion.div>
      <div className="relative flex h-full flex-col justify-end p-8">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
          Service energy
        </p>
        <p className="font-heading mt-3 text-lg text-ink">{preset.label}</p>
      </div>
    </div>
  );
}
