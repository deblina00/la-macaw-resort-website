import RoomsClient from "@/app/rooms/RoomsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Resort Rooms in West Bengal | La Macaw Resort",
  description:
    "Explore luxury resort rooms at La Macaw Resort across Tajpur, Joypur and Purulia. Premium accommodation with modern amenities and scenic surroundings.",
  alternates: {
    canonical: "https://lamacawresort.com/rooms",
  },
  openGraph: {
    title: "Luxury Resort Rooms | La Macaw Resort",
    description: "Discover premium resort rooms in Tajpur, Joypur and Purulia.",
    url: "https://lamacawresort.com/rooms",
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

export default function RoomsPage() {
  return <RoomsClient />;
}
