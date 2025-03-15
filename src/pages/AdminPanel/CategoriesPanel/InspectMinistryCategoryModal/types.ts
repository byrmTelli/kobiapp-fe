import { MinistryCategoryViewModel } from "../../../../store/api/generated/generatedApiMinistryCategory";

interface InspectMinistryCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMinistryCategory: MinistryCategoryViewModel;
}

export type { InspectMinistryCategoryModalProps };
