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
  // if (!open) return null;

  return (
    // <div className="fixed inset-0 z-[999] grid grid-cols-1 lg:grid-cols-3">

    <div
      className={`fixed inset-0 z-[999] grid grid-cols-1 lg:grid-cols-3
  transition-all duration-500 ease-in-out
  ${open ? "opacity-100 visible" : "opacity-0 invisible"}
`}
    >
      {/* CLOSE BUTTON */}
      {/* <button
        onClick={close}
        className="absolute top-8 right-10 z-[1000] w-12 h-12 flex items-center justify-center rounded-full bg-[#1e4b55] text-white text-2xl hover:scale-110 transition"
      >
        ✕
      </button> */}

      <button
        onClick={close}
        className={`absolute top-8 right-10 z-[1000] w-12 h-12 flex items-center justify-center rounded-full bg-[#1e4b55] text-white text-2xl transition-all duration-500
  ${open ? "opacity-100 scale-100" : "opacity-0 scale-75"}
`}
      >
        ✕
      </button>

      {/* LEFT MENU */}
      {/* <div className="bg-[#9d3535] text-white flex flex-col items-center justify-center gap-8 text-2xl font-serif"> */}

      <div
        className={`bg-[#1e4b55] text-white flex flex-col items-center justify-center gap-4 lg:gap-6 text-xl font-serif
  transform transition-all duration-700 ease-out
  ${open ? "translate-x-0" : "-translate-x-20"}
`}
      >
        <Image src="/logo.png" width={180} height={80} alt="logo" />

        <div onClick={close}>{navLink("/", "Home")}</div>

        {/* hide on large */}
        <div onClick={close}>
          {navLink("/about", "About")}
        </div>

        <div onClick={close}>{navLink("/rooms", "Rooms")}</div>

        {/* hide on large */}
        <div onClick={close} className="lg:hidden">
          {navLink("/banquets", "Banquet")}
        </div>

        {/* hide on large */}
        <button
          onClick={() => {
            openBranches();
            close();
          }}
          className="lg:hidden"
        >
          Branch
        </button>

        <div onClick={close}>{navLink("/gallery", "Gallery")}</div>
        <div onClick={close}>{navLink("/events", "Event")}</div>

        {/* hide on large */}
        <div onClick={close} className="lg:hidden">
          {navLink("/b2b", "B2B")}
        </div>

        <div onClick={close}>{navLink("/contact", "Contact")}</div>

        <button className="border border-white px-12 lg:px-28 py-3 text-sm mt-8 hover:bg-white hover:text-black transition">
          ENQUIRY NOW
        </button>
      </div>

      {/* CENTER ROOMS */}
      {/* <div className="bg-black text-white flex flex-col items-center justify-center px-10"> */}

      <div
        className={`hidden lg:flex bg-black text-white flex-col items-center justify-center px-10
  transform transition-all duration-700 delay-150
  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
`}
      >
        <h2 className="text-3xl mb-10 font-serif">Featured Rooms</h2>

        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {[
            { img: "/room1.jpg", name: "Suite Room", price: "₹5000" },
            {
              img: "/room2.jpeg",
              name: "Bamboo Cottage",
              price: "₹4000",
            },
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
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-500" />

              {/* text */}
              <div className="absolute inset-0 flex flex-col justify-end mb-2 px-4">
                <p className="text-base font-serif transform group-hover:translate-x-2 transition duration-500">
                  {room.name}
                </p>
                <span className="text-xs opacity-80 group-hover:opacity-100 transition">
                  {room.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTACT */}
      {/* <div className="relative flex flex-col items-center justify-center text-center px-10"> */}

      <div
        className={`hidden lg:flex relative flex-col items-center justify-center text-center px-10
  transform transition-all duration-700 delay-300
  ${open ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
`}
      >
        {/* background image */}
        <Image src="/macawss.jpg" fill alt="resort" className="object-cover" />

        {/* white overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* content */}
        <div className="relative z-10 text-black">
          <h2 className="text-3xl font-serif mb-2 text-[#9d3535]">La Macaw</h2>
          <p className="text-sm mb-12">Luxury Resort</p>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2 text-[#9d3535]">Location</h3>
              <p className="text-sm mb-12">
                Mani Casadona, West Block. Unit No - 2WS5A, 2nd Floor. Action
                Area 11 F, Newtown , Kolkata - 700160
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-[#9d3535]">Email Us</h3>
              <p className="text-sm">info@lamacawresort.com</p>
              <p className="text-sm mb-12">info@lamacawresort.com</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-[#9d3535]">Phone</h3>
              <p className="text-sm">+91 1234567809</p>
              <p className="text-sm">+91 9003758222</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
