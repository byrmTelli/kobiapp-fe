import {
  RoleViewModel,
  UserProfileForAdminPanelViewModel,
} from "../../../../store/api/generated/generatedApiManager";
import * as yup from "yup";
interface AssignRoleToUserModalComponentProps {
  userProfile: UserProfileForAdminPanelViewModel;
  isOpen: boolean;
  onClose: () => void;
}

interface AssignRoleToUserFormModel {
  userId: number;
  role: RoleViewModel;
}

export const AssignroleToUserFormScheme = yup.object().shape({
  userId: yup.number().required(),
  role: yup.object().required(),
});

export type {
  AssignRoleToUserModalComponentProps as AssignRoleToUserModalProps,
  AssignRoleToUserFormModel,
};
