import { Metadata } from "next";
import EventsClient from "@/app/events/EventClient";

export const metadata: Metadata = {
  title: "Events & Celebrations | La Macaw Resort",
  description:
    "Celebrate weddings, anniversaries, corporate events, and memorable moments at La Macaw Resort. Luxurious venues and exceptional hospitality await.",
  alternates: {
    canonical: "https://lamacawresort.com/events",
  },
  openGraph: {
    title: "Events & Celebrations at La Macaw Resort",
    description:
      "Plan unforgettable weddings, anniversaries, corporate gatherings, and special occasions at La Macaw Resort.",
    url: "https://lamacawresort.com/events",
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

export default function EventsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Events at La Macaw Resort",
    url: "https://lamacawresort.com/events",
    description:
      "Host weddings, corporate events, and celebrations in the luxurious surroundings of La Macaw Resort.",
    organizer: {
      "@type": "Organization",
      name: "La Macaw Resort",
      url: "https://lamacawresort.com",
    },
    location: {
      "@type": "Place",
      name: "La Macaw Resort",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Mani Casadona, West Block. Unit No - 2WS5A, 2nd Floor, Action Area II F",
        addressLocality: "Newtown",
        addressRegion: "Kolkata",
        postalCode: "700160",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventsClient />
    </>
  );
}
