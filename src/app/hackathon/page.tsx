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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { keyDetails, faqItems } from "@/data/hackathon";
import {
  ArrowRight,
  ExternalLink,
  Handshake,
  Megaphone,
  Users2,
  Sparkles,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";

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
          className="mb-4 border-accent/30 bg-accent/10 text-accent"
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
          Hack the Hackers
        </motion.p>

        {/* Prize callout */}
        <motion.div variants={itemVariants}>
          <PrizeCounter />
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted mx-auto mt-6 max-w-xl">
          36 hours to learn, build, and ship innovative solutions. In-person at Bharati Vidyapeeth Campus, Navi Mumbai.
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

export function FAQSection() {
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
                  className="bg-surface border-border rounded-xl border px-6 data-[state=open]:border-accent/30"
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
      description: "Support the next generation of innovation and open-source development.",
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
            <a href="mailto:hacknova.dms@bharatividyapeeth.edu?subject=Hackathon%20Sponsorship%20Inquiry">
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
            Join us at Bharati Vidyapeeth Campus on Jan 10-11, 2027 for 36 hours of hacking, learning, and building the
            future.
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
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted relative z-10 mt-6 text-sm">
            Questions? Email us at{" "}
            <a
              href="mailto:hacknova.dms@bharatividyapeeth.edu"
              className="text-orange-400 hover:underline"
            >
              hacknova.dms@bharatividyapeeth.edu
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default function HackathonPage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <KeyDetailsSection />
      <FAQSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
