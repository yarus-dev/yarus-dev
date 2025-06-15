import { MetadataRoute } from "next";

export const dynamic = "force-static";

type SitemapEntry = {
  url: string;
  priority?: number;
  lastModified?: string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: SitemapEntry[] = [
    {
      url: "/",
    }
  ];

  return entries.map(
    ({ url, priority, lastModified, changeFrequency = "weekly", ...page }) => ({
      ...page,
      url: `${process.env.BASE_URL}${url}`,
      priority: priority || 1 - url.split("/").length / 10,
      lastModified: lastModified || new Date().toISOString().split("T")[0],
      changeFrequency,
    })
  );
}
