"use client";

import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  keyDetails,
  schedule,
  prizes,
  judgingCriteria,
  eligibleDomains,
  faqItems,
  getStartedSteps,
} from "@/data/hackathon";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  FileVideo,
  Presentation,
  Globe,
  Handshake,
  Megaphone,
  Users2,
  Sparkles,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12 text-center"
    >
      <motion.div variants={itemVariants}>
        <Badge
          variant="outline"
          className="mb-4 border-orange-500/30 bg-orange-500/10 text-orange-400"
        >
          {badge}
        </Badge>
      </motion.div>
      <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-bold md:text-4xl">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={itemVariants} className="text-muted mx-auto max-w-2xl">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

// ── Odometer: single value 0 → 20000 drives all digit columns ───────────────

function usePrizeSize() {
  const [fontSize, setFontSize] = useState(34); // mobile-first default
  useEffect(() => {
    const update = () => setFontSize(window.innerWidth >= 640 ? 56 : 34);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return fontSize;
}

function OdometerColumn({
  mv,
  place,
  digitHeight,
  digitWidth,
}: {
  mv: MotionValue<number>;
  place: number;
  digitHeight: number;
  digitWidth: number;
}) {
  const y = useTransform(mv, (latest) => {
    const digit = Math.floor(latest / place) % 10;
    return -digit * digitHeight;
  });

  return (
    <div
      style={{ height: digitHeight, width: digitWidth }}
      className="relative overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <div
            key={n}
            style={{ height: digitHeight }}
            className="flex items-center justify-center"
          >
            {n}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function PrizeCounter() {
  const progress = useMotionValue(0);
  const fontSize = usePrizeSize();
  const digitHeight = Math.round(fontSize * 1.3);
  const digitWidth  = Math.round(fontSize * 0.68);

  useEffect(() => {
    const t = setTimeout(() => {
      animate(progress, 20000, {
        duration: 2.8,
        ease: [0.16, 1, 0.3, 1],
      });
    }, 400);
    return () => clearTimeout(t);
  }, [progress]);

  return (
    <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5">
      <Trophy className="h-9 w-9 shrink-0 text-orange-400 sm:h-12 sm:w-12" />
      <div
        className="flex items-center font-black text-orange-400"
        style={{ fontSize, height: digitHeight, lineHeight: 1 }}
      >
        <span className="mr-1 sm:mr-2">$</span>
        <OdometerColumn mv={progress} place={10000} digitHeight={digitHeight} digitWidth={digitWidth} />
        <OdometerColumn mv={progress} place={1000}  digitHeight={digitHeight} digitWidth={digitWidth} />
        <span className="mx-1 sm:mx-2">,</span>
        <OdometerColumn mv={progress} place={100} digitHeight={digitHeight} digitWidth={digitWidth} />
        <OdometerColumn mv={progress} place={10}  digitHeight={digitHeight} digitWidth={digitWidth} />
        <OdometerColumn mv={progress} place={1}   digitHeight={digitHeight} digitWidth={digitWidth} />
        <span className="ml-1">+</span>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Background />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        className="absolute inset-0 z-[1] flex -translate-y-12 items-center justify-center"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-orange-400/30 blur-3xl lg:h-96 lg:w-96" />
        </div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/orangeLogo.webp"
            alt="Hackathon Mascot"
            width={400}
            height={500}
            className="h-[45vh] max-h-[350px] w-auto object-contain opacity-20 lg:h-[50vh] lg:max-h-[450px]"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <Badge
            variant="outline"
            className="border-orange-500/50 bg-orange-500/10 text-orange-400"
          >
            13th Annual • April 10-12, 2026
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-orange-400">HACKNOVA</span>
          <br />
          <span className="text-foreground">HACKATHON</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl font-medium text-orange-400/80 md:text-2xl"
        >
          Freedom for All
        </motion.p>

        {/* Prize callout */}
        <motion.div variants={itemVariants}>
          <PrizeCounter />
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted mx-auto mt-6 max-w-xl">
          36 hours to learn, build, and ship the next generation of Bitcoin and blockchain
          applications. In-person at MIT Campus.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-row justify-center gap-3 sm:gap-4"
        >
          <Button
            size="lg"
            className="bg-orange-500 px-4 text-sm text-white hover:bg-orange-600 sm:px-6 sm:text-base"
            asChild
          >
            <Link href="https://forms.gle/aXty5Gdxr5BCRaxKA" target="_blank">
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500/30 px-4 text-sm hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:px-6 sm:text-base"
            asChild
          >
            <Link href="#sponsors">
              Sponsor Us?
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
    </section>
  );
}

function KeyDetailsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {keyDetails.map((detail) => {
            const isPrize = detail.label === "Prize Pool";
            return (
              <motion.div
                key={detail.label}
                variants={cardVariants}
                className={
                  isPrize
                    ? "bg-surface border-orange-500/40 rounded-xl border-2 p-4 text-center"
                    : "bg-surface border-border rounded-xl border p-4 text-center transition-colors hover:border-orange-500/30"
                }
              >
                <detail.icon className="mx-auto mb-2 h-6 w-6 text-orange-400" />
                <p className="text-muted mb-1 text-sm">{detail.label}</p>
                <p className={isPrize ? "font-extrabold text-orange-400" : "font-semibold"}>{detail.value}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const stats = [
    { value: 12, suffix: "+", label: "Years Running", sublabel: "Since 2014" },
    { value: 100, suffix: "+", label: "Participants", sublabel: "Each Year" },
    { value: 400, suffix: "+", label: "Expo Attendees", sublabel: "Concurrent Event" },
    { value: 225, suffix: "K+", label: "Live Viewers", sublabel: "Bitcoin Magazine" },
  ];

  const innovations = [
    "Layer 2 Scaling Solutions",
    "Privacy-Preserving Protocols",
    "Self-Custody Wallets",
    "Lightning Network Apps",
    "Bitcoin-Native DeFi",
    "Educational Tools",
  ];

  const alumniDestinations = [
    "Bitcoin Core development teams",
    "Leading crypto companies",
    "Founded blockchain startups",
  ];

  return (
    <section className="bg-surface/50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          badge="Our Impact"
          title="12 Years of Innovation"
          description="The premier student-led Bitcoin hackathon since 2014"
        />

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="relative rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 text-center"
            >
              <div className="text-4xl font-bold text-orange-400 md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-foreground mt-2 font-medium">{stat.label}</p>
              <p className="text-muted text-xs">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column: Innovations + Alumni */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Past Innovations */}
          <motion.div
            variants={cardVariants}
            className="bg-background border-border rounded-xl border p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-400" />
              <h3 className="text-lg font-semibold">Past Innovations</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {innovations.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="border-orange-500/30 bg-orange-500/10 text-orange-400"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Where Alumni Go */}
          <motion.div
            variants={cardVariants}
            className="bg-background border-border rounded-xl border p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <Users2 className="h-5 w-5 text-orange-400" />
              <h3 className="text-lg font-semibold">Where Alumni Go</h3>
            </div>
            <ul className="space-y-3">
              {alumniDestinations.map((destination) => (
                <li key={destination} className="text-muted flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-orange-400" />
                  {destination}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="About"
          title="Build the Future of Bitcoin"
          description="Join the most prestigious Bitcoin hackathon of the year"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-muted space-y-6"
        >
          <motion.p variants={itemVariants} className="text-lg">
            The cryptocurrency space needs you to develop the next generation of projects,
            applications, and features. In the spirit of MIT, this is a unique hackathon where
            you&apos;ll have <span className="font-medium text-orange-400">36 hours</span> to learn,
            share, and build a remarkable project that may be the next big thing to scale this
            space.
          </motion.p>

          <motion.p variants={itemVariants}>
            With interactive workshops, mentorship sessions, and a collaborative atmosphere,
            it&apos;s the perfect environment to learn, build, and make meaningful connections — no
            matter your experience level.
          </motion.p>

          <motion.div variants={itemVariants} className="grid gap-6 pt-6 md:grid-cols-3">
            <div className="bg-surface border-border rounded-xl border p-6">
              <h3 className="text-foreground mb-2 font-semibold">🆕 New to Crypto?</h3>
              <p className="text-sm">
                No worries! This event is beginner-friendly with workshops to get you started.
              </p>
            </div>
            <div className="bg-surface border-border rounded-xl border p-6">
              <h3 className="text-foreground mb-2 font-semibold">💻 Experienced Dev?</h3>
              <p className="text-sm">
                Challenge yourself at one of the most prestigious Bitcoin hackathons.
              </p>
            </div>
            <div className="bg-surface border-border rounded-xl border p-6">
              <h3 className="text-foreground mb-2 font-semibold">🤔 Just Curious?</h3>
              <p className="text-sm">Join us to learn more about crypto. The fun is guaranteed!</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section className="bg-surface/50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="How It Works"
          title="Get Started"
          description="Five simple steps to join the hackathon"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="bg-border absolute top-0 bottom-0 left-6 w-px md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {getStartedSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number */}
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.step}
                </div>

                {/* Content */}
                <div
                  className={`bg-surface border-border flex-1 rounded-xl border p-6 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section id="timeline" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="Timeline"
          title="Event Schedule"
          description="36 hours of hacking, learning, and building"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Tabs defaultValue="friday" className="w-full">
            <motion.div variants={itemVariants}>
              <TabsList className="bg-surface border-border mb-8 w-full justify-start border p-1">
                {schedule.map((day) => (
                  <TabsTrigger
                    key={day.day.toLowerCase()}
                    value={day.day.toLowerCase()}
                    className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    <span className="hidden sm:inline">{day.day}</span>
                    <span className="sm:hidden">{day.day.slice(0, 3)}</span>
                    <span className="ml-2 text-xs opacity-70">{day.date}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {schedule.map((day) => (
              <TabsContent key={day.day.toLowerCase()} value={day.day.toLowerCase()}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {day.events.map((event, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`flex items-center gap-4 rounded-lg border p-4 transition-colors ${
                        event.isHighlight
                          ? "border-orange-500/30 bg-orange-500/10"
                          : "bg-surface border-border"
                      }`}
                    >
                      <span
                        className={`w-28 flex-shrink-0 font-mono text-sm ${
                          event.isHighlight ? "text-orange-400" : "text-muted"
                        }`}
                      >
                        {event.time}
                      </span>
                      <span
                        className={`font-medium ${
                          event.isHighlight ? "text-orange-400" : "text-foreground"
                        }`}
                      >
                        {event.title}
                      </span>
                      {event.isHighlight && (
                        <Badge className="ml-auto border-orange-500/30 bg-orange-500/20 text-orange-400">
                          Key Event
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function TracksSection() {
  return (
    <section id="themes" className="bg-surface/50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="Tracks"
          title="What to Build"
          description="Your project must be related to Bitcoin, blockchain, or cryptocurrency"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {eligibleDomains.map((domain) => (
            <motion.div
              key={domain.name}
              variants={cardVariants}
              className="bg-background border-border group rounded-xl border p-6 transition-colors hover:border-orange-500/30"
            >
              <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-orange-400">
                {domain.name}
              </h3>
              <p className="text-muted text-sm">{domain.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-muted mt-8 text-center text-sm"
        >
          Sponsor challenge tracks will be announced closer to the event.
        </motion.p>
      </div>
    </section>
  );
}

function SubmissionSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="Submissions"
          title="What to Submit"
          description="Make sure to include all required materials for judging"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={cardVariants}
            className="bg-surface border-border rounded-xl border p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                <Presentation className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="font-semibold">Slide Deck</h3>
            </div>
            <p className="text-muted text-sm">
              A short presentation with your project motivation, description, story, and technology
              stack.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-surface border-border rounded-xl border p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                <Github className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="font-semibold">GitHub Repository</h3>
            </div>
            <p className="text-muted text-sm">
              With proper commit history showing work done during the hackathon period.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-surface border-border rounded-xl border p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                <FileVideo className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="font-semibold">Demo Video</h3>
            </div>
            <p className="text-muted text-sm">
              A 3-5 minute video demonstrating your project in action.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-surface border-border rounded-xl border p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                <Globe className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="font-semibold">Live Application</h3>
            </div>
            <p className="text-muted text-sm">
              Optional: Link to a live application with access credentials if needed.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/10 p-6"
        >
          <h4 className="mb-2 font-semibold text-orange-400">📢 Finalist Announcement</h4>
          <p className="text-muted text-sm">
            We will announce the 2nd round finalists on Discord on Sunday, April 12th around 8:00 AM
            ET. Be prepared to pitch between 12:30 PM and 2:00 PM.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PrizesSection() {
  return (
    <section className="bg-surface/50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="Rewards"
          title="Prize Distribution"
          description="A community-focused model that rewards all participants"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Prize bars */}
          <motion.div variants={itemVariants} className="mb-8 space-y-4">
            {prizes.map((prize) => (
              <div key={prize.place} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{prize.place}</span>
                  <span className="font-bold" style={{ color: prize.color }}>
                    {prize.percentage}%
                  </span>
                </div>
                <div className="bg-border h-3 overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${prize.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: prize.color }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-6"
          >
            <h4 className="mb-3 font-semibold text-orange-400">How the Community Split Works</h4>
            <p className="text-muted text-sm">
              The 70% community pool is distributed among all qualifying submissions based on ranked or tiered scoring. This means even if you don&apos;t place in the
              top 3, your hard work can still be rewarded!
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted mt-6 text-center text-sm">
            Total prize pool: <span className="font-semibold text-orange-400">$20,000+</span> in cash — distributed across placements and the community split.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function JudgingSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="Evaluation"
          title="Judging Criteria"
          description="How your project will be evaluated"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {judgingCriteria.map((criterion) => (
            <motion.div
              key={criterion.title}
              variants={cardVariants}
              className="bg-surface border-border rounded-xl border p-6 transition-colors hover:border-orange-500/30"
            >
              <criterion.icon className="mb-4 h-8 w-8 text-orange-400" />
              <h3 className="mb-2 font-semibold">{criterion.title}</h3>
              <p className="text-muted text-sm">{criterion.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RulesSection() {
  return (
    <section id="rules" className="bg-surface/50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="Guidelines"
          title="Rules & Eligibility"
          description="What you need to know before participating"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={cardVariants}>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <CheckCircle2 className="h-5 w-5 text-orange-400" />
              Eligibility
            </h3>
            <ul className="text-muted space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-orange-400">•</span>
                Must be 18 years or older at time of event
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-orange-400">•</span>
                Open to university students and professionals worldwide
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-orange-400">•</span>
                Must complete application and be accepted
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-orange-400">•</span>
                In-person attendance at MIT is required
              </li>
            </ul>
          </motion.div>

          <motion.div variants={cardVariants}>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <CheckCircle2 className="h-5 w-5 text-orange-400" />
              Project Rules
            </h3>
            <ul className="text-muted space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-orange-400">•</span>
                Work solo or in teams of up to 5 members
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-orange-400">•</span>
                All code must be written during the hackathon
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-orange-400">•</span>
                Version control with regular commits is mandatory
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-orange-400">•</span>
                Projects must fit into eligible domains
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-background border-border mt-8 rounded-xl border p-6"
        >
          <h4 className="mb-2 font-semibold">Code of Conduct</h4>
          <p className="text-muted text-sm">
            All participants must follow our Code of Conduct. Harassment of any kind will not be
            tolerated. The hackathon is committed to providing a safe and inclusive environment.
            Violations may result in immediate disqualification.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          badge="Questions"
          title="Frequently Asked Questions"
          description="Everything you need to know about the hackathon"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-surface border-border rounded-xl border px-6 data-[state=open]:border-orange-500/30"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted">{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

function SponsorsSection() {
  const sponsorBenefits = [
    {
      icon: Users2,
      title: "Access Top Talent",
      description:
        "Connect with talented developers, designers, and entrepreneurs from MIT and beyond.",
    },
    {
      icon: Megaphone,
      title: "Brand Visibility",
      description:
        "Get your brand in front of hundreds of passionate builders in the crypto space.",
    },
    {
      icon: Handshake,
      title: "Community Impact",
      description: "Support the next generation of Bitcoin innovation and open-source development.",
    },
    {
      icon: Sparkles,
      title: "Custom Challenges",
      description:
        "Create sponsored challenge tracks to see your technology used in creative ways.",
    },
  ];

  return (
    <section id="sponsors" className="bg-surface/50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="Partner With Us"
          title="Become a Sponsor"
          description="Help us make the 13th Annual HackNova Hackathon the best one yet"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 grid gap-6 sm:grid-cols-2"
        >
          {sponsorBenefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="bg-background border-border rounded-xl border p-6 transition-colors hover:border-orange-500/30"
            >
              <benefit.icon className="mb-4 h-8 w-8 text-orange-400" />
              <h3 className="mb-2 font-semibold">{benefit.title}</h3>
              <p className="text-muted text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8 text-center"
        >
          <h3 className="mb-3 text-xl font-semibold">Interested in Sponsoring?</h3>
          <p className="text-muted mx-auto mb-6 max-w-lg">
            We offer various sponsorship tiers with different benefits. Reach out to learn more
            about how you can support the hackathon.
          </p>
          <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600" asChild>
            <a href="mailto:hackathon-mitbitcoinexpo@googlegroups.com?subject=Hackathon%20Sponsorship%20Inquiry">
              Contact Us About Sponsorship
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="via-surface to-surface relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 p-8 text-center md:p-12"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

          <motion.div variants={itemVariants} className="relative z-10">
            <Badge
              variant="outline"
              className="mb-4 border-orange-500/50 bg-orange-500/10 text-orange-400"
            >
              Registration Open
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="relative z-10 mb-4 text-3xl font-bold md:text-4xl"
          >
            Ready to Build?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted relative z-10 mx-auto mb-8 max-w-xl"
          >
            Join us at MIT on April 10-12, 2026 for 36 hours of hacking, learning, and building the
            future of Bitcoin.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600" asChild>
              <Link href="https://forms.gle/aXty5Gdxr5BCRaxKA" target="_blank">
                Register Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500/30 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              asChild
            >
              <Link href="https://twitter.com/MITBitcoinClub" target="_blank">
                Follow @MITBitcoinClub
              </Link>
            </Button>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted relative z-10 mt-6 text-sm">
            Questions? Email us at{" "}
            <a
              href="mailto:hackathon-mitbitcoinexpo@googlegroups.com"
              className="text-orange-400 hover:underline"
            >
              hackathon-mitbitcoinexpo@googlegroups.com
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export function HackathonHomeSections() {
  return (
    <>
      <ImpactSection />
      <AboutSection />
      <GetStartedSection />
      <ScheduleSection />
      <TracksSection />
      <SubmissionSection />
      <PrizesSection />
      <JudgingSection />
      <RulesSection />
      <FAQSection />
    </>
  );
}

export default function HackathonPage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <KeyDetailsSection />
      <HackathonHomeSections />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
