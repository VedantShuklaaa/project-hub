import Image from "next/image";
import type { Project } from "@/projects";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group relative aspect-[3/3.5] overflow-hidden rounded-xl border border-black/15 dark:border-white/15 bg-card text-card-foreground transition-colors focus-within:ring-2 focus-within:ring-ring hover:border-foreground/25 sm:aspect-[3/3.5]">
      {/* Image: top 60% */}
      <div className="relative h-[60%] overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 640px) 312px, 50vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      {/* Text: bottom 40% */}
      <div className="flex h-[40%] flex-col gap-1.5 p-3 sm:p-4">
        <h2 className="line-clamp-1 font-mono text-lg font-semibold sm:text-[0.9375rem]">
          {/* Plain <a>: /<slug> is rewritten to another deployment, so skip client-side routing/prefetch */}
          <a
            href={`/${project.slug}`}
            className="outline-none after:absolute after:inset-0 after:content-['']"
          >
            {project.name}
          </a>
        </h2>
        <p className="line-clamp-3 leading-relaxed text-muted-foreground sm:line-clamp-4 sm:text-[0.8125rem]">
          {project.blurb}
        </p>
      </div>
    </article>
  );
}