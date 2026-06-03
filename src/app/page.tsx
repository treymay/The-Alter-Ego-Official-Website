import { HeroMetamorphosis } from "@/components/home/HeroMetamorphosis";
import { HomeMetamorphosisTrack } from "@/components/home/HomeMetamorphosisTrack";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { HomePhotoGallery } from "@/components/home/HomePhotoGallery";
import { HomeServicesPreview } from "@/components/home/HomeServicesPreview";
import Link from "next/link";

export default function HomePage() {
  return (
    <HomeMetamorphosisTrack>
      <HeroMetamorphosis />
      <WhoWeAre />
      <HomePhotoGallery />
      <HomeServicesPreview />
      <section className="relative z-10 px-4 pb-32 md:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-heading text-ink">Ready to launch your flagship?</p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-magenta px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-white hover:bg-ink"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </HomeMetamorphosisTrack>
  );
}
