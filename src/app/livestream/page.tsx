import { type Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LivestreamPlayer } from "@/components/sections/livestream-player";

export const metadata: Metadata = {
  title: "Livestream | HackNova 2027",
  description:
    "Watch the HackNova 2027 live. Freedom for All — April 11–12, 2026, Cambridge MA.",
  openGraph: {
    title: "Livestream | HackNova 2027",
    description: "Watch the HackNova 2027 live. April 11–12, 2026.",
    url: "https://mitbitcoinexpo.org/livestream",
  },
};

export default function LivestreamPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 pt-36 pb-24">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            HackNova 2027
          </p>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Livestream</h1>
          <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Watch all talks and panels live. The stream opens on April 11 at 8:00 AM ET
            and runs through April 12. No registration required.
          </p>
        </div>

        {/* Player */}
        <LivestreamPlayer />

        {/* Schedule CTA */}
        <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-border bg-surface/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Want to follow along?</p>
            <p className="mt-0.5 text-xs text-muted">
              Check the full schedule to know what&apos;s coming up next.
            </p>
          </div>
          <a
            href="/schedule"
            className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            View Schedule
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
