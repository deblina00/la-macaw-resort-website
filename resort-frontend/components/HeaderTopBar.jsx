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
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent border-b border-white py-2">
      <div className="container flex flex-col md:flex-row justify-between items-center text-white text-xs">
        {/* Social */}
        <div className="flex items-center gap-4 ">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-resort-secondary transition" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-resort-secondary transition" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="hover:text-resort-secondary transition" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-resort-secondary transition" />
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0">
          <span className="flex items-center gap-2">
            <Mail size={16} />
            info@lamacawresort.com
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={16} />
            Tajpur, West Bengal
          </span>
        </div>
      </div>
    </div>
  );
}
