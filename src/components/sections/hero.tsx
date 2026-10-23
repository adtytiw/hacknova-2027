"use client";

import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserPlus, Trophy, Clock, Rocket, Wallet, Users, Code } from "lucide-react";
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

const EVENT_DATE = "Jan 10-11, 2027";

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
      <p className="text-[#a3a3a3] text-sm font-semibold tracking-[0.25em] uppercase">Prize Pool</p>
      <p className="text-accent mt-1 text-4xl font-black tabular-nums sm:text-5xl">
        ₹{value.toLocaleString("en-IN")}
      </p>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-stretch justify-start overflow-hidden px-5 pt-[108px] pb-[max(2.75rem,env(safe-area-inset-bottom))] lg:min-h-screen lg:items-center lg:justify-center lg:px-8 lg:pt-24 lg:pb-16">
      <Background />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 lg:hidden"
        style={{
          backgroundImage:
            "radial-gradient(120% 60% at 85% 24%, rgba(192,255,112,0.20), rgba(192,255,112,0) 60%)",
        }}
      />

      <div className="pointer-events-none absolute top-[42%] right-[-36px] z-[1] flex h-[clamp(10rem,51vw,13.75rem)] w-[clamp(10rem,51vw,13.75rem)] items-center justify-center min-[480px]:right-[calc((100vw_-_430px)/2_-_36px)] sm:right-[calc((100vw_-_560px)/2_-_36px)] md:right-[calc((100vw_-_720px)/2_-_36px)] lg:hidden">
        <div className="bg-accent/20 absolute inset-0 scale-75 rounded-full blur-3xl" />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/new_greenLogo.png"
            alt="HackNova Mascot"
            width={400}
            height={400}
            className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(192,255,112,0.25)]"
            priority
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-stretch justify-start gap-0 lg:flex-none lg:flex-row lg:items-center lg:justify-center lg:gap-14 xl:gap-20">
        <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col sm:max-w-[560px] md:max-w-[720px] lg:hidden">
          <div className="flex items-center gap-3">
            <Image
              src="/bvdu-logo.png"
              alt="Bharati Vidyapeeth (Deemed to be University) logo"
              width={52}
              height={52}
              className="h-[clamp(44px,10vw,52px)] w-[clamp(44px,10vw,52px)] shrink-0 object-contain"
              priority
            />
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="text-[clamp(13px,2.93vw,15px)] leading-[1.35] font-medium text-[#e6e9e4]">
                Bharati Vidyapeeth (Deemed to be University)
              </p>
              <p className="text-[clamp(13px,2.93vw,15px)] leading-[1.35] text-[#9ba19d]">
                Dept. of Management Studies (Off Campus)
              </p>
            </div>
          </div>

          <h1 className="mt-10 text-[clamp(4.5rem,24.6vw,7rem)] leading-[0.88] font-extrabold tracking-[-0.045em] text-[#f4f6f2]">
            <span className="block">HACK</span>
            <span className="block">NOVA</span>
            <span className="text-accent block">2027</span>
          </h1>

          <p className="text-accent mt-[22px] text-[22px] leading-tight font-medium">
            Hack the hackers.
          </p>
          <p className="mt-2 max-w-[210px] text-[16px] leading-[1.45] text-[#a3a9a4] sm:max-w-[300px] md:max-w-[360px]">
            36 hours of coding, collaboration, and creativity.
          </p>

          <div
            className="mt-7 grid grid-cols-[1fr_0.8fr_1fr] border-y border-[#1e2220]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          >
            <div className="flex min-w-0 flex-col gap-0.5 py-3.5">
              <span className="text-[clamp(1.125rem,5.64vw,1.375rem)] leading-none font-bold tracking-[-0.02em]">
                Jan 10–11
              </span>
              <span className="text-[clamp(11px,3.33vw,13px)] text-[#9ba19d]">Navi Mumbai</span>
            </div>
            <div className="flex min-w-0 flex-col gap-0.5 border-l border-[#1e2220] py-3.5 pl-3.5">
              <span className="text-[clamp(1.125rem,5.64vw,1.375rem)] leading-none font-bold tracking-[-0.02em]">
                36 hrs
              </span>
              <span className="text-[clamp(11px,3.33vw,13px)] text-[#9ba19d]">Non-stop</span>
            </div>
            <div className="flex min-w-0 flex-col gap-0.5 border-l border-[#1e2220] py-3.5 pl-3.5">
              <span className="text-accent text-[clamp(1.125rem,5.64vw,1.375rem)] leading-none font-bold tracking-[-0.02em]">
                ₹1.45L
              </span>
              <span className="text-[clamp(11px,3.33vw,13px)] text-[#9ba19d]">Prize pool</span>
            </div>
          </div>

          <div className="mt-auto flex w-full max-w-[350px] gap-2.5 pt-10 min-[480px]:mx-auto">
            <Link
              href="https://unstop.com/o/DvVI6SX?lb=oOvtANg1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 flex h-[52px] flex-[1.3] items-center justify-center gap-2 rounded-[14px] text-[16px] font-semibold whitespace-nowrap transition-colors"
            >
              <UserPlus className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              Register now
            </Link>
            <Link
              href="/sponsors"
              className="text-foreground flex h-[52px] flex-1 items-center justify-center gap-2 rounded-[14px] border border-[#2b312d] bg-transparent text-[16px] font-semibold whitespace-nowrap transition-colors hover:bg-white/[0.03]"
            >
              Sponsor us
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden min-w-0 flex-1 flex-col text-left lg:block lg:max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-row items-center justify-start gap-4 text-left"
          >
            <Image
              src="/bvdu-logo.png"
              alt="Bharati Vidyapeeth (Deemed to be University) logo"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
              priority
            />
            <div className="flex flex-col gap-1">
              <p className="text-foreground/90 text-base whitespace-nowrap">
                Bharati Vidyapeeth (Deemed to be University)
              </p>
              <p className="text-[13px] text-gray-400">
                Department of Management Studies (Off Campus)
              </p>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-foreground text-8xl font-bold tracking-tight"
          >
            HACKNOVA <span className="text-accent">2027</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-accent mt-4 text-2xl font-medium sm:text-3xl md:text-4xl"
          >
            Hack the hackers
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-[#e7e5e4] lg:mx-0"
          >
            Empowering innovators to solve real-world problems through cutting-edge technology. Join
            us for 36 hours of intensive coding, collaboration, and creativity.
          </motion.p>

          <PrizeCounter />

          <motion.div variants={itemVariants} className="mt-6 flex flex-row justify-start gap-3">
            <Link
              href="https://unstop.com/o/DvVI6SX?lb=oOvtANg1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-colors"
            >
              <UserPlus className="h-5 w-5" aria-hidden="true" />
              Register Now
            </Link>
            <Link
              href="/sponsors"
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

        <motion.div
          variants={mascotVariants}
          initial="hidden"
          animate="visible"
          className="relative hidden flex-shrink-0 items-center justify-center lg:flex"
        >
          <div className="bg-accent/20 absolute inset-0 scale-75 rounded-full blur-3xl" />

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

      <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 z-10 hidden h-40 bg-gradient-to-t to-transparent lg:block" />
    </section>
  );
}

const keyDetails = [
  { label: "Prize Pool", value: "₹1.45 Lakhs", icon: Trophy },
  { label: "Date", value: EVENT_DATE, icon: Clock },
  { label: "Duration", value: "36 Hours", icon: Rocket },
  { label: "Entry Fee", value: "₹1,000", icon: Wallet },
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
