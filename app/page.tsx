import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/projects";
import { Typewriter } from "@/components/typewriter";
import {
  OG_IMAGE,
  PROJECTS_URL,
  SITE_NAME,
  X_HANDLE,
} from "@/lib/site";

const title = "Projects";
const ogTitle = `${title} · ${SITE_NAME}`;
const description =
  "Systems and infrastructure work, each with something you can run or measure.";

export const metadata: Metadata = {
  // Omit `title` so the root layout's default ("Projects · Vedant Shukla") applies.
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: ogTitle,
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    title: ogTitle,
    description,
    images: [OG_IMAGE.url],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: PROJECTS_URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        description: p.blurb,
        url: `${PROJECTS_URL}/${p.slug}`,
        image: `${PROJECTS_URL}${p.image}`,
      })),
    },
  };

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 py-16 sm:py-24">
      <header className="mb-10 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl">
          <Typewriter text="~/ Projects" />
        </h1>
        <p className="mt-2 max-w-[48ch] text-muted-foreground">
          <Typewriter text={description} />
        </p>
      </header>

      {projects.length > 0 ? (
        <section aria-label="All projects" className="grid sm:grid-cols-2 gap-2 sm:gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i < 2} />
          ))}
        </section>
      ) : (
        <p className="text-muted-foreground">No projects yet. Check back soon.</p>
      )}

      <script
        type="application/ld+json"
        // Escape "<" so content can never close the script tag
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}