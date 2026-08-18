import { useParams, Link } from "react-router";
import { ArrowLeft, Shield } from "lucide-react";
import { privacyPolicies } from "~/data/privacyPolicies";
import AppNotFound from "~/components/AppNotFound";

export default function AppPrivacyPage() {
  const { appSlug } = useParams();
  const policy = appSlug ? privacyPolicies[appSlug] : undefined;

  if (!policy) {
    return <AppNotFound />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Link
        to={`/apps/${appSlug}`}
        className="inline-flex items-center gap-1 text-sm mb-10 transition-colors duration-300 ease-in-out hover:text-(--primary)"
      >
        <ArrowLeft size={16} />
        {policy.appName}
      </Link>

      <div className="flex items-start gap-3 mb-2">
        <Shield size={28} className="mt-1 shrink-0 text-(--primary)" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
      </div>
      <p className="mt-3 text-sm opacity-60">
        {policy.appName} &mdash; Effective {policy.effectiveDate}
      </p>

      <div className="mt-10 space-y-10 text-base leading-relaxed">
        {policy.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-(--border) text-sm opacity-50">
        {policy.appName} &mdash; Privacy Policy &mdash; {policy.effectiveDate}
      </div>
    </div>
  );
}
