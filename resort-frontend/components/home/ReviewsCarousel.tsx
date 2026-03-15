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
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.35em] text-gray-400 mb-3">
          GUEST EXPERIENCES
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-10">
          What Our Guests Say
        </h2>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 28,
            repeat: Infinity,
          }}
        >
          {carouselReviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[340px] bg-white/5 backdrop-blur-lg border border-white/10 p-8 "
            >
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                “{truncateWords(review.comment, 30)}”
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">
                    {review.guestName}
                  </div>

                  {review.location && (
                    <div className="text-sm text-gray-400">
                      {review.location}
                    </div>
                  )}
                </div>

                <div className="text-yellow-400 text-sm">
                  {"★".repeat(review.rating)}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
