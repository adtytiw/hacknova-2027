"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/MITBitcoinClub",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mitbitcoinclub/?viewAsMember=true",
    icon: LinkedInIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@MITBitcoinClub",
    icon: YouTubeIcon,
  },
];

export function FloatingSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={cn("fixed top-1/2 right-4 z-30 -translate-y-1/2", "flex flex-col gap-2")}
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={cn(
              "flex items-center justify-center",
              "h-10 w-10 rounded-full",
              "bg-surface border-border border",
              "text-muted",
              "transition-all duration-300",
              "hover:border-accent hover:text-accent hover:scale-110",
              "hover:shadow-accent/10 hover:shadow-lg"
            )}
          >
            <social.icon />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
