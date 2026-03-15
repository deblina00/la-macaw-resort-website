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
      <section className="relative h-[520px] flex items-center justify-center text-white">
        <Image
          src="/gallery-hero.jpg"
          fill
          alt="Luxury resort offers"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-widest text-sm text-gray-300 mb-4">
            Exclusive Packages
          </p>

          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Special Resort Offers
          </h1>

          <p className="text-gray-300">
            Discover limited-time packages and curated luxury experiences
            designed for unforgettable stays.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-serif mb-6">
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
      <section className="bg-black text-white pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-28">

            {offers.map((offer, i) => (

              <div
                key={offer._id}
                className="grid md:grid-cols-2 gap-16 items-center group"
              >

                <div
                  className={`relative h-[420px] overflow-hidden rounded-xl ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >

                  <Image
                    src={offer.image}
                    alt={`${offer.title} offer`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-6 left-6 bg-white/90 text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    {offer.discountValue}% OFF
                  </div>

                </div>

                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>

                  <p className="uppercase text-sm tracking-widest text-gray-400 mb-3">
                    Limited Time Offer
                  </p>

                  <h3 className="text-3xl md:text-4xl font-serif mb-4">
                    {offer.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-8">
                    {offer.offerDetails ||
                      "Enjoy exclusive savings and premium hospitality at La Macaw Resort with this limited-time package."}
                  </p>

                  <Link href="/contact">
                    <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
                      Book This Offer
                    </button>
                  </Link>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-white text-center">

        <Image
          src="/gallery-hero.jpg"
          fill
          alt="Luxury stay"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-serif mb-6">
            Plan Your Luxury Escape
          </h2>

          <p className="text-gray-300 mb-8">
            Experience the perfect blend of nature, comfort and hospitality at
            La Macaw Resort.
          </p>

          <Link href="/contact">
            <button className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
              Book Your Stay
            </button>
          </Link>

        </div>

      </section>
    </>
  );
}