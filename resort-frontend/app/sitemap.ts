import { MetadataRoute } from "next";
import { Room } from "@/types/room";
import { branches } from "@/data/branches";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://lamacawresort.com";

  let roomUrls: MetadataRoute.Sitemap = [];

  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms`, {
      next: { revalidate: 3600 },
    });

    const rooms: Room[] = await res.json();

    roomUrls = rooms.map((room) => ({
      url: `${base}/rooms/${room._id}`,
      lastModified: room.updatedAt ? new Date(room.updatedAt) : new Date(),
      changeFrequency: "weekly" as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Sitemap room fetch failed:", error);
  }

  const branchUrls: MetadataRoute.Sitemap = Object.keys(branches).map(
    (slug) => ({
      url: `${base}/branch/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
      priority: 0.8,
    }),
  );

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly" as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
      priority: 1,
    },
    {
      url: `${base}/rooms`,
      lastModified: new Date(),
      changeFrequency: "weekly" as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
      priority: 0.6,
    },
  ];

  return [...staticUrls, ...branchUrls, ...roomUrls];
}
