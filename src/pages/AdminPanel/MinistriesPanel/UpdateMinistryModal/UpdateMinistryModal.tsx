import CustomDialog from "../../../../components/Dialog/CustomDialog";

import { Controller, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  UpdateMinistryFormModelScheme,
  UpdateMinistryModalProps,
  UpdateMinistyFormModel,
} from "./types";
import { apiMinistry } from "../../../../store/api/enhanced/enhancedApiMinistry";
import { Select } from "../../../../components/Select";

export default function UpdateMinistryModal({
  selectedMinistry,
  isOpen,
  onClose,
}: UpdateMinistryModalProps) {
  // States
  const user = useSelector((state: RootState) => state.auth.user);
  // Form
  const form = useForm<UpdateMinistyFormModel>({
    defaultValues: {
      id: user?.id,
      title: selectedMinistry?.title ?? "",
      description: selectedMinistry?.description ?? "",
      category: selectedMinistry?.category,
    },
    resolver: yupResolver(UpdateMinistryFormModelScheme),
  });
  // Queries
  const [updateMinistryRequest] =
    apiMinistry.usePostApiMinistryUpdateMinistryMutation();
  const getMinistryCategoriesQuery =
    apiMinistry.useGetApiMinistryCategoryGetAllCategoriesQuery();

  //Mutations

  const ministryCategories = getMinistryCategoriesQuery.data?.data ?? [];
  const filteredCategories = ministryCategories.filter(
    (category) => category.id !== selectedMinistry?.category?.id
  );
  // Handlers
  const handleSubmitButtonClick = form.handleSubmit(() => {
    const f = form.getValues();

    updateMinistryRequest({
      updateMinistryRequestModel: {
        id: selectedMinistry?.id,
        title: f.title,
        description: f.description,
        categoryId: f.category.id,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("Hizmet güncelleme işlemi başarılı.");
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
          name="title"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label="Hizmet Adı"
              invalid={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <Input
              {...field}
              invalid={fieldState.error?.message}
              label="Hizmet Açıklaması"
            />
          )}
        />
        <Controller
          name="category"
          control={form.control}
          render={({ field, fieldState }) => (
            <Select
              {...field}
              options={filteredCategories}
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
