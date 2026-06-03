import { WHO_WE_ARE } from "@/lib/copy";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoWeAre() {
  return (
    <section className="relative z-10 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Who we are" title="Fashion-first commerce" />
        <GlassContainer className="mt-10 p-8 md:p-12">
          <p className="font-body max-w-4xl text-xl leading-relaxed text-ink md:text-2xl">
            {WHO_WE_ARE}
          </p>
        </GlassContainer>
      </div>
    </section>
  );
}
