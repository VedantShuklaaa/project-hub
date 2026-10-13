import type { NextConfig } from "next";
import { projects } from "./projects";

/**
 * projects.vedantshukla.in is this app. Each project is its own Vercel deployment with basePath
 * "/<slug>", and this app forwards that whole path to it. Adding a project is one entry in projects.ts.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return projects.flatMap((p) => {
      const target = process.env[p.originEnv];
      if (!target) return [];
      return [
        { source: `/${p.slug}`, destination: `${target}/${p.slug}` },
        { source: `/${p.slug}/:path*`, destination: `${target}/${p.slug}/:path*` },
      ];
    });
  },
};

export default nextConfig;
