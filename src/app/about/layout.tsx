import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "HackNova is a national-level hackathon bringing together innovators from across India to solve real-world problems in AI, Web3, IoT, HealthTech, Environmental Innovation and more.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
