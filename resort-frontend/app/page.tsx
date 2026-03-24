import type { Metadata } from "next";

import HeroSection from "@/components/Hero/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
// import OffersBanner from "@/components/home/OffersBanner";
import BranchShowcase from "@/components/home/BranchShowcase";
import ServicesOverview from "@/components/home/ServicesOverview";
import ResortStats from "@/components/home/ResortStats";
import EventsShowcase from "@/components/home/EventsShowcase";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import GalleryPreview from "@/components/home/GalleryPreview";
import BookNowBanner from "@/components/home/BookNowBanner";
import OfferPopup from "@/components/offer/OfferPopup";

export const metadata: Metadata = {
  title: "Luxury Resort in Tajpur, Joypur & Purulia",
  description:
    "Experience luxury stays, destination weddings, beach vacations and banquets at La Macaw Resort in Tajpur, Joypur and Purulia.",
};

export default function Home() {
  return (
    <main>
      <OfferPopup />
      <HeroSection />
      <AboutPreview />
      {/* <OffersBanner /> */}
      <BranchShowcase />
      <ServicesOverview />
      <ResortStats />
      <EventsShowcase />
      <ReviewsCarousel />
      <GalleryPreview />
      <BookNowBanner />
    </main>
  );
}
