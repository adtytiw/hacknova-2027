"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { patrons, type Patron } from "@/data/patrons";

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

export function SectionHeader({
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
        <Badge variant="outline" className="border-accent/30 bg-accent/10 text-accent mb-4">
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

export function PatronCard({ patron, circular = false }: { patron: Patron; circular?: boolean }) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "group rounded-2xl border bg-gradient-to-br p-4 text-center transition-all duration-300 hover:-translate-y-1",
        patron.color,
        patron.borderColor
      )}
    >
      <div
        className={cn(
          "border-border/50 relative mx-auto aspect-square w-full max-w-[150px] overflow-hidden border",
          circular ? "rounded-full" : "rounded-xl"
        )}
      >
        <Image
          src={patron.image}
          alt={patron.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            circular ? "object-center" : "object-top"
          )}
        />
      </div>
      <h3 className="text-foreground mt-4 text-base font-semibold sm:text-lg">{patron.name}</h3>
      <p className="text-accent mt-1 text-sm font-medium">{patron.title}</p>
      {patron.details?.map((line) => (
        <p key={line} className="text-muted mt-1 text-xs leading-relaxed">
          {line}
        </p>
      ))}
      <p className="text-muted mt-1 text-xs leading-relaxed">{patron.organization}</p>
    </motion.div>
  );
}

export function Patrons() {
  return (
    <section className="relative z-10 px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          badge="Patrons"
          title="Our Patrons"
          description="The leadership of Bharati Vidyapeeth (Deemed to be University) guiding and supporting HackNova 2027."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {patrons.map((patron) => (
            <PatronCard key={patron.id} patron={patron} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
