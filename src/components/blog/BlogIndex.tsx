import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { GlassContainer } from "@/components/ui/GlassContainer";

export function BlogIndex() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Editorial presence"
        description="Calm, serious reading—brand color reserved for highlights. Narrow columns, intentional hierarchy."
      />

      {featured && (
        <Link href={`/blog/${featured.slug}`} className="group mb-12 block">
          <GlassContainer subtle className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="font-body text-[0.65rem] font-semibold uppercase tracking-widest text-magenta">
                  Featured · {featured.category}
                </span>
                <h2 className="font-display mt-4 text-ink group-hover:text-magenta">
                  {featured.title}
                </h2>
                <p className="font-body mt-4 leading-relaxed text-ink/70">
                  {featured.excerpt}
                </p>
                <p className="font-body mt-6 text-xs text-ink/45">
                  {featured.date} · {featured.readTime}
                </p>
              </div>
            </div>
          </GlassContainer>
        </Link>
      )}

      <ul className="grid gap-8 md:grid-cols-2">
        {rest.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <GlassContainer
                subtle
                className="flex h-full flex-col overflow-hidden p-0 transition hover:border-magenta/40"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-cream/10 backdrop-blur-[1px] transition group-hover:backdrop-blur-none" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-body text-[0.65rem] font-semibold uppercase tracking-widest text-brand-orange">
                    {post.category}
                  </span>
                  <h3 className="font-heading mt-3 text-lg text-ink group-hover:text-magenta">
                    {post.title}
                  </h3>
                  <p className="font-body mt-2 line-clamp-2 flex-1 text-sm text-ink/65">
                    {post.excerpt}
                  </p>
                  <p className="font-body mt-4 text-xs text-ink/45">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </GlassContainer>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
