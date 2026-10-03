import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { TicketNoticeWrapper } from "@/components/layout/ticket-notice-wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mitbitcoinexpo.org"),
  title: {
    default: "HackNova 2027 | Freedom for All",
    template: "%s | HackNova 2027",
  },
  description:
    "HackNova 2027 — April 11-12 at MIT Campus, Cambridge, MA. The premier Bitcoin conference and hackathon in Boston featuring talks, workshops, and a 36-hour Bitcoin hackathon with prizes.",
  keywords: [
    "HackNova",
    "Bitcoin hackathon",
    "hackathon Boston",
    "Bitcoin conference",
    "blockchain hackathon",
    "crypto hackathon Boston",
    "MIT hackathon 2026",
    "Bitcoin event Boston",
    "cryptocurrency conference",
    "blockchain conference MIT",
    "hackathon",
    "Boston hackathon",
    "Bitcoin",
    "blockchain",
    "cryptocurrency",
  ],
  authors: [{ name: "HackNova" }],
  creator: "HackNova",
  openGraph: {
    title: "HackNova 2027 | Freedom for All",
    description:
      "The premier Bitcoin conference and hackathon in Boston. April 11-12, 2026 at MIT Campus. Talks, workshops, and a 36-hour hackathon.",
    url: "https://mitbitcoinexpo.org",
    siteName: "HackNova 2027",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HackNova 2027 — Freedom for All",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackNova 2027 | Freedom for All",
    description:
      "The premier Bitcoin conference and hackathon in Boston. April 11-12, 2026 at MIT Campus.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mitbitcoinexpo.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        {children}
        {/* Demo use case: restore FloatingSocials when social links belong in the global shell. */}
        {/* <FloatingSocials /> */}
        <TicketNoticeWrapper />
        <Analytics />
      </body>
    </html>
  );
}
