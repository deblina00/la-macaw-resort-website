"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import Link from "next/link";
import Image from "next/image";
import { Event } from "@/types/event";
import { ArrowRight } from "lucide-react";

export default function EventsShowcase() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    api.get("/events").then((res) => {
      setEvents(res.data);
    });
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="bg-resort-black text-white py-20">
      {/* HEADER */}
      <div className="container mx-auto px-6 text-center">
        {/* LABEL */}
        <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
          — Celebrations —
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-cinzel tracking-[0.12em] mb-6">
          EVENTS & CELEBRATIONS
        </h2>

        {/* SUBTEXT */}
        <p className="text-white/70 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          From elegant weddings to grand corporate gatherings, experience
          unforgettable moments crafted with perfection.
        </p>
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* FEATURE EVENT */}
        <Link href="/events" className="group">
          <div className="relative h-[520px] overflow-hidden">
            <Image
              src={events[0]?.images?.[0]}
              alt={events[0]?.title}
              fill
              priority
              className="object-cover scale-105 group-hover:scale-110 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 p-8">
              <p className="text-xs tracking-[0.35em] text-resort-gold mb-3 uppercase">
                Featured Event
              </p>

              <h3 className="text-3xl md:text-4xl font-cinzel mb-3">
                {events[0]?.title}
              </h3>

              <div className="w-12 h-[1px] bg-resort-gold mb-4" />

              <p className="text-white/70 max-w-md mb-6 line-clamp-2 text-sm">
                {events[0]?.description}
              </p>

              <div className="flex items-center gap-2 text-resort-gold text-sm tracking-wide group-hover:gap-3 transition-all duration-300">
                Explore Event
                <ArrowRight size={16} />
              </div>
            </div>

            {/* HOVER BORDER */}
            <div className="absolute inset-0 border border-transparent group-hover:border-resort-gold/30 transition duration-500" />
          </div>
        </Link>

        {/* SIDE EVENTS */}
        <div className="grid grid-rows-2 gap-10">
          {events.slice(1, 3).map((event) => (
            <Link key={event._id} href="/events" className="group">
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={event.images?.[0]}
                  alt={event.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-cinzel mb-2">{event.title}</h3>

                  <div className="flex items-center gap-2 text-resort-gold text-xs tracking-wide group-hover:gap-3 transition-all duration-300">
                    View
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* BORDER */}
                <div className="absolute inset-0 border border-transparent group-hover:border-resort-gold/20 transition duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <Link
          href="/events"
          className="
            inline-flex items-center gap-2 
            px-10 py-3 
            border border-resort-gold 
            text-resort-gold 
            tracking-widest text-sm
            hover:bg-resort-gold 
            hover:text-black 
            transition-all duration-300
          "
        >
          VIEW ALL EVENTS
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
