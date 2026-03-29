"use client";

import Image from "next/image";

interface Props {
  open: boolean;
  close: () => void;
  navLink: (href: string, label: string) => React.ReactNode;
  openBranches: () => void;
}

export default function MegaMenuOverlay({
  open,
  close,
  navLink,
  openBranches,
}: Props) {
  return (
    <div
      className={`fixed inset-0 z-[999] grid grid-cols-1 lg:grid-cols-3
      transition-all duration-500 ease-in-out
      ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={close}
        className={`absolute top-8 right-10 z-[1000] w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center 
        rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-2xl 
        hover:border-resort-gold hover:text-resort-gold transition-all duration-500
        ${open ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      >
        ✕
      </button>

      {/* LEFT MENU */}
      <div
        className={`relative flex flex-col items-center justify-center gap-4  lg:gap-6 text-xl font-serif
        text-white
        transform transition-all duration-700 ease-out
        ${open ? "translate-x-0" : "-translate-x-20"}`}
      >
        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1206]" />

        {/* GOLD GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.15),transparent_40%)]" />

        <div className="relative z-10 flex flex-col items-center lg:gap-6 gap-4">
          <Image
            src="/logo.png"
            width={180}
            height={80}
            alt="logo"
            style={{ width: "180px", height: "auto" }}
          />

          <div onClick={close}>{navLink("/", "Home")}</div>
          <div onClick={close}>{navLink("/about", "About")}</div>
          <div onClick={close}>{navLink("/rooms", "Rooms")}</div>

          <div onClick={close} className="lg:hidden">
            {navLink("/banquets", "Banquet")}
          </div>

          <button
            onClick={() => {
              openBranches();
              close();
            }}
            className="lg:hidden hover:text-resort-gold transition"
          >
            Properties
          </button>

          <div onClick={close}>{navLink("/gallery", "Gallery")}</div>
          <div onClick={close}>{navLink("/events", "Event")}</div>

          <div onClick={close} className="lg:hidden">
            {navLink("/b2b", "B2B")}
          </div>

          <div onClick={close}>{navLink("/contact", "Contact")}</div>

          {/* CTA BUTTON */}
          <button
            className="mt-8 px-12 py-3 text-sm border border-resort-gold text-resort-gold 
          hover:bg-resort-gold hover:text-black transition-all duration-300"
          >
            ENQUIRY NOW
          </button>
        </div>
      </div>

      {/* CENTER ROOMS */}
      <div
        className={`hidden lg:flex bg-black text-white flex-col items-center justify-center px-10
        transform transition-all duration-700 delay-150
        ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl mb-10 font-serif text-resort-gold">
          Featured Rooms
        </h2>

        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {[
            { img: "/room1.jpg", name: "Suite Room", price: "₹5000" },
            { img: "/room2.jpeg", name: "Bamboo Cottage", price: "₹4000" },
            { img: "/room3.jpg", name: "Premium Cottage", price: "₹4500" },
            { img: "/room4.jpg", name: "Mud House", price: "₹4500" },
          ].map((room, i) => (
            <div
              key={i}
              className="relative h-32 overflow-hidden group cursor-pointer"
            >
              <Image
                src={room.img}
                fill
                alt={room.name}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end mb-2 px-4">
                <p className="text-base font-serif group-hover:text-resort-gold transition">
                  {room.name}
                </p>
                <span className="text-xs opacity-80">{room.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTACT */}
      <div
        className={`hidden lg:flex relative flex-col items-center justify-center text-center px-10
        transform transition-all duration-700 delay-300
        ${open ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
      >
        <Image
          src="/macawss.jpg"
          fill
          alt="resort"
          sizes="33vw"
          className="object-cover"
        />

        {/* DARK GOLD OVERLAY */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        <div className="relative z-10 text-white">
          <h2 className="text-3xl font-serif mb-2 text-resort-gold">
            La Macaw
          </h2>
          <p className="text-sm mb-12 text-gray-300">Luxury Resort</p>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2 text-resort-gold">Location</h3>
              <p className="text-sm text-gray-300">
                Mani Casadona, Newtown, Kolkata - 700160
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-resort-gold">Email</h3>
              <p className="text-sm text-gray-300">info@lamacawresort.com</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-resort-gold">Phone</h3>
              <p className="text-sm text-gray-300">+91 1234567809</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
