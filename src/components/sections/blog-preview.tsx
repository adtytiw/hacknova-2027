"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { type PostMeta } from "@/lib/posts";
import { cn } from "@/lib/utils";
import { CountdownOverlay, useIsPublished } from "./countdown-overlay";

function BlogPreviewCard({ post }: { post: PostMeta }) {
  const published = useIsPublished(post.publishDate);

  const formattedDate = new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const card = (
    <article
      className={cn(
        "border-border bg-surface/40 flex h-full flex-col rounded-2xl border p-5 transition-all duration-300",
        published
          ? "hover:bg-surface/70 hover:border-accent/40 hover:shadow-accent/5 hover:-translate-y-1 hover:shadow-xl"
          : "opacity-60"
      )}
    >
      {!published && <CountdownOverlay publishDate={post.publishDate} />}
      <div className="text-muted mb-3 flex items-center gap-1.5 text-xs">
        <Calendar className="h-3 w-3 shrink-0" />
        <span>{formattedDate}</span>
      </div>
      <h3
        className={cn(
          "mb-3 flex-1 text-base leading-snug font-bold transition-colors duration-200",
          published ? "text-foreground group-hover:text-accent" : "text-foreground/60"
        )}
      >
        {post.title}
      </h3>
      <p className="text-muted mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
      {published && (
        <div className="text-accent flex items-center gap-1 text-xs font-medium">
          <span>Read more</span>
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      )}
    </article>
  );

  if (!published) {
    return <div className="relative w-72 shrink-0 sm:w-80">{card}</div>;
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block w-72 shrink-0 sm:w-80">
      {card}
    </Link>
  );
}

export function BlogPreviewClient({ posts }: { posts: PostMeta[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">From the Blog</h2>
            <div className="bg-accent mt-2 h-1 w-16 rounded-full" />
          </div>
          <div className="flex items-center gap-3">
            {/* Arrow buttons */}
            <div className="hidden items-center gap-2 sm:flex">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200",
                  canScrollLeft
                    ? "border-border hover:border-accent/50 text-muted hover:text-accent cursor-pointer"
                    : "border-border/30 text-muted/20 cursor-default"
                )}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200",
                  canScrollRight
                    ? "border-border hover:border-accent/50 text-muted hover:text-accent cursor-pointer"
                    : "border-border/30 text-muted/20 cursor-default"
                )}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <Link
              href="/blog"
              className="text-muted hover:text-accent flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            >
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="from-background pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-8 bg-gradient-to-r to-transparent sm:w-16" />
        {/* Right fade */}
        <div className="from-background pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-8 bg-gradient-to-l to-transparent sm:w-16" />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-6 py-2 pb-6 sm:px-[calc((100vw-80rem)/2+1.5rem)]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {posts.map((post) => (
            <BlogPreviewCard key={post.slug} post={post} />
          ))}
          {/* View all card */}
          <Link
            href="/blog"
            className="group flex w-48 shrink-0 items-center justify-center sm:w-56"
          >
            <div className="border-border hover:border-accent/40 text-muted hover:text-accent flex flex-col items-center gap-3 rounded-2xl border border-dashed px-6 py-8 transition-all duration-300">
              <div className="border-border group-hover:border-accent/40 flex h-10 w-10 items-center justify-center rounded-full border transition-colors">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">View all posts</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
