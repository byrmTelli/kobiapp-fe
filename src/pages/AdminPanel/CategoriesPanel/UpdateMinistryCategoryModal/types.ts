import * as yup from "yup";
import { MinistryCategoryViewModel } from "../../../../store/api/generated/generatedApiMinistryCategory";

interface UpdateMinistryCategoryModalProps {
  selectedMinistryCategory: MinistryCategoryViewModel;
  isOpen: boolean;
  onClose: () => void;
}

interface UpdateMinistyCategoryFormModel {
  id: number;
  name: string;
}

export const UpdateMinistryCategoryFormModelScheme = yup.object().shape({
  id: yup.number().required("lütfen giriş yapınız."),
  name: yup
    .string()
    .min(3, "Hizmet kategorisi adı en az 3 karakter olmalıdır")
    .max(100, "Hizmet adı en fazla 100 karakter olmalıdır")
    .matches(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ ]+$/,
      "Sadece harf ve boşluk kullanabilirsiniz"
    )
    .required("Hizmet adı zorunludur"),
});

export type {
  UpdateMinistryCategoryModalProps,
  UpdateMinistyCategoryFormModel,
};
