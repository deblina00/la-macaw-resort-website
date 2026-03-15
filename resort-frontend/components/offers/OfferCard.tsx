import Image from "next/image";
import Link from "next/link";
import { Offer } from "@/types/offer";

interface Props {
  offer: Offer;
}

export default function OfferCard({ offer }: Props) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      {/* IMAGE */}
      <div className="relative h-[230px] overflow-hidden">
        <Image
          src={offer.image}
          alt="offer"
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* DISCOUNT BADGE */}
        <div className="absolute top-4 left-4 bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded">
          {offer.discountValue}% OFF
        </div>

        {/* TITLE OVER IMAGE */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">{offer.title}</h3>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-gray-600 text-sm mb-4">
          Enjoy exclusive savings and luxury hospitality at La Macaw Resort.
        </p>

        <Link href="/contact">
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Lern More
          </button>
        </Link>
      </div>
    </div>
  );
}
