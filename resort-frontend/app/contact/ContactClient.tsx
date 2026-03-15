"use client";

import { useState } from "react";
import api from "@/services/api";
import Image from "next/image";

export default function ContactClient() {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    branch: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    rooms: "",
    banquet: false,
    lawn: false,
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/enquiry/event", form);

      if (res.data.whatsappLink) window.open(res.data.whatsappLink, "_blank");

      alert("Enquiry submitted successfully");
      setForm(initialForm);
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[520px] flex items-center justify-center text-white">
        <Image
          src="/gallery-hero.jpg"
          fill
          priority
          alt="Contact La Macaw Resort"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center px-6">
          <p className="tracking-[0.35em] text-gray-300 mb-4 text-sm">
            CONTACT LA MACAW
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Plan Your Perfect Stay
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Whether you&apos;re planning a relaxing getaway, destination wedding,
            or corporate retreat, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-black text-white py-20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Let’s Create Your Next Escape
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Connect with our hospitality specialists for room bookings,
            resort events, weddings, or group travel experiences. We ensure
            seamless planning and exceptional service tailored to your needs.
          </p>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="bg-black text-white pb-24 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16">
          {/* CONTACT INFO */}
          <div className="space-y-10">
            <div className="border border-white/10 p-8 rounded-2xl bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-4">Kolkata Office</h3>
              <p className="text-gray-400">
                Mani Casadona, West Block. Unit No - 2WS5A,
                2nd Floor, Action Area II F, Newtown, Kolkata - 700160
              </p>
            </div>

            <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-semibold mb-4">Booking Assistance</h3>
              <p className="text-gray-400">+91 96744 07000</p>
              <p className="text-gray-400 mt-2">Booking Confirmation: +91 90512 11212</p>
            </div>

            <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
              <p className="text-gray-400">sales.lmc2018@gmail.com</p>
              <p className="text-gray-400">lamacawresort@gmail.com</p>
              <p className="text-gray-400">hello@lamacaw.com</p>
            </div>

            <div className="border border-white/10 p-8 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <p className="text-gray-400">Instagram • Facebook • YouTube</p>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="border border-white/10 bg-white/5 backdrop-blur p-10 rounded-2xl">
            <h3 className="text-3xl font-serif mb-6">Event Enquiry</h3>

            <form onSubmit={submit} className="space-y-4">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
                />
                <input
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
                />
              </div>

              {/* Phone + Branch */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
                />
                <select
                  value={form.branch}
                  onChange={(e) => setForm({ ...form, branch: e.target.value })}
                  className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
                >
                  <option value="">Select Branch</option>
                  <option value="Tajpur">Tajpur</option>
                  <option value="Joypur">Joypur</option>
                  <option value="Purulia">Purulia</option>
                </select>
              </div>

              {/* CheckIn + CheckOut */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
                  onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                />
                <input
                  type="date"
                  className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
                  onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                />
              </div>

              {/* Guests + Rooms */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Guests"
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
                />
                <input
                  placeholder="Rooms"
                  value={form.rooms}
                  onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                  className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
                />
              </div>

              {/* Banquet + Lawn */}
              <div className="flex gap-6 text-gray-300">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.banquet}
                    onChange={(e) => setForm({ ...form, banquet: e.target.checked })}
                  />
                  Banquet
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.lawn}
                    onChange={(e) => setForm({ ...form, lawn: e.target.checked })}
                  />
                  Lawn
                </label>
              </div>

              <textarea
                rows={4}
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-black/40 border border-white/10 rounded-lg p-3 w-full"
              />

              <button
                disabled={loading}
                className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-200 transition"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}