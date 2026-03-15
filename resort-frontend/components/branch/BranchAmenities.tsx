import { Amenity } from "@/types/branch";
import Image from "next/image";
import { Wifi, Tv, Coffee, Wind, Utensils, ShieldCheck } from "lucide-react";

type Props = {
  amenities: Amenity[];
};

const iconMap: any = {
  wifi: Wifi,
  tv: Tv,
  coffee: Coffee,
  wind: Wind,
  restaurant: Utensils,
  safe: ShieldCheck,
};

export default function BranchAmenities({ amenities }: Props) {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            Amenities
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif">
            Our Hotel Amenities
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {amenities.map((item, i) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={i}
                className="group relative h-40 border-2 border-gray-800 overflow-hidden"
              >
                {/* IMAGE ON HOVER */}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                  />
                )}

                {/* DEFAULT CONTENT */}
                <div className="absolute inset-0 bg-[#174c57] group-hover:bg-black/40 transition flex flex-col items-center justify-center text-center p-4">
                  {Icon && <Icon size={28} className="mb-3 text-white" />}

                  <p className="text-xs tracking-widest uppercase">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
