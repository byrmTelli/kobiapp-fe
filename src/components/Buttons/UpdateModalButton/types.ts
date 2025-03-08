import { ButtonHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

export interface UpdateModalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  tooltipLabel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: JSX.Element;
  varient?: "light" | "dark" | "success";
  isLoading?: boolean;
}
