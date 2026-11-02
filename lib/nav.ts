import { MAIN_SITE_URL } from "@/lib/site";

export type NavItem = {
	label: string;
	href: string;
	external?: boolean;
	newTab?: boolean;
	mono?: boolean;
};

const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

export const navItems: NavItem[] = [
	{ label: "Home", href: MAIN_SITE_URL, external: true },
	{ label: "Writings", href: `${MAIN_SITE_URL}/writings`, external: true },
	{ label: "Projects", href: "/", external: false },
	...(resumeUrl
		? [{ label: "Resume", href: resumeUrl, external: true, newTab: true, mono: true }]
		: []),
];
