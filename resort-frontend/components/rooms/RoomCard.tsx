// import Image from "next/image";
// import Link from "next/link";
// import { Room } from "@/types/room";
// import { BedDouble, Users } from "lucide-react";

// interface Props {
//   room: Room;
// }

// export default function RoomCard({ room }: Props) {
//   return (
//     <div className="relative h-[520px] w-full overflow-hidden group">
//       {/* ROOM IMAGE */}
//       <Image
//         src={room.gallery?.[0]}
//         alt={room.title}
//         fill
//         className="object-cover group-hover:scale-110 transition duration-700"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

//       {/* CONTENT */}
//       <div className="absolute bottom-0 left-0 w-full p-8 text-white">
//         <h3 className="text-2xl font-serif mb-2">{room.title}</h3>

//         <p className="text-gray-300 mb-6">₹{room.price} / Night + Gst</p>

//         {/* divider */}
//         <div className="border-t border-white/30 mb-6"></div>

//         <Link href={`/rooms/${room._id}`}>
//           <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition">
//             VIEW DETAILS
//           </button>
//         </Link>

//         {/* ROOM META */}
//         <div className="flex gap-6 mt-6 text-sm text-gray-300">
//           <div className="flex items-center gap-2">
//             <BedDouble size={18} />
//             <span>1 Beds</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Users size={18} />
//             <span>{room.capacity} People</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { Room } from "@/types/room";
import { BedDouble, Users } from "lucide-react";

interface Props {
  room: Room;
}

export default function RoomCard({ room }: Props) {
  return (
    <div className="relative h-[520px] w-full overflow-hidden group">
      {/* IMAGE */}
      <Image
        src={room.gallery?.[0]}
        alt={room.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

      {/* GOLD HOVER GLOW */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
      bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.15),transparent_60%)]"
      />

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-8 text-white">
        <h3 className="text-2xl font-serif mb-2 group-hover:text-resort-gold transition">
          {room.title}
        </h3>

        <p className="text-gray-300 mb-6">
          ₹{room.price} <span className="text-xs">/ Night + GST</span>
        </p>

        {/* divider */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* BUTTON */}
        <Link href={`/rooms/${room._id}`}>
          <button
            className="px-6 py-2 text-sm border border-resort-gold text-resort-gold 
          hover:bg-resort-gold hover:text-black transition-all duration-300"
          >
            VIEW DETAILS
          </button>
        </Link>

        {/* META */}
        <div className="flex gap-6 mt-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            <span>{room.totalBed} Bed</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>{room.capacity} Guests</span>
          </div>
        </div>
      </div>
    </div>
  );
}
