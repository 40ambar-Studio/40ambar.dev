import { Link } from "react-router";
import type { Project } from "~/types/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group relative rounded-xl p-5 transition-all"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Icon */}
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg transition-colors"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--primary) 10%, transparent)",
          color: "var(--primary)",
        }}
      >
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
      <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
        {project.title}
      </h3>
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {/* Link */}
      <Link
        to={`/apps/${project.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
        style={{ color: "var(--primary)" }}
      >
        Learn more
      </Link>
    </div>
  );
}
