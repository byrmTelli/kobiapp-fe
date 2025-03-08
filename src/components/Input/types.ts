import { ReactNode } from "react";

interface InputComponentProps {
  invalid?: boolean | string;
  label?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  inputClassName?: string;
}

export type InputProps = InputComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>;
