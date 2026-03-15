import { branches } from "@/data/branches";

import BranchHero from "@/components/branch/BranchHero";
import BranchAmenities from "@/components/branch/BranchAmenities";
import BranchAbout from "@/components/branch/BranchAbout";
import BranchRooms from "@/components/branch/BranchRooms";
import BranchBanquet from "@/components/branch/BranchBanquet";
import BranchFAQ from "@/components/branch/BranchFAQ";
import BranchLocation from "@/components/branch/BranchLocation";
import BranchExplore from "@/components/branch/BranchExplore";

type Params = Promise<{
  slug: keyof typeof branches;
}>;

type Props = {
  params: Params;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const branch = branches[slug];

  return {
    title: `${branch.name} | Luxury Resort in West Bengal`,
    description: branch.description
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

      <BranchFAQ faq={branch.faq} />

      <BranchLocation location={branch.location} />

    </main>
  );
}