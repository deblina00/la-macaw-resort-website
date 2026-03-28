"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "@/services/api";
import { Review } from "@/types/review";

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    api.get("/reviews").then((res) => {
      setReviews(res.data);
    });
  }, []);

  if (reviews.length === 0) return null;

  const carouselReviews = [...reviews, ...reviews];

  const truncateWords = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <section className="bg-resort-black text-white py-20">

      {/* HEADER */}
      <div className="container mx-auto px-6 text-center">

        <p className="text-xs tracking-[0.4em] text-resort-gold mb-4 uppercase">
          — Testimonials —
        </p>

        <h2 className="text-3xl md:text-5xl font-cinzel tracking-[0.12em] mb-6">
          WHAT OUR GUESTS SAY
        </h2>

      </div>

      {/* CAROUSEL */}
      <div className="overflow-hidden">

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {carouselReviews.map((review, i) => (
            <div
              key={i}
              className="
                min-w-[320px] md:min-w-[360px] 
                bg-white/5 
                backdrop-blur-xl 
                border border-white/10 
                p-8 
                hover:border-resort-gold/40
                transition duration-300
              "
            >
              {/* QUOTE */}
              <p className="text-white/80 italic mb-6 leading-relaxed text-sm">
                “{truncateWords(review.comment, 30)}”
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between">

                {/* NAME */}
                <div>
                  <div className="font-semibold text-white">
                    {review.guestName}
                  </div>

                  {review.location && (
                    <div className="text-xs text-white/50">
                      {review.location}
                    </div>
                  )}
                </div>

                {/* RATING */}
                <div className="flex gap-[2px] text-resort-gold text-sm">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

              </div>

              {/* GOLD LINE */}
              <div className="mt-6 w-10 h-[1px] bg-resort-gold opacity-60" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}