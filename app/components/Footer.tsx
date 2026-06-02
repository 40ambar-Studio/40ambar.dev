import { Link } from "react-router";
import { HomeIcon, UserIcon, GridIcon, ShieldIcon } from "./Icons";

const footerLinks = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/about", label: "About", icon: UserIcon },
  { to: "/apps", label: "Projects", icon: GridIcon },
  { to: "/privacy-policy", label: "Privacy Policy", icon: ShieldIcon },
];

export default function Footer() {
  return (
    <footer style={{ borderTopColor: "var(--border)", borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="text-lg font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              <span style={{ color: "var(--primary)" }}>/</span>
              40ambar
            </Link>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              Developer Studio
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}
                  >
                    <link.icon size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 flex flex-col items-center justify-between gap-2 pt-6 text-center text-xs sm:flex-row"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p style={{ color: "var(--text-secondary)" }}>
            &copy; {new Date().getFullYear()} 40ambar Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}