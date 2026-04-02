"use client";

import api from "@/services/api";
import { Banquet } from "@/types/banquet";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Users, Maximize, Clock } from "lucide-react";

export default function BanquetDetail() {
  const { slug } = useParams() as { slug: string };
  const [banquet, setBanquet] = useState<Banquet | null>(null);

  useEffect(() => {
    if (!slug || typeof slug !== "string") return;

    api
      .get(`/banquets/${slug}`)
      .then((res) => setBanquet(res.data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!banquet)
    return <div className="text-center py-20 text-white">Loading...</div>;

  const getImageUrl = (img?: string) => {
    if (!img) return "/placeholder.jpg";

    // already full URL (Cloudinary)
    if (img.startsWith("http")) return img;

    // local upload
    return `${process.env.NEXT_PUBLIC_API_URL}/${img}`;
  };

  const mainImage = getImageUrl(banquet.images?.[0]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[520px] flex items-center justify-center text-white">
        <Image
          src={mainImage}
          fill
          alt={banquet.title}
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* HERO CONTENT */}
        <div className="relative text-center px-6">
          <h1 className="text-5xl font-cinzel mb-4">{banquet.title}</h1>

          <p className="text-resort-gold text-lg tracking-wide">
            {banquet.type} • {banquet.totalArea} SQFT
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-cinzel mb-6 text-resort-gold">
              Banquet Overview
            </h2>

            <p className="text-gray-300 leading-relaxed mb-10">
              {banquet.description ||
                "Elegant space for weddings, conferences and grand celebrations."}
            </p>

            {/* CAPACITY GRID */}
            <div className="grid grid-cols-2 gap-6 text-gray-300 mb-10">
              <div className="flex items-center gap-3">
                <Users />
                <span>Theatre: {banquet.seatingCapacity?.theatre || "-"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Users />
                <span>Dining: {banquet.seatingCapacity?.dining || "-"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Users />
                <span>
                  Floating: {banquet.seatingCapacity?.floating || "-"}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Users />
                <span>Max: {banquet.seatingCapacity?.max || "-"}</span>
              </div>
            </div>

            {/* EXTRA INFO */}
            <div className="space-y-3 text-gray-300 mb-10">
              <div className="flex items-center gap-3">
                <Maximize />
                <span>{banquet.totalArea} Sqft Area</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock />
                <span>
                  {banquet.openingTime} - {banquet.closingTime}
                </span>
              </div>
            </div>

            {/* FEATURES */}
            {banquet.features?.length ? (
              <div className="mb-10">
                <h3 className="text-xl mb-4 text-resort-gold">Features</h3>
                <div className="flex flex-wrap gap-3">
                  {banquet.features?.map((f: string, i: number) => (
                    <span
                      key={i}
                      className="border border-resort-gold text-resort-gold px-3 py-1 text-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {/* CTA */}
            <Link href="/contact">
              <button
                className="px-8 py-3 border border-resort-gold text-resort-gold 
                hover:bg-resort-gold hover:text-black transition-all duration-300"
              >
                Book This Banquet
              </button>
            </Link>
          </div>

          {/* RIGHT GALLERY */}
          <div className="grid grid-cols-2 gap-6">
            {banquet.images?.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative h-[220px] overflow-hidden rounded-lg"
              >
                <Image
                  src={getImageUrl(img)}
                  alt={banquet.title}
                  fill
                  className="object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
