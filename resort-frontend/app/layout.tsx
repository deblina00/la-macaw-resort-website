import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeaderTopBar from "@/components/HeaderTopBar";
import "./globals.css";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import Script from "next/script";
import { cn } from "@/lib/utils";
import LenisProvider from "@/components/LenisProvider";
import FloatingActions from "@/components/FloatingActions";

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

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lamacawresort.com"),

  title: {
    default: "La Macaw Resort | Luxury Resorts in West Bengal",
    template: "%s | La Macaw Resort",
  },

  description:
    "Luxury beach, forest and hill resorts located in Tajpur, Joypur and Purulia offering premium rooms, destination weddings and banquets.",

  keywords: [
    "La Macaw Resort",
    "Resort in Tajpur",
    "Resort in Joypur",
    "Resort in Purulia",
    "Beach resort West Bengal",
    "Luxury resort West Bengal",
    "Destination wedding resort Tajpur",
    "Banquet hall West Bengal",
  ],

  authors: [{ name: "La Macaw Resort" }],
  creator: "La Macaw Resort",
  publisher: "La Macaw Resort",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lamacawresort.com",
    title: "La Macaw Resort | Luxury Resorts in West Bengal",
    description:
      "Luxury stays, destination weddings, and banquets across Tajpur, Joypur and Purulia.",
    siteName: "La Macaw Resort",
    images: [
      {
        url: "/images/og-resort.jpg",
        width: 1200,
        height: 630,
        alt: "La Macaw Resort luxury stay",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "La Macaw Resort",
    description: "Luxury Resort Experiences in West Bengal",
    images: ["/images/og-resort.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "La Macaw Resort",
    url: "https://lamacawresort.com",
    logo: "https://lamacawresort.com/images/logo.png",
    image: "https://lamacawresort.com/images/og-resort.jpg",
    description:
      "Luxury resort with branches in Tajpur, Joypur and Purulia offering beach, forest and hill stays.",
    telephone: "+91-9674407000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mani Casadona",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700160",
      addressCountry: "IN",
    },
    sameAs: [
      "https://instagram.com/lamacawresort",
      "https://facebook.com/lamacawresort",
    ],
  };

  return (
    <html
      lang="en"
      className={cn(playfair.variable, inter.variable, cinzel.variable)}
    >
      <body className="bg-resort-offWhite text-resort-textDark antialiased pb-16 md:pb-0">
        <Script
          id="hotel-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <HeaderTopBar />
        <Navbar />

        <LenisProvider>{children}</LenisProvider>
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
