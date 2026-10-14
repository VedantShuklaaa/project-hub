import type { NextConfig } from "next";
import { projects } from "./projects";

const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.vedantshukla.in wss://api.vedantshukla.in",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

/**
 * projects.vedantshukla.in is this app. Each project is its own Vercel deployment with basePath
 * "/<slug>", and this app forwards that whole path to it. Adding a project is one entry in projects.ts.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return {
      beforeFiles: projects.flatMap((p) => {
        const target = process.env[p.originEnv];
        if (!target) return [];
        return [
          { source: `/${p.slug}`, destination: `${target}/${p.slug}` },
          { source: `/${p.slug}/:path*`, destination: `${target}/${p.slug}/:path*` },
        ];
      }),
    };
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;