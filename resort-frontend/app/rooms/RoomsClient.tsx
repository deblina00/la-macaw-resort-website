"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import Image from "next/image";
import { Room } from "@/types/room";
import RoomCard from "../../components/rooms/RoomCard";

const branches = ["All", "Tajpur", "Joypur", "Purulia"] as const;
type Branch = (typeof branches)[number];

const branchIds: Record<Exclude<Branch, "All">, string> = {
  Tajpur: "69b057014e0df81f1ec49524",
  Joypur: "69b13459278dac4d94f14ea3",
  Purulia: "69b13471278dac4d94f14ea9",
};

export default function RoomsClient() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [branchId, setBranchId] = useState<Branch>("All");

  useEffect(() => {
    const url =
      branchId === "All" ? "/rooms" : `/rooms?branchId=${branchIds[branchId]}`;

    api.get(url).then((res) => {
      setRooms(res.data);
    });
  }, [branchId]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/room-banner.jpg"
          fill
          alt="Luxury resort rooms"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — Accommodation —
          </p>

          <h1 className="text-4xl md:text-5xl font-cinzel mb-6 leading-tight">
            Our Resort Rooms
          </h1>
          <p className="text-gray-300"> 
            Each room features modern amenities, elegant interiors, and serene views, ensuring a relaxing and memorable stay
          </p>
        </div>
      </section>

      {/* ROOMS */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="container mx-auto px-6">

          {/* FILTER */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {branches.map((cat) => (
              <button
                key={cat}
                onClick={() => setBranchId(cat)}
                className={`px-6 py-2 text-sm tracking-wide border transition-all duration-300
                ${
                  branchId === cat
                    ? "bg-resort-gold text-black border-resort-gold"
                    : "border-white/20 text-white hover:border-resort-gold hover:text-resort-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {rooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}