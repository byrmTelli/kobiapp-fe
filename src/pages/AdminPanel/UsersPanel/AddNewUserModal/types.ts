import * as yup from "yup";

interface AddNewUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AddNewUserModalFormModel {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
}

export const AddNewUserModalFormSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Kullanıcı adınız en az 5 karakterden oluşmalıdır.")
    .max(20, "Kullanıcı adınız en fazla 20 karakterden oluşmalıdır.")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Kullanıcı adınız sadece harfler ve rakamlardan oluşmalıdır."
    )
    .required("Kullanıcı adı alanı zorunludur."),
  email: yup
    .string()
    .email("Geçersiz email adresi.")
    .required("Email alanı zorunludur."),
  firstName: yup
    .string()
    .min(3, "İsim en az 3 karakter olmalıdır.")
    .max(20, "İsim en fazla 20 karakter olmalıdır.")
    .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/, "İsim sadece harflerden oluşmalıdır.")
    .required("İsim zorunludur."),
  lastName: yup
    .string()
    .min(2, "Soyisim alanı en az iki karaterden oluşmalıdır.")
    .matches(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ]+$/,
      "Soyisim sadece harflerden oluşmalıdır."
    )
    .required("lastName filed is required"),
  phoneNumber: yup
    .string()
    .min(10, "Telefon numarası en az 10 karakter olmalıdır.")
    .matches(/^[0-9]+$/, "Telefon numarası sadece rakamlardan oluşmalıdır.")
    .required("Telefon numarası zorunludur."),
  password: yup
    .string()
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(/[0-9]/, "Şifre en az bir rakam içermelidir.")
    .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir.")
    .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Şifre en az bir özel karakter içermelidir."
    )
    .required("Şifre zorunludur."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Şifreler eşleşmiyor.")
    .required("Şifre tekrarı zorunludur."),
});

export type { AddNewUserModalProps, AddNewUserModalFormModel };
