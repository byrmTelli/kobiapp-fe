import { ReactNode } from "react";

interface TextareaComponentProps {
  label?: ReactNode;
  disabled?: boolean;
  invalid?: boolean | string;
}

export type TextareaProps = TextareaComponentProps &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
