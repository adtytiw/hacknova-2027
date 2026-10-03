import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Bitcoin Hackathon 2026 at MIT | 36-Hour Hackathon in Boston",
  description:
    "Join the HackNova 2027 Hackathon — a 36-hour Bitcoin and blockchain hackathon in Boston, April 10-12 at MIT Campus. Build innovative projects, win prizes, and connect with the Bitcoin community. Apply now.",
  keywords: [
    "Bitcoin hackathon",
    "hackathon Boston",
    "hackathon",
    "MIT hackathon",
    "blockchain hackathon",
    "crypto hackathon",
    "Bitcoin hackathon 2026",
    "Boston hackathon 2026",
    "hackathon near me",
    "coding hackathon Boston",
    "cryptocurrency hackathon",
    "Bitcoin developer event",
    "36 hour hackathon",
  ],
  openGraph: {
    title: "Bitcoin Hackathon 2026 at MIT | 36-Hour Hackathon in Boston",
    description:
      "A 36-hour Bitcoin and blockchain hackathon at MIT Campus, Boston. April 10-12, 2026. Build, compete, and win prizes.",
    url: "https://mitbitcoinexpo.org/hackathon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HackNova 2027 Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Hackathon 2026 at MIT | Boston",
    description: "36-hour Bitcoin hackathon at MIT. April 10-12, 2026. Apply now.",
  },
  alternates: {
    canonical: "https://mitbitcoinexpo.org/hackathon",
  },
};

const hackathonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hackathon",
  name: "HackNova 2027 Hackathon",
  description:
    "A 36-hour Bitcoin and blockchain hackathon at MIT Campus in Boston. Build innovative projects in Bitcoin, blockchain, and cryptocurrency. Open to developers, designers, and builders worldwide.",
  startDate: "2026-04-10T18:00:00-04:00",
  endDate: "2026-04-12T12:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "MIT Campus",
    address: {
      "@type": "PostalAddress",
      streetAddress: "77 Massachusetts Ave",
      addressLocality: "Cambridge",
      addressRegion: "MA",
      postalCode: "02139",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "HackNova",
    url: "https://mitbitcoinexpo.org",
  },
  image: "https://mitbitcoinexpo.org/og-image.png",
  url: "https://mitbitcoinexpo.org/hackathon",
  isAccessibleForFree: true,
  keywords:
    "hackathon, Bitcoin hackathon, Boston hackathon, blockchain hackathon, crypto hackathon, MIT hackathon, coding competition",
  superEvent: {
    "@type": "Event",
    name: "HackNova 2027",
    url: "https://mitbitcoinexpo.org",
  },
};

export default function HackathonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={hackathonJsonLd} />
      {children}
    </>
  );
}
