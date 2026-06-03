"use client";

import Image from "next/image";
import { useState } from "react";

export function FounderPhoto() {
  const [error, setError] = useState(false);

  return (
    <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-white/25 bg-[rgba(249,249,246,0.12)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      {!error ? (
        <Image
          src="/images/trey-may.jpg"
          alt="Trey May — The Alter Ego"
          fill
          className="object-cover"
          priority
          onError={() => setError(true)}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange via-brand-pink to-brand-green font-heading text-3xl text-white">
            TM
          </div>
          <p className="font-heading text-ink">Trey May</p>
          <p className="font-body text-sm text-ink/60">
            Add your photo as{" "}
            <code className="text-ink/80">public/images/trey-may.jpg</code>
          </p>
        </div>
      )}
    </div>
  );
}
