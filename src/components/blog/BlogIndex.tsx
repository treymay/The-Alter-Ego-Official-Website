import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassContainer } from "@/components/ui/GlassContainer";

export function BlogIndex() {
  return (
    <div className="px-4 pt-32 pb-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Blog"
          title="EDITORIAL PRESENCE"
          description="Clean, serious reading with brand accents—expressive where it matters, calm where you read."
        />

        <ul className="mt-14 space-y-8">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <GlassContainer subtle className="overflow-hidden p-0 transition hover:border-magenta/30">
                  <div className="grid md:grid-cols-[280px_1fr]">
                    <div className="relative h-48 md:h-full md:min-h-[200px]">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover transition group-hover:scale-105"
                        sizes="280px"
                      />
                      <div className="absolute inset-0 bg-cream/20 backdrop-blur-[2px] transition group-hover:backdrop-blur-none" />
                    </div>
                    <div className="p-6 md:p-8">
                      <span className="inline-block rounded-full bg-magenta/10 px-3 py-1 font-body text-[0.7rem] uppercase tracking-widest text-magenta">
                        {post.category}
                      </span>
                      <h3 className="font-display mt-4 text-2xl text-ink group-hover:text-magenta">
                        {post.title}
                      </h3>
                      <p className="font-body mt-3 text-sm leading-relaxed text-ink/70">
                        {post.excerpt}
                      </p>
                      <p className="font-body mt-4 text-xs text-ink/45">
                        {post.date} · {post.readTime}
                      </p>
                    </div>
                  </div>
                </GlassContainer>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
