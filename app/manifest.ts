import type { MetadataRoute } from "next";
import { siteDescription, siteUrl } from "./site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phanira",
    short_name: "Phanira",
    description: siteDescription,
    start_url: siteUrl,
    display: "standalone",
    background_color: "#f7f7f7",
    theme_color: "#071019",
    lang: "en-GB",
  };
}
