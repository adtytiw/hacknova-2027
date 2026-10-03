"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserPlus } from "lucide-react";

const EVENT_DETAILS = {
  title: "HackNova 2027",
  description:
    "HackNova 2027 event details will be announced soon.",
  location: "Bharati Vidyapeeth Deemed University",
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#themes", label: "Themes" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#rules", label: "Rules" },
];

const menuContainerVariants: Variants = {
  closed: { opacity: 0, scale: 0.96, y: -8, transition: { duration: 0.15, ease: "easeIn" } },
  open: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
};

function generateICS(): string {
  const start = "20270110T090000";
  const end = "20270111T180000";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//HackNova 2027//EN",
    "BEGIN:VEVENT",
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${EVENT_DETAILS.title}`,
    `DESCRIPTION:${EVENT_DETAILS.description}`,
    `LOCATION:${EVENT_DETAILS.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function generateGoogleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_DETAILS.title,
    dates: "20270110T090000/20270111T180000",
    details: EVENT_DETAILS.description,
    location: EVENT_DETAILS.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function AddToCalendarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownloadICS = () => {
    const blob = new Blob([generateICS()], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hacknova-2027.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  const handleGoogleCalendar = () => {
    window.open(generateGoogleCalendarUrl(), "_blank");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted hover:text-accent flex items-center gap-1.5 text-sm transition-colors"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <svg
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
              className="text-foreground hover:bg-accent/10 hover:text-accent flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="text-foreground hover:bg-accent/10 hover:text-accent flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors"
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
  );
}

function MobileMenu({
  isOpen,
  onClose,
  toggleButtonRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      )
        onClose();
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, toggleButtonRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            ref={menuRef}
            variants={menuContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-[5.5rem] right-4 z-50 w-64"
          >
            <div className="bg-surface/95 border-border/50 overflow-hidden rounded-2xl border shadow-2xl shadow-black/50 backdrop-blur-xl">
              <nav className="p-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${isActive ? "bg-background/90 text-foreground" : "text-muted hover:text-accent hover:bg-white/5"}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="border-border/30 mt-2 border-t pt-2">
                  <Link
                    href="https://github.com/adtytiw"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[15px] font-medium transition-colors"
                  >
                    <UserPlus className="h-5 w-5" aria-hidden="true" />
                    Register
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const checkOverflow = useCallback(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const links = linksRef.current;
    const actions = actionsRef.current;
    if (!nav || !logo || !links || !actions) return;
    // 48px for inner padding + gaps between the three sections
    const needed = logo.offsetWidth + links.scrollWidth + actions.offsetWidth + 48;
    const collapsed = nav.offsetWidth < needed;
    setIsCollapsed(collapsed);
    if (!collapsed) setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const observer = new ResizeObserver(checkOverflow);
    observer.observe(nav);
    checkOverflow();
    return () => observer.disconnect();
  }, [checkOverflow]);

  // Close mobile menu when switching to expanded layout — done inside checkOverflow to avoid cascading effect

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
      >
        <nav
          ref={navRef}
          className="bg-surface/60 border-border/50 flex items-center justify-between rounded-2xl border px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl md:px-6 md:py-4"
        >
          {/* Logo */}
          <Link ref={logoRef} href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <Image
                src="/logo_2.webp"
                alt="HackNova 2027"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-foreground text-sm leading-tight font-semibold">HackNova</p>
              <p className="text-muted text-xs">2027</p>
            </div>
          </Link>

          {/* Desktop links — hidden when collapsed, but always measured via invisible ref below */}
          <div className={`items-center gap-1 ${isCollapsed ? "hidden" : "flex"}`}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${isActive ? "bg-background/80 text-foreground backdrop-blur-sm" : "text-muted hover:text-accent"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Invisible measurement div — always in DOM, never displayed, used by ResizeObserver */}
          <div
            ref={linksRef}
            className="pointer-events-none invisible fixed top-0 left-0 flex items-center gap-1"
            aria-hidden
          >
            {NAV_LINKS.map((link) => (
              <span
                key={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap"
              >
                {link.label}
              </span>
            ))}
          </div>

          {/* Desktop actions */}
          <div ref={actionsRef} className={`items-center gap-4 ${isCollapsed ? "hidden" : "flex"}`}>
            <AddToCalendarDropdown />
            <Link
              href="https://github.com/adtytiw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              <UserPlus className="h-5 w-5" aria-hidden="true" />
              Register
            </Link>
          </div>

          {/* Hamburger — shown when collapsed */}
          <div className={`items-center gap-3 ${isCollapsed ? "flex" : "hidden"}`}>
            <AddToCalendarDropdown />
            <button
              ref={mobileMenuToggleRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted hover:text-accent p-2 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        toggleButtonRef={mobileMenuToggleRef}
      />
    </>
  );
}
