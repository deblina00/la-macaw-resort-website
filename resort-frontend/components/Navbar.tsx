"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import BranchModal from "@/components/branch/BranchModal";
import MegaMenuOverlay from "@/components/navigation/MegaMenuOverlay";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openBranches, setOpenBranches] = useState(false);

  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition duration-300 ${
        pathname === href
          ? "text-resort-gold"
          : "text-white hover:text-resort-gold"
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
      {/* <nav className="absolute top-8 md:top-10 left-0 w-full z-40 bg-transparent"> */}
      <nav className="absolute top-8 md:top-10 left-0 w-full z-40 bg-transparent">
        <div className="container flex items-center justify-between py-6 text-white">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-10">
            {/* MENU BUTTON */}
            <button
              className="text-white text-2xl hover:text-resort-gold transition"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle Menu"
            >
              {mobileMenu ? "✕" : "☰"}
            </button>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-8 text-sm tracking-wide font-medium">
              {navLink("/", "Home")}
              {navLink("/about", "About")}
              {navLink("/rooms", "Rooms")}
              {/* {navLink("/banquets", "Banquets")} */}
            </div>
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
          <div className="hidden lg:flex items-center gap-8 text-sm tracking-wide font-medium">
            <button
              onClick={() => setOpenBranches(true)}
              className="hover:text-resort-gold transition"
            >
              Properties
            </button>
            {navLink("/banquets", "Banquets")}
            {/* {navLink("/gallery", "Gallery")} */}
            {/* {navLink("/events", "Events")} */}
            {navLink("/b2b", "B2B")}
            {navLink("/contact", "Contact")}
          </div>
        </div>
      </nav>

      <BranchModal
        isOpen={openBranches}
        onClose={() => setOpenBranches(false)}
        branches={branches}
        currentPath={pathname}
      />
      <MegaMenuOverlay
        open={mobileMenu}
        close={() => setMobileMenu(false)}
        navLink={navLink}
        openBranches={() => setOpenBranches(true)}
      />
    </>
  );
}
