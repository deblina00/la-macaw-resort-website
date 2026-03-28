"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";
import Image from "next/image";
import { Offer } from "@/types/offer";

export default function OffersClient() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    api.get("/offers").then((res) => {
      setOffers(res.data);
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/gallery-hero.jpg"
          fill
          alt="Luxury resort offers"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — Exclusive Packages —
          </p>

          <h1 className="text-4xl md:text-5xl font-cinzel mb-6 leading-tight">
            Special Resort Offers
          </h1>

          <p className="text-gray-300">
            Discover limited-time packages and curated luxury experiences
            designed for unforgettable stays.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-cinzel mb-8 text-resort-gold">
            Luxury Packages & Seasonal Deals
          </h2>

          <p className="text-gray-300">
            Whether you&apos;re planning a romantic getaway, family vacation or
            corporate retreat, our curated offers help you enjoy the finest
            experiences at La Macaw Resort while enjoying exclusive savings.
          </p>
        </div>
      </section>

      {/* OFFERS */}
      <section className="bg-black text-white pb-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {offers.map((offer) =>
              offer.branchOffers.map((branch) => (
                <div
                  key={`${offer._id}-${branch.branch}`}
                  className="group relative  overflow-hidden border border-resort-gold/20 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.95)] hover:border-resort-gold transition-all duration-700"
                >
                  {/* IMAGE */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={branch.bannerImage}
                      alt={branch.branch}
                      fill
                      className="object-cover"
                    />

                    {/* LUXURY OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition duration-700" />

                    {/* BRANCH BADGE */}
                    <div className="absolute top-5 left-5 bg-resort-gold uppercase text-black px-4 py-1.5 rounded-full text-[11px] tracking-widest font-semibold shadow-lg backdrop-blur">
                      {branch.branch}
                    </div>

                    {/* PRICE TAG */}
                    <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-lg border border-resort-gold px-5 py-2 rounded-full text-sm font-semibold shadow-lg text-resort-gold">
                      ₹{branch.price}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 flex flex-col justify-between h-[270px]">
                    <div>
                      <p className="text-[10px] tracking-[0.35em] uppercase text-resort-gold mb-3">
                        Limited Edition Stay
                      </p>

                      <h3 className="text-2xl font-serif mb-3 leading-snug tracking-wide group-hover:text-white transition">
                        {offer.title}
                      </h3>

                      <p className="text-gray-500 text-xs mb-4 tracking-wide">
                        {branch.validity?.from &&
                          new Date(branch.validity.from).toDateString()}{" "}
                        —{" "}
                        {branch.validity?.to &&
                          new Date(branch.validity.to).toDateString()}
                      </p>

                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {branch.details ||
                          "Indulge in an elevated escape where refined luxury meets curated experiences and timeless comfort."}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link href="/contact">
                      <button className="mt-6 relative w-full py-3 text-sm tracking-wider font-medium border border-resort-gold/20 overflow-hidden group/btn transition-all duration-500">
                        {/* shimmer effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition duration-700 blur-md" />

                        <span className="relative z-10 group-hover/btn:text-black transition duration-300">
                          Enquiry Now
                        </span>

                        <span className="absolute inset-0 bg-resort-gold scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500" />
                      </button>
                    </Link>
                  </div>

                  {/* subtle glow border on hover */}
                  <div className="pointer-events-none absolute inset-0  border border-transparent group-hover:border-white/20 transition duration-700" />
                </div>
              )),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-white">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/book-banner.jpg"
          alt="Luxury Resort Stay"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* DARK + GOLD OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black" />
        <div className="absolute inset-0 bg-resort-gold/15" />

        {/* CONTENT */}
        <div className="relative container mx-auto px-6 text-center">
          {/* LABEL */}
          <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
            — Plan Your Escape —
          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-cinzel tracking-[0.12em] leading-tight mb-6">
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
               text-resort-gold 
               hover:bg-resort-gold 
               tracking-widest text-sm
               relative overflow-hidden
               transition-all duration-300
               hover:text-black
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
    </>
  );
}
