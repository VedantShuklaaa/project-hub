export type Project = {
  /** URL path: /<slug> on the projects site */
  slug: string;
  name: string;
  blurb: string;
  //Development Status
  status: string;
  /** Path under /public. 4:3 or wider; cropped to fill the top 60% of the tile. */
  image: string;
  imageAlt: string;
  /** Name of the env var (set in Vercel) holding that project's deployment URL, no trailing slash. */
  originEnv: string;
};

export const projects: Project[] = [
  {
    slug: "hermit",
    name: "hermit",
    blurb: "A unified infrastructure layer for tracking and indexing cross-chain bridge transactions across the Solana ecosystem.",
    status: "In Development",
    image: "/projects/streamex.png",
    imageAlt: "Hermit cross-chain bridge transaction indexing dashboard.",
    originEnv: "HERMIT_ORIGIN",
  }, {
    slug: "lobster",
    name: "lobster",
    blurb: "A limit order book engine in Rust, with recorded benchmarks and a live order book.",
    status: "Live",
    image: "/projects/lobster.png",
    imageAlt: "Live depth chart from the lobster limit order book",
    originEnv: "LOBSTER_ORIGIN",
  }, {
    slug: "streamex-sdk",
    name: "streamex-sdk",
    blurb: "Unified realtime crypto streams for JavaScript applications, powered by Rust.",
    status: "Live",
    image: "/projects/streamex.png",
    imageAlt: "Realtime crypto price streams flowing into a JavaScript client",
    originEnv: "STREAMEX_ORIGIN",
  }
];