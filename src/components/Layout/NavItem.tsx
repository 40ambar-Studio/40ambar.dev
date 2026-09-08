import { NavLink } from "react-router";
import type { ComponentType } from "react";

interface NavItemProps {
  to: string;
  label: string;
  icon: ComponentType<{ size?: number }>;
  onClick?: () => void;
}

export function NavItem({ to, label, icon: Icon, onClick }: NavItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "text-primary bg-primary/10"
            : "text-secondary hover:bg-(--bg-secondary)"
        }`
      }
    >
      <Icon size={16} />
      {label}
    </NavLink>
  );
}
