"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { currentSpeakers, generateSlug } from "@/lib/speakers-constants";
import type { Speaker } from "@/lib/speakers-constants";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getColorFromName(name: string): string {
  const colors = [
    "bg-red-900/50",
    "bg-orange-900/50",
    "bg-amber-900/50",
    "bg-lime-900/50",
    "bg-emerald-900/50",
    "bg-teal-900/50",
    "bg-cyan-900/50",
    "bg-sky-900/50",
    "bg-blue-900/50",
    "bg-indigo-900/50",
    "bg-violet-900/50",
    "bg-purple-900/50",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function CompactSpeakerCard({ speaker }: { speaker: Speaker }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = speaker.image && speaker.image.length > 0;
  const slug = generateSlug(speaker.name);

  return (
    <Link
      href={`/speakers/${slug}`}
      className={cn(
        "group relative block w-44 shrink-0 sm:w-48",
        "overflow-hidden rounded-2xl",
        "bg-surface border-border border",
        "hover:border-accent/60 transition-all duration-300",
        "hover:shadow-accent/10 hover:-translate-y-1.5 hover:shadow-xl"
      )}
    >
      {/* Accent glow on hover */}
      <div className="bg-accent/0 group-hover:bg-accent/10 pointer-events-none absolute inset-0 z-10 transition-colors duration-300" />

      {/* Square image */}
      <div className="relative aspect-square overflow-hidden">
        {imgError || !hasImage ? (
          <div
            className={cn(
              "bg-surface flex h-full w-full items-center justify-center",
              getColorFromName(speaker.name)
            )}
          >
            <span className="text-foreground/80 text-3xl font-bold sm:text-4xl">
              {getInitials(speaker.name)}
            </span>
          </div>
        ) : (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            sizes="(max-width: 640px) 176px, 192px"
          />
        )}
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Name + title */}
      <div className="px-3 py-3">
        <p className="text-foreground group-hover:text-accent truncate text-sm font-semibold transition-colors duration-300">
          {speaker.name}
        </p>
        <p className="text-muted/80 mt-0.5 truncate text-xs">{speaker.title}</p>
      </div>
    </Link>
  );
}

function MarqueeRow({
  speakers,
  direction = "left",
  duration = 40,
}: {
  speakers: Speaker[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="group/marquee relative flex overflow-hidden py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Render two copies for seamless loop */}
      {[0, 1].map((copy) => (
        <div
          key={copy}
          className={cn(
            "flex shrink-0 gap-4 pr-4",
            direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
          )}
          style={{
            animationDuration: `${duration}s`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
          aria-hidden={copy === 1}
        >
          {speakers.map((speaker) => (
            <CompactSpeakerCard key={`${copy}-${speaker.name}`} speaker={speaker} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SpeakerStrip() {
  if (currentSpeakers.length === 0) return null;

  return (
    <section className="relative overflow-hidden pt-16 pb-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-accent/[0.04] absolute top-2/3 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <p className="text-accent mb-2 text-xs font-medium tracking-widest uppercase">
              Featured
            </p>
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">2026 Speakers</h2>
            <div className="bg-accent mt-3 h-1 w-16 rounded-full" />
          </div>
          <Link
            href="/speakers"
            className={cn(
              "group flex items-center gap-2 rounded-lg px-4 py-2",
              "text-sm font-medium",
              "text-muted hover:text-accent",
              "hover:border-accent/30 border border-transparent",
              "transition-all duration-300"
            )}
          >
            View all speakers
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Marquee with edge fades */}
      <div className="relative z-10">
        {/* Left fade */}
        <div className="from-background pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-16 bg-gradient-to-r to-transparent sm:w-32" />
        {/* Right fade */}
        <div className="from-background pointer-events-none absolute top-0 right-0 bottom-0 z-20 w-16 bg-gradient-to-l to-transparent sm:w-32" />

        <MarqueeRow speakers={currentSpeakers} direction="left" duration={50} />
      </div>

      {/* Speaker count badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative z-10 mt-8 text-center"
      >
        <Link
          href="/speakers"
          className="text-muted hover:text-accent inline-flex items-center gap-2 text-sm transition-colors"
        >
          <span className="bg-accent/10 text-accent inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
            {currentSpeakers.length}
          </span>
          speakers announced — more coming soon
        </Link>
      </motion.div>
    </section>
  );
}
