import GalleryClient from "@/app/gallery/GalleryClient";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Gallery | La Macaw Resort",
  description:
    "Explore stunning photographs of La Macaw Resort, including rooms, banquets, events, and resort surroundings. Discover luxurious moments captured for our guests.",
  alternates: {
    canonical: "https://lamacawresort.com/gallery",
  },
  openGraph: {
    title: "La Macaw Resort Gallery",
    description:
      "View the beauty of La Macaw Resort through our curated gallery of rooms, banquets, events, and scenic locations.",
    url: "https://lamacawresort.com/gallery",
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

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "La Macaw Resort Gallery",
    "url": "https://lamacawresort.com/gallery",
    "description":
      "Gallery showcasing rooms, banquets, events, and resort landscapes at La Macaw Resort.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryClient />
    </>
  );
}