"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { type PostMeta } from "@/lib/posts";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { CountdownOverlay, useIsPublished } from "./countdown-overlay";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function PostCard({ post, index }: { post: PostMeta; index: number }) {
  const published = useIsPublished(post.publishDate);

  const formattedDate = new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const inner = (
    <article
      className={cn(
        "border-border bg-surface/40 relative rounded-xl border p-6 transition-all duration-300",
        published ? "hover:bg-surface/70 hover:border-accent/40" : "opacity-60"
      )}
    >
      {!published && <CountdownOverlay publishDate={post.publishDate} />}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="text-muted mb-3 flex items-center gap-2 text-xs">
            <Calendar className="h-3 w-3 shrink-0" />
            <span>{formattedDate}</span>
            <span className="text-muted/40">·</span>
            <span className="text-accent/70 font-mono">#{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h2
            className={cn(
              "mb-2 text-lg leading-snug font-bold transition-colors duration-200 sm:text-xl",
              published ? "text-foreground group-hover:text-accent" : "text-foreground/60"
            )}
          >
            {post.title}
          </h2>
          <p className="text-muted line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
        </div>
        {published && (
          <div className="text-muted group-hover:text-accent mt-1 shrink-0 transition-all duration-200 group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </div>
        )}
      </div>
    </article>
  );

  return (
    <motion.div variants={itemVariants}>
      {published ? (
        <Link href={`/blog/${post.slug}`} className="group block">
          {inner}
        </Link>
      ) : (
        <div>{inner}</div>
      )}
    </motion.div>
  );
}

export function BlogPostList({ posts }: { posts: PostMeta[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-4"
    >
      {posts.map((post, index) => (
        <PostCard key={post.slug} post={post} index={index} />
      ))}
    </motion.div>
  );
}
