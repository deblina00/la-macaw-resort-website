import { Location } from "@/types/branch";

type Props = {
  location: Location;
};

export default function BranchLocation({ location }: Props) {
  return (
    <section className="relative bg-[#0b0909] text-white py-24 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-lg">

          <p className="tracking-[0.35em] text-gray-400 text-sm mb-4">
            — LOCATION —
          </p>

          <h2 className="text-4xl lg:text-5xl font-cinzel mb-8 leading-tight">
            WHERE YOU’LL
            <br />
            FIND US
          </h2>

          <p className="text-gray-400 whitespace-pre-line leading-relaxed">
            {location.address}
          </p>

        </div>

        {/* MAP CARD */}
        <div className="relative">

          <div className="absolute -inset-4 bg-white/5 blur-2xl opacity-40" />

          <div className="relative h-[420px] overflow-hidden border border-white/10 shadow-2xl">

            <iframe
              src={`https://maps.google.com/maps?q=${location.map}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </section>
  );
}