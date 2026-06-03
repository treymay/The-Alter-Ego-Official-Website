import Link from "next/link";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { WHO_WE_ARE } from "@/lib/copy";

export function HeroMetamorphosis() {
  return (
    <section className="relative min-h-screen px-4 pt-32 md:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center">
        <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-ink/50">
          Custom Shopify · Art Direction
        </p>
        <h1 className="font-display mt-6 text-ink">The Alter Ego</h1>
        <p className="font-heading mt-4 text-ink/90">
          Flagship stores for fashion & lifestyle
        </p>
        <GlassContainer className="mt-10 max-w-2xl p-6 md:p-8">
          <p className="font-body text-lg leading-relaxed text-ink/85">
            {WHO_WE_ARE}
          </p>
          <p className="font-body mt-6 text-xs uppercase tracking-[0.2em] text-ink/45">
            Keep scrolling — full metamorphosis below
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="rounded-full bg-magenta px-6 py-3 font-body text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-ink"
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-ink/25 bg-white/50 px-6 py-3 font-body text-xs font-semibold uppercase tracking-widest text-ink hover:border-magenta hover:text-magenta"
            >
              Contact
            </Link>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
