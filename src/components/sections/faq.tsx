"use client";

import { motion, type Variants } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq_data";

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
                  className="bg-surface border-border data-[state=open]:border-accent/30 rounded-xl border px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted">
                    {item.answer}
                    {item.link && (
                      <>
                        {" "}
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          {item.link.label}
                        </a>
                      </>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
