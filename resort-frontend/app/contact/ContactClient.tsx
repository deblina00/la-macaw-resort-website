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

      // if (res.data.whatsappLink) window.open(res.data.whatsappLink, "_blank");

      if (res.data.whatsappLink) {
        const link = document.createElement("a");
        link.href = res.data.whatsappLink;
        link.target = "_blank";
        link.click();
      }

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
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/contact-banner.jpg"
          fill
          priority
          alt="Contact La Macaw Resort"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — CONTACT LA MACAW —
          </p>

          <h1 className="text-4xl md:text-5xl font-cinzel mb-6 leading-tight">
            PLAN YOUR PERFECT STAY
          </h1>
          
          <p className="text-gray-300">
            Whether you&apos;re planning a relaxing getaway, destination
            wedding, or corporate retreat, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* GET IN TOUCH WITH US */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading row */}
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <p className="text-sm tracking-[0.3em] text-resort-gold mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-resort-gold"></span>
                Contact Us
              </p>

              <h2 className="font-cinzel text-3xl md:text-4xl leading-tight">
                GET IN TOUCH WITH US
              </h2>
            </div>

            <p className="text-gray-400">
              Connect with our hospitality team for bookings, weddings,
              corporate retreats, or special celebrations across our resort
              destinations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#161616] border border-white/10 hover:border-resort-gold transition p-10 text-center">
              <p className="text-3xl mb-6">✉</p>
              <h4 className="font-cinzel text-xl mb-4 text-resort-gold">MAIL US</h4>
              <p className="text-gray-400 text-sm">sales.lmc2018@gmail.com</p>
              <p className="text-gray-400 text-sm">lamacawresort@gmail.com</p>
            </div>

            <div className="bg-[#161616] border border-white/10 hover:border-resort-gold transition p-10 text-center">
              <p className="text-3xl mb-6">🏢</p>
              <h4 className="font-cinzel text-xl mb-4 text-resort-gold">VISIT OUR OFFICE</h4>
              <p className="text-gray-400 text-sm">
                Mani Casadona, Newtown
                <br />
                Kolkata - 700160
              </p>
            </div>

            <div className="bg-[#161616] border border-white/10 hover:border-resort-gold transition p-10 text-center">
              <p className="text-3xl mb-6">📍</p>
              <h4 className="font-cinzel text-xl mb-4 text-resort-gold">VISIT OUR RESORT</h4>
              <p className="text-gray-400 text-sm">
                Tajpur / Joypur / Purulia
                <br />
                West Bengal
              </p>
            </div>

            <div className="bg-[#161616] border border-white/10 hover:border-resort-gold transition p-10 text-center">
              <p className="text-3xl mb-6">📞</p>
              <h4 className="font-cinzel text-xl mb-4 text-resort-gold">CALL US</h4>
              <p className="text-gray-400 text-sm">+91 96744 07000</p>
              <p className="text-gray-400 text-sm">+91 90512 11212</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="bg-black text-white py-24 px-6">
        {/* ENQUIRY FORM */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-cinzel text-4xl text-center mb-14">
            LET’S CREATE YOUR NEXT ESCAPE
          </h3>

          <form onSubmit={submit} className="space-y-4">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
              />
              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
              />
            </div>

            {/* Phone + Branch */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
              />
              <select
                value={form.branch}
                onChange={(e) => setForm({ ...form, branch: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
              >
                <option value="" className="text-black">
                  Select Branch
                </option>
                <option value="Tajpur" className="text-black">
                  Tajpur
                </option>
                <option value="Joypur" className="text-black">
                  Joypur
                </option>
                <option value="Purulia" className="text-black">
                  Purulia
                </option>
              </select>
            </div>

            {/* CheckIn + CheckOut */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
                onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
              />
              <input
                type="date"
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
                onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
              />
            </div>

            {/* Guests + Rooms */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Guests"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
              />
              <input
                placeholder="Rooms"
                value={form.rooms}
                onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
              />
            </div>

            {/* Banquet + Lawn */}
            <div className="flex gap-6 text-gray-300">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.banquet}
                  onChange={(e) =>
                    setForm({ ...form, banquet: e.target.checked })
                  }
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
              className="w-full bg-transparent border-b border-white/30 py-3 outline-none placeholder-gray-400 focus:border-resort-gold"
            />

            <button
              disabled={loading}
              className="w-full inline-block
                px-8 py-3 
                border border-resort-gold 
                text-resort-gold 
                tracking-widest text-sm
                hover:bg-resort-gold 
                hover:text-black 
                transition-all duration-300"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
