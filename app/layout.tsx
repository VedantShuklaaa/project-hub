import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar";
import {
	DEFAULT_TITLE,
	OG_IMAGE,
	PROJECTS_URL,
	SITE_DESCRIPTION,
	SITE_NAME,
	X_HANDLE,
} from "@/lib/site";

export const metadata: Metadata = {
	metadataBase: new URL(PROJECTS_URL),
	title: {
		default: DEFAULT_TITLE,
		template: `%s · ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		siteName: SITE_NAME,
		title: DEFAULT_TITLE,
		description: SITE_DESCRIPTION,
		images: [OG_IMAGE],
	},
	twitter: {
		card: "summary_large_image",
		site: X_HANDLE,
		creator: X_HANDLE,
		title: DEFAULT_TITLE,
		description: SITE_DESCRIPTION,
		images: [OG_IMAGE.url],
	},
	robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto w-full max-w-[640px] px-6 ">
          <Navbar />
          <main className="">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
