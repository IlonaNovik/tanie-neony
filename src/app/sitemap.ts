import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tanieneony.pl";

  const staticPages: MetadataRoute.Sitemap = [
    { url: "", changeFrequency: "yearly", priority: 1 },
    { url: "contact", changeFrequency: "yearly", priority: 0.8 },
    { url: "store", changeFrequency: "weekly", priority: 1 },
  ];

  const dynamicPages: MetadataRoute.Sitemap = [
    // Example dynamic pages, replace with actual dynamic content
    { url: "product/1", changeFrequency: "monthly", priority: 0.9 },
    { url: "product/2", changeFrequency: "monthly", priority: 0.9 },
    // Add more dynamic pages as needed
  ];

  const allPages = [...staticPages, ...dynamicPages].map((page) => ({
    url: `${baseUrl}/${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return allPages;
}
