"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/services/api";
import Image from "next/image";
import { Room } from "@/types/room";
import { BedDouble, Users, Wifi, Tv } from "lucide-react";
import Link from "next/link";

export default function RoomDetail() {
  const params = useParams();
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    if (!params?.id) return;

    api.get(`/rooms/${params.id}`).then((res) => {
      setRoom(res.data);
    });
  }, [params]);

  if (!room) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative h-[520px] flex items-center justify-center text-white">
        <Image
          src={room.gallery?.[0]}
          fill
          alt={room.title}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center">
          <h1 className="text-5xl font-serif mb-4">{room.title}</h1>

          <p className="text-xl text-gray-300">₹{room.price} / Night</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* DESCRIPTION */}
          <div>
            <h2 className="text-3xl font-serif mb-6">Room Overview</h2>

            <p className="text-gray-300 leading-relaxed mb-10">
              {room.description}
            </p>

            {/* ROOM FEATURES */}
            <div className="grid grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-center gap-3">
                <BedDouble />
                <span>King Size Bed</span>
              </div>

              <div className="flex items-center gap-3">
                <Users />
                <span>2 Guests</span>
              </div>

              <div className="flex items-center gap-3">
                <Wifi />
                <span>Free WiFi</span>
              </div>

              <div className="flex items-center gap-3">
                <Tv />
                <span>Smart TV</span>
              </div>
            </div>

            {/* BOOK BUTTON */}
            <Link href="/contact">
              <button className="mt-10 border border-white px-8 py-3 hover:bg-white hover:text-black transition">
                Book This Room
              </button>
            </Link>
          </div>

          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-2 gap-6">
            {room.gallery?.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative h-[220px] overflow-hidden rounded-lg"
              >
                <Image
                  src={img}
                  alt={room.title}
                  fill
                  className="object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
