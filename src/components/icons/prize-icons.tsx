import type { MainPrize } from "@/data/prizes";

export const MEDAL_COLORS: Record<MainPrize["medal"], { light: string; dark: string }> = {
  gold: { light: "#FDE68A", dark: "#B45309" },
  silver: { light: "#F1F5F9", dark: "#64748B" },
};

export function ImpactIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 18.6C9.7 16.8 4.4 13.3 4.4 9.4c0-2.3 1.8-4 4-4 1.4 0 2.5.6 3.6 1.9 1.1-1.3 2.2-1.9 3.6-1.9 2.2 0 4 1.7 4 4 0 3.9-5.3 7.4-7.6 9.2z" />
      <path d="M4.6 19.4c2 1.3 4.6 1.9 7.4 1.9s5.4-.6 7.4-1.9" />
    </svg>
  );
}

export function DesignIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3.5 6.4 9.2 12 20.5l5.6-11.3z" />
      <path d="M12 15.2v5.3" />
      <circle cx="12" cy="12.6" r="1.5" />
    </svg>
  );
}

export function TrophyIcon({ medal, className }: { medal: MainPrize["medal"]; className?: string }) {
  const { light, dark } = MEDAL_COLORS[medal];
  const gradientId = `trophy-${medal}`;

  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient
          id={gradientId}
          x1="32"
          y1="4"
          x2="32"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={light} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
      </defs>

      {/* Handles */}
      <path
        d="M18 11H11a8 8 0 0 0 0 16h9"
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M46 11h7a8 8 0 0 1 0 16h-9"
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Cup */}
      <path d="M18 6h28v14a14 14 0 0 1-28 0V6z" fill={`url(#${gradientId})`} />

      {/* Stem */}
      <path d="M29 20h6v20h-6z" fill={`url(#${gradientId})`} />

      {/* Base */}
      <path d="M22 40h20a3 3 0 0 1 3 3v3H19v-3a3 3 0 0 1 3-3z" fill={`url(#${gradientId})`} />
      <path d="M15 48h34a2 2 0 0 1 2 2v4H13v-4a2 2 0 0 1 2-2z" fill={`url(#${gradientId})`} />
    </svg>
  );
}
