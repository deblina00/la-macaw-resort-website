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
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6 text-center">

        <p className="text-sm tracking-[0.35em] text-gray-400 mb-3">
          OUR DESTINATIONS
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Discover Our Retreats
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Each La Macaw resort offers a unique escape — from pristine beaches
          to tranquil hills and serene lakesides.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {branches.map((branch, i) => (

            <Link key={i} href={branch.href}>

              <div className="group relative h-[460px] overflow-hidden cursor-pointer">

                {/* Image */}
                <Image
                  src={branch.img}
                  alt={branch.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-7 text-left">

                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                    <MapPin size={15} />
                    {branch.location}
                  </div>

                  <h3 className="text-2xl font-serif mb-3">
                    {branch.name}
                  </h3>

                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-500 mb-5">
                    {branch.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                    Explore Resort
                    <ArrowRight size={16} />
                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}