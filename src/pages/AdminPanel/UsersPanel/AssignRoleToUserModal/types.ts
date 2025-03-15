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
  userId: yup
    .number()
    .min(1, "Kullanıcı seçimi yapınız.")
    .required("Kullanıcı seçimi yapınız."),
  role: yup.object().required("Role seçimi yapınız."),
});

export type {
  AssignRoleToUserModalComponentProps as AssignRoleToUserModalProps,
  AssignRoleToUserFormModel,
};
