import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Problem Statements",
  description:
    "Explore the six HackNova 2027 challenge tracks — GreenTech, HealthTech, ResQTech, TrustAI, SmartReach and Open Innovation — with specific problem statements for each.",
};

export default function ProblemStatementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
