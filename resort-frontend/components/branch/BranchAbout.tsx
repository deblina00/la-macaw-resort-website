import Image from "next/image";
import { About } from "@/types/branch";

type Props = {
  about: About;
};

export default function BranchAbout({ about }: Props) {
  return (
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative h-[520px] rounded-xl overflow-hidden">
          <Image
            src={about.images[0]}
            alt="Resort view"
            fill
            className="object-cover"
          />
        </div>

        {/* CENTER TEXT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            About Resort
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif leading-tight mb-6">
            {about.title}
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {about.text1}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {about.text2}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[420px] rounded-xl overflow-hidden">
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