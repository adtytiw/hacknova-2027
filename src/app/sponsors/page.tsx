"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { cn } from "@/lib/utils";

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

type SponsorTier = "gold" | "silver" | "bronze" | "community";

const TIER_SLOTS: Record<SponsorTier, number> = {
  gold: 1,
  silver: 2,
  bronze: 8,
  community: 4,
};

function SponsorSlot({ tier, index }: { tier: SponsorTier; index: number }) {
  return (
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
        "border-border bg-surface/50 hover:border-accent/40 rounded-2xl border transition-colors duration-300",
        tier === "gold" && "px-8 py-14 sm:px-16 sm:py-20",
        tier === "silver" && "px-5 py-8 sm:px-10 sm:py-12",
        tier === "bronze" && "px-4 py-6 sm:px-6 sm:py-8",
        tier === "community" && "px-3 py-4 sm:px-5 sm:py-6"
      )}
      aria-label={`${tier} sponsor slot`}
    />
  );
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
              src="/new_greenLogo.png"
              alt="HackNova Mascot"
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

      {/* Sponsor Slots */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">Sponsors</h2>
            <div className="bg-accent mt-2 h-1 w-16 rounded-full" />
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {/* Gold — full width */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {Array.from({ length: TIER_SLOTS.gold }).map((_, index) => (
                <SponsorSlot key={`gold-${index}`} tier="gold" index={index} />
              ))}
            </div>

            {/* Silver — 2-col on mobile, 3-col on lg */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
              {Array.from({ length: TIER_SLOTS.silver }).map((_, index) => (
                <SponsorSlot key={`silver-${index}`} tier="silver" index={index} />
              ))}
            </div>

            {/* Bronze — 2-col on mobile, 4-col on lg */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {Array.from({ length: TIER_SLOTS.bronze }).map((_, index) => (
                <SponsorSlot key={`bronze-${index}`} tier="bronze" index={index} />
              ))}
            </div>

            {/* Community — 2-col on mobile, 5-col on lg */}
            <div>
              <p className="mb-3 text-xs font-medium tracking-widest text-[#78716C] uppercase">Community</p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
                {Array.from({ length: TIER_SLOTS.community }).map((_, index) => (
                  <SponsorSlot key={`community-${index}`} tier="community" index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="mailto:hacknova.dms@bharatividyapeeth.edu?subject=Sponsorship%20Inquiry"
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
