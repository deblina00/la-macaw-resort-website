import Image from "next/image";
import { Banquet } from "@/types/banquet";

interface Props {
  banquet: Banquet;
}

export default function BanquetCard({ banquet }: Props) {
  return (
    <div className="relative group overflow-hidden">

      {/* IMAGE */}
      <div className="relative h-[380px]">
        <Image
          src={banquet.images?.[0] || "/placeholder.jpg"}
          alt={banquet.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* DARK + GOLD OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* GOLD GLOW ON HOVER */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-[#c6a85a]/20 via-transparent to-transparent" />

        {/* CAPACITY BADGE */}
        <div className="absolute top-5 left-5 border border-black/40 text-black text-xs tracking-widest px-4 py-1 backdrop-blur-sm bg-[#c6a85a]">
          {banquet.capacity} GUESTS
        </div>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 text-white w-full">

        <h3 className="text-2xl font-serif mb-2 tracking-wide">
          {banquet.title}
        </h3>

        {/* GOLD LINE */}
        <div className="w-10 h-[2px] bg-[#c6a85a] mb-4"></div>

        {/* AREA */}
        <div className="text-[#c6a85a] text-sm tracking-wide mb-2">
          {banquet.totalArea} SQFT
        </div>

        <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
          Ideal for weddings, conferences and elegant celebrations at La Macaw Resort.
        </p>

      </div>

    </div>
  );
}