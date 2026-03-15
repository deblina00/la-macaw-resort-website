"use client"

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
      <section className="relative h-[420px] flex items-center justify-center text-white">
        <Image
          src="/gallery-hero.jpg"
          fill
          alt="Luxury resort rooms"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center">
          <p className="uppercase tracking-widest text-sm mb-4 text-gray-300">
            Accommodation
          </p>
          <h1 className="text-5xl font-serif">Our Resort Rooms</h1>
        </div>
      </section>

      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {branches.map((cat) => (
              <button
                key={cat}
                onClick={() => setBranchId(cat)}
                className={`px-6 py-2 border transition
                ${
                  branchId === cat
                    ? "bg-white text-black"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

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
