"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { Badge } from "@/components/ui/badge";
import { objectives, whatIsHacknova, whyHacknova, type AboutItem } from "@/data/about";
import { Patrons, SectionHeader } from "@/components/sections/patrons";
import { HackathonLeadership } from "@/components/sections/hackathon-leadership";

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function ItemGrid({ items }: { items: AboutItem[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item) => (
        <motion.div
          key={item.title}
          variants={cardVariants}
          className="bg-surface border-border hover:border-accent/30 rounded-xl border p-6 transition-colors"
        >
          <item.icon className="text-accent mb-4 h-8 w-8" aria-hidden="true" />
          <h3 className="text-foreground mb-2 font-semibold">{item.title}</h3>
          <p className="text-muted text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function AboutPage() {
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
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-accent">ABOUT</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted mt-3 text-xl font-medium sm:text-2xl md:text-3xl"
          >
            Who We Are <span className="text-muted/40">|</span>{" "}
            <span className="text-accent">HackNova 2027</span>
          </motion.p>
        </motion.div>

        <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
      </section>

      {/* What is HackNova */}
      <section className="relative z-10 px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent mb-4">
                What is HackNova?
              </Badge>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold md:text-4xl">
              India&apos;s launchpad for future innovators
            </motion.h2>
            <motion.div variants={itemVariants} className="bg-accent mt-4 h-1 w-16 rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            {whatIsHacknova.map((paragraph) => (
              <motion.p key={paragraph} variants={itemVariants} className="text-muted leading-relaxed">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why HackNova */}
      <section className="bg-surface/50 relative z-10 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            badge="Why HackNova?"
            title="More than a competition"
            description="A launchpad that connects innovators across India to learn, create, and shape the future with technology."
          />
          <ItemGrid items={whyHacknova} />
        </div>
      </section>

      {/* Objectives */}
      <section className="relative z-10 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            badge="Objectives"
            title="What we set out to achieve"
            description="The goals that guide every edition of HackNova."
          />
          <ItemGrid items={objectives} />
        </div>
      </section>

      <Patrons />
      <HackathonLeadership />

      <Footer />
    </main>
  );
}
