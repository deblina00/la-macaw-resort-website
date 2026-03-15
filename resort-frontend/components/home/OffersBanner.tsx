"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";
import Image from "next/image";
import { Offer } from "@/types/offer";

export default function OffersBanner() {
  const [offer, setOffer] = useState<Offer | null>(null);

  useEffect(() => {
    api
      .get("/offers")
      .then((res) => {
        if (res.data.length > 0) {
          const maxOffer = (res.data as Offer[]).reduce(
            (prev, curr) =>
              curr.discountValue > prev.discountValue ? curr : prev,
            res.data[0]
          );

          setOffer(maxOffer);
        }
      })
      .catch((err) => console.error("Failed to fetch offers:", err));
  }, []);

  if (!offer) return null;

  return (
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative h-[320px] md:h-[420px] rounded-xl overflow-hidden group">

            <Image
              src={offer.image}
              alt={offer.title}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Discount Badge */}
            <div className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {offer.discountValue}% OFF
            </div>

          </div>

          {/* TEXT */}
          <div className="max-w-xl">

            <p className="uppercase text-sm tracking-widest text-gray-400 mb-3">
              Limited Time Resort Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-serif mb-5">
              {offer.title}
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              {offer.offerDetails ||
                "Enjoy a luxurious stay experience with exclusive savings at La Macaw Resort."}
            </p>

            <div className="flex flex-wrap gap-4">

              {/* View All Offers */}
              <Link href="/offers">
                <button className="px-8 py-3 border border-white rounded hover:bg-white hover:text-black transition">
                  All Offers
                </button>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}