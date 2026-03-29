"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Image from "next/image";

export default function GalleryClient() {
  const [images, setImages] = useState<any[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const url =
      category === "All"
        ? "/gallery"
        : `/gallery?category=${category.toLowerCase()}`;

    api.get(url).then((res) => setImages(res.data));
  }, [category]);

  const categories = [
    "All",
    "Tajpur",
    "Joypur",
    "Purulia",
    "Rooms",
    "Banquets",
    "Events",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/gallery-banner.jpeg"
          fill
          priority
          alt="Resort Gallery"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — RESORT MOMENTS —
          </p>
          <h1 className="text-4xl md:text-5xl font-cinzel mb-6">
            OUR RESORT GALLERY
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore beautiful moments captured across our luxury resort
            destinations and unforgettable guest experiences.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
          {/* CATEGORY FILTER */}
          <div className="flex gap-3 mb-14 justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 text-sm tracking-wide border transition-all duration-300 ${
                  category === cat
                    ? "bg-resort-gold text-black border-resort-gold"
                    : "border-white/20 text-white hover:border-resort-gold hover:text-resort-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}
