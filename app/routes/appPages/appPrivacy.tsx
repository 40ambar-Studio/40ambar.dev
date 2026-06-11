import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function AppPrivacyPage() {
  const { appSlug } = useParams();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        to={`/apps/${appSlug}`}
        className="inline-flex items-center gap-1 text-sm mb-8 duration-300 ease-in-out hover:text-(--primary) "
      >
        <ArrowLeft size={16} />
        {appSlug}
      </Link>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-lg">privacy policy for {appSlug}</p>
    </div>
  );
}
