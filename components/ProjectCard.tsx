import type { Project } from "@/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={`/${project.slug}`}
      className="group flex items-center justify-between gap-6 rounded-lg border border-white/10 px-5 py-4 transition-colors hover:border-white/40"
    >
      <span>
        <span className="block font-mono text-sm font-semibold">{project.name}</span>
        <span className="mt-1 block text-sm text-white/55">{project.blurb}</span>
      </span>
      <span className="text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white">→</span>
    </a>
  );
}
