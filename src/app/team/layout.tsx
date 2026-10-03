import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the organizing team behind HackNova 2027 — the 36-hour hackathon at Bharati Vidyapeeth Campus, Navi Mumbai.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
