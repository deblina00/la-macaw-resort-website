import Image from "next/image";
import { Event } from "@/types/event";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (

    <div className="relative group overflow-hidden cursor-pointer">

      {/* IMAGE */}
      <div className="relative h-[340px]">

        <Image
          src={event.images?.[0] || "/placeholder.jpg"}
          alt={event.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 text-white">

        <h3 className="text-2xl font-serif mb-2">
          {event.title}
        </h3>

        <p className="text-gray-300 text-sm line-clamp-2 max-w-xs">
          {event.description}
        </p>

      </div>

    </div>

  );
}