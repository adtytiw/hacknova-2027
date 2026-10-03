"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LIVE_START = new Date("2026-04-11T08:00:00-04:00");

export function HomeLivestreamPreview() {
  const [isLive] = useState(true);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Livestream</h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-accent" />
            </div>
            <Link
              href="/livestream"
              className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <span>Watch live</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Card */}
          <Link href="/livestream" className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-surface/70">
              {isLive ? (
                /* Live state — mini embed preview */
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    title="HackNova 2027 Livestream"
                    src="https://vimeo.com/event/5850046/embed"
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                  {/* Overlay CTA */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-black">
                      Watch Full Stream
                    </span>
                  </div>
                  {/* Live badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Live</span>
                  </div>
                </div>
              ) : (
                /* Scheduled state */
                <div className="flex flex-col items-center justify-center gap-4 px-8 py-16 text-center sm:py-20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface">
                    <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Stream starts April 11 at 8:00 AM ET</p>
                    <p className="mt-1 text-xs text-muted">Watch all talks and panels live — no registration required.</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-accent/30 px-4 py-1.5 text-xs font-medium text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                    <span>Watch livestream</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              )}
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
