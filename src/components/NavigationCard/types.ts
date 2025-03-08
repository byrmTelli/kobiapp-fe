import { ReactNode } from "react";

interface NavigationCardComponentProps {
  title: string;
  icon: ReactNode;
  content: string;
  path: string;
}

export type NavigationCardProps = NavigationCardComponentProps;
