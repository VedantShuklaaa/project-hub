import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/projects";
import { Typewriter } from "@/components/typewriter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://projects.vedantshukla.in";
const title = "Projects";
const description =
  "Systems and infrastructure work, each with something you can run or measure.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    images: projects[0] ? [{ url: projects[0].image }] : undefined,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: siteUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        description: p.blurb,
        url: `${siteUrl}/${p.slug}`,
        image: `${siteUrl}${p.image}`,
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