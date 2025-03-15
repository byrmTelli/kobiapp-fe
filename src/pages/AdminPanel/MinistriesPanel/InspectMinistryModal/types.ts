import { MinistryViewModel } from "../../../../store/api/generated/generatedApiMinistry";

interface InspectMinistryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMinistry: MinistryViewModel;
}

export type { InspectMinistryModalProps };
