import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/experience", "/about", "/contact"];
  return routes.map((route) => ({
    url: `https://www.joshuauschock.com${route}`,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7,
  }));
}
