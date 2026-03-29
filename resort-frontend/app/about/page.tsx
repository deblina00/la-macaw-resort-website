import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About La Macaw Resort",
  description:
    "Discover La Macaw Resort's luxury hospitality experiences across Tajpur, Joypur and Purulia in West Bengal.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const branches = [
    {
      name: "La Macaw Tajpur",
      location: "Tajpur, East Midnapore",
      desc: "Located along the pristine coastline of Tajpur, this resort offers golden sandy beaches, tranquil sea views, and the perfect blend of coastal relaxation with luxury amenities.",
      image: "/Tajpur.jpeg",
      link: "/branch/tajpur",
    },
    {
      name: "La Macaw Joypur",
      location: "Joypur, Bankura",
      desc: "Surrounded by forests and rolling hills, our Joypur resort offers eco-luxury experiences and immersive nature stays.",
      image: "/Joypur.jpeg",
      link: "/branch/joypur",
    },
    {
      name: "La Macaw Purulia",
      location: "Purulia, West Bengal",
      desc: "Nestled near the Ajodhya Hills, La Macaw Purulia blends scenic landscapes with local culture and peaceful luxury.",
      image: "/Purulia.jpeg",
      link: "/branch/purulia",
    },
  ];

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Resort",
            name: "La Macaw Resort",
            address: {
              "@type": "PostalAddress",
              addressRegion: "West Bengal",
              addressCountry: "India",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <Image
          src="/about-banner.jpeg"
          fill
          alt="Luxury resort in West Bengal"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center max-w-2xl px-6">
          <p className="uppercase tracking-[0.35em] text-sm mb-4 text-resort-gold">
            — About La Macaw —
          </p>

          <h1 className="text-4xl md:text-5xl font-cinzel mb-6 leading-tight">
            Where Luxury Meets <br /> The Soul Of Bengal
          </h1>

          <p className="text-gray-300">
            Three unique destinations offering beach, forest and hill
            experiences across West Bengal.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-cinzel mb-8 text-resort-gold">
            A Destination For Every Traveler
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            La Macaw Resort is designed for travelers seeking comfort,
            relaxation and meaningful experiences in nature. Our resorts offer
            the perfect setting for beach vacations, forest retreats and hill
            escapes across West Bengal.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            From family holidays and romantic getaways to corporate retreats,
            every stay at La Macaw combines warm hospitality with modern luxury.
          </p>

          <p className="text-gray-300 leading-relaxed">
            With thoughtfully designed rooms, curated experiences and stunning
            surroundings, we aim to make every visit memorable.
          </p>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-4">
              — DESTINATIONS —
            </p>

            <h2 className="text-4xl font-cinzel text-resort-gold">
              Our Resorts
            </h2>
          </div>

          <div className="space-y-24">
            {branches.map((b, i) => (
              <Link
                key={i}
                href={b.link}
                className="grid md:grid-cols-2 gap-16 items-center group"
              >
                {/* IMAGE */}
                <div
                  className={`relative h-[360px] overflow-hidden rounded-xl ${
                    i === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={b.image}
                    alt={`${b.name} resort`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                </div>

                {/* TEXT */}
                <div className={`${i === 1 ? "md:order-1" : ""}`}>
                  <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">
                    {b.location}
                  </p>

                  <h3 className="text-3xl font-cinzel mb-4 group-hover:text-resort-gold transition">
                    {b.name}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-6">{b.desc}</p>

                  <span className="text-resort-gold text-sm tracking-wide group-hover:tracking-widest transition">
                    Explore Resort →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-cinzel mb-12 text-resort-gold">
            Experience La Macaw
          </h2>

          <div className="max-w-5xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-xl border border-white/10"
              src="https://www.youtube.com/embed/JGo7AMiJ_Es"
              title="La Macaw Resort Experience"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-cinzel mb-16 text-resort-gold">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: "Sustainability",
                desc: "Protecting the natural beauty surrounding our resorts through responsible tourism practices.",
              },
              {
                title: "Hospitality",
                desc: "Warm and personalized service rooted in the spirit of Bengali hospitality.",
              },
              {
                title: "Excellence",
                desc: "Commitment to quality in every stay, meal and experience.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border border-white/10 hover:border-resort-gold transition"
              >
                <h3 className="text-xl font-semibold mb-4 text-resort-gold">
                  {item.title}
                </h3>

                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
