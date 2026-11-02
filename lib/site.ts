const trimTrailingSlash = (url: string) => url.replace(/\/+$/, "");

/** Canonical origin of this projects app, without a trailing slash. */
export const PROJECTS_URL = trimTrailingSlash(
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://projects.vedantshukla.in",
);

/** Origin of the main site, which owns Home and Writings. */
export const MAIN_SITE_URL = trimTrailingSlash(
	process.env.NEXT_PUBLIC_MAIN_SITE_URL ?? "https://vedantshukla.in",
);

/** Public API origin used by the main site; allowed in this app's CSP. */
export const API_URL = trimTrailingSlash(
	process.env.NEXT_PUBLIC_API_URL ?? "https://api.vedantshukla.in",
);

/** WebSocket origin matching API_URL. */
export const API_WS_URL = API_URL.replace(/^http/, "ws");

export const SITE_NAME = "Vedant Shukla";

export const DEFAULT_TITLE = `Projects · ${SITE_NAME}`;

export const SITE_DESCRIPTION =
	"Systems and infrastructure projects by Vedant Shukla, from Rust order-book engines to realtime crypto streams.";

export const AUTHOR = {
	name: "Vedant Shukla",
	jobTitle: "Backend & Blockchain Developer",
	url: MAIN_SITE_URL,
} as const;

export const X_HANDLE = "@SegFault_Dev";

export const SOCIAL_LINKS = {
	github: "https://github.com/VedantShuklaaa",
	x: "https://x.com/SegFault_Dev",
	linkedin: "https://www.linkedin.com/in/vedant-shukla-17a953239",
} as const;

export const SAME_AS = [
	SOCIAL_LINKS.github,
	SOCIAL_LINKS.x,
	SOCIAL_LINKS.linkedin,
];

/** Default social-share image (1920×966). */
export const OG_IMAGE = {
	url: "/projects/lobster.png",
	width: 1920,
	height: 966,
	alt: "Live depth chart from the lobster limit order book",
} as const;
