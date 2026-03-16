"use client";

import { useState } from "react";
import api from "@/services/api";
import Image from "next/image";

export default function B2BClient() {
  const initialForm = {
    agencyName: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    address: "",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/enquiry/b2b", form);
      alert("B2B enquiry submitted successfully");
      setForm(initialForm);
    } catch {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[520px] flex items-center justify-center text-white">
        <Image
          src="/gallery-hero.jpg"
          fill
          priority
          alt="B2B Partnership"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center px-6">
          <p className="tracking-[0.35em] text-gray-300 mb-4 text-sm">
            — BUSINESS PARTNERSHIP —
          </p>
          <h1 className="text-4xl md:text-5xl font-cinzel mb-6">
            B2B COLLABORATIONS
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Partner with La Macaw Resort to deliver unforgettable travel
            experiences and premium hospitality for your clients.
          </p>
        </div>
      </section>

      {/* CONTENT + FORM */}
      <section className="relative bg-gradient-to-b from-[#0b0909] via-black to-[#0b0909] text-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[140px]"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-cinzel mb-6 mt-10 leading-tight">
              Partner With Us
            </h2>

            <div className="w-20 h-[2px] bg-yellow-500 mb-8"></div>

            <p className="text-gray-400 mb-6 leading-relaxed text-[15px]">
              Join hands with La Macaw Resort to create exceptional travel
              experiences for your clients. Our resorts combine luxury, comfort
              and breathtaking surroundings to ensure every stay becomes a
              memorable journey.
            </p>
            <p className="text-gray-400 mb-12 leading-relaxed text-[15px]">
              As a B2B partner, you gain access to exclusive rates, dedicated
              support and customized packages tailored for travel agencies and
              corporate planners.
            </p>

            {/* CONTACT BOX */}
            <div className="border border-white/10 p-10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 blur-3xl"></div>
              <h3 className="text-2xl font-semibold mb-6">Partner Contact</h3>
              <p className="text-gray-300 mb-4">
                Our partnership team is ready to assist you.
              </p>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong>Phone</strong>
                  <br />
                  +91 90519 50030 | 92309 75069
                </p>
                <p>
                  <strong>Email</strong>
                  <br />
                  sales.lmc2018@gmail.com
                  <br />
                  lamacawresort@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="relative border border-white/10 bg-white/5 backdrop-blur-xl p-12 rounded-2xl shadow-2xl overflow-hidden">
            <h3 className="text-3xl font-cinzel mb-4">Become a Partner</h3>
            <p className="text-gray-400 mb-8">
              Share your details and our team will reach out to discuss
              collaboration opportunities and tailored partnership packages.
            </p>

            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-yellow-500/10 blur-3xl"></div>
            <form onSubmit={submit} className="relative space-y-5 z-10">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Agency Name"
                  value={form.agencyName}
                  onChange={(e) =>
                    setForm({ ...form, agencyName: e.target.value })
                  }
                  className="bg-black/30 border border-white/10 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:border-yellow-500 transition"
                />
                <input
                  placeholder="Contact Person"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-black/30 border border-white/10 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-black/30 border border-white/10 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:border-yellow-500 transition"
                />
                <input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-black/30 border border-white/10 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="bg-black/30 border border-white/10 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:border-yellow-500 transition"
                />
                <input
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={(e) =>
                    setForm({ ...form, pincode: e.target.value })
                  }
                  className="bg-black/30 border border-white/10 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:border-yellow-500 transition"
                />
              </div>

              <textarea
                placeholder="Address"
                rows={1}
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="bg-black/30 border border-white/10 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:border-yellow-500 transition"
              />

              <textarea
                placeholder="Message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-black/30 border border-white/10 px-4 py-3 w-full rounded-md text-sm focus:outline-none focus:border-yellow-500 transition"
              />

              <button
                disabled={loading}
                className="w-full border border-white py-3 tracking-widest hover:bg-white hover:text-black transition"
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
