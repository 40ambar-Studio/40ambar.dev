import { Code, ExternalLink, Mail, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
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
          <Code size={20} />
        </div>
        <div>
          <h1
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: "var(--text)" }}
          >
            About the Studio
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      {/* Mission */}
      <div
        className="mt-10 rounded-xl p-6 sm:p-8"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}
      >
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>

      {/* Approach */}
      <h2
        className="mt-12 mb-4 flex items-center gap-2 text-lg font-semibold"
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      {/* Contact CTA */}
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
            <Mail size={22} />
          </div>
          <div className="flex-1">
            <p className="font-medium" style={{ color: "var(--text)" }}>
              Want to work with us?
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <a
            href="https://github.com/leidorf"
            target="_blank"
            rel="noopener noreferrer"
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
