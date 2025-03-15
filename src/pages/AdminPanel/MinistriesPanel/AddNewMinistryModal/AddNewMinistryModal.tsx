import CustomDialog from "../../../../components/Dialog/CustomDialog";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../../components/Input";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import {
  AddNewMinistryModalFormSchema,
  AddNewMinistryModalProps,
  AddNewUserMinistryFormModel,
} from "./types";
import { apiMinistry } from "../../../../store/api/enhanced/enhancedApiMinistry";
import Select from "../../../../components/Select/Select";
import { MinistryCategoryViewModel } from "../../../../store/api/generated/generatedApiMinistryCategory";

export default function AddNewMinistryModal({
  isOpen,
  onClose,
}: AddNewMinistryModalProps) {
  // States
  const setSafeTimeOut = useSetSafeTimeout();
  // Queries
  const [createMinistry] =
    apiMinistry.usePostApiMinistryCreateNewMinistryMutation();
  const getMinistryCategoriesQuery =
    apiMinistry.useGetApiMinistryCategoryGetAllCategoriesQuery();

  //Mutations
  const ministryCategories = getMinistryCategoriesQuery.data?.data ?? [];
  // Forms
  const form = useForm<AddNewUserMinistryFormModel>({
    defaultValues: {
      title: "",
      description: "",
      category: {} as MinistryCategoryViewModel,
    },
    resolver: yupResolver(AddNewMinistryModalFormSchema),
  });
  // Handlers
  const handleFormSubmit = () => {
    const f = form.getValues();

    createMinistry({
      createMinistryRequestModel: {
        title: f.title,
        description: f.description,
        categoryId: f.category.id,
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
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"Hizmet Adı"}
              invalid={fieldState.error?.message}
              autoComplete="off"
              placeholder="Hizmet Adı Giriniz"
            />
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label={"Hizmet Açıklaması"}
              invalid={fieldState.error?.message}
              autoComplete="off"
              placeholder="Hizmet Açıklaması Giriniz"
            />
          )}
        />
        <Controller
          name="category"
          control={form.control}
          render={({ field, fieldState }) => (
            <Select
              {...field}
              options={ministryCategories}
              label={"Hizmet Kategorisi"}
              invalid={fieldState.error?.message}
              getValueField={(option) => String(option.id)}
              getLabelField={(option) => String(option.name)}
              emptyOption="Hizmet Kategorisi Seçiniz"
            />
          )}
        />
      </div>
    </CustomDialog>
  );
}
