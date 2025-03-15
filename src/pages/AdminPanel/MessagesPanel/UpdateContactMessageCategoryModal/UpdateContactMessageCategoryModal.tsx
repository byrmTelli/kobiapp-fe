import CustomDialog from "../../../../components/Dialog/CustomDialog";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  UpdateContactMessageCategoryFormModel,
  UpdateContactMessageCategoryFormModelScheme,
  UpdateContactMessageCategoryModalProps,
} from "./types";
import { apiManager } from "../../../../store/api/enhanced/enhancedApiManager";
import { Textarea } from "../../../../components/Textarea";

export default function UpdateContactMessageCategoryModal({
  selectedContactMessageCategory,
  isOpen,
  onClose,
}: UpdateContactMessageCategoryModalProps) {
  // States
  const setSafeTimenout = useSetSafeTimeout();
  // Form
  const form = useForm<UpdateContactMessageCategoryFormModel>({
    defaultValues: {
      id: selectedContactMessageCategory?.id,
      title: selectedContactMessageCategory?.title ?? "",
      description: selectedContactMessageCategory?.description ?? "",
    },
    resolver: yupResolver(UpdateContactMessageCategoryFormModelScheme),
  });
  // Queries
  const [updateContactMessageCategoryRequest] =
    apiManager.usePostApiManagerUpdateContactCategoryMutation();

  // Handlers
  const handleSubmitButtonClick = form.handleSubmit(() => {
    const f = form.getValues();

    updateContactMessageCategoryRequest({
      updateContactCategoryRequestModel: {
        id: f.id,
        title: f.title,
        description: f.description,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("İletişim kategorisi güncelleme işlemi başarılı.");
          setSafeTimenout(() => {
            onClose();
          }, 1000);
        }
      })
      .catch((error) => {
        toast.error("İşlem sırasında bir hata oluştu");
        console.error(error);
      });
  });

  return (
    <CustomDialog
      title={"İletişim Kategorisi Bilgilerini Düzenle"}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleSubmitButtonClick}
    >
      <div className="flex flex-col gap-4 p-4">
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="İletişim Kategorisi Adı"
              invalid={fieldState.error?.message}
              autoComplete="off"
            />
          )}
        />
        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <Textarea
              {...field}
              label="İletişim Kategorisi Açıklaması"
              invalid={fieldState.error?.message}
              autoComplete="off"
              className="outline-none"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
