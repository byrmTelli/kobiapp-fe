import { InputHTMLAttributes, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CheckboxComponentProps {
  label?: string;
  invalid?: boolean | string;
  text?: ReactNode;
}

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> &
  CheckboxComponentProps;
