import { Link } from "react-router";
import { Code, ExternalLink } from "lucide-react";

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex items-center gap-3">
        <div>
          <h1
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: "var(--text)" }}
          >
            Apps
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            All software has been developed in accordance with the FOSS
            philosophy.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group relative rounded-xl p-5 transition-all"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg transition-colors"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--primary) 10%, transparent)",
                color: "var(--primary)",
              }}
            >
              <project.icon size={22} />
            </div>
            <h3
              className="text-base font-semibold"
              style={{ color: "var(--text)" }}
            >
              {project.title}
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.description}
            </p>
            <Link
              to={`/apps/${project.slug}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "var(--primary)" }}
            >
              Learn more
              <ExternalLink size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    icon: Code,
    slug: "pillgrim",
    title: "Pillgrim",
    description: "Minimalist user friendly medication reminder.",
  },
  //
];
