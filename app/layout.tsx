import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Projects · Vedant Shukla",
  description: "Systems and infrastructure projects by Vedant Shukla.",
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
