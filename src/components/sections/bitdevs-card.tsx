"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";

const BITDEVS_EVENT = {
  title: "Boston BitDevs: Socratic Seminar 35",
  description:
    "Boston BitDevs at Fidelity's 245 Summer Street location. Advance RSVP and valid identification are required.",
  location: "245 Summer Street, Boston, MA, USA",
  start: "20260410T183000",
  end: "20260410T204500",
  rsvpUrl: "https://evento.so/p/evt_7Xb4jPnRNT1iQzpA",
};

const ACCENT = "#E8A0B0";

function generateICS(): string {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//HackNova//EN",
    "BEGIN:VEVENT",
    `DTSTART:${BITDEVS_EVENT.start}`,
    `DTEND:${BITDEVS_EVENT.end}`,
    `SUMMARY:${BITDEVS_EVENT.title}`,
    `DESCRIPTION:${BITDEVS_EVENT.description}`,
    `LOCATION:${BITDEVS_EVENT.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function generateGoogleUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: BITDEVS_EVENT.title,
    dates: `${BITDEVS_EVENT.start}/${BITDEVS_EVENT.end}`,
    details: BITDEVS_EVENT.description,
    location: BITDEVS_EVENT.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function BitDevsCard() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownloadICS = () => {
    const blob = new Blob([generateICS()], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "boston-bitdevs-2026.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  const handleGoogleCalendar = () => {
    window.open(generateGoogleUrl(), "_blank");
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group"
      style={{ "--card-accent": ACCENT } as React.CSSProperties}
    >
      <Card className="bg-surface border-border overflow-hidden transition-all duration-300 group-hover:border-[var(--card-accent)]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${ACCENT}15`, border: `1px solid ${ACCENT}30` }}
            >
              <svg
                className="h-6 w-6"
                style={{ color: ACCENT }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="text-xs font-medium tracking-wider uppercase"
                  style={{ color: ACCENT }}
                >
                  Event
                </span>
                <span className="text-muted/40">•</span>
                <span className="text-muted text-xs">Boston BitDevs</span>
              </div>
              <h3 className="text-foreground text-lg font-semibold transition-colors group-hover:text-[var(--card-accent)]">
                Boston BitDevs at Fidelity
              </h3>
              <p className="text-muted mt-2 text-sm">
                Join us Friday, April 10 for Boston BitDevs at Fidelity — the day before HackNova
                Expo kicks off.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Calendar dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-border/50 hover:text-background flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all hover:bg-[var(--card-accent)]"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="bg-surface border-border absolute top-full right-0 z-50 mt-2 w-52 rounded-xl border py-1.5 shadow-xl shadow-black/20"
                    >
                      <button
                        onClick={handleDownloadICS}
                        className="text-foreground flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:text-[#E8A0B0]"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        <span>Download .ics</span>
                        <span className="text-muted ml-auto text-xs">Apple</span>
                      </button>
                      <button
                        onClick={handleGoogleCalendar}
                        className="text-foreground flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:text-[#E8A0B0]"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.5 22h-15A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2H9v2H4.5a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V15h2v4.5a2.5 2.5 0 01-2.5 2.5zM13 2v2h5.59L8.29 14.29l1.41 1.41L20 5.41V11h2V2h-9z" />
                        </svg>
                        <span>Google Calendar</span>
                        <span className="text-muted ml-auto text-xs">Open</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* RSVP link */}
              <a
                href={BITDEVS_EVENT.rsvpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-border/50 hover:text-background flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all hover:bg-[var(--card-accent)]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
