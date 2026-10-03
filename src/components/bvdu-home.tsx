const domains = [
  ["Sustainable Innovation & Green Technology", "Innovating retail packaging for maximum shelf impact and sustainability."],
  ["Food Safety & Public Health", "How might we make street food safer without losing its soul?"],
  ["Smart Cities & Urban Development", "Dust-free streets: solving urban cleanliness through tech and design."],
  ["Environmental Sustainability & Urban Greening", "Tech-enabled greenery for well-maintained public parks and landscapes."],
  ["Assistive Technology & Inclusive Education", "Empowering differently-abled individuals through smart assistive technologies."],
  ["Logistics, Mobility & Supply Chain Innovation", "A holistic platform for managing shipments, fleets, and payments."],
];

const timeline = [
  ["10 October 2025", "Problem Statement Launch", "Team registration and initial idea submission opens."],
  ["30 November 2025", "Last Date for Registration", "Final deadline for team registration and idea submission."],
  ["1st Week of December", "Phase 1 Evaluation", "Shortlisted teams are announced."],
  ["2nd Week of December", "Mentoring Session 1", "The first mentoring session for shortlisted teams."],
  ["3rd Week of December", "Mentoring Session 2", "The second mentoring session for shortlisted teams."],
  ["10 Jan - 11 Jan 2026", "Grand Finale", "36-hour intensive hackathon begins."],
];

const rules = [
  "Students from any recognized institute across India can participate.",
  "Undergraduate, postgraduate, and junior college students are eligible.",
  "Industry professionals, working individuals, and start-up teams are welcome.",
  "All submissions must be original and created during the event.",
  "Teams must use the official PPT template for idea submission.",
  "Judges' decisions are final and binding.",
];

export function BvduHome() {
  return (
    <div className="relative z-10">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <p className="text-accent mb-5 text-sm font-semibold tracking-[0.22em] uppercase">Hack the Hackers</p>
          <h1 className="text-foreground text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            HackNova <span className="text-accent">2026</span>
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-xl leading-relaxed sm:text-2xl">
            Empowering innovators to solve real-world problems through cutting-edge technology.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://github.com/adtytiw" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-6 py-3 font-medium transition-colors">
              Register Now
            </a>
            <a href="#about" className="border-border bg-surface/70 text-foreground hover:border-accent rounded-xl border px-6 py-3 font-medium transition-colors">
              Explore HackNova
            </a>
          </div>
          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["36", "Hours of Innovation"],
              ["500+", "Participants Expected"],
              ["₹1.45L", "Total Prize Pool"],
              ["6", "Problem Domains"],
            ].map(([value, label]) => (
              <div key={label} className="border-border/70 bg-surface/60 rounded-2xl border px-4 py-5 backdrop-blur-sm">
                <p className="text-accent text-2xl font-bold sm:text-3xl">{value}</p>
                <p className="text-muted mt-1 text-xs leading-snug uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-border/70 border-y bg-black/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">About HackNova 2026</p>
            <h2 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">India&apos;s platform for AI-driven innovation.</h2>
          </div>
          <div className="text-muted space-y-6 text-lg leading-relaxed">
            <p>HackNova is a national platform for AI-driven innovation for a sustainable environment.</p>
            <p>We empower innovators across India to transform ideas into impactful, real-world solutions while fostering collaboration, learning, and knowledge-sharing.</p>
          </div>
        </div>
      </section>

      <section id="themes" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Problem Domains</p>
          <h2 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">Six ways to make a real-world impact.</h2>
          <p className="text-muted mt-5 text-lg">Choose from six diverse technological domains and create solutions that matter.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {domains.map(([title, description], index) => (
            <article key={title} className="border-border/70 bg-surface/50 rounded-2xl border p-6 backdrop-blur-sm">
              <span className="text-accent text-sm font-semibold">0{index + 1}</span>
              <h3 className="text-foreground mt-8 text-xl font-semibold">{title}</h3>
              <p className="text-muted mt-3 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="border-border/70 border-y bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Event Timeline</p>
            <h2 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">36 hours of intensive innovation.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map(([date, title, description]) => (
              <article key={title} className="border-border bg-surface/60 rounded-2xl border p-6">
                <p className="text-accent text-sm font-semibold">{date}</p>
                <h3 className="text-foreground mt-4 text-xl font-semibold">{title}</h3>
                <p className="text-muted mt-3 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="result" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Prize Pool</p>
            <h2 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">₹1.45 Lakhs</h2>
          </div>
          <p className="text-muted max-w-md text-lg">Cash prizes, recognition, mentorship access, and incubation opportunities.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["1st Prize", "₹75,000", "Certificate, mentorship, and incubation opportunity"],
            ["2nd Prize", "₹50,000", "Certificate and networking opportunities"],
            ["Best Social Impact", "₹10,000", "For the solution with the highest social impact potential"],
            ["Best Design & UX", "₹10,000", "For outstanding user interface and experience design"],
          ].map(([title, amount, description]) => (
            <article key={title} className="border-border/70 bg-surface/50 rounded-2xl border p-6">
              <h3 className="text-foreground font-semibold">{title}</h3>
              <p className="text-accent mt-6 text-3xl font-bold">{amount}</p>
              <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sponsership" className="border-border/70 border-y bg-black/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Sponsorship Awaiting</p>
            <h2 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">Partner with HackNova 2026.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Brand Visibility", "Reach 500+ talented participants and a digital audience across India."],
              ["Talent Acquisition", "Connect with top innovators and potential employees."],
              ["Innovation Access", "Get first access to innovative solutions and business partnerships."],
            ].map(([title, description]) => (
              <div key={title} className="border-border bg-surface/60 rounded-2xl border p-5">
                <h3 className="text-foreground font-semibold">{title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">Rules & Description</p>
            <h2 className="text-foreground mt-4 text-4xl font-bold sm:text-5xl">Everything you need to participate.</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {rules.map((rule) => (
              <li key={rule} className="border-border bg-surface/60 text-muted rounded-2xl border p-5 leading-relaxed">{rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="border-border/70 border-t bg-black/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase">How to Reach</p>
            <h2 className="text-foreground mt-4 text-4xl font-bold">Visit HackNova.</h2>
            <p className="text-muted mt-6 text-lg leading-relaxed">Bharati Vidyapeeth (Deemed to be University), Department of Management Studies (Off Campus), Plot No. KC1, Sector 3, Kharghar, Navi Mumbai - 410210.</p>
          </div>
          <div className="border-border bg-surface/60 rounded-2xl border p-6">
            <h3 className="text-foreground text-xl font-semibold">Contact Us</h3>
            <a className="text-accent mt-5 block hover:underline" href="mailto:hacknova.dms@bharatividyapeeth.edu">hacknova.dms@bharatividyapeeth.edu</a>
            <a className="text-muted mt-3 block hover:text-accent" href="tel:+918657008027">+91 8657008027</a>
            <a className="text-muted mt-2 block hover:text-accent" href="tel:+918657008028">+91 8657008028</a>
          </div>
        </div>
      </section>
    </div>
  );
}