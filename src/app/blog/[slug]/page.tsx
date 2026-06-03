import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost, getPostBody } from "@/lib/blog";
import { BlogArticle } from "@/components/blog/BlogArticle";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | The Alter Ego` };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const paragraphs = getPostBody(slug);

  return (
    <BlogArticle post={post}>
      <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl">
        <Image src={post.image} alt="" fill className="object-cover" priority />
      </div>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 24)} className="font-body mb-6 leading-relaxed text-ink/80">
          {p}
        </p>
      ))}
      <Link
        href="/blog"
        className="font-body mt-8 inline-block text-xs uppercase tracking-widest text-magenta hover:underline"
      >
        ← Back to Blog
      </Link>
    </BlogArticle>
  );
}
