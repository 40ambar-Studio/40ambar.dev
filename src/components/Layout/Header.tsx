import { Link } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { MobileMenu } from "./MobileMenu";
import { useTheme } from "../../hooks/useTheme";
import { navLinks } from "../../constants/navLinks";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-b-(--border) bg-(--bg)/65">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between backdrop-blur-lg px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl tracking-tight font-logo hover:text-primary"
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
            className="flex h-9 w-9 items-center justify-center rounded-lg text-(--text) hover:bg-(--bg-secondary)"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden text-(--text) hover:bg-(--bg-secondary)"
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
