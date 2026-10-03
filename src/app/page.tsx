import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero, KeyDetailsSection } from "@/components/sections/hero";
import { Countdown } from "@/components/sections/countdown";
import { AnnouncementCard } from "@/components/sections/announcement-card";
import { FAQSection } from "@/app/hackathon/page";
import { JsonLd } from "@/components/seo/json-ld";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "HackNova 2027",
  description:
    "The premier Bitcoin conference and hackathon in Boston. Featuring talks, workshops, and a 36-hour Bitcoin hackathon with prizes. Theme: Freedom for All.",
  startDate: "2026-04-11T09:00:00-04:00",
  endDate: "2026-04-12T18:00:00-04:00",
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
  url: "https://mitbitcoinexpo.org",
  keywords:
    "Bitcoin, hackathon, Boston hackathon, Bitcoin hackathon, blockchain, cryptocurrency, MIT, conference",
  subEvent: {
    "@type": "Hackathon",
    name: "HackNova 2027 Hackathon",
    description:
      "A 36-hour Bitcoin hackathon at MIT. Build innovative projects in Bitcoin, blockchain, and cryptocurrency. Open to developers, designers, and builders.",
    startDate: "2026-04-10T18:00:00-04:00",
    endDate: "2026-04-12T12:00:00-04:00",
    url: "https://mitbitcoinexpo.org/hackathon",
    location: {
      "@type": "Place",
      name: "MIT Campus",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cambridge",
        addressRegion: "MA",
        addressCountry: "US",
      },
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HackNova",
  url: "https://mitbitcoinexpo.org",
  logo: "https://mitbitcoinexpo.org/greenLogo.webp",
  sameAs: [
    "https://x.com/MITBitcoinClub",
    "https://www.linkedin.com/company/mitbitcoinclub/",
    "https://www.youtube.com/@MITBitcoinClub",
  ],
};

export default function Home() {
  return (
    <main className="relative">
      <JsonLd data={eventJsonLd} />
      <JsonLd data={orgJsonLd} />
      <Navbar />
      <Hero />
      <KeyDetailsSection />
      <section className="bg-surface/50 pb-10 lg:pb-0">
        <div className="mx-auto grid max-w-6xl min-w-0 items-center gap-6 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Countdown />
          <AnnouncementCard />
        </div>
      </section>
      <FAQSection />
      {/* Demo use case: restore the homepage livestream preview here. */}
      {/* <HomeLivestreamPreview /> */}
      {/* Demo use case: restore featured speakers here when the homepage needs them. */}
      {/* <SpeakerStrip /> */}
      {/* Demo use case: restore the sponsors grid here when homepage sponsor slots are ready. */}
      {/* <HomeSponsors /> */}
      {/* Demo use case: restore the blog preview when homepage editorial content is ready. */}
      {/* <HomeBlogPreview /> */}
      {/* Demo use case: restore the Event and Our Mascot cards alongside the announcement later. */}
      {/* <ArticleCard /> */}
      <Footer />
    </main>
  );
}
