import { Link } from "react-router";
import { Grid, Home, Shield, User } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/apps", label: "Projects", icon: Grid },
  { to: "/privacy-policy", label: "Privacy Policy", icon: Shield },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTopColor: "var(--border)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 space-y-4 sm:space-y-0">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-lg tracking-tight logo-font duration-300 ease-in-out hover:text-[var(--primary)] "
            >
              40ambar
            </Link>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Developer Studio
            </p>
          </div>

          {/* Navigation */}
          <div>
            <ul className="space-y-2 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
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
          className="mt-8 pt-6 text-center text-xs"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p style={{ color: "var(--text-secondary)" }}>
            &#127279; {new Date().getFullYear()}&nbsp;
            <Link to="https://www.gnu.org/licenses/copyleft.html">
              copyleft
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
