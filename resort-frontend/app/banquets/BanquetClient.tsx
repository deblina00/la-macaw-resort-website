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
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center px-6">
          <p className="tracking-[0.35em] text-gray-300 mb-4 text-sm">
           — BANQUETS —
          </p>
          <h1 className="text-4xl md:text-5xl font-cinzel mb-6">
            BANQUETS & GRAND CELEBRATIONS
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Host unforgettable weddings, corporate gatherings and special celebrations at La Macaw Resort.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto text-center max-w-3xl px-6">
          <h2 className="text-4xl font-cinzel mb-6">
            ELEGANT VENUES FOR EVERY OCCASION
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our banquet halls are thoughtfully designed to host everything from intimate celebrations to grand weddings and corporate conferences. Experience sophisticated interiors, flexible layouts, and exceptional hospitality tailored for unforgettable events.
          </p>
        </div>
      </section>

      {/* BANQUET GRID */}
      <section className="bg-black pb-28">
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