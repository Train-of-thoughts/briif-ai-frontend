import * as yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

export type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone?: string | null;
  password: string;
  confirmPassword: string;
};

export const getSignupSchema = (t: (key: string) => string) => {
  return yup.object().shape({
    firstName: yup
      .string()
      .required(t('validation.required')),
    lastName: yup
      .string()
      .required(t('validation.required')),
    email: yup
      .string()
      .required(t('validation.required'))
      .email(t('validation.invalidEmail')),
    countryCode: yup
      .string()
      .required(t('validation.required')),
    phone: yup
      .string()
      .optional()
      .nullable()
      .transform((value) => (value === "" ? null : value))
      .test('phone-format', t('validation.invalidPhone'), function(value) {
        if (!value) return true; // Optional field

        try {
          // Get the country code from the context
          const { countryCode } = this.parent;

          // Combine country code and phone number
          const fullPhoneNumber = `${countryCode}${value}`;

          // Validate using libphonenumber-js
          return isValidPhoneNumber(fullPhoneNumber);
        } catch {
          return false;
        }
      }),
    password: yup
      .string()
      .required(t('validation.required'))
      .min(8, t('validation.passwordTooShort'))
      .matches(/[a-zA-Z]/, t('validation.passwordRequiresLetter'))
      .matches(/[0-9]/, t('validation.passwordRequiresNumber'))
      .matches(/[^a-zA-Z0-9]/, t('validation.passwordRequiresSpecial')),
    confirmPassword: yup
      .string()
      .required(t('validation.required'))
      .oneOf([yup.ref('password')], t('validation.passwordsDoNotMatch'))
  });
};
