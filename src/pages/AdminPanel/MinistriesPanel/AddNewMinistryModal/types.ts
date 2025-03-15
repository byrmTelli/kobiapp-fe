import * as yup from "yup";
import { MinistryCategoryViewModel } from "../../../../store/api/generated/generatedApiMinistryCategory";

interface AddNewMinistryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AddNewUserMinistryFormModel {
  title: string;
  description: string;
  category: MinistryCategoryViewModel;
}

export const AddNewMinistryModalFormSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Hizmet adı en az 3 karakter olmalıdır")
    .matches(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ ]+$/,
      "Sadece harf ve boşluk kullanabilirsiniz."
    )
    .required("Hizmet adı zorunludur"),
  description: yup
    .string()
    .min(3, "Hizmet açıklaması en az 3 karakter olmalıdır.")
    .matches(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ0-9 ]+$/,
      "Sadece harf,rakam ve boşluk kullanabilirsiniz."
    )
    .required("Hizmet açıklaması zorunludur"),
  category: yup.object().required("Hizmet kategorisi zorunludur"),
});

export type { AddNewMinistryModalProps, AddNewUserMinistryFormModel };
