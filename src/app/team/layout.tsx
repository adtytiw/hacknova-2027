import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the organizing team behind HackNova 2027. Students and professionals building the premier Bitcoin conference and hackathon in Boston.",
  alternates: {
    canonical: "https://mitbitcoinexpo.org/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
