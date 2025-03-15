import CustomDialog from "../../../../components/Dialog/CustomDialog";

import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  UpdateMinistryCategoryFormModelScheme,
  UpdateMinistryCategoryModalProps,
  UpdateMinistyCategoryFormModel,
} from "./types";
import { apiMinistryCategory } from "../../../../store/api/enhanced/enhancedApiMinistryCategory";

export default function UpdateMinistryCategoryModal({
  selectedMinistryCategory,
  isOpen,
  onClose,
}: UpdateMinistryCategoryModalProps) {
  // States
  const user = useSelector((state: RootState) => state.auth.user);
  const setSafeTimenout = useSetSafeTimeout();
  // Form
  const form = useForm<UpdateMinistyCategoryFormModel>({
    defaultValues: {
      id: user?.id,
      name: selectedMinistryCategory?.name ?? "",
    },
    resolver: yupResolver(UpdateMinistryCategoryFormModelScheme),
  });
  // Queries
  const [updateMinistryRequest] =
    apiMinistryCategory.usePostApiMinistryCategoryUpdateMinistryCategoryMutation();

  // Handlers
  const handleSubmitButtonClick = form.handleSubmit(() => {
    const f = form.getValues();

    updateMinistryRequest({
      updateMinistryCategoryRequestModel: {
        id: selectedMinistryCategory?.id,
        name: f.name,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("Hizmet kategorisi güncelleme işlemi başarılı.");
          setSafeTimenout(() => {
            onClose();
          }, 500);
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
          name="name"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Hizmet Kategorisi Adı"
              invalid={fieldState.error?.message}
              autoComplete="off"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
