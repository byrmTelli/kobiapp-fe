import { ContactCategoryViewModel } from "../../../../store/api/generated/generatedApiManager";
import * as yup from "yup";

interface ContactUsFormModel {
  content: string;
  contactEmail: string;
  contactPhone: string;
  category: ContactCategoryViewModel;
}

export const contactUsFormSchema = yup.object().shape({
  content: yup.string().required("Açıklama alanı zorunludur"),
  contactEmail: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Email alanı zorunludur"),
  contactPhone: yup
    .string()
    .min(10, "Telefon numarası 10 karakter olmalıdır. Örn: 555 444 33 22")
    .max(10, "Telefon numarası 10 karakter olmalıdır. Örn: 555 444 33 22")
    .matches(/^[0-9]+$/, "Telefon numarası sadece rakamlardan oluşmalıdır.")
    .required("Telefon alanı zorunludur"),
  category: yup
    .object()
    .shape({
      id: yup.number().optional(),
      title: yup.string().nullable().optional(),
      description: yup.string().nullable().optional(),
    })
    .required("Kategori seçimi zorunludur"),
});

export type { ContactUsFormModel };
