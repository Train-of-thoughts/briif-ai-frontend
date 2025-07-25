"use client";

import { useTranslations } from "next-intl";
import SettingsSection from "@/components/dashboard/SettingsSection";
import UnderDevelopment from "@/components/common/UnderDevelopment";

interface DevelopmentSettingsSectionProps {
  title: string;
  id: string;
  defaultOpen?: boolean;
}

export default function DevelopmentSettingsSection({
  title,
  id,
  defaultOpen = true,
}: DevelopmentSettingsSectionProps) {
  const t = useTranslations("common");

  return (
    <SettingsSection
      title={title}
      id={id}
      defaultOpen={defaultOpen}
      onSave={() => {}}
      onReset={() => {}}
    >
      <UnderDevelopment
        title={t("settings.development.title", {
          fallback: "This section is under development",
        })}
        message={t("settings.development.message", {
          fallback:
            "We're working on this feature and it will be available soon.",
        })}
      />
    </SettingsSection>
  );
}