import * as yup from "yup";

export type LoginFormData = {
  email: string;
  password: string;
};

export const getLoginSchema = (t: (key: string) => string) => {
  return yup.object().shape({
    email: yup
      .string()
      .required(t('validation.required'))
      .email(t('validation.invalidEmail')),
    password: yup
      .string()
      .required(t('validation.required'))
  });
};