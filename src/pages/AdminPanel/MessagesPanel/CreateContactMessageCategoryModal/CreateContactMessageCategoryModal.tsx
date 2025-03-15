import { Controller, useForm } from "react-hook-form";

import CustomDialog from "../../../../components/Dialog/CustomDialog";
import {
  CreateContactMessageCategoryFormModel,
  CreateContactMessageCategoryModalFormSchema,
  CreateContactMessageCategoryModalProps,
} from "./types";
import { Input } from "../../../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiManager } from "../../../../store/api/enhanced/enhancedApiManager";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";

export default function CreateContactMessageCategoryModal({
  isOpen,
  onClose,
}: CreateContactMessageCategoryModalProps) {
  // States
  const setSafeTimeOut = useSetSafeTimeout();
  //Forms
  const form = useForm<CreateContactMessageCategoryFormModel>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: yupResolver(CreateContactMessageCategoryModalFormSchema),
  });
  // Queries
  const [createNewCategory] =
    apiManager.usePostApiManagerCreateNewContactCategoryMutation();

  // Handlers
  const handleFormSubmit = form.handleSubmit(() => {
    const f = form.getValues();

    createNewCategory({
      createNewContactCategoryRequestModel: {
        title: f.title,
        description: f.description,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success(res.message);
          setSafeTimeOut(() => {
            form.reset();
            onClose();
          }, 1000);
        }
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  });
  return (
    <CustomDialog
      title={"İletişim Kategorisi Oluştur"}
      isOpen={isOpen}
      onConfirm={handleFormSubmit}
      onClose={onClose}
    >
      <div className="flex flex-col gap-4 p-4">
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"İletişim Kategorisi Adı"}
              invalid={fieldState.error?.message}
              autoComplete="off"
              placeholder="İletişim Kategorisi Adı Giriniz"
            />
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"İletişim Kategorisi Açıklaması"}
              invalid={fieldState.error?.message}
              autoComplete="off"
              placeholder="İletişim Kategori Açıklaması Giriniz"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
