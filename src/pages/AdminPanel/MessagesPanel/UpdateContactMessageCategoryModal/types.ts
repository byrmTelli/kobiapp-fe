import * as yup from "yup";
import { ContactCategoryViewModel } from "../../../../store/api/generated/generatedApiManager";

interface UpdateContactMessageCategoryModalProps {
  selectedContactMessageCategory: ContactCategoryViewModel;
  isOpen: boolean;
  onClose: () => void;
}

interface UpdateContactMessageCategoryFormModel {
  id: number;
  title: string;
  description: string;
}

export const UpdateContactMessageCategoryFormModelScheme = yup.object().shape({
  id: yup.number().required("Bir kategori seçiniz."),
  title: yup
    .string()
    .required("Kategori adı alanı girilmesi zorunludur.")
    .min(3, "Kategori adı alanı en az 3 karakterden oluşmaktadır.")
    .max(35, "Kategori adı alanı en fazla 35 karakterden oluşmaktadır.")
    .matches(
      /^[a-zA-ZğüşöçıİĞÜŞÖÇ0-9 ]+$/,
      "Kategori başlık alanı yalnızca harf ve rakamlardan oluşmalıdır.Özel karakterler içeremez."
    ),
  description: yup
    .string()
    .required("Kategori açıklama alanı zorunludur.")
    .min(3, "Kategori açıklama alanı en az 3 karakterden oluşmaktadır.")
    .max(255, "Kategori açıklama alanı en fazla 255 karakterden oluşmaktadır.")
    .matches(
      /^[a-zA-ZğüşöçıİĞÜŞÖÇ0-9 ]+$/,
      "Kategori açıklama alanı yalnızca harf ve rakamlardan oluşmalıdır.Özel karakterler içeremez."
    ),
});

export type {
  UpdateContactMessageCategoryModalProps,
  UpdateContactMessageCategoryFormModel,
};
