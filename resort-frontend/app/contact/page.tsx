import ContactClient from "@/app/contact/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact La Macaw Resort | Book Your Stay",
  description:
    "Contact La Macaw Resort for room bookings, destination weddings, events, and corporate retreats in Tajpur, Joypur, and Purulia.",
  alternates: {
    canonical: "https://lamacawresort.com/contact",
  },
  openGraph: {
    title: "Contact La Macaw Resort",
    description:
      "Reach out to La Macaw Resort for room reservations and event enquiries.",
    url: "https://lamacawresort.com/contact",
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

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "La Macaw Resort",
    "image": "https://lamacawresort.com/gallery-hero.jpg",
    "@id": "https://lamacawresort.com/#business",
    "url": "https://lamacawresort.com",
    "telephone": "+91 96744 07000",
    "email": "lamacawresort@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mani Casadona, West Block. Unit No - 2WS5A, 2nd Floor, Action Area II F",
      "addressLocality": "Newtown",
      "addressRegion": "Kolkata",
      "postalCode": "700160",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/lamacawresort",
      "https://www.facebook.com/lamacawresort",
      "https://www.youtube.com/@lamacawresort"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
