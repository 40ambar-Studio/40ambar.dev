import { navLinks } from "../../constants/navLinks";
import { NavItem } from "./NavItem";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <nav className="border-t border-border bg-background md:hidden">
      <div className="mx-auto max-w-5xl space-y-2 px-4 pb-4 pt-2 sm:px-6">
        {navLinks.map((link) => (
          <NavItem key={link.to} {...link} onClick={onClose} />
        ))}
      </div>
    </nav>
  );
}
