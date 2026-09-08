import { Link } from "react-router";
import { navLinks } from "../../constants/navLinks";

export default function FooterLinks() {
  return (
    <ul className="space-y-4 gap-x-8 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
      {navLinks.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className="sm:flex items-center gap-2 text-sm text-(--text-secondary) hover:text-(--primary)"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
