import BanquetsClient from "@/app/banquets/BanquetClient";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Banquets & Celebrations | La Macaw Resort",
  description:
    "Host weddings, corporate events, and grand celebrations at La Macaw Resort. Luxurious banquet halls and exceptional hospitality await.",
  alternates: {
    canonical: "https://lamacawresort.com/banquets",
  },
  openGraph: {
    title: "Banquets & Grand Celebrations at La Macaw Resort",
    description:
      "Plan unforgettable weddings, corporate gatherings, and special events at La Macaw Resort.",
    url: "https://lamacawresort.com/banquets",
    siteName: "La Macaw Resort",
    images: [
      {
        url: "/gallery-hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function BanquetsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "La Macaw Resort Banquet Halls",
    "url": "https://lamacawresort.com/banquets",
    "description":
      "Elegant banquet halls for weddings, corporate events, and grand celebrations at La Macaw Resort.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mani Casadona, West Block. Unit No - 2WS5A, 2nd Floor, Action Area II F",
      "addressLocality": "Newtown",
      "addressRegion": "Kolkata",
      "postalCode": "700160",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BanquetsClient />
    </>
  );
}