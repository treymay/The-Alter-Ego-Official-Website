import { HeroMetamorphosis } from "@/components/home/HeroMetamorphosis";
import { HomeMetamorphosisTrack } from "@/components/home/HomeMetamorphosisTrack";
import { ValueGrid } from "@/components/home/ValueGrid";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { HomePhotoGallery } from "@/components/home/HomePhotoGallery";
import { AudienceStrip } from "@/components/home/AudienceStrip";
import { HomeServicesPreview } from "@/components/home/HomeServicesPreview";
import Link from "next/link";
import { GlassContainer } from "@/components/ui/GlassContainer";

export default function HomePage() {
  return (
    <HomeMetamorphosisTrack>
      <HeroMetamorphosis />
      <ValueGrid />
      <WhoWeAre />
      <HomePhotoGallery />
      <AudienceStrip />
      <HomeServicesPreview />
      <section className="relative z-10 px-4 pb-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <GlassContainer className="flex flex-col items-center justify-between gap-8 p-10 text-center md:flex-row md:text-left md:p-14">
            <div>
              <p className="font-display text-2xl text-ink md:text-3xl">
                Ready to launch your flagship?
              </p>
              <p className="font-body mt-2 text-ink/65">
                Design with personality. Creative direction with a point of view.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-magenta px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-white hover:bg-ink"
            >
              Get in touch
            </Link>
          </GlassContainer>
        </div>
      </section>
    </HomeMetamorphosisTrack>
  );
}
