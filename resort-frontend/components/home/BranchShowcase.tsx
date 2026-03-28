import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

const branches = [
  {
    name: "La Macaw Tajpur",
    location: "Tajpur, West Bengal",
    img: "/Tajpur.jpeg",
    href: "/branch/tajpur",
    desc: "A serene seaside retreat where golden sands meet turquoise waters.",
  },
  {
    name: "La Macaw Joypur",
    location: "Joypur, West Bengal",
    img: "/Joypur.jpeg",
    href: "/branch/joypur",
    desc: "Nestled in lush green hills offering immersive nature experience.",
  },
  {
    name: "La Macaw Purulia",
    location: "Purulia, West Bengal",
    img: "/Purulia.jpeg",
    href: "/branch/purulia",
    desc: "A lakeside haven surrounded by peaceful hills and nature.",
  },
];

export default function BranchShowcase() {
  return (
    <section className="bg-resort-black text-white py-20">
      <div className="container mx-auto px-6 text-center">

        {/* LABEL */}
        <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
         — Our Destinations —
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-cinzel tracking-[0.12em] mb-6">
          DISCOVER OUR RETREATS
        </h2>

        {/* SUBTEXT */}
        <p className="text-white/70 max-w-2xl mx-auto mb-16 text-sm md:text-base">
          Each La Macaw destination offers a distinct experience — from tranquil
          beaches to forest escapes and serene hill landscapes.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {branches.map((branch, i) => (
            <Link key={i} href={branch.href}>
              <div className="group relative h-[480px] overflow-hidden cursor-pointer">

                {/* IMAGE */}
                <Image
                  src={branch.img}
                  alt={branch.name}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-7 text-left">

                  {/* LOCATION */}
                  <div className="flex items-center gap-2 text-xs text-white/70 mb-2">
                    <MapPin size={14} className="text-resort-gold" />
                    {branch.location}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-cinzel tracking-wide mb-3">
                    {branch.name}
                  </h3>

                  {/* DESC */}
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    {branch.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm text-resort-gold tracking-wide group-hover:gap-3 transition-all duration-300">
                    Explore Resort
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* HOVER BORDER EFFECT */}
                <div className="absolute inset-0 border border-transparent group-hover:border-resort-gold/40 transition duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}