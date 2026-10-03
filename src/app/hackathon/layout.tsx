import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "HackNova 2027 Hackathon | 36-Hour Hackathon in Navi Mumbai",
  description:
    "Join the HackNova 2027 Hackathon — a 36-hour hackathon at Bharati Vidyapeeth Campus, Navi Mumbai, Jan 10-11 2027. Build innovative projects, win from a ₹1.45 Lakhs prize pool. Register now.",
  keywords: [
    "HackNova hackathon",
    "hackathon Navi Mumbai",
    "hackathon",
    "BVDU hackathon",
    "coding hackathon India",
    "tech hackathon 2027",
    "hackathon near me",
    "student hackathon India",
    "36 hour hackathon",
    "Hack the Hackers",
  ],
  openGraph: {
    title: "HackNova 2027 Hackathon | 36-Hour Hackathon in Navi Mumbai",
    description:
      "A 36-hour hackathon at Bharati Vidyapeeth Campus, Navi Mumbai. Jan 10-11, 2027. Build, compete, and win from a ₹1.45 Lakhs prize pool.",
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
    title: "HackNova 2027 Hackathon | Navi Mumbai",
    description: "36-hour hackathon at Bharati Vidyapeeth Campus. Jan 10-11, 2027. Register now.",
  },
};

const hackathonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hackathon",
  name: "HackNova 2027 Hackathon",
  description:
    "A 36-hour hackathon at Bharati Vidyapeeth Campus, Navi Mumbai. Build innovative projects, win from a ₹1.45 Lakhs prize pool. Open to developers, designers, and builders.",
  startDate: "2027-01-10T09:00:00+05:30",
  endDate: "2027-01-11T21:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Bharati Vidyapeeth Campus",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 3, Kharghar",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "410210",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "HackNova",
    url: "https://github.com/adtytiw",
  },
  image: "/og-image.png",
  url: "/hackathon",
  isAccessibleForFree: true,
  keywords:
    "hackathon, HackNova, Navi Mumbai hackathon, coding competition, student hackathon India, Hack the Hackers",
  superEvent: {
    "@type": "Event",
    name: "HackNova 2027",
    url: "/",
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
