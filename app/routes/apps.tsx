import { Code, ExternalLink, Grid } from "lucide-react";

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      {/* Heading */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--primary) 12%, transparent)",
            color: "var(--primary)",
          }}
        >
          <Grid size={20} />
        </div>
        <div>
          <h1
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: "var(--text)" }}
          >
            Projects
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
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
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: "var(--primary)" }}
              >
                Learn more
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    icon: Code,
    title: "Medication Reminder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: null,
  },
  {
    icon: Code,
    title: "Project Two",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: null,
  },
  {
    icon: Code,
    title: "Project Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    url: null,
  },
];
