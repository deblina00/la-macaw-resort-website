"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Offer } from "@/types/offer";

export default function OfferPopup() {
  const router = useRouter();

  const [offer, setOffer] = useState<Offer | null>(null);
  const [open, setOpen] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    api.get("/offers/popup").then((res) => {
      const data = res.data;
      setOffer(data);

      // 🔥 Preload image
      const img = new window.Image();
      img.src = data.popupImage;

      img.onload = () => {
        setTimeout(() => setImageLoaded(true), 150);
      };

      img.onerror = () => {
        // fallback: still show popup without image
        setImageLoaded(true);
      };
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  // if (!offer || !offer.popupImage || !open) return null;
  if (!offer || !offer.popupImage || !open || !imageLoaded) return null;

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm animate-fadeIn">
      {/* MAIN CARD */}
      <div
        className="
          relative 
          w-[90%] 
          max-w-4xl 
          h-[65vh]
          overflow-hidden 
          shadow-[0_30px_80px_rgba(0,0,0,0.7)]
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="
            absolute top-4 right-4 z-50 
            bg-white/90 md:bg-white/80 
            backdrop-blur-md 
            hover:bg-resort-gold/80
            transition 
            px-3 py-1 
            rounded-full 
            text-black 
            text-lg 
            shadow-md
          "
        >
          ✕
        </button>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden h-full relative">
          {/* BACKGROUND IMAGE */}
          <Image
            src={offer.popupImage}
            alt="offer"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 90vw"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
            <p className="text-xs tracking-[0.3em] uppercase opacity-80 mb-3">
              Exclusive Escape
            </p>

            <h2 className="text-2xl font-serif mb-4 leading-tight">
              {offer.title}
            </h2>

            <div className="w-10 h-[1px] bg-white opacity-60 mb-5" />

            <p className="text-sm opacity-90 max-w-md mb-6">
              A refined getaway crafted with elegance, comfort, and immersive
              experiences across our signature destinations.
            </p>

            {/* CTA */}
            <button
              onClick={() => {
                setOpen(false);
                router.push("/offers");
              }}
              className="
                px-6 py-3 
                rounded-full 
                border border-white 
                text-white 
                backdrop-blur-sm
                bg-white/10 
                hover:bg-white 
                hover:text-black
                transition-all duration-300
              "
            >
              Explore Offers
            </button>
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden md:flex h-full bg-white">
          {/* LEFT IMAGE */}
          <div className="relative w-[50%] h-full overflow-hidden">
            <Image
              src={offer.popupImage}
              alt="offer"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 90vw, 448px"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-[50%] h-full flex flex-col justify-center px-10 py-8 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-resort-gold mb-3">
              Exclusive Escape
            </p>

            <h2 className="text-3xl font-serif mb-5 leading-tight">
              {offer.title}
            </h2>

            <div className="w-24 h-[1px] bg-resort-gold mx-auto mb-6 opacity-40" />

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              A refined getaway crafted with elegance, comfort, and immersive
              experiences across our signature destinations.
            </p>

            {/* CTA */}
            <button
              onClick={() => {
                setOpen(false);
                router.push("/offers");
              }}
              className="
                group relative 
                px-8 py-3 
                rounded-full
                border border-resort-gold 
                text-black 
                font-medium 
                overflow-hidden 
                transition-all duration-300 
                hover:text-white
              "
            >
              <span className="absolute inset-0 bg-resort-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 tracking-wide group-hover:tracking-widest transition-all duration-300">
                Explore Offers
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
