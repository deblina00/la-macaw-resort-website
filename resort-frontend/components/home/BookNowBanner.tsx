import Link from "next/link";
import Image from "next/image";

export default function BookNowBanner() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/book-now.jpg"
        alt="Luxury Resort Stay"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* DARK + GOLD OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-resort-gold/15" />

      {/* CONTENT */}
      <div className="relative container mx-auto px-6 text-center">
        {/* LABEL */}
        <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
          — Plan Your Escape —
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel tracking-[0.12em] leading-tight mb-6">
          BOOK YOUR DREAM STAY
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-2xl mx-auto text-white/70 mb-10 text-sm md:text-base">
          Experience luxury, nature, and unforgettable hospitality across our
          exclusive destinations. Your perfect escape awaits.
        </p>

        {/* CTA BUTTON */}
        <Link href="/contact">
          <span
            className="
              inline-flex items-center gap-2 
              px-10 py-3 
              border border-resort-gold 
              text-black bg-white
              hover:bg-resort-gold 
              tracking-widest text-sm
              font-semibold
              relative overflow-hidden
              transition-all duration-300
            "
          >
            {/* HOVER BG */}
            <span className="absolute inset-0 bg-resort-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            {/* TEXT */}
            <span className="relative z-10">BOOK YOUR STAY</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
