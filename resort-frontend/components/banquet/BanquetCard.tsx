import Image from "next/image";
import { Banquet } from "@/types/banquet";

interface Props {
  banquet: Banquet;
}

export default function BanquetCard({ banquet }: Props) {
  return (

    <div className="relative group overflow-hidden">

      {/* Image */}
      <div className="relative h-[360px]">

        <Image
          src={banquet.images?.[0] || "/placeholder.jpg"}
          alt={banquet.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Capacity Badge */}
        <div className="absolute top-4 left-4 bg-yellow-500 text-black text-sm font-semibold px-4 py-1">
          {banquet.capacity} Guests
        </div>

      </div>

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-white">

        <h3 className="text-2xl font-serif mb-2">
          {banquet.title}
        </h3>

        <p className="text-gray-300 text-sm max-w-xs">
          Ideal for weddings, conferences and elegant celebrations at
          La Macaw Resort.
        </p>

      </div>

    </div>

  );
}