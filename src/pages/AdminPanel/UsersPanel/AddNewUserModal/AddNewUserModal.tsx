import CustomDialog from "../../../../components/Dialog/CustomDialog";
import { AddNewUserModalFormSchema, AddNewUserModalProps } from "./types";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../../components/Input";
import { apiManager } from "../../../../store/api/enhanced/enhancedApiManager";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import { PhoneInput } from "../../../../components/PhoneImput";

export default function AddNewUserModal({
  isOpen,
  onClose,
}: AddNewUserModalProps) {
  // States
  const setSafeTimeOut = useSetSafeTimeout();
  // Queries
  const [createUser] = apiManager.usePostApiManagerRegisterMutation();
  // Forms
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(AddNewUserModalFormSchema),
  });
  // Handlers
  const handleFormSubmit = () => {
    const f = form.getValues();

    createUser({
      createNewUserRequestModel: {
        email: f.email,
        firstname: f.firstName,
        lastname: f.lastName,
        phoneNumber: f.phoneNumber,
        username: f.username,
        password: f.password,
        passwordConfirmation: f.passwordConfirmation,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("Kullanıcı başarıyla oluşturuldu");
          setSafeTimeOut(() => {
            onClose();
          }, 2000);
        }
      })
      .catch();
  };
  return (
    <CustomDialog
      title={"Kullanıcı Bilgileri"}
      isOpen={isOpen}
      onConfirm={form.handleSubmit(handleFormSubmit)}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4 p-4">
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"Kullanıcı Adı"}
              invalid={fieldState.error?.message}
              autoComplete="off"
            />
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"Email Adress"}
              invalid={fieldState.error?.message}
              autoComplete="off"
            />
          )}
        />
        <Controller
          name="firstName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"İsim"}
              invalid={fieldState.error?.message}
              autoComplete="off"
            />
          )}
        />
        <Controller
          name="lastName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"Soyisim"}
              invalid={fieldState.error?.message}
              autoComplete="off"
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={form.control}
          render={({ field, fieldState }) => (
            <PhoneInput
              {...field}
              label={"Telefon Numarası"}
              invalid={fieldState.error?.message}
              autoComplete="off"
            />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"Parola"}
              invalid={fieldState.error?.message}
              autoComplete="off"
              type="password"
            />
          )}
        />
        <Controller
          name="passwordConfirmation"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"Parola Doğrulama"}
              invalid={fieldState.error?.message}
              autoComplete="off"
              type="password"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
