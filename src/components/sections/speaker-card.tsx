"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Speaker } from "@/lib/speakers-constants";

interface SpeakerCardProps {
  speaker: Speaker;
  index?: number;
  href?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getColorFromName(name: string): string {
  const colors = [
    "bg-red-900/50",
    "bg-orange-900/50",
    "bg-amber-900/50",
    "bg-yellow-900/50",
    "bg-lime-900/50",
    "bg-green-900/50",
    "bg-emerald-900/50",
    "bg-teal-900/50",
    "bg-cyan-900/50",
    "bg-sky-900/50",
    "bg-blue-900/50",
    "bg-indigo-900/50",
    "bg-violet-900/50",
    "bg-purple-900/50",
    "bg-fuchsia-900/50",
    "bg-pink-900/50",
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}

export function SpeakerCard({ speaker, index = 0, href }: SpeakerCardProps) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(speaker.name);
  const bgColor = getColorFromName(speaker.name);
  const hasImage = speaker.image && speaker.image.length > 0;

  const cardClasses = cn(
    "relative block overflow-hidden rounded-xl",
    "bg-surface border-border border",
    "hover:border-accent/50 transition-all duration-300",
    "hover:shadow-accent/5 hover:-translate-y-1 hover:shadow-lg",
    href && "cursor-pointer"
  );

  const cardContent = (
    <>
      {/* Square Image or Initials Fallback */}
      <div className="relative aspect-square overflow-hidden">
        {imageError || !hasImage ? (
          <div
            className={cn("flex h-full w-full items-center justify-center", "bg-surface", bgColor)}
          >
            <span className="text-foreground/80 text-4xl font-bold sm:text-5xl">{initials}</span>
          </div>
        ) : (
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              "group-hover:scale-105"
            )}
            onError={() => setImageError(true)}
          />
        )}
        <div className="from-surface/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3
          className={cn(
            "text-foreground truncate font-semibold",
            "group-hover:text-accent transition-colors duration-300"
          )}
        >
          {speaker.name}
        </h3>
        <p className="text-muted line-clamp-2 text-sm">{speaker.title}</p>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      {href ? (
        <Link href={href} className={cardClasses}>
          {cardContent}
        </Link>
      ) : (
        <div className={cardClasses}>{cardContent}</div>
      )}
    </motion.div>
  );
}
