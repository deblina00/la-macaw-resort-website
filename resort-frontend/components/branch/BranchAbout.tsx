import Image from "next/image";
import { About } from "@/types/branch";

type Props = {
  about: About;
};

export default function BranchAbout({ about }: Props) {
  return (
    <section className="bg-resort-black text-white py-24" id="about">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* STICKY IMAGE */}
        <div className="relative h-[500px] lg:h-[80vh] lg:sticky top-24">
          <Image
            src={about.images[0]}
            alt="Resort view"
            fill
            className="object-cover"
          />
        </div>

        {/* SCROLL CONTENT */}
        <div className="space-y-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-resort-gold mb-4">
              — ABOUT US —
            </p>

            <h2 className="text-4xl lg:text-5xl font-cinzel leading-tight">
              {about.title}
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed">{about.text1}</p>

          <p className="text-gray-300 leading-relaxed">{about.text2}</p>

          {/* SECOND IMAGE INLINE */}
          <div className="relative h-[350px]">
            <Image
              src={about.images[1]}
              alt="Resort environment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
