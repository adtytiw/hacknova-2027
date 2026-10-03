"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { sponsorYears } from "@/lib/sponsors-constants";
import type { Sponsor } from "@/lib/sponsors-constants";

const sponsors2026 = sponsorYears.find((y) => y.year === 2026)?.sponsors ?? [];

function GoldSponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const [imgError, setImgError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border hover:border-accent/50 relative block overflow-hidden rounded-xl border transition-all duration-300"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover blur-sm"
      >
        <source src="/hero-hype-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/75" />
      <div className="relative z-10 flex items-center justify-center px-6 py-8 sm:px-10 sm:py-10">
        {imgError ? (
          <span className="text-sm font-semibold text-stone-800">{sponsor.name}</span>
        ) : (
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={300}
            height={80}
            className="max-h-14 w-full scale-[1.2] object-contain sm:max-h-16 sm:scale-[1.6]"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </a>
  );
}

function SponsorLogo({ sponsor, community = false, silver = false }: { sponsor: Sponsor; community?: boolean; silver?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-center overflow-hidden rounded-xl border",
        community ? "px-3 py-3" : silver ? "px-5 py-7 sm:px-8 sm:py-9" : "px-4 py-5 sm:px-6 sm:py-6",
        "transition-all duration-300",
        sponsor.darkLogo
          ? "border-border/60 hover:border-accent/30 bg-white/90 hover:bg-white"
          : "border-border bg-surface/50 hover:bg-surface hover:border-accent/40",
        "hover:shadow-accent/5 hover:shadow-lg"
      )}
    >
      {imgError ? (
        <span
          className={cn(
            "text-sm font-semibold",
            sponsor.darkLogo ? "text-stone-800" : "text-muted"
          )}
        >
          {sponsor.name}
        </span>
      ) : (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={200}
          height={60}
          className={cn(
            "w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100",
            community ? "max-h-6" : silver ? "max-h-10 sm:max-h-14" : "max-h-8 sm:max-h-10",
            !community && sponsor.logoSize === "lg" && "scale-[1.4]",
            !community && sponsor.logoSize === "xl" && "scale-[1.8]",
            community && sponsor.logoSize === "lg" && "scale-[1.4]",
            community && sponsor.logoSize === "xl" && "scale-[2.4]"
          )}
          onError={() => setImgError(true)}
        />
      )}
    </a>
  );
}

export function HomeSponsors() {
  const gold = sponsors2026.filter((s) => s.tier === "gold");
  const silver = sponsors2026.filter((s) => s.tier === "silver");
  const bronze = sponsors2026.filter((s) => s.tier === "bronze");
  const community = sponsors2026.filter((s) => s.tier === "community");

  const Placeholder = ({ className = "" }: { className?: string }) => (
    <div className={cn("border-border bg-surface/40 rounded-xl border", className)} aria-label="Sponsor placeholder" />
  );

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-end justify-between"
        >
          <div>
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">2026 Sponsors</h2>
            <div className="bg-accent mt-2 h-1 w-16 rounded-full" />
          </div>
          <span className="text-muted text-xs font-medium sm:text-sm">Sponsors to be announced</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {gold.map((_, index) => <Placeholder key={`gold-${index}`} className="h-28" />)}

          {silver.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {silver.map((_, index) => (
                <Placeholder key={`silver-${index}`} className="h-24" />
              ))}
            </div>
          )}

          {bronze.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {bronze.map((_, index) => (
                <Placeholder key={`bronze-${index}`} className="h-20" />
              ))}
            </div>
          )}

          {community.length > 0 && (
            <div>
              <p className="mb-2 px-1 text-xs font-medium tracking-widest text-[#78716C] uppercase">Community</p>
              <div className="grid grid-cols-3 gap-3">
                {community.map((_, index) => (
                  <Placeholder key={`community-${index}`} className="h-16" />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
