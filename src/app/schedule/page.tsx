"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { Schedule } from "@/components/sections/schedule";

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

export default function SchedulePage() {
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
            <span className="text-accent">SCHEDULE</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted mt-3 text-xl font-medium sm:text-2xl md:text-3xl"
          >
            Full Program <span className="text-muted/40">|</span>{" "}
            <span className="text-accent">HackNova 2027</span>
          </motion.p>
        </motion.div>

        <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
      </section>

      {/* Schedule Section */}
      <section className="relative z-10">
        <p className="mt-2 text-center text-xs text-[#78716C]/70 italic">
          Preliminary agenda — subject to change.
        </p>
        <Schedule hideHeader />
      </section>

      <Footer />
    </main>
  );
}
