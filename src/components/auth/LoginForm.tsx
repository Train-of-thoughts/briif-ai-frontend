"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from 'next-intl';

import FormInput from "@/components/common/FormInput";
import FormDivider from "@/components/common/FormDivider";
import GoogleAuthButton from "@/components/common/GoogleAuthButton";
import SubmitButton from "@/components/common/SubmitButton";
import AuthCard from "@/components/auth/AuthCard";
import AuthFooter from "@/components/auth/AuthFooter";
import { getLoginSchema, LoginFormData } from "@/schema/auth/login-schema";

const LoginForm: React.FC = () => {
  const t = useTranslations('auth');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get validation schema
  const loginSchema = getLoginSchema(t);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur"
  });

  // Form submission handler
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      // Here you would typically call your API to authenticate the user
      console.log("Form submitted:", data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle successful login (redirect, etc.)
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthCard title={t('login.title')}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormInput
            id="email"
            label={t('login.email')}
            placeholder={t('login.emailPlaceholder')}
            type="email"
            register={register}
            name="email"
            error={errors.email?.message}
          />

          <FormInput
            id="password"
            label={t('login.password')}
            placeholder={t('login.passwordPlaceholder')}
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          />
        </div>

        <SubmitButton
          text={t('login.submit')}
          loadingText={t('login.submitting')}
          isSubmitting={isSubmitting}
        />

        <FormDivider text={t('login.or')} />

        <GoogleAuthButton text={t('login.googleLogin')} />

        <AuthFooter 
          text={t('login.noAccount')}
          linkText={t('login.signUp')}
          linkHref="/signup"
        />
      </form>
    </AuthCard>
  );
};

export default LoginForm;
