import { MetadataRoute } from "next";
import { Room } from "@/types/room";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  let roomUrls: MetadataRoute.Sitemap = [];

  try {

    const res = await fetch(
      `${process.env.API_URL}/api/rooms`,
      { next: { revalidate: 3600 } }
    );

    const rooms: Room[] = await res.json();

    roomUrls = rooms.map((room) => ({
      url: `https://lamacawresort.com/rooms/${room._id}`,
      lastModified: room.updatedAt
        ? new Date(room.updatedAt)
        : new Date(),
      priority: 0.8,
    }));

  } catch (error) {

    console.error("Sitemap room fetch failed:", error);

  }

  return [
    {
      url: "https://lamacawresort.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://lamacawresort.com/about",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://lamacawresort.com/rooms",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://lamacawresort.com/offers",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://lamacawresort.com/events",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://lamacawresort.com/gallery",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://lamacawresort.com/banquets",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://lamacawresort.com/contact",
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: "https://lamacawresort.com/b2b",
      lastModified: new Date(),
      priority: 0.6,
    },

    // branch pages (local SEO)
    {
      url: "https://lamacawresort.com/branch/tajpur",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://lamacawresort.com/branch/joypur",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://lamacawresort.com/branch/purulia",
      lastModified: new Date(),
      priority: 0.8,
    },

    ...roomUrls,
  ];
}