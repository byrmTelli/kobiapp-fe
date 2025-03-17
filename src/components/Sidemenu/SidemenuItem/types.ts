import { JSX } from "react";

interface SidemenuItemProps {
  path: string;
  label: string;
  icon: JSX.Element;
  isSideMenuOpen: boolean;
}

export type { SidemenuItemProps };
