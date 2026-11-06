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
    <article className="group relative flex h-[20vh] min-h-[120px] max-h-[180px] w-full overflow-hidden rounded-xl border border-black/15 dark:border-white/15 bg-card text-card-foreground transition-colors hover:border-foreground/25 focus-within:ring-2 focus-within:ring-ring">

      {/* Image: left side */}
      <div className="relative h-full w-[38%] shrink-0 overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 640px) 240px, 38vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      {/* Content: right side */}
      <div className="flex min-w-0 flex-1 items-center justify-between gap-3 p-3 sm:p-4">

        {/* Title and description */}
        <div className="flex min-w-0 flex-1 flex-col gap-2 self-start">
          <h2 className="line-clamp-1 font-mono text-lg font-semibold">
            <a
              href={`/${project.slug}`}
              className="outline-none after:absolute after:inset-0 after:content-['']"
            >
              {project.name}
            </a>
          </h2>

          <p className="line-clamp-3 text-sm leading-[1.2] text-muted-foreground">
            {project.blurb}
          </p>
        </div>

        {/* Status */}
        <div className="relative z-10 flex shrink-0 self-start">
          <span
            className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${project.status === "Live"
                ? "bg-green-500/10 text-green-500"
                : project.status === "In Development"
                  ? "bg-amber-500/10 text-amber-500"
                  : "bg-gray-500/10 text-gray-400"
              }`}
          >
            {project.status}
          </span>
        </div>

      </div>
    </article>
  );
}