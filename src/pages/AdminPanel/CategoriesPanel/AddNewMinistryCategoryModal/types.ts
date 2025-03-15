import * as yup from "yup";

interface AddNewMinistryCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AddNewMinistryCategoryFormModel {
  name: string;
}

export const AddNewMinistryCategoryModalFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Kategori adı en az 3 karakter olmalıdır")
    .max(100, "Kategori adı en fazla 100 karakter olmalıdır")
    .matches(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ ]+$/,
      "Sadece harf ve boşluk kullanabilirsiniz"
    )
    .required("Hizmet adı zorunludur"),
});

export type {
  AddNewMinistryCategoryModalProps,
  AddNewMinistryCategoryFormModel,
};
