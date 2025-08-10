"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import FormInput from "@/components/common/FormInput";
import SettingsSection from "@/components/dashboard/SettingsSection";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface ProfileSettingsProps {
  onUnsavedChanges: (hasChanges: boolean) => void;
}

export default function ProfileSettings({
  onUnsavedChanges,
}: ProfileSettingsProps) {
  const t = useTranslations("common");
  const { user } = useAuth();

  const initialData: ProfileFormData = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
  };

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
    watch,
  } = useForm<ProfileFormData>({
    defaultValues: initialData,
    mode: "onChange",
  });

  // Watch for form changes to update the unsaved changes indicator
  const formValues = watch();

  // Update parent component when form state changes
  useEffect(() => {
    if (isDirty !== hasUnsavedChanges) {
      setHasUnsavedChanges(isDirty);
      onUnsavedChanges(isDirty);
    }
  }, [isDirty, hasUnsavedChanges, onUnsavedChanges]);

  const onSubmit = (data: ProfileFormData) => {
    // Here you would typically save the data to the server
    console.log("Saving profile data:", data);

    // Update initial data to match current form data
    // In a real app, you'd wait for the server response
    setHasUnsavedChanges(false);
    onUnsavedChanges(false);
  };

  const handleSave = handleSubmit(onSubmit);

  const handleReset = () => {
    reset(initialData);
    setHasUnsavedChanges(false);
    onUnsavedChanges(false);
  };

  return (
    <SettingsSection
      title={t("settings.profile.title", { fallback: "Profile" })}
      id="profile"
      onSave={handleSave}
      onReset={handleReset}
      hasUnsavedChanges={hasUnsavedChanges}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            id="firstName"
            label={t("settings.profile.firstName", { fallback: "First Name" })}
            name="firstName"
            register={register}
            placeholder={t("settings.profile.firstNamePlaceholder", {
              fallback: "Enter your first name",
            })}
          />
          <FormInput
            id="lastName"
            label={t("settings.profile.lastName", { fallback: "Last Name" })}
            name="lastName"
            register={register}
            placeholder={t("settings.profile.lastNamePlaceholder", {
              fallback: "Enter your last name",
            })}
          />
        </div>
        <FormInput
          id="email"
          label={t("settings.profile.email", { fallback: "Email" })}
          name="email"
          type="email"
          register={register}
          placeholder={t("settings.profile.emailPlaceholder", {
            fallback: "Enter your email",
          })}
          disabled
        />
      </div>
    </SettingsSection>
  );
}
