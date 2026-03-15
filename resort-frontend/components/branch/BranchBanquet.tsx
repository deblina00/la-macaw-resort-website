import api from "@/services/api";
import BanquetCard from "../banquet/BanquetCard";
import { Banquet } from "@/types/banquet";

type Props = {
  branchId: string;
};

export default async function BranchBanquet({ branchId }: Props) {

  let banquets: Banquet[] = [];

  try {
    const res = await api.get(`/banquets?branchId=${branchId}`);
    banquets = res.data;
  } catch (err) {
    console.error(err);
  }

  return (
    <section className="bg-black text-white py-20">

      <div className="container mx-auto px-6">

        <div className="text-center mb-16">

          <p className="tracking-[0.3em] text-gray-400 text-sm mb-3">
            EVENTS & CELEBRATIONS
          </p>

          <h2 className="text-4xl font-serif">
            Banquets & Venues
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Celebrate weddings, corporate gatherings, and private
            celebrations in beautifully designed banquet spaces.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {banquets.slice(0, 3).map((banquet) => (
            <BanquetCard key={banquet._id} banquet={banquet} />
          ))}

        </div>

      </div>

    </section>
  );
}