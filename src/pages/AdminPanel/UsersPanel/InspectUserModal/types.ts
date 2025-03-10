import { UserProfileForAdminPanelViewModel } from "../../../../store/api/generated/generatedApiManager";

interface InspectUserModalProps {
  userProfile: UserProfileForAdminPanelViewModel;
  isOpen: boolean;
  onClose: () => void;
}

export type { InspectUserModalProps };
