import Link from "next/link";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { WHO_WE_ARE } from "@/lib/copy";

export function HeroMetamorphosis() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-4 pt-28 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-body text-xs font-medium uppercase tracking-[0.35em] text-ink/45">
          The Alter Ego Studio
        </p>
        <h1 className="font-display mt-4 max-w-5xl text-ink">WE DON&apos;T DO BORING.</h1>
        <p className="font-heading mt-5 max-w-xl text-ink/85">
          Custom Shopify flagships & art direction for fashion and lifestyle.
        </p>
        <GlassContainer className="mt-10 max-w-2xl p-6 md:p-9">
          <p className="font-body text-base leading-relaxed text-ink/85 md:text-lg">
            {WHO_WE_ARE}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="rounded-full bg-magenta px-6 py-3 font-body text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-ink"
            >
              Case Studies
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-ink/20 bg-white/60 px-6 py-3 font-body text-xs font-semibold uppercase tracking-widest text-ink hover:border-brand-orange hover:text-brand-orange"
            >
              Services
            </Link>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
