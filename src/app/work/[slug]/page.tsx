import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/lib/portfolio";
import { PageShell } from "@/components/layout/PageShell";
import { GlassContainer } from "@/components/ui/GlassContainer";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Case Study | The Alter Ego`,
    description: study.tagline,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const isShopify = study.category === "SHOPIFY";
  const hasBreakdown = !!study.sections?.length;

  return (
    <PageShell>
      <Link
        href="/work"
        className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50 transition hover:text-magenta"
      >
        ← All case studies
      </Link>

      <header className="mt-8">
        <p
          className={cn(
            "font-body text-xs font-bold uppercase tracking-[0.3em]",
            isShopify ? "text-brand-orange" : "text-brand-pink",
          )}
        >
          {isShopify ? "Shopify web design" : "Art direction"}
        </p>
        <h1 className="font-display mt-3 text-ink">{study.title}</h1>
        {study.tagline && (
          <p className="font-body mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
            {study.tagline}
          </p>
        )}
      </header>

      {study.imageSize ? (
        <div
          className={cn(
            "mt-12 overflow-hidden rounded-2xl border border-ink/10",
            study.imageSize.height > study.imageSize.width &&
              "mx-auto max-w-xl",
          )}
        >
          <Image
            src={study.image}
            alt={study.title}
            width={study.imageSize.width}
            height={study.imageSize.height}
            className="h-auto w-full"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>
      ) : (
        <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>
      )}

      {study.websiteUrl && (
        <GlassContainer className="mt-10 flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/50">
              Live site
            </p>
            <a
              href={study.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading mt-2 block break-all text-lg text-magenta hover:text-ink"
            >
              {study.websiteUrl.replace("https://", "")}
            </a>
            {study.websitePassword && (
              <p className="font-body mt-3 text-sm text-ink/65">
                Store password:{" "}
                <code className="rounded bg-ink/8 px-2 py-1 font-semibold tracking-widest text-ink">
                  {study.websitePassword}
                </code>
              </p>
            )}
          </div>
          <a
            href={study.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-magenta px-6 py-3 text-center font-body text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-ink"
          >
            Visit the website
          </a>
        </GlassContainer>
      )}

      {study.gallery && study.gallery.length > 0 && (
        <section className="mt-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-magenta">
            The shoot
          </p>
          <div className="mt-8 columns-1 gap-6 md:columns-2">
            {study.gallery.map((img) => (
              <div
                key={img.src}
                className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-ink/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {hasBreakdown ? (
        <section className="mt-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-magenta">
            Art direction → conversion
          </p>
          <div className="mt-8 space-y-10">
            {study.sections!.map((section, i) => (
              <div
                key={section.heading}
                className="grid gap-4 border-t border-ink/10 pt-8 md:grid-cols-[80px_1fr]"
              >
                <span className="font-display text-2xl text-ink/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-heading text-xl text-ink">
                    {section.heading}
                  </h2>
                  <p className="font-body mt-3 max-w-[65ch] leading-relaxed text-ink/75">
                    {section.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <GlassContainer className="mt-16 p-8 text-center md:p-12">
          <p className="font-heading text-ink">Full case study coming soon</p>
          <p className="font-body mx-auto mt-3 max-w-md text-sm text-ink/60">
            Imagery, process, and the conversion breakdown for {study.title} are
            in production.
          </p>
        </GlassContainer>
      )}

      <div className="mt-20 border-t border-ink/10 pt-10 text-center">
        <p className="font-heading text-ink">Want a flagship like this?</p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-full bg-magenta px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-white hover:bg-ink"
        >
          Start a project
        </Link>
      </div>
    </PageShell>
  );
}
