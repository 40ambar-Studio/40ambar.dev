import { Link } from "react-router";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/about", label: "About" },
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
              className="text-lg tracking-tight logo-font duration-300 ease-in-out hover:text-(--primary)"
            >
              40ambar
            </Link>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Developer Studio
            </p>
          </div>

          {/* Navigation */}
          <div className="sm:flex sm:justify-end ">
            <ul className="space-y-4 gap-x-8 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
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
            <Link
              to="https://www.gnu.org/licenses/copyleft.html"
              target="_blank"
              className="hover:text-(--primary) duration-300 ease-in-out"
            >
              copyleft
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
