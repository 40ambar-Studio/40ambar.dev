import { Link } from "react-router";
import { ArrowRight, Code, Grid } from "lucide-react";

export default function HomePage() {
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

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-16 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center pb-4">
            <img src={"/images/logo_big.png"} />
          </div>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
            Developer Studio
          </span>
          <p className="mt-5 text-lg text-(--text-secondary)">
            We develop a wide variety of free and open softwares.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/apps"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white bg-(--primary) hover:bg-(--primary)/80"
            >
              <Grid size={16} />
              View Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-(--text) border border-(--border) hover:bg-(--bg-secondary)"
            >
              <Code size={16} />
              About the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-(--bg-secondary)">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-(--text)">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl space-y-2 p-6 bg-(--bg-card) border border-(--border)"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--primary)/12 text-(--primary)">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-(--text)">
                  {s.title}
                </h3>
                <p className="text-sm text-(--text-secondary)">
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
