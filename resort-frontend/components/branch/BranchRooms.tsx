import api from "@/services/api";
import RoomCard from "@/components/rooms/RoomCard";
import { Room } from "@/types/room";

type Props = {
  branchId: string;
};

export default async function BranchRooms({ branchId }: Props) {

  let rooms: Room[] = [];


  try {
    const res = await api.get(`/rooms?branchId=${branchId}`);
    rooms = res.data;
  } catch (err) {
    console.error(err);
  }

  return (
  <section className="bg-black text-white py-20">

  <div className="container mx-auto px-6">

    <div className="text-center mb-16">
      <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
       — ACCOMODATION —
      </p>

      <h2 className="text-4xl font-cinzel">
        OUR RESORT ROOMS
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {rooms.slice(0,3).map((room) => (
        <RoomCard key={room._id} room={room} />
      ))}
    </div>

  </div>

</section>
  );
}