import { Link } from "react-router";

export default function AppNotFound() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">App not found</h1>
      <Link to="/apps" className="mt-4 inline-block text-primary">
        ← Back to all apps
      </Link>
    </div>
  );
}
