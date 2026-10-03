"use client";

import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserPlus, Trophy, Clock, Rocket, MapPin, Users, Code } from "lucide-react";
import { Background } from "@/components/animations/background";

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function PrizeCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const startTime = performance.now() + 400;
    let frame = 0;

    const update = (now: number) => {
      const progress = Math.min(Math.max((now - startTime) / 2800, 0), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(145000 * easedProgress));
      if (progress < 1) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div variants={itemVariants} className="mt-7">
      <p className="text-muted text-sm font-semibold tracking-widest uppercase">Prize Pool</p>
      <p className="text-accent mt-1 text-4xl font-black tabular-nums sm:text-5xl">
        ₹{value.toLocaleString("en-IN")}
      </p>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <Background />

      {/* Mobile Mascot - behind text, transparent */}
      <motion.div
        variants={mascotVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-[1] flex -translate-y-12 items-center justify-center lg:hidden"
      >
        {/* Glow effect behind mascot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-accent/30 h-64 w-64 rounded-full blur-3xl" />
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
            className="h-[60vh] max-h-[500px] w-auto object-contain opacity-20"
            priority
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mr-auto ml-auto flex w-full max-w-6xl items-center justify-center gap-4 lg:mr-8 lg:ml-32 lg:gap-12 xl:ml-48">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:max-w-2xl lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            HACKNOVA <span className="text-accent">2027</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-accent mt-4 text-2xl font-medium sm:text-3xl md:text-4xl"
          >
            Hack the hackers
          </motion.p>

          <motion.p variants={itemVariants} className="text-muted mx-auto mt-6 max-w-xl lg:mx-0">
            36 hours to learn, build, and ship lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </motion.p>

          <PrizeCounter />

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-row justify-center gap-3 lg:justify-start"
          >
            <Link
              href="https://forms.gle/aXty5Gdxr5BCRaxKA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-colors"
            >
              <UserPlus className="h-5 w-5" aria-hidden="true" />
              Register Now
            </Link>
            <Link
              href="#sponsors"
              className="bg-surface/80 border-border text-foreground hover:bg-surface flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-medium transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              Sponsor Us?
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop Mascot - right side */}
        <motion.div
          variants={mascotVariants}
          initial="hidden"
          animate="visible"
          className="relative hidden flex-shrink-0 items-center justify-center lg:flex"
        >
          {/* Glow effect behind mascot */}
          <div className="bg-accent/20 absolute inset-0 scale-75 rounded-full blur-3xl" />

          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/new_greenLogo.png"
              alt="HackNova Mascot"
              width={400}
              height={500}
              className="h-[400px] w-auto object-contain drop-shadow-2xl xl:h-[500px]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
    </section>
  );
}

const keyDetails = [
  { label: "Prize Pool", value: "₹1.45 Lakhs", icon: Trophy },
  { label: "Date", value: "Jan 10-11, 2027", icon: Clock },
  { label: "Duration", value: "36 Hours", icon: Rocket },
  { label: "Location", value: "BVDU Campus", icon: MapPin },
  { label: "Team Size", value: "4 Members", icon: Users },
  { label: "Format", value: "In-Person Only", icon: Code },
];

export function KeyDetailsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {keyDetails.map((detail) => {
            const isPrize = detail.label === "Prize Pool";
            return (
              <motion.div
                key={detail.label}
                variants={cardVariants}
                className={
                  isPrize
                    ? "bg-surface border-accent/40 rounded-xl border-2 p-4 text-center"
                    : "bg-surface border-border hover:border-accent/30 rounded-xl border p-4 text-center transition-colors"
                }
              >
                <detail.icon className="text-accent mx-auto mb-2 h-6 w-6" />
                <p className="text-muted mb-1 text-sm">{detail.label}</p>
                <p
                  className={
                    isPrize ? "text-accent font-extrabold" : "text-foreground font-semibold"
                  }
                >
                  {detail.value}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
