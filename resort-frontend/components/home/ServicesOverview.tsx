"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Swimming Pool",
    image: "/services/pool.jpeg",
  },
  {
    title: "Luxury Rooms",
    image: "/services/room.jpeg",
  },
  {
    title: "Grand Banquet",
    image: "/services/banquet.jpeg",
  },
  {
    title: "Restaurant & Dining",
    image: "/services/restaurant.jpeg",
  },
  {
    title: "Private Lawn",
    image: "/services/lawn.jpeg",
  },
];

export default function ServicesOverview() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6 text-center">

        <p className="text-sm tracking-[0.35em] text-gray-400 mb-3">
          — OUR FACILITIES — 
        </p>

        <h2 className="text-4xl md:text-5xl font-cinzel mb-4">
          LUXURY AMENITIES & EXPERIENCES
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Indulge in thoughtfully designed spaces and world-class amenities
          crafted to elevate every moment of your stay.
        </p>

      </div>

      {/* EXPANDING PANELS */}
      <div className="w-full h-[560px] flex overflow-hidden">

        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              animate={{ flex: isActive ? 4 : 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative cursor-pointer overflow-hidden"
            >

              {/* IMAGE */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

              {/* TITLE + CTA (CENTER ON ACTIVE) */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >

                  <h3 className="text-4xl md:text-5xl font-serif mb-4">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm tracking-widest uppercase">
                    Discover Experience
                    <ArrowRight size={16} />
                  </div>

                </motion.div>
              )}

              {/* SIDE LABEL (VISIBLE WHEN COLLAPSED) */}
              {!isActive && (
                <div className="absolute bottom-6 left-6 text-white text-sm tracking-widest uppercase rotate-[-90deg] origin-left">
                  {service.title}
                </div>
              )}

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}