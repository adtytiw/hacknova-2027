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
    "A 36-hour national-level hackathon at Bharati Vidyapeeth Campus, Navi Mumbai. Theme: Hack the Hackers.",
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
  url: "/",
  keywords:
    "HackNova, hackathon, Hack the Hackers, coding hackathon, Navi Mumbai, BVDU",
  subEvent: {
    "@type": "Hackathon",
    name: "HackNova 2027 Hackathon",
    description:
      "A 36-hour hackathon at Bharati Vidyapeeth Campus. Build innovative projects, win from a ₹1.45 Lakhs prize pool.",
    startDate: "2027-01-10T09:00:00+05:30",
    endDate: "2027-01-11T21:00:00+05:30",
    url: "/hackathon",
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
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HackNova",
  url: "https://github.com/adtytiw",
  logo: "/hacknova-logo.png",
  sameAs: [],
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
