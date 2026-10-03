"use client";

import { LazyStarsBackground } from "@/components/3d/lazy-stars";
import { FloatingParticles } from "@/components/animations/floating-particles";

export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 3D Stars Background */}
      <LazyStarsBackground />

      {/* Floating particles overlay */}
      <FloatingParticles />

      {/* Radial glow */}
      <div className="bg-accent/[0.03] absolute top-1/3 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]" />
    </div>
  );
}
