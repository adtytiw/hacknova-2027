import Image from "next/image";

export function BvduHomeTop() {
  return (
    <div className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-12">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-4">
              <Image src="/bvdu-logo.png" alt="Bharati Vidyapeeth Deemed to be University" width={72} height={72} className="h-16 w-16 object-contain" priority />
              <div>
                <p className="text-foreground text-lg font-semibold sm:text-xl">Bharati Vidyapeeth Deemed to be University</p>
                <p className="text-muted mt-1 text-sm">Department of Management Studies (Off Campus)</p>
              </div>
            </div>
            <p className="text-accent mt-8 text-sm font-semibold tracking-[0.2em] uppercase">Hack the Hackers</p>
            <h1 className="text-foreground mt-4 text-6xl font-bold tracking-tight sm:text-8xl">
              HackNova <span className="text-accent">2026</span>
            </h1>
            <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
              Empowering innovators to solve real-world problems through cutting-edge technology. Join us for 36 hours of intensive coding, collaboration, and creativity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <span className="text-foreground"><strong className="text-accent">January 2026</strong></span>
              <span className="text-foreground"><strong className="text-accent">₹1.45L</strong> Prize Pool</span>
              <span className="text-foreground"><strong className="text-accent">1000/-</strong> Per Team</span>
            </div>
            <a href="https://github.com/adtytiw" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground hover:bg-accent/90 mt-8 inline-flex rounded-xl px-6 py-3 font-medium transition-colors">
              Register Now
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24" aria-label="HackNova livestream">
        <div className="border-border/70 bg-surface/60 relative aspect-video overflow-hidden rounded-3xl border shadow-2xl shadow-black/30 backdrop-blur-sm">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/0t_hxkEHy5Y"
            title="HackNova 2026 livestream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}