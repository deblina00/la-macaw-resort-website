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
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6 text-center">

        <p className="text-sm tracking-[0.35em] text-gray-400 mb-3">
          RESORT MOMENTS
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Explore Our Gallery
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          A glimpse into unforgettable stays, stunning destinations, and
          beautiful experiences at La Macaw Resort.
        </p>

      </div>

      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">

        {images.map((img, i) => (

          <div
            key={img._id}
            className={`relative overflow-hidden group ${
              i === 0 ? "md:col-span-2 md:row-span-2 h-[420px]" : "h-[200px]"
            }`}
          >

            <Image
              src={img.image}
              alt={img.title}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

            {/* Title */}
            <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition">

              <p className="text-white font-semibold text-lg">
                {img.title}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* CTA */}

      <div className="text-center mt-16">

        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-8 py-3 border border-white hover:bg-white hover:text-black transition"
        >
          View Full Gallery
          <ArrowRight size={16} />
        </Link>

      </div>

    </section>
  );
}