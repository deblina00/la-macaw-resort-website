import B2BClient from "@/app/b2b/B2BClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Partnerships | La Macaw Resort",
  description:
    "Partner with La Macaw Resort for premium travel experiences, corporate retreats, and exclusive B2B hospitality packages.",
  alternates: {
    canonical: "https://lamacawresort.com/b2b",
  },
  openGraph: {
    title: "B2B Partnerships at La Macaw Resort",
    description:
      "Join hands with La Macaw Resort for exclusive B2B collaboration opportunities.",
    url: "https://lamacawresort.com/b2b",
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

export default function B2BPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "La Macaw Resort",
    url: "https://lamacawresort.com",
    logo: "https://lamacawresort.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 90519 50030",
      contactType: "B2B Partnership",
      email: "sales.lmc2018@gmail.com",
    },
    sameAs: [
      "https://www.instagram.com/lamacawresort",
      "https://www.facebook.com/lamacawresort",
      "https://www.youtube.com/@lamacawresort",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <B2BClient />
    </>
  );
}
