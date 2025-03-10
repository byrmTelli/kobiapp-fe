import * as yup from "yup";

interface LoginFormModel {
  email: string;
  password: string;
}

export type { LoginFormModel };

const LoginFormSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export { LoginFormSchema };
