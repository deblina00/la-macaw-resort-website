"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import BranchModal from "@/components/branch/BranchModal";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openBranches, setOpenBranches] = useState(false);

  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition duration-300 ${
        pathname === href
          ? "text-resort-secondary"
          : "text-white hover:text-resort-secondary"
      }`}
    >
      {label}
    </Link>
  );

  const branches = [
    {
      name: "La Macaw Tajpur",
      location: "Tajpur, West Bengal",
      href: "/branch/tajpur",
      img: "/Tajpur.jpeg",
    },
    {
      name: "La Macaw Joypur",
      location: "Joypur, West Bengal",
      href: "/branch/joypur",
      img: "/Joypur.jpeg",
    },
    {
      name: "La Macaw Purulia",
      location: "Purulia, West Bengal",
      href: "/branch/purulia",
      img: "/Purulia.jpeg",
    },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-9">
        <div className="container flex items-center justify-between">
          {/* LEFT MENU */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {/* MOBILE BUTTON */}
            <button
              className=" text-white text-2xl"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle Menu"
            >
              {mobileMenu ? "✕" : "☰"}
            </button>
            {navLink("/", "Home")}
            {navLink("/about", "About")}
            {navLink("/rooms", "Rooms")}
            {/* {navLink("/offers", "Offers")} */}
            {navLink("/banquets", "Banquets")}
          </div>

          {/* LOGO */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={150}
                height={60}
                alt="La Macaw Resort"
                priority
              />
            </Link>
          </div>

          {/* RIGHT MENU */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => setOpenBranches(true)}
              className="text-white hover:text-resort-secondary transition"
            >
              Branches
            </button>

            {navLink("/gallery", "Gallery")}
            {navLink("/events", "Events")}
            {navLink("/b2b", "B2B")}
            {navLink("/contact", "Contact")}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className=" lg:hidden text-white text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle Menu"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>
        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="lg:hidden bg-black text-white border-t border-white/10">
            <div className="container flex flex-col py-6 gap-4 text-sm">
              {navLink("/", "Home")}
              {navLink("/about", "About")}
              {navLink("/rooms", "Rooms")}
              {/* {navLink("/offers", "Offers")} */}
              {navLink("/banquets", "Banquets")}

              <button
                onClick={() => {
                  setOpenBranches(true);
                  setMobileMenu(false);
                }}
                className="text-left hover:text-resort-secondary transition"
              >
                Branches
              </button>

              {navLink("/gallery", "Gallery")}
              {navLink("/events", "Events")}
              {navLink("/b2b", "B2B")}
              {navLink("/contact", "Contact")}
            </div>
          </div>
        )}
      </nav>

      <BranchModal
        isOpen={openBranches}
        onClose={() => setOpenBranches(false)}
        branches={branches}
        currentPath={pathname}
      />
    </>
  );
}
