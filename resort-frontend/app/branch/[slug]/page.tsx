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

type Props = {
  params: {
    slug: keyof typeof branches;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const branch = branches[params.slug];

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

  return {
    title: `${branch.name} | Luxury Resort in West Bengal`,
    description: branch.description,
    alternates: {
      canonical: `https://lamacawresort.com/branch/${params.slug}`,
    },
    openGraph: {
      title: `${branch.name} | Luxury Resort in West Bengal`,
      description: branch.description,
      url: `https://lamacawresort.com/branch/${params.slug}`,
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
  );
}
