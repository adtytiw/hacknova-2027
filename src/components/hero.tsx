"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stats = [
  { value: "217+", label: "Participants" },
  { value: "56", label: "Teams" },
  { value: "36", label: "Hours" },
  { value: "6", label: "Challenge Tracks" },
];

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="bg-accent/20 absolute h-64 w-64 rounded-full blur-3xl lg:h-96 lg:w-96" />
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <Image
            src="/new_greenLogo.png"
            alt="HackNova temporary event mark"
            width={400}
            height={500}
            className="h-[42vh] max-h-[400px] w-auto object-contain opacity-15"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative mx-auto max-w-5xl text-center">
        <motion.p variants={itemVariants} className="text-accent mb-5 text-sm font-semibold tracking-[0.2em] uppercase">
          HackNova 2027 · 36 Hours of Innovation
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
          HackNova <span className="text-accent">2027</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-muted mx-auto mt-5 max-w-2xl text-lg sm:text-xl">
          Hack the hackers
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-border/70 bg-surface/60 rounded-2xl border px-3 py-5 backdrop-blur-sm">
              <p className="text-accent text-2xl font-bold tabular-nums sm:text-3xl">{stat.value}</p>
              <p className="text-muted mt-1 text-xs uppercase sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://github.com/adtytiw" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-6 py-3 font-medium transition-colors">
            Register Now
          </a>
          <span className="border-border bg-surface/70 text-muted rounded-xl border px-6 py-3 font-medium">
            ₹1.45L Prize Pool
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}