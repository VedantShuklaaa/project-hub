export type Project = {
  /** URL path: projects.vedantshukla.in/<slug> */
  slug: string;
  name: string;
  blurb: string;
  /** Path under /public. 4:3 or wider; cropped to fill the top 60% of the tile. */
  image: string;
  imageAlt: string;
  /** Name of the env var (set in Vercel) holding that project's deployment URL, no trailing slash. */
  originEnv: string;
};

export const projects: Project[] = [
  {
    slug: "lobster",
    name: "lobster",
    blurb: "A limit order book engine in Rust, with recorded benchmarks and a live order book.",
    image: "/projects/lobster.png",
    imageAlt: "Live depth chart from the lobster limit order book",
    originEnv: "LOBSTER_ORIGIN",
  },
  {
    slug: "streamex-sdk",
    name: "streamex",
    blurb: "Unified realtime crypto streams for JavaScript applications, powered by Rust.",
    image: "/projects/streamex.png",
    imageAlt: "Realtime crypto price streams flowing into a JavaScript client",
    originEnv: "STREAMEX_ORIGIN",
  },
];