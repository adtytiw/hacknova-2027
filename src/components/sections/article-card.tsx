"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BitDevsCard } from "./bitdevs-card";
import { LogoDescription } from "./logo-description";

function ArticleCardItem({
  href,
  category,
  source,
  title,
  description,
  icon,
  index,
}: {
  href: string;
  category: string;
  source: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        <Card className="bg-surface border-border hover:border-accent/50 overflow-hidden transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 border-accent/20 group-hover:bg-accent/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors">
                {icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-accent text-xs font-medium tracking-wider uppercase">
                    {category}
                  </span>
                  <span className="text-muted/40">•</span>
                  <span className="text-muted text-xs">{source}</span>
                </div>
                <h3 className="text-foreground group-hover:text-accent line-clamp-2 text-lg font-semibold transition-colors">
                  {title}
                </h3>
                <p className="text-muted mt-2 line-clamp-2 text-sm">{description}</p>
              </div>
              <div className="bg-border/50 group-hover:bg-accent group-hover:text-accent-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export function ArticleCard() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl space-y-4">
        <BitDevsCard />
        <LogoDescription />
        <ArticleCardItem
          href="https://medium.com/mitbitcoinclub/mit-bitcoin-expo-2026-freedom-for-all-1ea60d941bfc"
          category="Announcement"
          source="Medium"
          title="HackNova 2027: Freedom for All"
          description="Learn more about the theme, vision, and what to expect at HackNova 2027."
          index={1}
          icon={
            <svg className="text-accent h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
