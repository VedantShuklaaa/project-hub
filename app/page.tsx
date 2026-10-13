import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/projects";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">vedantshukla.in</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 max-w-xl text-white/55">Systems and infrastructure work, each with something you can run or measure.</p>
      <ul className="mt-12 flex flex-col gap-3">
        {projects.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </main>
  );
}
