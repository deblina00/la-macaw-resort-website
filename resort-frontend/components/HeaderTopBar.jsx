"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { Mail, MapPin } from "lucide-react";

export default function HeaderTopBar() {
  return (
    <div className="hidden md:block absolute top-0 left-0 w-full z-50 bg-transparent border-b border-white/30 py-2">
      <div className="container flex flex-col md:flex-row justify-between items-center text-white text-xs">
        {/* Social */}
        <div className="flex items-center gap-4 ">
          <a
            href="https://www.facebook.com/profile.php?id=61587016558068"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-resort-gold transition" />
          </a>

          <a
            href="https://www.instagram.com/lamacawresort2025?igsh=d3A5czl3NGxoMGpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-resort-gold transition" />
          </a>

          <a
            href="https://www.youtube.com/@LaMacawResort"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="hover:text-resort-gold transition" />
          </a>

          <a
            href="https://www.linkedin.com/company/la-macaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-resort-gold transition" />
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0 text-white/80">
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-resort-gold" />
            info@lamacawresort.com
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-resort-gold" />
            Howrah, West Bengal
          </span>
        </div>
      </div>
    </div>
  );
}
