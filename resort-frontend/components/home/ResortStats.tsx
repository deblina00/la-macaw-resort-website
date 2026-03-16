"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ResortStats() {
  const stats = [
    { label: "Total Reviews", value: 83 },
    { label: "Years of Experience", value: 8 },
    { label: "Happy Guests", value: 6700 },
    { label: "Successful Events", value: 100 },
  ];

  const [start, setStart] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setStart(true), 150);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-black text-white py-20">

      <div className="container mx-auto px-6 text-center">

        <p className="text-sm tracking-[0.35em] text-gray-400 mb-3">
         — RESORT AT A GLANCE —
        </p>

        <h2 className="text-3xl md:text-4xl font-cinzel mb-10">
          DELIVERING EXCELLENCE, ONE STAY AT A TIME
        </h2>

      </div>

      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-20 text-center">

        {stats.map((stat, i) => (

          <div key={i} className="relative">

            {/* BIG NUMBER */}
            <div className="text-5xl md:text-7xl font-cinzel font-light text-white">

              {start ? (
                <CountUp end={stat.value} duration={2.5} separator="," />
              ) : (
                0
              )}

              <span className="text-yellow-600">+</span>

            </div>

            {/* LABEL */}
            <p className="mt-4 text-gray-400 tracking-wide uppercase text-sm">
              {stat.label}
            </p>

            {/* Divider line */}
            {i !== stats.length - 1 && (
              <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-px h-20 bg-white/10" />
            )}

          </div>

        ))}

      </div>

    </section>
  );
}