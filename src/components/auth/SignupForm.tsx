"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";

import FormInput from "@/components/common/FormInput";
import FormDivider from "@/components/common/FormDivider";
import GoogleAuthButton from "@/components/common/GoogleAuthButton";
import SubmitButton from "@/components/common/SubmitButton";
import PhoneInput from "@/components/common/PhoneInput";
import AuthCard from "@/components/auth/AuthCard";
import AuthFooter from "@/components/auth/AuthFooter";
import { getSignupSchema, SignupFormData } from "@/schema/auth/signup-schema";
import { useAuth } from "@/hooks/useAuth";
import {useRouter} from "@/i18n/navigation";

const SignupForm: React.FC = () => {
  const t = useTranslations("auth");
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Get validation schema
  const signupSchema = getSignupSchema(t);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      countryCode: "+1",
      phone: undefined,
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    setIsSubmitting(true);
    setAuthError(null);

    try {
      const result = await registerUser({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });

      if (result.success) {
        // Redirect to dashboard or home page after successful registration
        router.push("/");
      } else {
        setAuthError(result.error || t("signup.genericError"));
      }
    } catch (error) {
      console.error("Registration error:", error);
      setAuthError(
        error instanceof Error ? error.message : t("signup.genericError"),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google login handler
  const handleGoogleLogin = () => {
    // Redirect directly to backend's Google OAuth endpoint
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    window.location.href = `${apiUrl}/auth/google`;
  };

  return (
    <AuthCard title={t("signup.title")}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              id="firstName"
              label={t("signup.firstName")}
              placeholder={t("signup.firstNamePlaceholder")}
              register={register}
              name="firstName"
              error={errors.firstName?.message}
            />

            <FormInput
              id="lastName"
              label={t("signup.lastName")}
              placeholder={t("signup.lastNamePlaceholder")}
              register={register}
              name="lastName"
              error={errors.lastName?.message}
            />
          </div>

          <FormInput
            id="email"
            label={t("signup.email")}
            placeholder={t("signup.emailPlaceholder")}
            type="email"
            register={register}
            name="email"
            error={errors.email?.message}
          />

          <PhoneInput
            id="phone"
            label={t("signup.phone")}
            placeholder={t("signup.phonePlaceholder")}
            register={register}
            countryCodeName="countryCode"
            phoneName="phone"
            error={errors.phone?.message}
            optional={true}
            optionalText={t("signup.optional")}
            helperText={t("signup.phoneFormat")}
          />

          <FormInput
            id="password"
            label={t("signup.password")}
            placeholder={t("signup.passwordPlaceholder")}
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
            className="mb-1"
          />
          <p className="text-xs text-gray-500 -mt-3 mb-3">
            {t("signup.passwordRequirements")}
          </p>

          <FormInput
            id="confirmPassword"
            label={t("signup.confirmPassword")}
            placeholder={t("signup.confirmPasswordPlaceholder")}
            type="password"
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />

          {authError && (
            <div className="text-red-500 text-sm mt-2">{authError}</div>
          )}
        </div>

        <SubmitButton
          text={t("signup.submit")}
          loadingText={t("signup.submitting")}
          isSubmitting={isSubmitting}
        />

        <FormDivider text={t("signup.or")} />

        <GoogleAuthButton
          text={t("signup.googleSignup")}
          onClick={handleGoogleLogin}
        />

        <AuthFooter
          text={t("signup.haveAccount")}
          linkText={t("signup.login")}
          linkHref="/login"
        />
      </form>
    </AuthCard>
  );
};

export default SignupForm;
