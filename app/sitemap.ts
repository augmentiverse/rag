import type { MetadataRoute } from "next";
import { architectures } from "@/data/architectures";
import { comparisons } from "@/data/comparisons";
import { tools } from "@/data/tools";
import { useCases } from "@/data/useCases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rag-reference-hub.local";
  const routes = ["", "/learn", "/tools", "/dify", "/architectures", "/tutorials", "/use-cases", "/comparisons", "/glossary", "/resources", "/editorial-principles"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...tools.map((tool) => ({ url: `${base}/tools/${tool.slug}`, lastModified: new Date(tool.lastVerified) })),
    ...useCases.map((item) => ({ url: `${base}/use-cases/${item.slug}`, lastModified: new Date() })),
    ...comparisons.map((item) => ({ url: `${base}/comparisons/${item.slug}`, lastModified: new Date() })),
    ...architectures.map((item) => ({ url: `${base}/architectures#${item.slug}`, lastModified: new Date() })),
  ];
}
