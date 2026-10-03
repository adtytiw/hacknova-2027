import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Meet the sponsors supporting HackNova 2027 — the 36-hour hackathon at Bharati Vidyapeeth Campus, Navi Mumbai.",
};

export default function SponsorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
