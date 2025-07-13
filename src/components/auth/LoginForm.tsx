"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import FormInput from "@/components/common/FormInput";
import FormDivider from "@/components/common/FormDivider";
import GoogleAuthButton from "@/components/common/GoogleAuthButton";
import SubmitButton from "@/components/common/SubmitButton";
import AuthCard from "@/components/auth/AuthCard";
import AuthFooter from "@/components/auth/AuthFooter";
import { getLoginSchema, LoginFormData } from "@/schema/auth/login-schema";
import { useAuth } from "@/hooks/useAuth";

const LoginForm: React.FC = () => {
  const t = useTranslations("auth");
  const router = useRouter();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Get validation schema
  const loginSchema = getLoginSchema(t);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  // Form submission handler
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsSubmitting(true);
    setAuthError(null);

    try {
      const result = await login({
        email: data.email,
        password: data.password,
      });

      if (result.success) {
        // Redirect to dashboard or home page after successful login
        router.push("/");
      } else {
        setAuthError(result.error || t("login.genericError"));
      }
    } catch (error) {
      console.error("Login error:", error);
      setAuthError(
        error instanceof Error ? error.message : t("login.genericError"),
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
    <AuthCard title={t("login.title")}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormInput
            id="email"
            label={t("login.email")}
            placeholder={t("login.emailPlaceholder")}
            type="email"
            register={register}
            name="email"
            error={errors.email?.message}
          />

          <FormInput
            id="password"
            label={t("login.password")}
            placeholder={t("login.passwordPlaceholder")}
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          />

          {authError && (
            <div className="text-red-500 text-sm mt-2">{authError}</div>
          )}
        </div>

        <SubmitButton
          text={t("login.submit")}
          loadingText={t("login.submitting")}
          isSubmitting={isSubmitting}
        />

        <FormDivider text={t("login.or")} />

        <GoogleAuthButton
          text={t("login.googleLogin")}
          onClick={handleGoogleLogin}
        />

        <AuthFooter
          text={t("login.noAccount")}
          linkText={t("login.signUp")}
          linkHref="/signup"
        />
      </form>
    </AuthCard>
  );
};

export default LoginForm;
