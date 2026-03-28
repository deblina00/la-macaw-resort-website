"use client";

import { useState } from "react";
import { FAQ } from "@/types/branch";
import Image from "next/image";

type Props = {
  faq: FAQ[];
  images: string[];
};

export default function BranchFAQ({ faq, images }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-[#0b0909] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE STACK */}
        <div className="relative hidden lg:block h-[500px]">

          <div className="absolute top-0 left-0 w-56 h-80">
            <Image
              src={images[0]}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-20 left-20 w-96 h-72 shadow-2xl">
            <Image
              src={images[1]}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-6 right-1 w-56 h-80">
            <Image
              src={images[2]}
              alt=""
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* RIGHT FAQ */}
        <div className="h-[560px]">

          <p className="tracking-[0.3em] text-resort-gold text-sm mb-4">
            — FAQ —
          </p>

          <h2 className="text-4xl font-cinzel mb-12 leading-tight">
            EVERYTHING YOU NEED
            <br />
            TO KNOW BEFORE YOUR
            <br />
            STAY
          </h2>

          <div className="border-b border-white/10"></div>

          <div className="space-y-2">
            {faq.map((item, i) => (
              <div key={i} className="border-b border-white/10">

                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center py-3 text-left"
                >
                  <span className="text-base">{item.q}</span>

                  <span className="text-2xl">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div className="pb-5 text-gray-400 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}