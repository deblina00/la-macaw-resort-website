import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderTopBar from "@/components/HeaderTopBar";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { cn } from "@/lib/utils";
import LenisProvider from "@/components/LenisProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F3D2E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lamacawresort.com"),

  title: {
    default: "La Macaw Resort | Luxury Resort in West Bengal",
    template: "%s | La Macaw Resort",
  },

  description:
    "Experience luxury stays, banquets, destination weddings and beachside relaxation at La Macaw Resort. Locations in Tajpur, Joypur and Purulia.",

  keywords: [
    "La Macaw Resort",
    "resort in Tajpur",
    "resort in Joypur",
    "resort in Purulia",
    "luxury resort West Bengal",
    "beach resort Tajpur",
    "destination wedding resort West Bengal",
    "banquet hall Tajpur",
  ],

  alternates: {
    canonical: "https://lamacawresort.com",
  },

  openGraph: {
    title: "La Macaw Resort",
    description:
      "Luxury resort offering premium stays, weddings, banquets and beach experiences in West Bengal.",
    url: "https://lamacawresort.com",
    siteName: "La Macaw Resort",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-resort.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury stay at La Macaw Resort",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "La Macaw Resort",
    description: "Luxury Resort in West Bengal",
    images: ["/images/og-resort.jpg"],
  },

  verification: {
    google: "google-site-verification-code",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    name: "La Macaw Resort",
    url: "https://lamacawresort.com",
    logo: "https://lamacawresort.com/images/logo.png",
    description:
      "Luxury resort with premium rooms, destination weddings, banquets and events in Tajpur, Joypur and Purulia.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "West Bengal",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Swimming Pool" },
      { "@type": "LocationFeatureSpecification", name: "Luxury Rooms" },
      { "@type": "LocationFeatureSpecification", name: "Banquet Hall" },
      { "@type": "LocationFeatureSpecification", name: "Event Hosting" },
    ],
  };

  return (
    <html lang="en" className={cn(playfair.variable, inter.variable)}>
      <body className="bg-resort-bg text-resort-text antialiased">
        <Script
          id="hotel-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <HeaderTopBar />
        <Navbar />

        {/* <main className="min-h-screen">{children}</main> */}
        <LenisProvider>{children}</LenisProvider>

        <Footer />
      </body>
    </html>
  );
}
