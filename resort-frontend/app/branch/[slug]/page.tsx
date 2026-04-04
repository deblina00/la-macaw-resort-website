import { branches } from "@/data/branches";
import BranchHero from "@/components/branch/BranchHero";
import BranchAmenities from "@/components/branch/BranchAmenities";
import BranchAbout from "@/components/branch/BranchAbout";
import BranchRooms from "@/components/branch/BranchRooms";
import BranchBanquet from "@/components/branch/BranchBanquet";
import BranchFAQ from "@/components/branch/BranchFAQ";
import BranchLocation from "@/components/branch/BranchLocation";
import BranchExplore from "@/components/branch/BranchExplore";
import { Metadata } from "next";

// type Props = {
//   params: {
//     slug: keyof typeof branches;
//   };
// };

type Props = {
  params: Promise<{
    slug: keyof typeof branches;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // const branch = branches[params.slug];

  const { slug } = await params; // ✅ FIX
  const branch = branches[slug];

  if (!branch) {
    // Return default metadata for unknown branch
    return {
      title: "Branch Not Found | La Macaw Resort",
      description: "Explore our luxury resorts across West Bengal.",
      alternates: {
        canonical: `https://lamacawresort.com/branch`,
      },
    };
  }

  // 🔥 Dynamic SEO Description
  const dynamicDescription = `${branch.name} is a premium ${
    slug === "tajpur"
      ? "beach resort in Tajpur near the sea"
      : slug === "joypur"
        ? "eco resort near Joypur forest in Bankura"
        : "luxury resort in Purulia near Ayodhya Hills"
  }. Enjoy luxury rooms, nature views, fine dining and relaxing stays in West Bengal. Ideal for weekend getaways from Kolkata.`;

  return {
    title: `${branch.name} | Luxury Resort in West Bengal`,
    description: dynamicDescription,

    keywords: [
      "Luxury resort in West Bengal",
      "Best resort near Kolkata",
      "La Macaw Resort",
      "Resort in Tajpur",
      "Resort in Joypur forest",
      "Resort in Purulia",
      "Eco resort in Bankura",
      "Beach resort Tajpur West Bengal",
      "Resort near Ayodhya Hills Purulia",
      "Weekend getaway from Kolkata",
      "Family resort West Bengal",
      "Couple friendly resort West Bengal",
    ],

    alternates: {
      canonical: `https://lamacawresort.com/branch/${slug}`,
    },
    openGraph: {
      title: `${branch.name} | Luxury Resort in West Bengal`,
      description: branch.description,
      url: `https://lamacawresort.com/branch/${slug}`,
      siteName: "La Macaw Resort",
      images: branch.heroImage
        ? [
            {
              url: branch.heroImage,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${branch.name} | Luxury Resort`,
      description: dynamicDescription,
      images: branch.heroImage ? [branch.heroImage] : [],
    },
  };
}
export function generateStaticParams() {
  return Object.keys(branches).map((slug) => ({ slug }));
}

export default async function BranchPage({ params }: Props) {
  const { slug } = await params;
  const branch = branches[slug];

  if (!branch) return <p>Branch not found</p>;

  return (
    <>
      {/* ✅ SEO SCHEMA (Structured Data) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            name: branch.name,
            description: branch.description,
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
              addressCountry: "India",
            },
            image: branch.heroImage,
            url: `https://lamacawresort.com/branch/${slug}`,
          }),
        }}
      />
      <main>
        <BranchHero branch={branch} />

        <BranchAmenities amenities={branch.amenities} />

        <BranchAbout about={branch.about} />

        <BranchRooms branchId={branch.branchId} />

        <BranchBanquet branchId={branch.branchId} />

        <BranchExplore currentSlug={slug} />

        <BranchFAQ faq={branch.faq} images={branch.faqImages} />

        <BranchLocation location={branch.location} />
      </main>
    </>
  );
}
