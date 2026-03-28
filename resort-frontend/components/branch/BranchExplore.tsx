import Image from "next/image";
import Link from "next/link";
import { branches } from "@/data/branches";

type Props = {
  currentSlug: string;
};

export default function BranchExplore({ currentSlug }: Props) {

  return (
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="tracking-[0.3em] text-resort-gold text-sm mb-3">
           — DISCOVER MORE —
          </p>

          <h2 className="text-4xl font-cinzel">
            EXPLORE OTHER DESTINATIONS
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Experience the charm of our other luxury resort destinations,
            each offering unique landscapes, serene escapes and
            unforgettable hospitality.
          </p>

        </div>

        {/* DESTINATIONS */}
        <div className="grid md:grid-cols-2 gap-10">

          {Object.entries(branches)
            .filter(([key]) => key !== currentSlug)
            .map(([key, branch]) => (

              <Link key={key} href={`/branch/${key}`}>

                <div className="relative h-[380px] overflow-hidden group cursor-pointer">

                  {/* IMAGE */}
                  <Image
                    src={branch.heroImage}
                    alt={branch.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* TEXT */}
                  <div className="absolute bottom-8 left-8">

                    <h3 className="text-3xl font-cinzel mb-2">
                      {branch.name}
                    </h3>

                    <span className="text-sm tracking-wider text-gray-300 group-hover:text-resort-gold transition">
                      Explore Destination →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

        </div>

      </div>

    </section>
  );
}