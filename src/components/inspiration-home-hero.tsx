"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Background } from "@/components/animations/background";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const mascotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 } },
};

export function InspirationHomeHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Background />

      <motion.div variants={mascotVariants} initial="hidden" animate="visible" className="absolute inset-0 z-[1] flex -translate-y-12 items-center justify-center lg:hidden">
        <div className="bg-accent/30 absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full blur-3xl" />
        </div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <Image src="/greenLogo.webp" alt="HackNova mascot" width={400} height={500} className="h-[60vh] max-h-[500px] w-auto object-contain opacity-20" priority />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mr-auto ml-auto flex w-full max-w-6xl items-center justify-center gap-4 px-6 lg:mr-8 lg:ml-32 lg:gap-12 xl:ml-48">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex-1 text-center lg:max-w-2xl lg:text-left">
          <motion.h1 variants={itemVariants} className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            HACKNOVA <span className="text-accent">2027</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-muted mt-4 text-2xl font-medium sm:text-3xl md:text-4xl">
            Hack the Hackers
            
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 flex flex-row justify-center gap-3 lg:justify-start">
            <Link href="/hackathon" className="bg-surface/80 border-border text-foreground hover:bg-surface flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-medium transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Hackathon
            </Link>
            <a href="https://github.com/adtytiw" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-colors">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              Register
            </a>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted/60 mt-5 text-sm sm:text-base">
            Preliminary schedule is now live —{" "}
            <a href="/schedule" className="text-accent/80 hover:text-accent underline underline-offset-2 transition-colors">view the full agenda</a>
          </motion.p>
        </motion.div>

        <motion.div variants={mascotVariants} initial="hidden" animate="visible" className="relative hidden flex-shrink-0 items-center justify-center lg:flex">
          <div className="bg-accent/20 absolute inset-0 scale-75 rounded-full blur-3xl" />
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative">
            <Image src="/greenLogo.webp" alt="HackNova mascot" width={400} height={500} className="h-[400px] w-auto object-contain drop-shadow-2xl xl:h-[500px]" priority />
          </motion.div>
        </motion.div>
      </div>

      <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
    </section>
  );
}