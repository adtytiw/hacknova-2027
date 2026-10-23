"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, type Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Instagram, Users, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SOCIAL_LINK_CLASS =
  "border-border text-muted hover:border-accent/50 hover:bg-accent/10 hover:text-accent flex h-9 w-9 items-center justify-center rounded-full border transition-colors";

const DEVELOPERS = [
  {
    name: "Aditya",
    handle: "@adtytiw",
    avatar: "/developers/adtytiw.jpg",
    href: "https://github.com/adtytiw",
  },
  {
    name: "Siddhesh Mhatre",
    handle: "@glitchySid",
    avatar: "/developers/glitchySid.jpg",
    href: "https://github.com/glitchySid",
  },
];

function DeveloperModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="developer-profiles-title"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-border/50 bg-surface/95 relative w-full max-w-md overflow-hidden rounded-2xl border p-6 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={onClose}
              autoFocus
              aria-label="Close developer profiles"
              className="text-muted hover:bg-white/5 hover:text-foreground absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase">HackNova</p>
            <h2
              id="developer-profiles-title"
              className="text-foreground mt-2 text-2xl font-semibold tracking-tight"
            >
              Developer profiles
            </h2>
            <p className="text-muted mt-1 text-sm">The people behind the HackNova site.</p>

            <div className="mt-6 space-y-3">
              {DEVELOPERS.map((developer) => (
                <a
                  key={developer.handle}
                  href={developer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border/60 bg-background/40 hover:border-accent/40 hover:bg-accent/5 group flex items-center gap-3 rounded-xl border p-3 transition-colors"
                >
                  <div className="border-border relative h-12 w-12 shrink-0 overflow-hidden rounded-full border">
                    <Image
                      src={developer.avatar}
                      alt={`${developer.name} GitHub avatar`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-foreground truncate text-sm font-semibold">{developer.name}</p>
                    <p className="text-muted truncate text-xs">{developer.handle}</p>
                  </div>
                  <ArrowUpRight
                    className="text-muted group-hover:text-accent h-4 w-4 shrink-0 transition-colors"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export function Footer() {
  const [isDevelopersOpen, setIsDevelopersOpen] = useState(false);
  const closeDevelopers = useCallback(() => setIsDevelopersOpen(false), []);

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-surface border-border w-full border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Map */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-foreground mb-4 text-xl font-semibold">Location</h3>
            <div className="border-border relative h-48 w-full overflow-hidden rounded-xl border">
              <iframe
                src="https://www.google.com/maps?q=Bharati+Vidyapeeth+Department+of+Management+Studies+Kharghar+Navi+Mumbai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bharati Vidyapeeth Department of Management Studies location"
              />
            </div>
            <a
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGD0yBggCEEUYPTIGCAMQLhhA0gEIMTQxNGowajGoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KSnvMkYAw-c7MTZoGvtLMkfn&daddr=Sector+3,+Kharghar,+Navi+Mumbai,+Maharashtra+410210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent mt-3 inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open in Google Maps
            </a>
          </motion.div>

          {/* Reach Us */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-foreground text-xl font-semibold">Reach Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="text-accent mt-0.5 h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-foreground">Bharati Vidyapeeth Department of Management Studies (BV(DU)-DMS)</p>
                  <p className="text-muted mt-1">Bharati Vidyapeeth (Deemed to be University)</p>
                  <p className="text-muted">Department of Management Studies (Off Campus)</p>
                  <p className="text-muted">Plot No. KC1, Sector 3</p>
                  <p className="text-muted">Kharghar, Navi Mumbai - 410210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="text-accent h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:hacknova.dms@bharatividyapeeth.edu"
                  className="text-muted hover:text-accent break-all transition-colors"
                >
                  hacknova.dms@bharatividyapeeth.edu
                </a>
              </div>
              <div className="text-muted ml-8 space-y-1 text-sm">
                <a className="block hover:text-accent" href="tel:+918657008027">+91 8657008027</a>
                <a className="block hover:text-accent" href="tel:+918657008028">+91 8657008028</a>
              </div>
            </div>
          </motion.div>

          {/* Get Involved */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-foreground text-xl font-semibold">Get Involved</h3>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="border-accent/30 hover:border-accent hover:bg-accent/10 text-foreground hover:text-accent"
                asChild
              >
                <Link href="mailto:hacknova.dms@bharatividyapeeth.edu?subject=Sponsorship%20Inquiry">
                  Inquire to Sponsor
                </Link>
              </Button>
              {/* Demo use case: add Volunteer beside sponsorship when volunteer intake opens. */}
            </div>
          </motion.div>
        </div>
      </div>

      <Separator className="bg-border" />

      <div className="mx-auto max-w-6xl px-6 py-6">
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg">
              <Image
                src="/hacknova-logo.png"
                alt="HackNova 2027"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-muted text-sm">© 2027 HackNova. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://2026.bvduhacknova.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              HackNova 2026 Archive
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <div className="flex items-center gap-2.5" aria-label="Social links">
              <a
                href="https://www.instagram.com/bvdudms/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @bvdudms"
                title="@bvdudms on Instagram"
                className={SOCIAL_LINK_CLASS}
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/adtytiw/hacknova-2027"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View HackNova source code on GitHub"
                title="Source code on GitHub"
                className={SOCIAL_LINK_CLASS}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setIsDevelopersOpen(true)}
                aria-label="View developer profiles"
                title="Developer profiles"
                className={SOCIAL_LINK_CLASS}
              >
                <Users className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <DeveloperModal open={isDevelopersOpen} onClose={closeDevelopers} />
    </motion.footer>
  );
}
