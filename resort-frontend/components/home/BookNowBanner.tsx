import Link from "next/link";
import Image from "next/image";

export default function BookNowBanner() {
  return (
    <section className="relative overflow-hidden py-20 text-white">

      {/* Background */}
      <Image
        src="/book-banner.jpg"
        alt="Luxury Resort Stay"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      <div className="relative container mx-auto px-6 text-center">

        <p className="text-sm tracking-[0.35em] text-gray-300 mb-4">
          — PLAN YOUR ESCAPE —
        </p>

        <h2 className="text-3xl md:text-5xl font-cinzel mb-6 leading-tight">
          BOOK YOUR DREAM STAY
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10 text-base">
          Discover the perfect blend of luxury, nature, and unforgettable
          hospitality across our beautiful resort destinations.
        </p>

        <Link href="/contact">

          <button className="inline-flex items-center gap-2 px-8 py-3 border border-white  hover:bg-white hover:text-black transition">
            Book Your Stay
          </button>

        </Link>

      </div>

    </section>
  );
}