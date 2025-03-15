import { ContactMessageViewModel } from "../../../../store/api/generated/generatedApiManager";

interface InspectContactMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedContactMessage: ContactMessageViewModel;
}

export type { InspectContactMessageModalProps };
