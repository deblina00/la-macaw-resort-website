import { Branch } from "@/types/branch";
import Image from "next/image";
import Link from "next/link";

type Props = {
  branch: Branch;
};
export default function BranchHero({ branch }: Props) {
  return (
    <section className="relative h-[420px] flex items-center justify-center text-white">
      <Image
        src={branch.heroImage}
        alt={branch.name}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center max-w-2xl">
        <h1 className="text-5xl font-semibold mb-4">{branch.name}</h1>

        <p className="text-lg">{branch.description}</p>

        <Link
          href="/rooms"
          className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg"
        >
          Book Your Stay
        </Link>
      </div>
    </section>
  );
}
