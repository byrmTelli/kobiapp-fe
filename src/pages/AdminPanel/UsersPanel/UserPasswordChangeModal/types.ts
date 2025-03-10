import * as yup from "yup";
interface PasswordChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PasswordChangeFromModel {
  oldPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}

export const PasswordChangeFormModelScheme = yup.object().shape({
  oldPassword: yup
    .string()
    .min(8, "Eski şifre en az 8 karakter olmalıdır.")
    .matches(/[0-9]/, "Eski şifre en az bir rakam içermelidir.")
    .matches(/[a-z]/, "Eski şifre en az bir küçük harf içermelidir.")
    .matches(/[A-Z]/, "Eski şifre en az bir büyük harf içermelidir.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Eski şifre en az bir özel karakter içermelidir."
    )
    .required("Eski şifre zorunludur."),
  newPassword: yup
    .string()
    .min(8, "Yeni şifre en az 8 karakter olmalıdır.")
    .matches(/[0-9]/, "Yeni şifre en az bir rakam içermelidir.")
    .matches(/[a-z]/, "Yeni şifre en az bir küçük harf içermelidir.")
    .matches(/[A-Z]/, "Yeni şifre en az bir büyük harf içermelidir.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Yeni şifre en az bir özel karakter içermelidir."
    )
    .required("Yeni şifre zorunludur."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Şifreler eşleşmiyor.")
    .required("Şifre tekrarı zorunludur."),
});

export type { PasswordChangeModalProps, PasswordChangeFromModel };
