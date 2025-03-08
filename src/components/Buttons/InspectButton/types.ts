import { ButtonHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

export interface InspectButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: JSX.Element;
  varient?: "light" | "dark";
  isLoading?: boolean;
}
