"use client";

import { useState } from "react";
import { FAQ } from "@/types/branch";

type Props = {
  faq: FAQ[];
};

export default function BranchFAQ({ faq }: Props) {

  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6 max-w-4xl">

        <h2 className="text-4xl font-serif text-center mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faq.map((item, i) => (

            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden"
            >

              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-lg font-medium">
                  {item.q}
                </span>

                <span className="text-2xl">
                  {open === i ? "−" : "+"}
                </span>

              </button>

              {open === i && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}