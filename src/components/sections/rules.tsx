"use client";

import { motion, type Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { generalRules, judgingCriteria, phaseRules } from "@/data/rules";

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

function PointList({ points }: { points: string[] }) {
  return (
    <ul className="text-muted list-disc space-y-2 pl-5 text-sm leading-relaxed">
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

function WeightedList({ items }: { items: { label: string; weight: string }[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li
          key={item.label}
          className="text-muted flex items-baseline justify-between gap-4 leading-relaxed"
        >
          <span>{item.label}</span>
          <span className="text-accent shrink-0 font-medium tabular-nums">{item.weight}</span>
        </li>
      ))}
    </ul>
  );
}

export function RulesSection() {
  return (
    <section className="bg-surface/50 px-6 py-16 sm:py-20">
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
              Rules
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-bold md:text-4xl">
            Rules &amp; Guidelines
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted mx-auto max-w-2xl">
            Guidelines for a fair, original, and impactful hackathon.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              variants={cardVariants}
              className="bg-surface border-border hover:border-accent/30 rounded-2xl border p-6 transition-colors sm:p-8"
            >
              <h3 className="text-foreground text-lg font-semibold">General Rules</h3>
              <div className="bg-accent mt-3 h-1 w-12 rounded-full" />
              <div className="mt-4">
                <PointList points={generalRules} />
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-surface border-border hover:border-accent/30 rounded-2xl border p-6 transition-colors sm:p-8"
            >
              <h3 className="text-foreground text-lg font-semibold">Judging Criteria</h3>
              <div className="bg-accent mt-3 h-1 w-12 rounded-full" />
              <p className="text-muted mt-4 text-sm">Teams will be evaluated based on:</p>
              <div className="mt-3">
                <WeightedList items={judgingCriteria} />
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {phaseRules.map((phase) => (
              <motion.div
                key={phase.id}
                variants={cardVariants}
                className="bg-surface border-border hover:border-accent/30 flex flex-col rounded-2xl border p-6 transition-colors sm:p-8"
              >
                <h3 className="text-foreground text-lg font-semibold">{phase.question}</h3>
                <div className="bg-accent mt-3 h-1 w-12 rounded-full" />

                {phase.objective && (
                  <p className="text-muted mt-4 text-sm leading-relaxed">
                    <span className="text-foreground font-medium">Objective: </span>
                    {phase.objective}
                  </p>
                )}

                <div className="mt-4 space-y-4">
                  {phase.groups.map((group, index) => (
                    <div key={group.heading ?? index}>
                      {group.heading && (
                        <h4 className="text-foreground mb-2 text-sm font-semibold">
                          {group.heading}
                        </h4>
                      )}
                      <PointList points={group.points} />
                    </div>
                  ))}
                </div>

                {phase.deadline && (
                  <p className="mt-4 text-sm">
                    <span className="text-foreground font-medium">Deadline: </span>
                    <span className="text-accent">{phase.deadline}</span>
                  </p>
                )}

                {phase.evaluation && (
                  <div className="mt-4">
                    <h4 className="text-foreground mb-2 text-sm font-semibold">
                      {phase.evaluationHeading}
                    </h4>
                    <WeightedList items={phase.evaluation} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
