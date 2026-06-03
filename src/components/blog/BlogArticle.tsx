"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { BlogPost } from "@/lib/blog";

type Props = {
  post: BlogPost;
  children: React.ReactNode;
};

export function BlogArticle({ post, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 1.2,
  });
  const gradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(90deg, #FE8402, #FF8299)",
      "linear-gradient(90deg, #FEEA11, #A7C51B)",
      "linear-gradient(90deg, #FE027B, #FE8402)",
    ],
  );

  return (
    <article className="px-4 pt-28 pb-24 md:px-8">
      <motion.div
        style={{ scaleX, background: gradient }}
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left"
      />
      <div ref={ref} className="mx-auto max-w-[42rem]">
        <p className="font-body text-xs uppercase tracking-[0.25em] text-magenta">
          {post.category}
        </p>
        <h1 className="font-display mt-4 text-ink">{post.title}</h1>
        <p className="font-body mt-3 text-sm text-ink/50">
          {post.date} · {post.readTime}
        </p>
        <div className="prose-alter mt-12">{children}</div>
      </div>
    </article>
  );
}
