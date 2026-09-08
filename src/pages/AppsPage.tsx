import { projectService } from "../services/projectService";
import { ProjectCard } from "../components/ProjectCard";

export default function AppsPage() {
  const projects = projectService.getAll();

  return (
    <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-20">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold text-(--text) tracking-tight sm:text-3xl">
            Apps
          </h1>
          <p className="text-sm text-(--text-secondary)">
            All software has been developed in accordance with the FOSS
            philosophy.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
