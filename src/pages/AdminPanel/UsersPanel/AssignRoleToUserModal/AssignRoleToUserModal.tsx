import { Controller, useForm } from "react-hook-form";
import CustomDialog from "../../../../components/Dialog/CustomDialog";
import {
  AssignRoleToUserFormModel,
  AssignroleToUserFormScheme,
  AssignRoleToUserModalProps,
} from "./types";
import { Select } from "../../../../components/Select";
import { apiManager } from "../../../../store/api/enhanced/enhancedApiManager";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import { RoleViewModel } from "../../../../store/api/generated/generatedApiManager";

export default function AssignRoleToUserModal({
  userProfile,
  isOpen,
  onClose,
}: AssignRoleToUserModalProps) {
  // States
  const setSafeTimeout = useSetSafeTimeout();
  // Queries
  const rolesQuery = apiManager.useGetApiManagerGetAllRolesQuery();
  const [assignRoleToUserRequest] =
    apiManager.usePostApiManagerAssignRoleToUserMutation();

  // Mutations
  const roleList = rolesQuery.data?.data ?? [];
  // Forms
  const form = useForm<AssignRoleToUserFormModel>({
    defaultValues: {
      userId: userProfile.id,
      role: {} as RoleViewModel,
    },
    resolver: yupResolver(AssignroleToUserFormScheme),
  });

  console.log(form.control._formValues);
  // Handlers
  const handleAssignRoleToUserSubmitButtonClick = () => {
    console.log(form.getValues());
    const f = form.getValues();

    assignRoleToUserRequest({
      userId: f.userId,
      roleId: f.role.id as number,
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("Kullanıcı rolü başarıyla atandı.");
          setSafeTimeout(() => {
            onClose();
          }, 500);
        }
      })
      .catch();
  };
  return (
    <CustomDialog
      title={"Kullanıcı Rol Atama"}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={form.handleSubmit(handleAssignRoleToUserSubmitButtonClick)}
    >
      <div className="flex flex-col gap-4 p-4 dark:text-gray-200">
        <p>İlgili kullanıcı ile ilgili bilgiler aşağıda belirtilmiştir.</p>
        <div className="flex flex-col gap-2">
          <div className="p-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg">
            <p>
              <span className="font-bold">Adı:</span> {userProfile.fullname}
            </p>
          </div>
          <div className="p-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg">
            <p>
              <span className="font-bold">Email:</span> {userProfile.email}
            </p>
          </div>
          <div className="p-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg">
            <p>
              <span className="font-bold">Telefon Numarası:</span>{" "}
              {userProfile.phoneNumber}
            </p>
          </div>
        </div>
        <div className="p-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg">
          <p>
            <span className="font-bold text-amber-500">MevcutRolü:</span>{" "}
            {userProfile.role?.name ?? "Rol ataması henüz yapılmamış."}
          </p>
        </div>
        <div className="">
          <h1>Atama işlemi için bir rol seçiniz.</h1>
        </div>
        <Controller
          control={form.control}
          name="role"
          render={({ field, fieldState }) => (
            <Select
              {...field}
              options={roleList
                .filter((x) => x.name != userProfile.role?.name)
                .map((role) => role)}
              label="Kullanıcı Rolü"
              invalid={fieldState.error?.message}
              getValueField={(option) => String(option.id)}
              getLabelField={(option) => String(option.name)}
              emptyOption="Rol Seçiniz"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
