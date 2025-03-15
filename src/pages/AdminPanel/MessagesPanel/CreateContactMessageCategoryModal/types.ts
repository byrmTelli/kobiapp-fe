import * as yup from "yup";

interface CreateContactMessageCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CreateContactMessageCategoryFormModel {
  title: string;
  description: string;
}

export const CreateContactMessageCategoryModalFormSchema = yup.object().shape({
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
  CreateContactMessageCategoryModalProps,
  CreateContactMessageCategoryFormModel,
};
