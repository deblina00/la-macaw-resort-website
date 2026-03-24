"use client";

import { useState } from "react";

export default function HeroEnquiryForm() {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    rooms: "",
    branch: "Tajpur",
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/enquiry/guest`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      if (!res.ok) {
        alert("Failed to send enquiry");
        return;
      }

      const data = await res.json();

      // const data = await res.json();

      // if (data.whatsappLink) {
      //   window.open(data.whatsappLink, "_blank");
      // }

      if (data.whatsappLink) {
        const link = document.createElement("a");
        link.href = data.whatsappLink;
        link.target = "_blank";
        link.click();
      }

      alert("Enquiry sent successfully");
      setForm(initialForm);
    } catch {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="absolute z-30 bottom-20 left-1/2 -translate-x-1/2 translate-y-1/2 w-[95%] max-w-7xl">
      <form
        onSubmit={submit}
        className="hidden lg:flex items-center gap-4 px-7 py-7 bg-white/20 backdrop-blur-2xl border border-white/20 shadow-xl text-white"
      >
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="flex-1 min-w-[120px] bg-transparent px-3 py-2 focus:outline-none border-b border-white/40 focus:border-white placeholder-white/70"
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="flex-1 min-w-[120px] bg-transparent px-3 py-2 focus:outline-none border-b border-white/40 focus:border-white placeholder-white/70"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="flex-1 min-w-[120px] bg-transparent px-3 py-2 focus:outline-none border-b border-white/40 focus:border-white placeholder-white/70"
        />

        <input
          type="date"
          name="checkIn"
          value={form.checkIn}
          onChange={handleChange}
          className="flex-1 min-w-[120px] bg-transparent px-3 py-2 focus:outline-none border-b border-white/40 focus:border-white placeholder-white/70 text-sm"
        />

        <input
          type="date"
          name="checkOut"
          value={form.checkOut}
          onChange={handleChange}
          className="flex-1 min-w-[120px] bg-transparent px-3 py-2 focus:outline-none border-b border-white/40 focus:border-white placeholder-white/70 text-sm"
        />

        <input
          type="number"
          name="rooms"
          placeholder="Rooms"
          value={form.rooms}
          onChange={handleChange}
          className="w-[90px] bg-transparent px-3 py-2 focus:outline-none border-b border-white/40 focus:border-white placeholder-white/70"
        />

        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={form.guests}
          onChange={handleChange}
          className="w-[90px] bg-transparent px-3 py-2 focus:outline-none border-b border-white/40 focus:border-white placeholder-white/70"
        />

        <select
          name="branch"
          value={form.branch}
          onChange={handleChange}
          className="flex-1 min-w-[120px] bg-transparent px-3 py-2 focus:outline-none border-b border-white/40 focus:border-white placeholder-white/70"
        >
          <option className="text-black">Tajpur</option>
          <option className="text-black">Joypur</option>
          <option className="text-black">Purulia</option>
        </select>

        <button
          disabled={loading}
          className="border border-white px-8 py-2 font-semibold tracking-wide hover:bg-white hover:text-black transition"
        >
          {loading ? "Sending..." : "SEND"}
        </button>
      </form>
    </div>
  );
}
