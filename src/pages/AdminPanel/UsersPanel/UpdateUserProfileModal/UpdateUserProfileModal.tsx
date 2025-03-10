import CustomDialog from "../../../../components/Dialog/CustomDialog";

import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import {
  UpdateUserProfileFormModel,
  UpdateUserProfileFormModelScheme,
  UpdateUserProfileModalProps,
} from "./types";
import { apiManager } from "../../../../store/api/enhanced/enhancedApiManager";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import { updateUser } from "../../../../store/slices/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { PhoneInput } from "../../../../components/PhoneImput";

export default function UpdateUserProfileModal({
  userProfile,
  isOpen,
  onClose,
}: UpdateUserProfileModalProps) {
  // States
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const setSafeTimeout = useSetSafeTimeout();
  // Form
  const form = useForm<UpdateUserProfileFormModel>({
    defaultValues: {
      id: user?.id,
      firstname: userProfile?.firstname,
      lastname: userProfile?.lastname,
      phoneNumber: userProfile?.phoneNumber,
    },
    resolver: yupResolver(UpdateUserProfileFormModelScheme),
  });
  // Queries
  const [updateUserProfileRequest] =
    apiManager.usePostApiManagerUpdateUserProfileMutation();
  const { refetch: refetchUserProfile } =
    apiManager.useGetApiManagerGetUserProfileQuery();
  // Handlers
  const handleSubmitButtonClick = form.handleSubmit(() => {
    const f = form.getValues();

    updateUserProfileRequest({
      updateUserProfileRequestModel: {
        id: user?.id,
        firstname: f.firstname,
        lastname: f.lastname,
        phoneNumber: f.phoneNumber,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("Profil bilgileri güncellendi");

          refetchUserProfile().then((refreshedData) => {
            const newUserProfileSettings = {
              accessToken: user?.accessToken,
              id: refreshedData.data?.data?.id,
              firstname: refreshedData.data?.data?.firstname,
              lastname: refreshedData.data?.data?.lastname,
              phoneNumber: refreshedData.data?.data?.phoneNumber,
              email: refreshedData.data?.data?.email,
            };

            dispatch(updateUser(newUserProfileSettings));

            setSafeTimeout(() => {
              onClose();
            }, 200);
          });
        } else {
          toast.error("Bir hata oluştu:" + res.message);
        }
      })
      .catch((error) => {
        toast.error("İşlem sırasında bir hata oluştu");
        console.error(error);
      });
  });

  return (
    <CustomDialog
      title={"Profil Bilgilerini Düzenle"}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleSubmitButtonClick}
    >
      <div className="flex flex-col gap-4 p-4">
        <Controller
          control={form.control}
          name="firstname"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Adınız"
              invalid={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={form.control}
          name="lastname"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              invalid={fieldState.error?.message}
              label="Soyadınız"
            />
          )}
        />
        <Controller
          control={form.control}
          name="phoneNumber"
          render={({ field, fieldState }) => (
            <PhoneInput
              {...field}
              invalid={fieldState.error?.message}
              label="Telefon Numaranız"
              autoComplete="off"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
