"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const STORAGE_KEY = "ticket-notice-dismissed";
const EVENTBRITE_URL = "https://www.eventbrite.com/e/mit-bitcoin-expo-2026-tickets-1984845280665";

export function TicketNotice() {
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY);
    } catch {
      return true;
    }
  });

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="ticket-notice"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed right-6 bottom-6 z-[60] w-[300px] max-w-[calc(100vw-3rem)]"
        >
          <div className="bg-surface/60 border-border/50 overflow-hidden rounded-2xl border shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="p-4">
              {/* Header */}
              <div className="flex items-center gap-2.5">
                <div className="bg-accent/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                  <svg
                    className="text-accent h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground text-sm font-semibold">
                  Tickets moved to Eventbrite
                </h3>
              </div>
              <p className="text-muted mt-2 text-xs leading-relaxed">
                Already purchased via MIT Engage? Your tickets are still valid. No action needed.
              </p>

              {/* Actions */}
              <div className="mt-3 flex items-center gap-3">
                <Link
                  href={EVENTBRITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors"
                >
                  Get Tickets
                </Link>
                <button
                  onClick={dismiss}
                  className="text-muted hover:text-foreground text-xs font-medium transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
