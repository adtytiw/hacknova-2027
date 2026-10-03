"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const LIVE_START = new Date("2026-04-11T08:00:00-04:00");

function useIsLive() {
  const [isLive] = useState(true);

  return isLive;
}

export function LivestreamPlayer() {
  const isLive = useIsLive();

  return (
    <div className="w-full">
      {isLive ? <LiveView /> : <ScheduledView />}
    </div>
  );
}

function ScheduledView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-border bg-surface/40 px-8 py-20 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface">
        <svg className="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Livestream</p>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Stream starts soon</h2>
        <p className="mt-3 text-muted text-sm leading-relaxed">
          Join us live on <span className="text-foreground font-medium">Jan 10, 2027 at 9:00 AM IST</span>
          <br />for HackNova 2027 — Hack the Hackers.
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs text-muted">Stream begins Jan 10, 2027 at 9:00 AM IST</p>
      </div>
    </motion.div>
  );
}

function LiveView() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* Live badge */}
      <div className="mb-4 flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-red-500">Live now</span>
      </div>

      {/* Embed */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-black"
        style={{ aspectRatio: "16/9" }}>
        <iframe
          title="HackNova 2027 Livestream"
          src="https://vimeo.com/event/5850046/embed"
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      </div>

      <p className="mt-3 text-xs text-center text-muted">
        Experiencing issues? Try refreshing the page.
      </p>
    </motion.div>
  );
}
