"use client";

import Script from "next/script";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/copy";

export function ContactCalendly() {
  if (!CALENDLY_URL) {
    return (
      <GlassContainer className="mt-10 p-8">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
          Schedule a call
        </p>
        <p className="font-body mt-3 text-sm leading-relaxed text-ink/75">
          Prefer to talk live? Email us and we&apos;ll send a calendar link.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Schedule%20a%20call`}
          className="font-body mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-magenta hover:underline"
        >
          Request a meeting →
        </a>
      </GlassContainer>
    );
  }

  return (
    <GlassContainer className="mt-10 overflow-hidden p-0">
      <div className="border-b border-ink/8 px-6 py-5 md:px-8">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
          Schedule a call
        </p>
        <p className="font-body mt-2 text-sm text-ink/70">
          Pick a time that works — we&apos;ll come prepared with next steps.
        </p>
      </div>
      <div
        className="calendly-inline-widget min-h-[700px] w-full"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </GlassContainer>
  );
}
