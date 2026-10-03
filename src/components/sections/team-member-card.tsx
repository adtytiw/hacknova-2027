"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/lib/team-constants";

interface TeamMemberCardProps {
  member: TeamMember;
  index?: number;
}

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Generate initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Generate a consistent color based on name
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

export function TeamMemberCard({ member, index = 0 }: TeamMemberCardProps) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(member.name);
  const bgColor = getColorFromName(member.name);

  // Check if image exists
  const hasImage = member.image && member.image.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl",
          "bg-surface border-border border",
          "hover:border-accent/50 transition-all duration-300",
          "hover:shadow-accent/5 hover:-translate-y-1 hover:shadow-lg"
        )}
      >
        {/* Square Image or Initials Fallback */}
        <div className="relative aspect-square overflow-hidden">
          {imageError || !hasImage ? (
            // Initials fallback
            <div
              className={cn(
                "flex h-full w-full items-center justify-center",
                "bg-surface",
                bgColor
              )}
            >
              <span className="text-foreground/80 text-4xl font-bold sm:text-5xl">{initials}</span>
            </div>
          ) : (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className={cn(
                "object-cover transition-transform duration-500",
                "group-hover:scale-105"
              )}
              onError={() => setImageError(true)}
            />
          )}
          {/* Subtle gradient overlay at bottom */}
          <div className="from-surface/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Info Section */}
        <div className="flex items-center justify-between gap-3 px-4 py-5">
          {/* Name and Role - Left side */}
          <div className="min-w-0 flex-1">
            <h3
              className={cn(
                "text-foreground font-semibold",
                "group-hover:text-accent transition-colors duration-300"
              )}
            >
              {member.name}
            </h3>
            <p className="text-muted text-sm">{member.role}</p>
          </div>

          {/* LinkedIn - Right side, vertically centered with name */}
          {member.linkedin && (
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "shrink-0 rounded-full p-2",
                "border-border text-muted border",
                "hover:border-accent hover:bg-accent hover:text-accent-foreground",
                "transition-all duration-300"
              )}
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <LinkedinIcon />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
