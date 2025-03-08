import { ReactNode } from "react";

interface CustomDialogComponentProps {
  title: string;
  children?: ReactNode;
  onConfirm?: () => void;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}

interface CustomDialogHeaderComponentProps {
  children: React.ReactNode;
}

interface CustomDialogContentComponentProps {
  children?: React.ReactNode;
}

export type CustomDialogProps = CustomDialogComponentProps;
export type CustomDialogHeaderProps = CustomDialogHeaderComponentProps;
export type CustomDialogContentProps = CustomDialogContentComponentProps;
