"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { TeamMemberCard } from "@/components/sections/team-member-card";
import { teamCategories } from "@/lib/team-constants";

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

export default function TeamPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Background />

        {/* Mascot - behind content */}
        <motion.div
          variants={mascotVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-[1] flex -translate-y-12 items-center justify-center"
        >
          {/* Glow effect behind mascot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-accent/30 h-64 w-64 rounded-full blur-3xl lg:h-96 lg:w-96" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/greenLogo.webp"
              alt="Bitcoin Expo Mascot"
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
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-accent">TEAM</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted mt-3 text-xl font-medium sm:text-2xl md:text-3xl"
          >
            Meet the Organizers <span className="text-muted/40">|</span>{" "}
            <span className="text-accent">HackNova 2027</span>
          </motion.p>
        </motion.div>

        <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
      </section>

      {/* Team Categories */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {teamCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              className="mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-foreground text-2xl font-bold sm:text-3xl">{category.name}</h2>
                <div className="bg-accent mt-2 h-1 w-16 rounded-full" />
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
                {category.members.map((member, memberIndex) => (
                  <TeamMemberCard
                    key={`${category.name}-${member.name}`}
                    member={member}
                    index={memberIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
