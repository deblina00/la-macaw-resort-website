"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";
import Image from "next/image";
import { GalleryImage } from "@/types/gallery";
import { ArrowRight } from "lucide-react";

export default function GalleryPreview() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    api.get<GalleryImage[]>("/gallery?limit=6").then((res) => {
      setImages(res.data);
    });
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="bg-resort-black text-white py-20">

      {/* HEADER */}
      <div className="container mx-auto px-6 text-center">

        <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
          — Resort Moments —
        </p>

        <h2 className="text-3xl md:text-5xl font-cinzel tracking-[0.12em] mb-6">
          EXPLORE OUR GALLERY
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          A curated glimpse into unforgettable stays, scenic destinations, and
          signature experiences at La Macaw Resort.
        </p>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-5">

        {images.map((img, i) => (

          <div
            key={img._id}
            className={`
              relative overflow-hidden group cursor-pointer
              ${i === 0 ? "md:col-span-2 md:row-span-2 h-[440px]" : "h-[210px]"}
            `}
          >

            {/* IMAGE */}
            <Image
              src={img.image}
              alt={img.title}
              fill
              priority
              className="object-cover scale-105 group-hover:scale-110 transition duration-700"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition duration-300" />

            {/* GOLD HOVER LAYER */}
            <div className="absolute inset-0 bg-resort-gold/10 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* CONTENT */}
            <div className="absolute bottom-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">

              <p className="text-white font-cinzel text-lg tracking-wide">
                {img.title}
              </p>

              <div className="w-10 h-[1px] bg-resort-gold mt-2" />

            </div>

            {/* BORDER HOVER */}
            <div className="absolute inset-0 border border-transparent group-hover:border-resort-gold/30 transition duration-500" />

          </div>

        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-20">

        <Link
          href="/gallery"
          className="
            inline-flex items-center gap-2 
            px-10 py-3 
            border border-resort-gold 
            text-resort-gold 
            tracking-widest text-sm
            hover:bg-resort-gold 
            hover:text-black 
            transition-all duration-300
          "
        >
          VIEW FULL GALLERY
          <ArrowRight size={16} />
        </Link>

      </div>

    </section>
  );
}