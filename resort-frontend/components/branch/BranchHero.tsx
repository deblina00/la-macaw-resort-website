import { Branch } from "@/types/branch";
import Image from "next/image";
import Link from "next/link";

type Props = {
  branch: Branch;
};
export default function BranchHero({ branch }: Props) {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <Image
        src={branch.heroImage}
        alt={branch.name}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative text-center max-w-2xl px-6">
        <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
          — Properties —
        </p>
        <h1 className="text-4xl md:text-5xl font-cinzel mb-6 leading-tight">
          {branch.name}
        </h1>

        <p className="text-gray-300 mb-10">{branch.description}</p>

        {/* CTA */}
        <Link href="/rooms">
          <span
            className="
                inline-block
                px-8 py-3 
                border border-resort-gold 
                text-resort-gold 
                tracking-widest text-sm
                hover:bg-resort-gold 
                hover:text-black 
                transition-all duration-300
              "
          >
            Book Your Stay
          </span>
        </Link>
      </div>
    </section>
  );
}
