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
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6 text-center">

        <p className="text-sm tracking-[0.35em] text-gray-400 mb-3">
          CELEBRATIONS
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Events & Celebrations
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          From grand weddings to corporate retreats, La Macaw Resort offers
          beautiful venues and unforgettable experiences for every occasion.
        </p>

      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* FEATURE EVENT */}
        <Link href="/events" className="group">

          <div className="relative h-[500px] overflow-hidden">

            <Image
              src={events[0]?.images?.[0]}
              alt={events[0]?.title}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 p-8">

              <h3 className="text-3xl font-serif mb-3">
                {events[0]?.title}
              </h3>

              <p className="text-gray-300 max-w-md mb-4 line-clamp-2">
                {events[0]?.description}
              </p>

              <div className="flex items-center gap-2 text-sm uppercase tracking-wider">
                Explore Event
                <ArrowRight size={16} />
              </div>

            </div>

          </div>

        </Link>

        {/* SIDE EVENTS */}
        <div className="grid grid-rows-2 gap-8">

          {events.slice(1, 3).map((event) => (

            <Link key={event._id} href="/events" className="group">

              <div className="relative h-[230px] overflow-hidden">

                <Image
                  src={event.images?.[0]}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-6">

                  <h3 className="text-xl font-serif">
                    {event.title}
                  </h3>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* CTA */}

      <div className="text-center mt-16">

        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-8 py-3 border border-white  hover:bg-white hover:text-black transition"
        >
          View All Events
          <ArrowRight size={16} />
        </Link>

      </div>

    </section>
  );
}