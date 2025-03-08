export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface ModalHeaderProps {
  children: React.ReactNode;
}

export interface ModalContentProps {
  children?: React.ReactNode;
}
