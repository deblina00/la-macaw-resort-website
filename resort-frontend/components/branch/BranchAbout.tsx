import Image from "next/image";
import { About } from "@/types/branch";

type Props = {
  about: About;
};

export default function BranchAbout({ about }: Props) {
  return (
    <section className="bg-resort-black text-white py-20" id="about">

      <div className="container mx-auto px-6 grid lg:grid-cols-3 lg:grid-rows-[auto_1fr] gap-12 items-start">

        {/* LEFT IMAGE */}
        <div className="relative h-[550px] overflow-hidden lg:row-span-2">
          <Image
            src={about.images[0]}
            alt="Luxury resort view in West Bengal"
            fill
            className="object-cover scale-105 group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* ABOUT LABEL */}
        <div className="col-span-2"> 
          <p className="uppercase tracking-[0.25em] text-sm text-resort-gold mb-4">
            — ABOUT US —
          </p>

          <h2 className="text-4xl lg:text-5xl font-cinzel tracking-[0.08em] leading-tight">
            {about.title}
          </h2>
        </div>

         {/* CENTER CONTENT */}
        <div>
          <p className="text-gray-300 mb-10 leading-relaxed">{about.text1}</p>

          <p className="text-gray-300 mb-10 leading-relaxed">{about.text2}</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src={about.images[1]}
            alt="Resort environment"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
