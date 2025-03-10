import { UserProfileForAdminPanelViewModel } from "../../../../store/api/generated/generatedApiManager";

interface UsersPanelTopDashboardProps {
  addUserButtonHandler: () => void;
  users: UserProfileForAdminPanelViewModel[];
}

export type { UsersPanelTopDashboardProps };
