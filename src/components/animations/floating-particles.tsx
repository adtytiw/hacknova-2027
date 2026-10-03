"use client";

import { useMemo, useSyncExternalStore } from "react";
import { motion } from "motion/react";

// Seeded random number generator for deterministic values
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

// Generate particles with fixed precision to avoid hydration mismatch
function generateParticles() {
  return Array.from({ length: 20 }).map((_, i) => {
    const seed = i + 1;
    return {
      id: i,
      x: Math.round(seededRandom(seed * 1) * 10000) / 100,
      y: Math.round(seededRandom(seed * 2) * 10000) / 100,
      size: Math.round((seededRandom(seed * 3) * 4 + 1.5) * 100) / 100,
      duration: Math.round((seededRandom(seed * 4) * 25 + 20) * 100) / 100,
      delay: Math.round(seededRandom(seed * 5) * 800) / 100,
      color:
        seededRandom(seed * 6) > 0.6 ? "rgba(192, 255, 112, 0.4)" : "rgba(250, 250, 249, 0.25)",
    };
  });
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function FloatingParticles() {
  const isClient = useIsClient();
  const particles = useMemo(() => generateParticles(), []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
