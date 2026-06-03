import { STUDIO_MISSION, STUDIO_TAGLINE } from "@/lib/copy";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoWeAre() {
  return (
    <section className="relative z-10 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Who we are" title="Fashion, music, lifestyle" />
        <GlassContainer className="mt-10 space-y-6 p-8 md:p-12">
          <p className="font-body max-w-4xl text-xl leading-relaxed text-ink md:text-2xl">
            {STUDIO_TAGLINE}
          </p>
          <p className="font-body max-w-3xl text-lg leading-relaxed text-ink/75">
            {STUDIO_MISSION}
          </p>
        </GlassContainer>
      </div>
    </section>
  );
}
