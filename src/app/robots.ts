import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/preview/",
    },
    sitemap: "https://fikri-rouzan.is-a.dev/sitemap.xml",
  };
}
