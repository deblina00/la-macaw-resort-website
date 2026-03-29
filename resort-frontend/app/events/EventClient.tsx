"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import EventCard from "@/components/events/EventCard";
import Image from "next/image";
import { Event } from "@/types/event";

export default function EventsClient() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    api.get("/events").then((res) => {
      setEvents(res.data);
    });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/event-banner.jpg"
          fill
          priority
          alt="Resort Events"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — EVENTS —
          </p>
          <h1 className="text-4xl md:text-5xl font-cinzel mb-6 leading-tight">
            EVENTS & CELEBRATIONS
          </h1>
          <p className="text-gray-300">
            Celebrate weddings, anniversaries, corporate gatherings and
            unforgettable moments in the luxurious surroundings of La Macaw
            Resort.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-resort-black text-white py-20">
        <div className="container mx-auto text-center max-w-3xl px-6">
          <h2 className="text-4xl font-cinzel text-resort-gold mb-6">
            CREATE UNFORGETTABLE MEMORIES
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Whether you&apos;re planning an intimate celebration or a grand
            event, La Macaw Resort provides stunning venues, world-class
            hospitality and breathtaking natural surroundings to make every
            occasion extraordinary.
          </p>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="bg-black pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
