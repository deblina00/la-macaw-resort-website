import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-resort-black text-white py-20" id="about">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 lg:grid-rows-[auto_1fr] gap-12 items-start">
        {/* LEFT IMAGE (spans full height) */}
        <div className="relative h-[545px] overflow-hidden lg:row-span-2">
          <Image
            src="/about1.jpeg"
            alt="Luxury pool at La Macaw Resort"
            fill
            className="object-cover scale-105 group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* ABOUT LABEL */}
        <div className="col-span-2">
          <p className="uppercase tracking-[0.25em] text-xs text-resort-gold mb-4">
            — ABOUT US —
          </p>

          {/* BIG HEADING (spans right side) */}

          <h2 className="text-3xl lg:text-4xl font-cinzel tracking-[0.08em] leading-tight">
            WELCOME TO LA MACAW RESORT, YOUR PERFECT NATURE RETREATE.
          </h2>
        </div>

        {/* CENTER CONTENT */}
        <div>
          <p className="text-gray-300 mb-10 leading-relaxed">
            La Macaw Resort spreads across 56,000 sq ft and sits just walking
            distance from the beach and the scenic Marine Drive Road. Our resort
            combines nature, comfort and luxury for a truly relaxing stay
            experience.
          </p>

          <ul className="space-y-3 text-gray-300 mb-16">
            <li className="flex items-center gap-3">
              <span className="text-resort-gold">✦</span> Luxury air-conditioned
              rooms
            </li>
            <li className="flex items-center gap-3">
              <span className="text-resort-gold">✦</span> Private balconies with
              scenic views
            </li>
            <li className="flex items-center gap-3">
              <span className="text-resort-gold">✦</span> Premium amenities &
              poolside leisure
            </li>
            <li className="flex items-center gap-3">
              <span className="text-resort-gold">✦</span> Ideal for weddings &
              getaways
            </li>
          </ul>

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
              EXPLORE ROOMS
            </span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[385px] overflow-hidden">
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
