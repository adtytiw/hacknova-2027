"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const STORAGE_KEY = "hacknova-ticket-notice-dismissed";
const REGISTER_URL = "https://github.com/adtytiw";

export function TicketNotice() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      setVisible(!localStorage.getItem(STORAGE_KEY));
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      return;
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed right-6 bottom-6 z-[60] w-[300px] max-w-[calc(100vw-3rem)]"
        >
          <div className="bg-surface/60 border-border/50 overflow-hidden rounded-2xl border shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="p-4">
              <div className="flex items-center gap-2.5">
                <div className="bg-accent/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                  <svg className="text-accent h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h2 className="text-foreground text-sm font-semibold">Register now at Unstop</h2>
              </div>
              <p className="text-muted mt-2 text-xs leading-relaxed">
                Registrations for HackNova 2027 are officially open. Secure your team&apos;s spot and participate in the 36-hour hackathon!
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" onClick={dismiss} className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors">
                  Register
                </a>
                <button type="button" onClick={dismiss} className="text-muted hover:text-foreground text-xs font-medium transition-colors">
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