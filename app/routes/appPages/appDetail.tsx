import { useParams, Link, Outlet } from "react-router";
import { ArrowLeft, Shield } from "lucide-react";

const projects = [
  {
    slug: "medication-reminder",
    title: "Medication Reminder",
    description: "Lorem ipsum...",
    longDescription: "Detailed description...",
  },
  // ...
];

export default function AppDetailPage() {
  const { appSlug } = useParams();
  const app = projects.find((p) => p.slug === appSlug);

  if (!app) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">App not found</h1>
        <Link to="/apps" className="mt-4 inline-block text-primary">
          ← Back to all apps
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        to="/apps"
        className="inline-flex items-center gap-1 text-sm mb-8 duration-300 ease-in-out hover:text-(--primary)"
      >
        <ArrowLeft size={16} /> Back to all apps
      </Link>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {app.title}
      </h1>
      <p className="mt-4 text-lg">{app.longDescription || app.description}</p>

      <div className="mt-12 pt-6 border-t border-(--border)">
        <Link
          to={`/apps/${appSlug}/privacy`}
          className="inline-flex items-center gap-2 text-sm transition-colors duration-300 ease-in-out hover:text-(--primary) "
        >
          <Shield size={14} />
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
