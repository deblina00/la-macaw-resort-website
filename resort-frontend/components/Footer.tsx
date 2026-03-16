import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d0d0d] to-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-14">
        {/* Brand */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              width={140}
              height={50}
              alt="La Macaw Resort"
              className="mb-4"
            />
          </Link>

          <p className="text-gray-400 text-xs leading-relaxed mb-12 max-w-xs">
            Experience luxury in the heart of nature across our three beautiful
            resort destinations in West Bengal.
          </p>

          <div className="flex gap-4">
            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
              <FaFacebookF size={14} />
            </a>

            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
              <FaInstagram size={14} />
            </a>

            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
              <FaYoutube size={14} />
            </a>

            <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-serif tracking-[0.2em] uppercase mb-6 text-gray-200">
            Quick Links
          </h3>

          <ul className="space-y-6 text-gray-400 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-white transition">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/banquets" className="hover:text-white transition">
                Banquets
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition">
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-base font-serif tracking-[0.2em] uppercase mb-6 text-gray-200">
            Our Services
          </h3>

          <ul className="space-y-6 text-gray-400 text-sm">
            <li>
              <Link href="/gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/b2b" className="hover:text-white transition">
                B2B
              </Link>
            </li>
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h3 className="text-base tracking-[0.2em] uppercase mb-6 font-serif text-gray-200">
            Our Branches
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-yellow-400 mt-1" />
              <Link
                href="/branch/tajpur"
                className="hover:text-white transition"
              >
                La Macaw Resort Tajpur, West Bengal
              </Link>
            </li>

            <li className="flex items-start gap-3">
              <MdLocationOn className="text-yellow-400 mt-1" />
              <Link
                href="/branch/joypur"
                className="hover:text-white transition"
              >
                La Macaw Aranyak Eco Resort, West Bengal
              </Link>
            </li>

            <li className="flex items-start gap-3">
              <MdLocationOn className="text-yellow-400 mt-1" />
              <Link
                href="/branch/purulia"
                className="hover:text-white transition"
              >
                La Macaw Resort Purulia, West Bengal
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-serif tracking-[0.2em] uppercase mb-6 text-gray-200">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-400 text-sm">
            <p className="flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan-900/60 text-cyan-400">
                <FaHome />
              </span>
              Howrah, West Bengal
            </p>

            <p className="flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan-900/60 text-cyan-400">
                <MdPhone />
              </span>
              +91 98765 43210
            </p>

            <p className="flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan-900/60 text-cyan-400">
                <MdEmail />
              </span>
              info@lamacaw.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-14 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} La Macaw Resorts. All rights reserved.
      </div>
    </footer>
  );
}
