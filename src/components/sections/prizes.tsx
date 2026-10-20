"use client";

import type { ComponentType } from "react";
import { motion, type Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { DesignIcon, ImpactIcon, TrophyIcon } from "@/components/icons/prize-icons";
import { mainPrizes, specialAwards } from "@/data/prizes";

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

const VIEWPORT = { once: true, margin: "-100px" } as const;

const AWARD_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "social-impact": ImpactIcon,
  "design-ux": DesignIcon,
};

export function PrizesSection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-12 text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent mb-4">
              Rewards
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="mb-4 text-3xl font-bold md:text-4xl">
            Prize Pool
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted mx-auto max-w-2xl">
            ₹1.45 Lakhs in cash prizes and special category awards.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2"
        >
          {mainPrizes.map((prize) => (
            <motion.div
              key={prize.id}
              variants={cardVariants}
              className="bg-surface border-border hover:border-accent/30 rounded-2xl border p-8 text-center transition-colors"
            >
              <TrophyIcon medal={prize.medal} className="mx-auto h-16 w-16 sm:h-20 sm:w-20" />
              <p className="text-muted mt-4 text-xs font-medium tracking-widest uppercase">
                {prize.rank}
              </p>
              <p className="text-accent mt-1 text-3xl font-black tabular-nums sm:text-4xl">
                {prize.amount}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto mt-8 max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-muted mb-4 text-center text-xs font-medium tracking-widest uppercase"
          >
            Special Category Awards
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialAwards.map((award) => {
              const Icon = AWARD_ICONS[award.id] ?? ImpactIcon;
              return (
                <motion.div
                  key={award.id}
                  variants={cardVariants}
                  className="bg-surface border-border hover:border-accent/30 flex items-center gap-4 rounded-2xl border p-5 transition-colors"
                >
                  <Icon className="text-accent h-8 w-8 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-foreground text-sm font-semibold">{award.title}</p>
                  </div>
                  <p className="text-accent shrink-0 text-lg font-bold tabular-nums">
                    {award.amount}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
