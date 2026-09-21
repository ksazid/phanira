import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

const routes = [
  "/",
  "/about",
  "/products",
  "/products/kairo",
  "/products/citizenai",
  "/products/venture-blueprint",
  "/capabilities",
  "/contact",
  "/brand",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/products/") ? 0.8 : 0.6,
  }));
}
