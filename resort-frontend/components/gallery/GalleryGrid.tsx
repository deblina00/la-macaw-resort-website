import { GalleryImage } from "@/types/gallery";
import Image from "next/image";

interface Props {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: Props) {
  return (

    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">

      {images.map((img) => (

        <div
          key={img._id}
          className="relative overflow-hidden group cursor-pointer"
        >

          <Image
            src={img.image}
            alt={img.title}
            width={500}
            height={600}
            className="w-full h-auto object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-4">

            <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition">
              {img.title}
            </p>

          </div>

        </div>

      ))}

    </div>

  );
}