import HeroSection from "@/components/Hero/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import OffersBanner from "@/components/home/OffersBanner";
import BranchShowcase from "@/components/home/BranchShowcase";
import ServicesOverview from "@/components/home/ServicesOverview";
import ResortStats from "@/components/home/ResortStats";
import EventsShowcase from "@/components/home/EventsShowcase";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import GalleryPreview from "@/components/home/GalleryPreview";
import BookNowBanner from "@/components/home/BookNowBanner";

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            name: "La Macaw Resort",
            url: "https://lamacawresort.com",
            logo: "https://lamacawresort.com/logo.png",
            description:
              "Luxury resort with branches in Tajpur, Joypur and Purulia offering rooms, events, banquets and beach stays.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressRegion: "West Bengal",
            },
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Swimming Pool",
              },
              { "@type": "LocationFeatureSpecification", name: "Banquet Hall" },
              { "@type": "LocationFeatureSpecification", name: "Beach Access" },
            ],
          }),
        }}
      />

      <HeroSection />

      <AboutPreview />

      <OffersBanner />

      <BranchShowcase />

      <ServicesOverview />

      <ResortStats />

      <EventsShowcase />

      <ReviewsCarousel />

      <GalleryPreview />

      <BookNowBanner />
    </div>
  );
}
