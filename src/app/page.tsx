import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero, KeyDetailsSection } from "@/components/sections/hero";
import { PrizesSection } from "@/components/sections/prizes";
import { Countdown } from "@/components/sections/countdown";
import { AnnouncementCard } from "@/components/sections/announcement-card";
import { EligibilitySection } from "@/components/sections/eligibility";
import { RulesSection } from "@/components/sections/rules";
import { FAQSection } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "HackNova 2027",
  description:
    "A 36-hour national-level hackathon hosted by Bharati Vidyapeeth (Deemed to be University), Department of Management Studies, Navi Mumbai. Theme: Hack the Hackers.",
  startDate: "2027-02-06T08:00:00+05:30",
  endDate: "2027-02-07T18:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Bharati Vidyapeeth (Deemed to be University), Department of Management Studies",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. KC1, Sector 3, Kharghar",
      addressLocality: "Navi Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "410210",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Bharati Vidyapeeth (Deemed to be University), Department of Management Studies",
    url: "https://www.bvduhacknova.in",
  },
  image: "/og-image.png",
  url: "/",
  keywords:
    "HackNova, hackathon, Hack the Hackers, coding hackathon, Navi Mumbai, BVDU",
  isAccessibleForFree: false,
  offers: {
    "@type": "Offer",
    price: "1000",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://unstop.com/o/DvVI6SX?lb=oOvtANg1",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HackNova",
  url: "https://www.bvduhacknova.in",
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
      <PrizesSection />
      <section className="bg-surface/50 pb-10 lg:pb-0">
        <div className="mx-auto grid max-w-6xl min-w-0 items-center gap-6 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Countdown />
          <AnnouncementCard />
        </div>
      </section>
      <EligibilitySection />
      <RulesSection />
      <FAQSection />
      {/*
        TEMPLATE LIBRARY — intentionally not imported.
        Reusable references live in src/components:
        bvdu-home, bvdu-home-top, hero, inspiration-home-hero, tba-hero,
        article-card, bitdevs-card, blog-preview, home-blog-preview,
        home-livestream-preview, home-sponsors, logo-description,
        speaker-card, speaker-strip, floating-socials, ticket-notice,
        ui/table, logo-constants, sponsors-constants, speakers-constants.
        Legacy event data: src/data/hackathon.ts.
      */}
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
