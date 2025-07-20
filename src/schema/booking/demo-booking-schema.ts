import { z } from "zod";

export type DemoBookingFormData = {
  name: string;
  email: string;
  company?: string;
  message?: string;
  locale: string;
};

// Constants for validation
export const MAX_NAME_LENGTH = 100;
export const MAX_COMPANY_LENGTH = 100;
export const MAX_MESSAGE_LENGTH = 500;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const getDemoBookingSchema = (t: (key: string, params?: Record<string, number | string | Date>) => string) => {
  return z.object({
    name: z
      .string()
      .min(1, t("validation.nameRequired"))
      .max(MAX_NAME_LENGTH, t("validation.nameMaxLength", { max: MAX_NAME_LENGTH })),
    email: z
      .string()
      .min(1, t("validation.emailRequired"))
      .regex(EMAIL_REGEX, t("validation.emailInvalid")),
    company: z
      .string()
      .max(MAX_COMPANY_LENGTH, t("validation.companyMaxLength", { max: MAX_COMPANY_LENGTH }))
      .optional(),
    message: z
      .string()
      .max(MAX_MESSAGE_LENGTH, t("validation.messageMaxLength", { max: MAX_MESSAGE_LENGTH }))
      .optional(),
    locale: z.string(),
  });
};

// Helper function to parse form data
export const parseDemoBookingFormData = (
  formData: FormData,
  t: (key: string, params?: Record<string, number | string | Date>) => string
) => {
  const schema = getDemoBookingSchema(t);

  const data = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    company: formData.get("company")?.toString() || "",
    message: formData.get("message")?.toString() || "",
    locale: formData.get("locale")?.toString() || "en",
  };

  return schema.parse(data);
};
