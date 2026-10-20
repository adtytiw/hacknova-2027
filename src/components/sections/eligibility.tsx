"use client";

import { motion, type Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { eligibilityItems } from "@/data/eligibility";

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function EligibilitySection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent mb-4">
              Eligibility
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-bold md:text-4xl">
            Who Can Apply
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted mx-auto max-w-2xl">
            Everything you need to know about participating in HackNova 2027.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {eligibilityItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="bg-surface border-border hover:border-accent/30 rounded-2xl border p-6 transition-colors sm:p-8"
            >
              <h3 className="text-foreground text-lg font-semibold">{item.question}</h3>
              <div className="bg-accent mt-3 h-1 w-12 rounded-full" />
              <ul className="text-muted mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
