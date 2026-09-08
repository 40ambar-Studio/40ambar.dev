import { Home, Grid, User } from "lucide-react";

export const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/apps", label: "Apps", icon: Grid },
  { to: "/about", label: "About", icon: User },
] as const;
