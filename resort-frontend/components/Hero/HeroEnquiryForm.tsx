"use client";

import { useState } from "react";

export default function HeroEnquiryForm() {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    rooms: 1,
    branch: "Tajpur",
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/enquiry/guest`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.whatsappLink) {
        window.open(data.whatsappLink, "_blank");
      }

      alert("Enquiry sent successfully");
      setForm(initialForm);

    } catch {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 translate-y-1/2 w-[95%] max-w-7xl">

      <form
        onSubmit={submit}
        className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 text-white"
      >

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="col-span-2 md:col-span-1 px-3 py-2 rounded bg-white text-black"
        />

        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="col-span-2 md:col-span-1 px-3 py-2 rounded bg-white text-black"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="col-span-2 md:col-span-1 px-3 py-2 rounded bg-white text-black"
        />

        <input
          type="date"
          name="checkIn"
          value={form.checkIn}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-white text-black"
        />

        <input
          type="date"
          name="checkOut"
          value={form.checkOut}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-white text-black"
        />

        <input
          type="number"
          name="rooms"
          value={form.rooms}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-white text-black"
        />

        <input
          type="number"
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-white text-black"
        />

        <select
          name="branch"
          value={form.branch}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-white text-black"
        >
          <option>Tajpur</option>
          <option>Joypur</option>
          <option>Purulia</option>
        </select>

        <button
          disabled={loading}
          className="bg-resort-secondary hover:bg-resort-accent text-black font-semibold px-6 py-2 rounded"
        >
          {loading ? "Sending..." : "SEND"}
        </button>

      </form>

    </div>
  );
}