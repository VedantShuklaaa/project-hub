import type { MetadataRoute } from "next";

import { PROJECTS_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: "*", allow: "/" },
		sitemap: `${PROJECTS_URL}/sitemap.xml`,
		host: PROJECTS_URL,
	};
}
