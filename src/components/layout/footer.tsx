"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
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

export function Footer() {
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
            <div className="border-border h-8 w-8 rounded-lg border" aria-label="Logo placeholder" />
            <span className="text-muted text-sm">© 2027 HackNova. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4" aria-label="Social logo placeholders">
            <div className="border-border h-8 w-8 rounded-full border" />
            <div className="border-border h-8 w-8 rounded-full border" />
            <div className="border-border h-8 w-8 rounded-full border" />
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
