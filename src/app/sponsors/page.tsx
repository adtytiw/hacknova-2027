"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { sponsorYears } from "@/lib/sponsors-constants";
import type { Sponsor } from "@/lib/sponsors-constants";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const mascotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
  },
};

function GoldSponsorCard({ sponsor, index }: { sponsor: Sponsor; index: number }) {
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

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group border-border hover:border-accent/50 relative overflow-hidden rounded-2xl border transition-all duration-300"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100 blur-sm transition-opacity duration-700 group-hover:opacity-50"
      >
        <source src="/hero-hype-bg.mp4" type="video/mp4" />
      </video>

      {/* White overlay for dark logo readability */}
      <div className="absolute inset-0 bg-white/75" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-8 py-14 sm:px-16 sm:py-20">
        {imgError ? (
          <span aria-hidden="true" className="h-8 w-32" />
        ) : (
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={400}
            height={120}
            className="max-h-20 w-full scale-[1.2] object-contain opacity-0 transition-opacity duration-300 sm:max-h-28 sm:scale-[1.6]"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </motion.div>
  );

  if (sponsor.url) {
    return (
      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }
  return card;
}

function SponsorLogo({ sponsor, index }: { sponsor: Sponsor; index: number }) {
  const [imgError, setImgError] = useState(false);
  const tier = sponsor.tier ?? "silver";

  if (tier === "gold") {
    return <GoldSponsorCard sponsor={sponsor} index={index} />;
  }

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(
        "group relative flex items-center justify-center",
        "rounded-2xl border",
        "hover:shadow-accent/5 hover:shadow-lg",
        "transition-all duration-300",
        tier === "silver" && "px-5 py-8 sm:px-10 sm:py-12",
        tier === "bronze" && "px-4 py-6 sm:px-6 sm:py-8",
        tier === "community" && "px-3 py-4 sm:px-5 sm:py-6",
        sponsor.darkLogo
          ? "border-border/60 hover:border-accent/30 bg-white/90 hover:bg-white"
          : "border-border bg-surface/50 hover:bg-surface hover:border-accent/40"
      )}
    >
      {imgError ? (
        <span aria-hidden="true" className="h-6 w-24" />
      ) : (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={tier === "silver" ? 220 : tier === "community" ? 120 : 160}
          height={tier === "silver" ? 80 : tier === "community" ? 40 : 60}
          className={cn(
            "w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-0",
            tier === "silver" && "max-h-12 sm:max-h-16",
            tier === "bronze" && "max-h-8 sm:max-h-10",
            tier === "bronze" && sponsor.logoSize === "lg" && "scale-[1.4]",
            tier === "bronze" && sponsor.logoSize === "xl" && "scale-[1.8]",
            tier === "community" && "max-h-6 sm:max-h-8",
            tier === "community" && sponsor.logoSize === "lg" && "scale-[1.4]",
            tier === "community" && sponsor.logoSize === "xl" && "scale-[2.4]"
          )}
          onError={() => setImgError(true)}
        />
      )}
    </motion.div>
  );

  if (sponsor.url) {
    return (
      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export default function SponsorsPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Background />

        {/* Mascot */}
        <motion.div
          variants={mascotVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-[1] flex -translate-y-12 items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-accent/30 h-64 w-64 rounded-full blur-3xl lg:h-96 lg:w-96" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/greenLogo.webp"
              alt="Bitcoin Expo Mascot"
              width={400}
              height={500}
              className="h-[50vh] max-h-[400px] w-auto object-contain opacity-20 lg:h-[55vh] lg:max-h-[500px]"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-accent">SPONSORS</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted mt-3 text-xl font-medium sm:text-2xl md:text-3xl"
          >
            Our Partners <span className="text-muted/40">|</span>{" "}
            <span className="text-accent">HackNova</span>
          </motion.p>
        </motion.div>

        <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
      </section>

      {/* Sponsor Sections by Year */}
      {sponsorYears.map((yearGroup) => (
        <section key={yearGroup.year} className="relative z-10 pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="mb-10">
                <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
                  {yearGroup.year} Sponsors
                </h2>
                <div className="bg-accent mt-2 h-1 w-16 rounded-full" />
              </div>

              {(() => {
                const gold = yearGroup.sponsors.filter((s) => s.tier === "gold");
                const silver = yearGroup.sponsors.filter((s) => !s.tier || s.tier === "silver");
                const bronze = yearGroup.sponsors.filter((s) => s.tier === "bronze");
                const community = yearGroup.sponsors.filter((s) => s.tier === "community");
                let idx = 0;

                return (
                  <div className="space-y-4 sm:space-y-6">
                    {/* Gold — full width */}
                    {gold.length > 0 && (
                      <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        {gold.map((s) => (
                          <SponsorLogo key={s.name} sponsor={s} index={idx++} />
                        ))}
                      </div>
                    )}

                    {/* Silver — 2-col on mobile, 3-col on lg */}
                    {silver.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                        {silver.map((s) => (
                          <SponsorLogo key={s.name} sponsor={s} index={idx++} />
                        ))}
                      </div>
                    )}

                    {/* Bronze — 2-col on mobile, 4-col on lg */}
                    {bronze.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                        {bronze.map((s) => (
                          <SponsorLogo key={s.name} sponsor={s} index={idx++} />
                        ))}
                      </div>
                    )}

                    {/* Community — 2-col on mobile, 5-col on lg */}
                    {community.length > 0 && (
                      <div>
                        <p className="mb-3 text-xs font-medium tracking-widest text-[#78716C] uppercase">Community</p>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
                          {community.map((s) => (
                            <SponsorLogo key={s.name} sponsor={s} index={idx++} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Become a Sponsor CTA */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="border-border bg-surface/50 rounded-2xl border p-10 sm:p-14"
          >
            <h3 className="text-foreground text-xl font-bold sm:text-2xl">Become a Sponsor</h3>
            <p className="text-muted mt-3 text-sm sm:text-base">
              Support the Bitcoin ecosystem and connect with developers, researchers, and builders
              at MIT.
            </p>
            <a
              href="mailto:info-mitbitcoinexpo@googlegroups.com?subject=Sponsorship%20Inquiry"
              className="bg-accent text-accent-foreground hover:bg-accent/90 mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Inquire to Sponsor
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
