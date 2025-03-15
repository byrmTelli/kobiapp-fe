import * as yup from "yup";
import { MinistryCategoryViewModel } from "../../../../store/api/generated/generatedApiMinistryCategory";
import { MinistryViewModel } from "../../../../store/api/generated/generatedApiMinistry";

interface UpdateMinistryModalProps {
  selectedMinistry: MinistryViewModel;
  isOpen: boolean;
  onClose: () => void;
}

interface UpdateMinistyFormModel {
  id: number;
  title: string;
  description: string;
  category: MinistryCategoryViewModel;
}

export const UpdateMinistryFormModelScheme = yup.object().shape({
  id: yup.number().required("lütfen giriş yapınız."),
  title: yup
    .string()
    .min(3, "Hizmet adı en az 3 karakter olmalıdır")
    .max(100, "Hizmet adı en fazla 100 karakter olmalıdır")
    .matches(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ ]+$/,
      "Sadece harf ve boşluk kullanabilirsiniz"
    )
    .required("Hizmet adı zorunludur"),
  description: yup
    .string()
    .min(3, "Hizmet açıklaması en az 3 karakter olmalıdır")
    .max(360, "Hizmet açıklaması en fazla 360 karakter olmalıdır")
    .matches(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9 ]+$/,
      "Sadece harf ve boşluk kullanabilirsiniz"
    )
    .required("Hizmet açıklaması zorunludur"),
  category: yup.object().required("Hizmet kategorisi zorunludur"),
});

export type { UpdateMinistryModalProps, UpdateMinistyFormModel };
