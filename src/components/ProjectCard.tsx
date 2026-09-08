import { Link } from "react-router";
import type { Project } from "../types/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="space-y-2 rounded-xl p-5 bg-(--bg-card) border border-(--border)">
      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-lg">
        {project.icon ? (
          <project.icon size={22} />
        ) : project.iconUrl ? (
          <img
            src={project.iconUrl}
            alt={project.title}
            className="h-11 w-11 object-contain rounded-lg"
          />
        ) : null}
      </div>

      {/* Title & Description */}
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-(--text-secondary)">{project.description}</p>

      {/* Link */}
      <Link
        to={`/apps/${project.slug}`}
        className="text-sm font-medium text-(--primary) hover:text-(--text)"
      >
        Learn more
      </Link>
    </div>
  );
}
