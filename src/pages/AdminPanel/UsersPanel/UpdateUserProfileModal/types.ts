import { UserLoginViewModel } from "../../../../store/api/generated/generatedApiAuth";
import * as yup from "yup";

interface UpdateUserProfileModalProps {
  userProfile: UserLoginViewModel;
  isOpen: boolean;
  onClose: () => void;
}

interface UpdateUserProfileFormModel {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
}

export const UpdateUserProfileFormModelScheme = yup.object().shape({
  id: yup.number().required("lütfen giriş yapınız."),
  firstname: yup
    .string()
    .min(3, "İsim en az 3 karakter olmalıdır.")
    .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "İsim sadece harflerden oluşmalıdır.")
    .required("İsim zorunludur."),
  lastname: yup
    .string()
    .min(3, "İsim en az 3 karakter olmalıdır.")
    .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "İsim sadece harflerden oluşmalıdır.")
    .required("Soyisim zorunludur."),
  phoneNumber: yup
    .string()
    .min(10, "Telefon numarası en az 10 karakter olmalıdır.")
    .matches(/^[0-9]+$/, "Telefon numarası sadece rakamlardan oluşmalıdır.")
    .required("Telefon numarası zorunludur."),
});

export type { UpdateUserProfileModalProps, UpdateUserProfileFormModel };
