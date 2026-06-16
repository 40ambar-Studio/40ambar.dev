import { Code, ExternalLink, Mail, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      {/* Heading */}
      <div className="flex items-center">
        <h1
          className="text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: "var(--text)" }}
        >
          About the Studio
        </h1>
      </div>

      {/* Mission */}
      <div
        className="mt-4 rounded-xl p-6 sm:p-8"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          The name "40ambar" is derived from a nautical term. The term "40ambar"
          is used for ships that carry a wide variety of goods. It was chosen to
          reflect the diversity within the studio.
        </p>
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          We believe that software should be free, and we salute everyone who
          works toward this goal.
        </p>
      </div>

      {/* Approach */}
      <h2
        className="mt-8 mb-4 flex items-center gap-2 text-lg font-semibold"
        style={{ color: "var(--text)" }}
      >
        <Shield size={20} style={{ color: "var(--primary)" }} />
        Approach
      </h2>
      <div
        className="rounded-xl p-6 sm:p-8"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          The software developed under the 40ambar brand fundamentally embraces
          the Free and Open Source Software (FOSS) philosophy. It is designed to
          be easily usable by everyone, regardless of who the user is.
        </p>
      </div>

      {/* --------------------------------- Contact -------------------------------- */}
      <div
        className="mt-12 rounded-xl p-6 sm:p-8"
        style={{
          backgroundColor: "color-mix(in srgb, var(--primary) 8%, transparent)",
          border:
            "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
        }}
      >
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full shrink-0"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--primary) 15%, transparent)",
              color: "var(--primary)",
            }}
          >
            <Mail size={24} />
          </div>
          <div className="flex-1">
            <p className="font-medium" style={{ color: "var(--text)" }}>
              Want to contact?
            </p>
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            ></p>
          </div>
          <a
            href="mailto:contact@40ambar.dev"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors shrink-0"
            style={{ backgroundColor: "var(--primary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#c03d3d")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary)")
            }
          >
            Get in Touch
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
