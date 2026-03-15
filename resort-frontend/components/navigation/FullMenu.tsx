"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export default function FullMenu({close}:{close:()=>void}){

  return(

    <div className="fixed inset-0 z-[90] grid grid-cols-3">

      {/* LEFT */}
      <div className="bg-[#17434B] text-white flex flex-col justify-center pl-24 space-y-8">

        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
      
        <Link href="/gallery">Gallery</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/contact">Contact</Link>

        <button className="border border-white px-6 py-3 w-40">
          BOOK NOW
        </button>

      </div>

      {/* CENTER */}
      <div className="bg-black text-white p-16">

        <h2 className="text-3xl font-playfair mb-10">
          Featured Rooms
        </h2>

        <div className="space-y-6">

          <div className="relative h-32">
            <Image src="/hero1.jpeg" fill alt="" className="object-cover"/>
            <div className="absolute bottom-3 left-4 text-white">
              Beachfront Bungalow
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="relative">

        <Image
          src="/menu-bg.jpeg"
          fill
          alt=""
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/90 flex flex-col justify-center items-center text-center p-12">

          <h2 className="text-3xl font-playfair mb-6">
            La Macaw Resort
          </h2>

          <p>Tajpur, West Bengal</p>

        </div>

      </div>

      <button
        onClick={close}
        className="absolute top-8 right-8 text-black bg-white rounded-full p-2"
      >
        <X/>
      </button>

    </div>
  )
}