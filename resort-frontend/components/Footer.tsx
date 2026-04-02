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
    <footer className="bg-resort-black text-white border-t border-resort-gold/20 py-10 ">
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
            <a
              href="https://www.facebook.com/profile.php?id=61587016558068"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-resort-gold/30 text-resort-gold hover:bg-resort-gold hover:text-black transition"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://www.instagram.com/lamacawresort2025?igsh=d3A5czl3NGxoMGpt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-resort-gold/30 text-resort-gold hover:bg-resort-gold hover:text-black transition"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="https://www.youtube.com/@LaMacawResort"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-resort-gold/30 text-resort-gold hover:bg-resort-gold hover:text-black transition"
            >
              <FaYoutube size={14} />
            </a>

            <a
              href="https://www.linkedin.com/company/la-macaw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-resort-gold/30 text-resort-gold hover:bg-resort-gold hover:text-black transition"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-serif tracking-[0.2em] uppercase mb-6 text-resort-gold">
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
            <li>
              <Link href="/careers" className="hover:text-white transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-base font-serif tracking-[0.2em] uppercase mb-6 text-resort-gold">
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
            <li>
              <Link href="/offers" className="hover:text-white transition">
                Offers
              </Link>
            </li>
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h3 className="text-base font-serif tracking-[0.2em] uppercase mb-6 text-resort-gold">
            Our Branches
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-resort-gold mt-1" />
              <Link
                href="/branch/tajpur"
                className="hover:text-white transition"
              >
                La Macaw Resort Tajpur, West Bengal
              </Link>
            </li>

            <li className="flex items-start gap-3">
              <MdLocationOn className="text-resort-gold mt-1" />
              <Link
                href="/branch/joypur"
                className="hover:text-white transition"
              >
                La Macaw Aranyak Eco Resort, West Bengal
              </Link>
            </li>

            <li className="flex items-start gap-3">
              <MdLocationOn className="text-resort-gold mt-1" />
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
          <h3 className="text-base font-serif tracking-[0.2em] uppercase mb-6 text-resort-gold">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-400 text-sm">
            <p className="flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-resort-gold/10 text-resort-gold">
                <FaHome />
              </span>
              Howrah, West Bengal
            </p>

            <p className="flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-resort-gold/10 text-resort-gold">
                <MdPhone />
              </span>
              +91  98748 34000
            </p>

            <p className="flex items-center gap-4">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-resort-gold/10 text-resort-gold">
                <MdEmail />
              </span>
              info@lamacawresort.com
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
