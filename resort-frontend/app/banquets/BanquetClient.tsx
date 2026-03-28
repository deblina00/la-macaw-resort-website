"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import BanquetCard from "@/components/banquet/BanquetCard";
import Image from "next/image";
import { Banquet } from "@/types/banquet";

export default function BanquetsClient() {
  const [banquets, setBanquets] = useState<Banquet[]>([]);

  useEffect(() => {
    api.get("/banquets").then((res) => {
      setBanquets(res.data);
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[520px] flex items-center justify-center text-white">
        <Image
          src="/gallery-hero.jpg"
          fill
          priority
          alt="Banquet Hall"
          className="absolute object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        
        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — BANQUETS —
          </p>
          <h1 className="text-4xl md:text-5xl font-cinzel mb-6 leading-tight">
            BANQUETS & GRAND CELEBRATIONS
          </h1>
          <p className="text-gray-300">
            Host unforgettable weddings, corporate gatherings and special
            celebrations at La Macaw Resort.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#0b0909] text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-cinzel mb-8 text-resort-gold">
            ELEGANT VENUES FOR EVERY OCCASION
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Our banquet halls are thoughtfully designed to host everything from
            intimate celebrations to grand weddings and corporate conferences.
            Experience sophisticated interiors, flexible layouts, and
            exceptional hospitality tailored for unforgettable events.
          </p>
        </div>
      </section>

      {/* BANQUET GRID */}
      <section className="bg-gradient-to-b from-black via-[#0b0909] to-black pb-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {banquets.map((b) => (
              <BanquetCard key={b._id} banquet={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
