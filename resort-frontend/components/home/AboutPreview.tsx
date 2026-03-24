import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#0b0909] text-white py-24" id="about">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 lg:grid-rows-[auto_1fr] gap-12 items-start">
        {/* LEFT IMAGE (spans full height) */}
        <div className="relative h-[600px] overflow-hidden lg:row-span-2">
          <Image
            src="/about1.jpeg"
            alt="Luxury pool at La Macaw Resort"
            fill
            className="object-cover"
          />
        </div>

        {/* ABOUT LABEL */}
        <div className="col-span-2">
          <p className="uppercase tracking-[0.25em] text-sm text-gray-400 mb-4">
            — ABOUT US —
          </p>

          {/* BIG HEADING (spans right side) */}

          <h2 className="text-4xl lg:text-5xl font-cinzel tracking-[0.08em] leading-tight">
            WELCOME TO LA MACAW RESORT, YOUR PERFECT NATURE RETREATE.
          </h2>
        </div>

        {/* CENTER CONTENT */}
        <div>
          <p className="text-gray-300 mb-8 leading-relaxed">
            La Macaw Resort spreads across 56,000 sq ft and sits just walking
            distance from the beach and the scenic Marine Drive Road. Our resort
            combines nature, comfort and luxury for a truly relaxing stay
            experience.
          </p>

          <ul className="space-y-3 text-gray-300 mb-10">
            <li>✦ Luxury air-conditioned rooms</li>
            <li>✦ Private balcony with nature views</li>
            <li>✦ Swimming pool & modern amenities</li>
            <li>✦ Ideal destination for events & vacations</li>
          </ul>

          <Link href="/rooms">
            <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition">
              {/* shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 blur-md" />

              {/* text */}
              <span className="relative z-10 group-hover:text-black transition duration-300">
                VIEW DETAILS
              </span>

              {/* fill animation */}
              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/about2.jpeg"
            alt="Swimming pool area of La Macaw Resort"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
