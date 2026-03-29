"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import BanquetCard from "@/components/banquet/BanquetCard";
import Image from "next/image";
import { Banquet } from "@/types/banquet";
import BookNowBanner from "@/components/home/BookNowBanner";

const branches = ["All", "Tajpur", "Joypur", "Purulia"] as const;
type Branch = (typeof branches)[number];

const branchIds: Record<Exclude<Branch, "All">, string> = {
  Tajpur: "69b057014e0df81f1ec49524",
  Joypur: "69b13459278dac4d94f14ea3",
  Purulia: "69b13471278dac4d94f14ea9",
};

export default function BanquetsClient() {
  const [banquets, setBanquets] = useState<Banquet[]>([]);
  const [branchId, setBranchId] = useState<Branch>("All");

  useEffect(() => {
    const url =
      branchId === "All"
        ? "/banquets"
        : `/banquets?branchId=${branchIds[branchId]}`;

    api.get(url).then((res) => {
      setBanquets(res.data);
    });
  }, [branchId]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/banquet.jpg"
          fill
          priority
          alt="Banquet Hall"
          className="absolute object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — BANQUETS —
          </p>
          <h1 className="text-4xl md:text-5xl font-cinzel mb-6">
            BANQUETS & GRAND CELEBRATIONS
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-resort-softBlack text-white py-20">
        <div className="container mx-auto text-center max-w-3xl px-6">
          <h2 className="text-4xl font-cinzel text-resort-gold mb-6">
            ELEGANT VENUES FOR EVERY OCCASION
          </h2>

          <p className="text-gray-400 leading-relaxed">
            At La Macaw Resort, we provide three sophisticated banquet halls,
            designed to accommodate a wide variety of events, from corporate
            conferences to weddings and social gatherings. Each venue is
            equipped with state-of-the-art facilities and can be tailored to
            meet the specific requirements of your event. Our experienced team
            is committed to delivering a seamless experience, ensuring that
            every detail is handled with precision and professionalism, making
            your occasion truly exceptional.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="bg-resort-softBlack py-10">
        <div className="flex justify-center gap-4 flex-wrap">
          {branches.map((cat) => (
            <button
              key={cat}
              onClick={() => setBranchId(cat)}
              className={`px-6 py-2 text-sm tracking-wide border transition-all duration-300
              ${
                branchId === cat
                  ? "bg-resort-gold text-black border-resort-gold"
                  : "border-white/20 text-white hover:border-resort-gold hover:text-resort-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* BANQUET GRID */}
      <section className="bg-resort-softBlack pb-20 pt-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {banquets.map((b) => (
              <BanquetCard key={b._id} banquet={b} />
            ))}
          </div>
        </div>
      </section>

      {/* BOOK NOW BANNER */}
      <BookNowBanner/>
    </>
  );
}
