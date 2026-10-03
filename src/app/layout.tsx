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
  title: {
    default: "HackNova 2027 | Hack the Hackers",
    template: "%s | HackNova 2027",
  },
  icons: {
    icon: [
      { url: "/hacknova-logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/hacknova-logo.png",
    apple: "/hacknova-logo.png",
  },
  description:
    "HackNova 2027 — Jan 10-11, 2027 at Bharati Vidyapeeth Campus, Navi Mumbai. A 36-hour hackathon bringing together passionate developers, designers, and innovators to Hack the Hackers.",
  keywords: [
    "HackNova",
    "HackNova 2027",
    "Hack the Hackers",
    "hackathon",
    "hackathon Mumbai",
    "hackathon Navi Mumbai",
    "BVDU",
    "coding hackathon",
    "tech hackathon India",
    "36 hour hackathon",
    "student hackathon",
  ],
  authors: [{ name: "HackNova" }],
  creator: "HackNova",
  openGraph: {
    title: "HackNova 2027 | Hack the Hackers",
    description:
      "HackNova 2027 — Jan 10-11, 2027 at Bharati Vidyapeeth Campus, Navi Mumbai. 36 hours of innovation, ₹1.45 Lakhs prize pool. Hack the Hackers.",
    siteName: "HackNova 2027",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HackNova 2027 — Hack the Hackers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackNova 2027 | Hack the Hackers",
    description:
      "HackNova 2027 — Jan 10-11, 2027 at Bharati Vidyapeeth Campus, Navi Mumbai. 36 hours of innovation, ₹1.45 Lakhs prize pool. Hack the Hackers.",
    images: ["/og-image.png"],
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
