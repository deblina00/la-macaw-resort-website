import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6  grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              width={110}
              height={40}
              alt="La Macaw Resort"
              className="mb-6"
            />
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Experience luxury in the heart of nature across our three beautiful
            resort destinations in West Bengal.
          </p>

          <div className="flex gap-4 text-lg">
            <a className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition">
              <FaFacebookF />
            </a>

            <a className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition">
              <FaInstagram />
            </a>

            <a className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
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
              <Link href="/gallery" className="hover:text-white transition">
                Gallery
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
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Branches</h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-yellow-400 mt-1" />
              <Link
                href="/branch/tajpur"
                className="hover:text-white transition"
              >
                La Macaw Tajpur, West Bengal
              </Link>
            </li>

            <li className="flex items-start gap-2">
              <MdLocationOn className="text-yellow-400 mt-1" />
              <Link
                href="/branch/joypur"
                className="hover:text-white transition"
              >
                La Macaw Joypur, West Bengal
              </Link>
            </li>

            <li className="flex items-start gap-2">
              <MdLocationOn className="text-yellow-400 mt-1" />
              <Link
                href="/branch/purulia"
                className="hover:text-white transition"
              >
                La Macaw Purulia, West Bengal
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact</h3>

          <div className="space-y-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <MdPhone className="text-yellow-400" />
              +91 98765 43210
            </p>

            <p className="flex items-center gap-2">
              <MdEmail className="text-yellow-400" />
              info@lamacaw.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 text-center text-sm py-6 text-gray-500">
        © {new Date().getFullYear()} La Macaw Resorts. All rights reserved.
      </div>
    </footer>
  );
}
