import { ContactCategoryViewModel } from "../../../../store/api/generated/generatedApiManager";

interface InspectContactMessageCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedContactMessageCategory: ContactCategoryViewModel;
}

export type { InspectContactMessageCategoryModalProps };
