import Link from "next/link";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomeServicesPreview() {
  return (
    <section className="relative z-10 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Services" title="What we do" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <GlassContainer className="p-8">
            <h3 className="font-heading text-ink">Custom Shopify Development</h3>
            <p className="font-body mt-4 text-ink/75">
              Art-directed storefronts built to convert—lookbooks, custom type,
              cart drawer, and modular sections for fashion brands.
            </p>
            <Link
              href="/services#shopify"
              className="mt-6 inline-block font-body text-xs font-semibold uppercase tracking-widest text-magenta hover:underline"
            >
              View Shopify service →
            </Link>
          </GlassContainer>
          <GlassContainer className="p-8">
            <span className="inline-block rounded-full bg-brand-yellow/30 px-3 py-1 font-body text-[0.65rem] font-semibold uppercase tracking-widest text-ink">
              Coming Fall
            </span>
            <h3 className="font-heading mt-4 text-ink">Art Direction</h3>
            <p className="font-body mt-4 text-ink/75">
              Full production—photography, video, graphics, sets, and models.
              Executed for social, ads, and Shopify.
            </p>
            <Link
              href="/services#art-direction"
              className="mt-6 inline-block font-body text-xs font-semibold uppercase tracking-widest text-magenta hover:underline"
            >
              View Art Direction →
            </Link>
          </GlassContainer>
        </div>
      </div>
    </section>
  );
}
