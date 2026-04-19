"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ResortStats() {
  const stats = [
    { label: "Total Reviews", value: 1536 },
    { label: "Years of Experience", value: 8 },
    { label: "Happy Guests", value: 6787 },
    { label: "Successful Events", value: 125 },
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
    <section ref={ref} className="bg-resort-black text-white py-20">
      {/* HEADER */}
      <div className="container mx-auto px-6 text-center">
        {/* LABEL */}
        <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
          — Resort At A Glance —
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-cinzel tracking-[0.1em] mb-10">
          DELIVERING EXCELLENCE
          <br />
          ONE STAY AT A TIME
        </h2>
      </div>

      {/* STATS GRID */}
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-10 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="relative">
            {/* NUMBER */}
            <div className="text-4xl md:text-6xl font-cinzel font-light text-white tracking-wide">
              {start ? (
                <CountUp end={stat.value} duration={2.5} separator="," />
              ) : (
                0
              )}

              <span className="text-resort-gold ml-1">+</span>
            </div>

            {/* LABEL */}
            <p className="mt-4 text-white/60 tracking-[0.2em] uppercase text-xs">
              {stat.label}
            </p>

            {/* VERTICAL DIVIDER (desktop only) */}
            {i !== stats.length - 1 && (
              <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-px h-16 bg-resort-gold/20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
