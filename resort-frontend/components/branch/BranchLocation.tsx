import { Location } from "@/types/branch";

type Props = {
  location: Location;
};

export default function BranchLocation({ location }: Props) {

  return (
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="tracking-[0.3em] text-gray-400 text-sm mb-4">
           — LOCATION —
          </p>

          <h2 className="text-4xl font-cinzel mb-6">
            WHERE YOU’LL FIND US
          </h2>

          <p className="text-gray-400 whitespace-pre-line leading-relaxed">
            {location.address}
          </p>

        </div>

        <div className="h-[420px] overflow-hidden border border-white/10">

          <iframe
            src={`https://maps.google.com/maps?q=${location.map}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
          />

        </div>

      </div>

    </section>
  );
}