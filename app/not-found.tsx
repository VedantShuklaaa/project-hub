import type { Metadata } from "next";
import Link from "next/link";

const MAIN_SITE = "https://vedantshukla.in";

export const metadata: Metadata = {
	title: "Page not found",
	robots: { index: false, follow: true },
};

export default function NotFound() {
	return (
		<main className="flex min-h-dvh w-full items-center justify-center px-5 py-16">
			<div className="mx-auto w-full max-w-[640px] text-center">
				<p className="text-sm text-muted-foreground">404</p>

				<h1 className="mt-2 text-3xl sm:text-4xl">Project not found</h1>

				<p className="mx-auto mt-3 max-w-[44ch] text-muted-foreground">
					There&apos;s no project at this address. It may have moved, or the link might be
					mistyped. Browse everything that&apos;s live below.
				</p>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
					<Link
						href="/"
						className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
					>
						View all projects
					</Link>
					<a
						href={MAIN_SITE}
						className="rounded-lg bg-muted px-4 py-2 text-sm text-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
					>
						Main site
					</a>
				</div>
			</div>
		</main>
	);
}