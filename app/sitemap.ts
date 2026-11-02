import type { MetadataRoute } from "next";

import { projects } from "@/projects";
import { PROJECTS_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return [
		{
			url: PROJECTS_URL,
			lastModified,
			changeFrequency: "weekly",
			priority: 1,
		},
		...projects.map((project) => ({
			url: `${PROJECTS_URL}/${project.slug}`,
			lastModified,
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
