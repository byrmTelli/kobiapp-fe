import { ButtonHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  icon?: JSX.Element;
  varient?: "light" | "dark" | "success" | "danger" | "info" | "amber";
  isLoading?: boolean;
}
