"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TimeUnit {
  value: number;
  label: string;
}

function TimeBlock({ value, label }: TimeUnit) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-surface border-border relative h-20 w-16 overflow-hidden rounded-xl border sm:h-28 sm:w-24 md:h-32 md:w-28">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-foreground text-3xl font-bold tabular-nums sm:text-5xl md:text-6xl">
              {String(value).padStart(2, "0")}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Subtle line in middle */}
        <div className="bg-border/50 absolute top-1/2 right-0 left-0 h-px" />
      </div>
      <span className="text-muted mt-3 text-xs font-medium tracking-widest uppercase sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <div className="flex h-20 flex-col items-center justify-center px-0.5 sm:h-28 sm:px-2 md:h-32">
      <div className="bg-accent/60 mb-3 h-2 w-2 rounded-full" />
      <div className="bg-accent/60 h-2 w-2 rounded-full" />
    </div>
  );
}

const TARGET_DATE = new Date("2027-01-01T00:00:00").getTime();

function calculateTimeLeft() {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const isClient = useIsClient();

  const updateTime = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  if (!isClient) {
    return (
      <section className="min-w-0 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-foreground mb-2 text-2xl font-semibold sm:text-3xl">
            Registration closes <span className="text-accent">in</span>
          </h2>
          <p className="text-muted mb-10">Jan 1, 2027</p>
          <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-4">
            {["Days", "Hours", "Minutes" /* "Seconds" */].map((label, i) => (
              <div key={label} className="flex items-start">
                {i > 0 && <Colon />}
                <div className="flex flex-col items-center">
                  <div className="bg-surface border-border h-20 w-16 animate-pulse rounded-xl border sm:h-28 sm:w-24 md:h-32 md:w-28" />
                  <span className="text-muted mt-3 text-xs font-medium tracking-widest uppercase sm:text-sm">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-w-0 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="text-foreground mb-2 text-2xl font-semibold sm:text-3xl">
          Registration closes <span className="text-accent">in</span>
        </h2>
        <p className="text-muted mb-10">Jan 1, 2027</p>

        <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-4">
          <TimeBlock value={timeLeft.days} label="Days" />
          <Colon />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <Colon />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          {/* <Colon /> */}
          {/* <TimeBlock value={timeLeft.seconds} label="Seconds" /> */}
        </div>
      </motion.div>
    </section>
  );
}
