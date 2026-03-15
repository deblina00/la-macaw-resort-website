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
            BUSINESS PARTNERSHIP
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            B2B Collaboration
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Partner with La Macaw Resort to deliver unforgettable travel
            experiences and premium hospitality for your clients.
          </p>
        </div>
      </section>

      {/* CONTENT + FORM */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-serif mb-6 mt-10">Partner With Us</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Join hands with La Macaw Resort to create exceptional travel
              experiences for your clients. Our resorts combine luxury,
              comfort and breathtaking surroundings to ensure every stay
              becomes a memorable journey.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              As a B2B partner, you gain access to exclusive rates,
              dedicated support and customized packages tailored for travel
              agencies and corporate planners.
            </p>

            {/* CONTACT BOX */}
            <div className="border border-white/10 p-8 bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-6">Partner Contact</h3>
              <p className="text-gray-300 mb-4">
                Our partnership team is ready to assist you.
              </p>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong>Phone</strong><br />
                  +91 90519 50030 | 92309 75069
                </p>
                <p>
                  <strong>Email</strong><br />
                  sales.lmc2018@gmail.com<br />
                  lamacawresort@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-white/10 bg-white/5 backdrop-blur p-10">
            <h3 className="text-2xl font-serif mb-4">Become a Partner</h3>
            <p className="text-gray-400 mb-8">
              Share your details and our team will reach out to discuss
              collaboration opportunities and tailored partnership packages.
            </p>

            <form onSubmit={submit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="Agency Name"
                  value={form.agencyName}
                  onChange={(e) =>
                    setForm({ ...form, agencyName: e.target.value })
                  }
                  className="bg-black/40 border border-white/10 p-3 w-full focus:outline-none focus:border-white"
                />
                <input
                  placeholder="Contact Person"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-black/40 border border-white/10 p-3 w-full focus:outline-none focus:border-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-black/40 border border-white/10 p-3 w-full focus:outline-none focus:border-white"
                />
                <input
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-black/40 border border-white/10 p-3 w-full focus:outline-none focus:border-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  placeholder="City"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="bg-black/40 border border-white/10 p-3 w-full"
                />
                <input
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  className="bg-black/40 border border-white/10 p-3 w-full"
                />
              </div>

              <textarea
                placeholder="Address"
                rows={2}
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="bg-black/40 border border-white/10 p-3 w-full"
              />

              <textarea
                placeholder="Message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-black/40 border border-white/10 p-3 w-full"
              />

              <button
                disabled={loading}
                className="w-full bg-white text-black py-3 hover:bg-gray-200 transition"
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