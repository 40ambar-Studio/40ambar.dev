import { Link } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../constants/navigation";
import { NavItem } from "./NavItem";
import { MobileMenu } from "./MobileMenu";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 65%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 backdrop-blur-md sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl tracking-tight font-logo hover:text-primary transition-colors"
        >
          <span className="tracking-tighter">40</span>ambar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>

        {/* Actions */}
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
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={toggleMobileMenu}
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

      {/* Mobile Menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
