import { Link } from "react-router";
import { isActiveLink } from "../utils/activeLink";
import { useLocation } from "react-router";
import type { ComponentType } from "react";

interface NavItemProps {
  to: string;
  label: string;
  icon: ComponentType<{ size?: number }>;
  onClick?: () => void;
}

export function NavItem({ to, label, icon: Icon, onClick }: NavItemProps) {
  const location = useLocation();
  const active = isActiveLink(location.pathname, to);

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "text-primary bg-primary/10"
          : "text-secondary hover:bg-secondary/10"
      }`}
    >
      <Icon size={16} />
      {label}
    </Link>
  );
}
