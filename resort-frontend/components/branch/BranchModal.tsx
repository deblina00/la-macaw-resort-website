"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Branch {
  name: string;
  location: string;
  href: string;
  img: string;
}

interface BranchModalProps {
  isOpen: boolean;
  onClose: () => void;
  branches: Branch[];
  currentPath: string;
}

export default function BranchModal({
  isOpen,
  onClose,
  branches,
  currentPath,
}: BranchModalProps) {
  const prevPath = useRef(currentPath);

  useEffect(() => {
    if (isOpen && prevPath.current !== currentPath) {
      onClose();
    }
    prevPath.current = currentPath;
  }, [currentPath, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-black border border-white/10 rounded-2xl p-8 max-w-5xl w-full mx-6 max-h-[75vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Heading */}

        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.35em] text-gray-400 mb-3">
            OUR DESTINATIONS
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Choose Your Escape
          </h2>
        </div>

        {/* Branch Cards */}

        <div className="grid gap-4 md:grid-cols-3">
          {branches.map((branch, i) => (
            <Link key={i} href={branch.href}>
              <div className="relative h-[200px] overflow-hidden group cursor-pointer">
                <Image
                  src={branch.img}
                  alt={branch.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-5 text-white">
                  <p className="text-sm text-gray-300">{branch.location}</p>

                  <h3 className="text-xl font-semibold">{branch.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
