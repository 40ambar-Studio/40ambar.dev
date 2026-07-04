import { Link } from "react-router";
import { ArrowRight, Code, Grid } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-16 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center pb-4">
            <img src={"/logo_big.png"} />
          </div>
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--primary)" }}
          >
            Developer Studio
          </span>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            We develop a wide variety of free and open softwares.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/apps"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--primary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#c03d3d")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--primary)")
              }
            >
              <Grid size={16} />
              View Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
              style={{
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <Code size={16} />
              About the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2
              className="text-2xl font-bold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-6 transition-shadow"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--primary) 12%, transparent)",
                    color: "var(--primary)",
                  }}
                >
                  <s.icon size={20} />
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "We develop user-friendly, mobile & desktop responsive websites with a focus on privacy and security.",
  },
  {
    icon: Grid,
    title: "Application Development",
    description:
      "We develop a variety of simple, ad-free apps that prioritize user privacy and security.",
  },
];
