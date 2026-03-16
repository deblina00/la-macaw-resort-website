"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroEnquiryForm from "./HeroEnquiryForm";

const images = ["/hero1.jpeg", "/hero2.jpeg", "/hero3.jpeg", "/hero4.jpeg"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden text-white">
      {/* SLIDER */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1400ms] ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-full flex-shrink-0">
            <Image
              src={img}
              alt="Luxury Resort View"
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative container h-full flex flex-col justify-center items-center text-center">
        <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl tracking-[0.12em] leading-[1.15] max-w-5xl">
          HOSPITALITY, NATURE,
          <br />
          AND ELEGANCE
          <br />
          BEAUTIFULLY BLENDED
        </h1>
       
       <div className="w-96 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-6 shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>

        <p className="mt-2 max-w-xl text-sm text-gray-200">
          Experience luxury stays, destination weddings and unforgettable
          getaways across Tajpur beach, Joypur forest and Purulia hills.
        </p>

        <Link href="/rooms">
          <button className="mt-8 border border-white px-10 py-2 hover:bg-white hover:text-black transition">
            VIEW DETAILS
          </button>
        </Link>

        {/* SEO hidden description */}
        <p className="sr-only">
          La Macaw Resort offers luxury rooms, destination weddings, events, and
          banquets across Tajpur, Joypur and Purulia in West Bengal.
        </p>
      </div>

      {/* BOOKING FORM */}
      <HeroEnquiryForm />
    </section>
  );
}
