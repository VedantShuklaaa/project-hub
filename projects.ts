export type Project = {
  /** URL path: projects.vedantshukla.in/<slug> */
  slug: string;
  name: string;
  blurb: string;
  /** Name of the env var (set in Vercel) holding that project's deployment URL, no trailing slash. */
  originEnv: string;
};

export const projects: Project[] = [
  {
    slug: "lobster",
    name: "lobster",
    blurb: "A limit order book engine in Rust, with recorded benchmarks and a live order book.",
    originEnv: "LOBSTER_ORIGIN",
  }, {
    slug: "streamex-sdk",
    name: "streamex",
    blurb: "Unified realtime crypto streams for JavaScript applications, Powered by Rust.",
    originEnv: "STREAMEX_ORIGIN",
  },
];
