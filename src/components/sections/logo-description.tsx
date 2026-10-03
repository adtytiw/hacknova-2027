"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { LOGO_DESCRIPTION } from "@/lib/logo-constants";

export function LogoDescription() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="border-border hover:border-accent/50 relative overflow-hidden transition-all duration-300">
        {/* Background Video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-700 group-hover:opacity-25"
        >
          <source src="/hero-hype-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="bg-surface/80 absolute inset-0" />

        <CardContent className="relative z-10 p-6">
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 border-accent/20 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border backdrop-blur-sm">
              <Image
                src={LOGO_DESCRIPTION.imageSrc}
                alt={LOGO_DESCRIPTION.imageAlt}
                width={40}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-accent text-xs font-medium tracking-wider uppercase">
                  Our Mascot
                </span>
                <span className="text-muted/40">•</span>
                <span className="text-muted text-xs">HackNova</span>
              </div>
              <h3 className="text-foreground group-hover:text-accent text-lg font-semibold transition-colors">
                {LOGO_DESCRIPTION.title}
              </h3>
              <p className="text-muted mt-2 text-sm">{LOGO_DESCRIPTION.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
