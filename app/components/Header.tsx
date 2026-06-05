import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Grid, Home, Menu, Moon, Sun, User, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/apps", label: "Projects", icon: Grid },
  { to: "/about", label: "About", icon: User },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.getAttribute("data-theme") === "dark";
  });
  const location = useLocation();

  useEffect(() => {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 backdrop-blur-md sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl tracking-tight logo-font duration-300 ease-in-out hover:text-[var(--primary)]"
        >
          <span className="tracking-tighter">40</span>
          ambar
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                style={{
                  color: active ? "var(--primary)" : "var(--text-secondary)",
                  backgroundColor: active
                    ? "color-mix(in srgb, var(--primary) 10%, transparent)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active)
                    e.currentTarget.style.backgroundColor =
                      "var(--bg-secondary)";
                }}
                onMouseLeave={(e) => {
                  if (!active)
                    e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <link.icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--bg-secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="border-t md:hidden"
          style={{
            borderTopColor: "var(--border)",
            backgroundColor: "var(--bg)",
          }}
        >
          <div className="mx-auto max-w-5xl px-4 pb-4 pt-2 sm:px-6">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                  style={{
                    color: active ? "var(--primary)" : "var(--text-secondary)",
                    backgroundColor: active
                      ? "color-mix(in srgb, var(--primary) 10%, transparent)"
                      : "transparent",
                  }}
                >
                  <link.icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
