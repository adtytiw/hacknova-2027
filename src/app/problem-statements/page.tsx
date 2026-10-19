"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { BarChart3, Cpu, ShieldCheck, Target, Users2 } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { challenges } from "@/data/problem-statements";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const mascotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
  },
};

function DetailBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Cpu;
  label: string;
  value: string;
}) {
  return (
    <div className="border-border bg-background/40 rounded-xl border p-4">
      <div className="mb-2 flex items-center gap-2">
        <Icon className="text-accent h-4 w-4 shrink-0" aria-hidden="true" />
        <p className="text-muted text-[11px] font-medium tracking-widest uppercase">{label}</p>
      </div>
      <p className="text-muted text-sm leading-relaxed">{value}</p>
    </div>
  );
}

function ChallengeCard({ challenge }: { challenge: (typeof challenges)[number] }) {
  const Icon = challenge.icon;

  return (
    <AccordionItem
      value={`challenge-${challenge.id}`}
      className="bg-surface/50 border-border data-[state=open]:border-accent/30 overflow-hidden rounded-2xl border px-5 transition-colors sm:px-7"
    >
      <AccordionTrigger className="py-5 hover:no-underline sm:py-6">
        <div className="flex items-start gap-4 text-left">
          <div className="bg-accent/10 border-accent/20 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
            <Icon className="text-accent h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-accent font-mono text-[11px] tracking-widest uppercase">
              Challenge {String(challenge.id).padStart(2, "0")}
            </p>
            <h3 className="text-foreground mt-1 text-lg font-semibold sm:text-xl">
              {challenge.name}{" "}
              <span className="text-muted font-normal">— {challenge.subtitle}</span>
            </h3>
            <p className="text-muted mt-1 text-sm leading-relaxed">{challenge.tagline}</p>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="text-muted">
        <div className="space-y-6 pb-2">
          <div className="border-accent/20 bg-accent/[0.04] rounded-xl border p-4 sm:p-5">
            <p className="text-accent mb-2 text-[11px] font-medium tracking-widest uppercase">
              Refined problem statement
            </p>
            <p className="text-foreground text-sm leading-relaxed sm:text-base">
              {challenge.refinedProblem}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted mr-1 text-[11px] tracking-widest uppercase">
              Focus areas
            </span>
            {challenge.focusAreas.map((area) => (
              <span
                key={area}
                className="border-border bg-background/60 text-muted rounded-full border px-2.5 py-1 text-xs"
              >
                {area}
              </span>
            ))}
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2">
              <Target className="text-accent h-4 w-4" aria-hidden="true" />
              <h4 className="text-foreground text-sm font-semibold tracking-wide">
                Specific problem statements
              </h4>
            </div>
            <div className="grid gap-3 lg:grid-cols-3">
              {challenge.specificProblems.map((problem) => (
                <div
                  key={problem.id}
                  className="border-border bg-background/50 hover:border-accent/30 rounded-xl border p-4 transition-colors"
                >
                  <p className="text-accent font-mono text-[11px] tracking-widest">{problem.id}</p>
                  <h5 className="text-foreground mt-1 text-sm font-semibold">{problem.title}</h5>
                  <p className="text-muted mt-2 text-xs leading-relaxed sm:text-sm">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <DetailBlock
              icon={Cpu}
              label="Suggested technology"
              value={challenge.suggestedTechnology}
            />
            <DetailBlock icon={Users2} label="Ideal team mix" value={challenge.idealTeamMix} />
            <DetailBlock
              icon={BarChart3}
              label="Prototype & impact indicators"
              value={challenge.impactIndicators}
            />
            <DetailBlock
              icon={ShieldCheck}
              label="Responsible-design watch-points"
              value={challenge.watchPoints}
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default function ProblemStatementsPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Background />

        {/* Mascot */}
        <motion.div
          variants={mascotVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-[1] flex -translate-y-12 items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-accent/30 h-64 w-64 rounded-full blur-3xl lg:h-96 lg:w-96" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/new_greenLogo.png"
              alt="HackNova Mascot"
              width={400}
              height={500}
              className="h-[50vh] max-h-[400px] w-auto object-contain opacity-20 lg:h-[55vh] lg:max-h-[500px]"
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
            <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent">
              HackNova 2027
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-accent">PROBLEM</span>{" "}
            <span className="text-foreground">STATEMENTS</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted mt-3 text-xl font-medium sm:text-2xl md:text-3xl"
          >
            Six Challenges <span className="text-muted/40">|</span>{" "}
            <span className="text-accent">One Mission</span>
          </motion.p>
        </motion.div>

        <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
      </section>

      {/* Intro */}
      <section className="relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="border-border bg-surface/50 mx-auto max-w-4xl rounded-2xl border p-6 sm:p-8"
        >
          <p className="text-accent mb-2 text-[11px] font-medium tracking-widest uppercase">
            How it works
          </p>
          <p className="text-muted text-sm leading-relaxed sm:text-base">
            Each challenge has a headline problem statement and three specific problem statements.
            Teams may select one of the specific statements or define their own sharper problem
            within the challenge, provided they justify it in the idea submission.
          </p>
        </motion.div>
      </section>

      {/* Challenges */}
      <section className="relative z-10 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">The Challenges</h2>
            <div className="bg-accent mt-2 h-1 w-16 rounded-full" />
            <p className="text-muted mt-3 max-w-2xl text-sm sm:text-base">
              Expand a challenge to explore its refined problem statement, specific tracks, suggested
              technology and responsible-design watch-points.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="multiple" defaultValue={["challenge-1"]} className="space-y-3 sm:space-y-4">
              {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </Accordion>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted mx-auto mt-10 max-w-2xl text-center text-sm"
          >
            Choose a challenge, sharpen the problem, and make your case in the idea submission.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
