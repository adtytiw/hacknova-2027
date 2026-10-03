"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

export function AnnouncementCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group min-w-0"
    >
      <Card className="bg-surface border-border hover:border-accent/50 overflow-hidden transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 border-accent/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
              <svg className="text-accent h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm2.07-7.25l-.9.92A3.5 3.5 0 0013 13h-2c0-1.1.45-2.1 1.17-2.83l1.24-1.25A1.5 1.5 0 0012.35 6.4 1.5 1.5 0 0010.5 8H8.5a3.5 3.5 0 015.97-2.48l.6.6A3.5 3.5 0 0115.07 9.75z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-accent text-xs font-medium tracking-wider uppercase">About</span>
                <span className="text-muted/40">•</span>
                <span className="text-muted text-xs">HackNova</span>
              </div>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                India&apos;s premier platform for AI driven innovation for sustainable environmenta national hackathon bringing together innovators and tech enthusiasts from across India to solve real-world problems. Participants brainstorm and build solutions in AI, Web3, IoT, HealthTech, Environmental Innovation, and Education.
              </p>
            </div>
            <div className="bg-border/50 text-muted flex h-8 w-8 shrink-0 items-center justify-center rounded-full" aria-hidden="true">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}