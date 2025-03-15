import CustomDialog from "../../../../components/Dialog/CustomDialog";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../../components/Input";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import {
  AddNewMinistryCategoryFormModel,
  AddNewMinistryCategoryModalFormSchema,
  AddNewMinistryCategoryModalProps,
} from "./types";
import { apiMinistryCategory } from "../../../../store/api/enhanced/enhancedApiMinistryCategory";

export default function AddNewMinistryCategoryModal({
  isOpen,
  onClose,
}: AddNewMinistryCategoryModalProps) {
  // States
  const setSafeTimeOut = useSetSafeTimeout();
  // Queries
  const [createMinistryCategory] =
    apiMinistryCategory.usePostApiMinistryCategoryCreateNewMinistryCategoryMutation();
  //Mutations

  // Forms
  const form = useForm<AddNewMinistryCategoryFormModel>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(AddNewMinistryCategoryModalFormSchema),
  });
  // Handlers
  const handleFormSubmit = () => {
    const f = form.getValues();

    createMinistryCategory({
      createMinistryCategoryRequestModel: {
        name: f.name,
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
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"Hizmet Kategorisi Adı"}
              invalid={fieldState.error?.message}
              autoComplete="off"
              placeholder="Hizmet Kategorisi Adı Giriniz"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
