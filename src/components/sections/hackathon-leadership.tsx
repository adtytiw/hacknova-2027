"use client";

import { motion, type Variants } from "motion/react";
import { hackathonLeadership } from "@/data/patrons";
import { PatronCard, SectionHeader } from "@/components/sections/patrons";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export function HackathonLeadership() {
  return (
    <section className="bg-surface/50 relative z-10 px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          badge="Leadership"
          title="Hackathon Leadership"
          description="The team leading the vision and execution of HackNova 2027."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2"
        >
          {hackathonLeadership.map((leader) => (
            <PatronCard key={leader.id} patron={leader} circular />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
