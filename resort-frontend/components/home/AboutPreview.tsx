import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-black text-white py-24" id="about">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative h-[520px] rounded-xl overflow-hidden">
          <Image
            src="/about1.jpeg"
            alt="Luxury pool at La Macaw Resort"
            fill
            className="object-cover"
          />
        </div>

        {/* CENTER TEXT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif leading-tight mb-6">
            Welcome to Resorto Your Home By The Sea And Hill
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            La Macaw Resort spreads across 56,000 sq ft and sits just walking
            distance from the beach and the scenic Marine Drive Road. Our resort
            combines nature, comfort and luxury for a truly relaxing stay
            experience.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 text-gray-300 mb-10">
            <li>✦ Luxury air-conditioned rooms</li>
            <li>✦ Private balcony with nature views</li>
            <li>✦ Swimming pool & modern amenities</li>
            <li>✦ Ideal destination for events & vacations</li>
          </ul>

          <Link href="/rooms">
            <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition">
              VIEW ROOMS
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[420px] rounded-xl overflow-hidden">
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
