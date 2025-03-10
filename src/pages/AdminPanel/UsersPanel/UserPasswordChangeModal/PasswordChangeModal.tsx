import { Controller, useForm } from "react-hook-form";
import CustomDialog from "../../../../components/Dialog/CustomDialog";
import {
  PasswordChangeFormModelScheme,
  PasswordChangeFromModel,
  PasswordChangeModalProps,
} from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../../components/Input";
import { apiManager } from "../../../../store/api/enhanced/enhancedApiManager";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";

export default function PasswordChangeModal({
  isOpen,
  onClose,
}: PasswordChangeModalProps) {
  // States
  const setSafeTimeout = useSetSafeTimeout();
  // Queries
  const [passwordChangeRequest] =
    apiManager.usePostApiManagerResetPasswordMutation();
  // Form
  const form = useForm<PasswordChangeFromModel>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(PasswordChangeFormModelScheme),
  });
  // Handlers
  const handlePasswordChangeButtonClick = form.handleSubmit((data) => {
    passwordChangeRequest({
      passwordChangeRequestModel: {
        oldPassword: data.oldPassword,
        password: data.newPassword,
        passwordConfirmation: data.passwordConfirmation,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success(res.message);
          setSafeTimeout(() => {
            onClose();
          }, 200);
        }
      })
      .catch();
  });
  return (
    <CustomDialog
      title={"Şifreni Değiştir"}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handlePasswordChangeButtonClick}
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="w-full">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 transition-colors duration-300">
            Parola Politikası
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
            Parolanızı oluştururken aşağıda belirtilen talimatlara uygun bir
            parola seçmelisiniz.
          </p>
          <ul className="list-disc list-inside">
            <li className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
              En az <span className="font-semibold">8 karakter</span> olmalıdır.
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
              En az bir <span className="font-semibold">rakam</span>{" "}
              içermelidir.
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
              En az bir <span className="font-semibold">küççük harf</span>{" "}
              içermelidir.
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
              En az bir <span className="font-semibold">büyük harf</span>{" "}
              içermelidir.
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
              En az bir <span className="font-semibold">özel karakter</span>{" "}
              içermelidir.
            </li>
          </ul>
        </div>
        <Controller
          control={form.control}
          name="oldPassword"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              type="password"
              placeholder="Eski şifrenizi giriniz"
              invalid={fieldState.error?.message}
              label="Eski Şifre"
            />
          )}
        />
        <Controller
          control={form.control}
          name="newPassword"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              type="password"
              placeholder="Yeni şifrenizi giriniz"
              invalid={fieldState.error?.message}
              label="Yeni Şifre"
            />
          )}
        />
        <Controller
          control={form.control}
          name="passwordConfirmation"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              type="password"
              placeholder="Yeni şifrenizi tekrar giriniz"
              invalid={fieldState.error?.message}
              label="Yeni Şifre Onayı"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
