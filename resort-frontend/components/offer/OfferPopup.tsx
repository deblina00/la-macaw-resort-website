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

  useEffect(() => {
    api.get("/offers/popup").then((res) => {
      setOffer(res.data);
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  if (!offer || !offer.popupImage || !open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md">
      {/* MAIN CARD */}
      <div className="relative w-[92%] max-w-3xl h-[70vh] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)] flex bg-white">
        {/* CLOSE */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-md hover:bg-white transition px-3 py-1 rounded-full text-black text-lg shadow-md"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="relative w-[55%] h-full overflow-hidden group">
          <Image
            src={offer.popupImage}
            alt="offer"
            fill
            className="object-cover"
            priority
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[45%] h-full flex flex-col justify-center px-10 py-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">
            Exclusive Escape
          </p>

          <h2 className="text-3xl font-serif mb-5 leading-tight">
            {offer.title}
          </h2>

          <div className="w-12 h-[1px] bg-black mx-auto mb-6 opacity-40" />

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
            className="group relative px-8 py-3 rounded-full border border-black text-black font-medium overflow-hidden transition-all duration-300 hover:text-white"
          >
            {/* hover bg */}
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            <span className="relative z-10 tracking-wide group-hover:tracking-widest transition-all duration-300">
              Explore Offers
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
