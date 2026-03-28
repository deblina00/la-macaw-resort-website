"use client";

import { Phone, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE || "";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // return (
  //   <div className="fixed right-4 bottom-20 md:bottom-6 z-50 flex flex-col gap-3">
  //     {/* Call Button */}

  //     {phoneNumber && (
  //       <a
  //         aria-label="Call Resort"
  //         href={`tel:${phoneNumber}`}
  //         className="bg-[#6b3f1d] hover:bg-[#5a3417] text-white p-4 rounded shadow-lg transition"
  //       >
  //         <Phone size={20} />
  //       </a>
  //     )}

  //     {/* WhatsApp Button */}

  //     {whatsappNumber && (
  //       <a
  //         aria-label="Chat on WhatsApp"
  //         href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20book%20a%20room`}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="bg-green-500 hover:bg-green-600 text-white p-4 rounded shadow-lg transition"
  //       >
  //         <FaWhatsapp size={20} />
  //       </a>
  //     )}

  //     {/* Scroll to Top */}
  //     {show && (
  //       <button
  //         aria-label="Scroll to top"
  //         onClick={scrollToTop}
  //         className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded shadow-lg animate-fade-in transition"
  //       >
  //         <ArrowUp size={20} />
  //       </button>
  //     )}
  //   </div>
  // );

  return (
    <>
      {/* ================= DESKTOP FLOATING ================= */}
      <div className="hidden md:flex fixed right-4 bottom-20 md:bottom-6 z-50 flex-col gap-3">
        {phoneNumber && (
          <a
            aria-label="Call Resort"
            href={`tel:${phoneNumber}`}
            className="bg-[#6b3f1d] hover:bg-[#5a3417] text-white p-4 rounded shadow-lg transition"
          >
            <Phone size={20} />
          </a>
        )}

        {whatsappNumber && (
          <a
            aria-label="Chat on WhatsApp"
            href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20book%20a%20room`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded shadow-lg transition"
          >
            <FaWhatsapp size={20} />
          </a>
        )}

        {show && (
          <button
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded shadow-lg transition"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t flex justify-around items-center py-3">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex flex-col items-center text-blue-600 active:scale-95"
        >
          <FaFacebookF size={18} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex flex-col items-center text-pink-500 active:scale-95"
        >
          <FaInstagram size={18} />
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="flex flex-col items-center text-red-500 active:scale-95"
        >
          <FaYoutube size={18} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex flex-col items-center text-blue-600 active:scale-95"
        >
          <FaLinkedinIn size={18} />
        </a>

        {/* WhatsApp */}
        {whatsappNumber && (
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20book%20a%20room`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex flex-col items-center text-green-600 active:scale-95"
          >
            <FaWhatsapp size={18} />
          </a>
        )}

        {/* Call */}
        {phoneNumber && (
          <a
            href={`tel:${phoneNumber}`}
            aria-label="Call Resort"
            className="flex flex-col items-center text-resort-primary active:scale-95"
          >
            <Phone size={18} />
          </a>
        )}
      </div>
    </>
  );
}
