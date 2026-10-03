import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Meet the sponsors supporting HackNova 2027. Organizations backing the premier Bitcoin conference and hackathon in Boston.",
  alternates: {
    canonical: "https://mitbitcoinexpo.org/sponsors",
  },
};

export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
