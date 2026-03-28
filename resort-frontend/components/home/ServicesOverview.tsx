"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  { title: "Swimming Pool", image: "/services/pool.jpeg" },
  { title: "Luxury Rooms", image: "/services/room.jpeg" },
  { title: "Grand Banquet", image: "/services/banquet.jpeg" },
  { title: "Restaurant & Dining", image: "/services/restaurant.jpeg" },
  { title: "Private Lawn", image: "/services/lawn.jpeg" },
];

export default function ServicesOverview() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-resort-black text-white py-20">

      {/* HEADER */}
      <div className="container mx-auto px-6 text-center">

        {/* LABEL */}
        <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
           — Our Facilities —
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-cinzel tracking-[0.12em] mb-5">
          LUXURY AMENITIES
        </h2>

        {/* SUBTEXT */}
        <p className="text-white/70 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          Experience thoughtfully designed spaces and refined amenities crafted
          to elevate every moment of your stay.
        </p>
      </div>

      {/* PANELS */}
      <div className="w-full h-[560px] flex overflow-hidden">

        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              animate={{ flex: isActive ? 4 : 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative cursor-pointer overflow-hidden group"
            >

              {/* IMAGE */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover scale-105 group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* ACTIVE CONTENT */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >

                  {/* GOLD LABEL */}
                  <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
                    Experience
                  </p>

                  {/* TITLE */}
                  <h3 className="text-4xl md:text-5xl font-cinzel tracking-wide mb-4">
                    {service.title}
                  </h3>

                  {/* DIVIDER */}
                  <div className="w-16 h-[1px] bg-resort-gold mb-4" />

                  {/* SUBTEXT */}
                  <p className="text-white/70 text-sm max-w-md">
                    Designed to offer comfort, elegance and memorable
                    experiences throughout your stay.
                  </p>

                </motion.div>
              )}

              {/* COLLAPSED LABEL */}
              {!isActive && (
                <div className="absolute bottom-6 left-6 text-white/80 text-xs tracking-[0.3em] uppercase rotate-[-90deg] origin-left">
                  {service.title}
                </div>
              )}

              {/* HOVER BORDER */}
              <div className="absolute inset-0 border border-transparent group-hover:border-resort-gold/30 transition duration-500" />

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}