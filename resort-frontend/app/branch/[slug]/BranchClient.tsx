"use client";

import BranchAbout from "@/components/branch/BranchAbout";
import BranchAmenities from "@/components/branch/BranchAmenities";
import BranchBanquet from "@/components/branch/BranchBanquet";
import BranchExplore from "@/components/branch/BranchExplore";
import BranchFAQ from "@/components/branch/BranchFAQ";
import BranchHero from "@/components/branch/BranchHero";
import BranchLocation from "@/components/branch/BranchLocation";
import BranchRooms from "@/components/branch/BranchRooms";
import { branches } from "@/data/branches";

type Props = {
  slug: keyof typeof branches;
};

export default function BranchClient({ slug }: Props) {
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
