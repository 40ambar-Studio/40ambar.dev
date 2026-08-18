import { useParams, Link } from "react-router";
import { ArrowLeft, Shield } from "lucide-react";
import AppNotFound from "~/components/AppNotFound";
import { projectService } from "~/services/projectService";
import { ProjectActionLinks } from "~/components/ProjectActionLinks";

export default function AppDetailPage() {
  const { appSlug } = useParams();
  const app = projectService.getBySlug(appSlug ?? "");

  if (!app) {
    return <AppNotFound />;
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
      <p className="mt-4 text-lg whitespace-pre-line">
        {app.longDescription || app.description}
      </p>

      <div className="flex items-center text-sm mt-12 pt-6 border-t border-(--border) gap-6">
        <Link
          to={`/apps/${appSlug}/privacy`}
          className="inline-flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-(--primary)"
        >
          <Shield size={16} />
          Privacy Policy
        </Link>
        <ProjectActionLinks app={app} />
      </div>
    </div>
  );
}
