"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Accordion from "@/components/common/Accordion";
import SubmitButton from "@/components/common/SubmitButton";

interface SettingsSectionProps {
  title: string;
  id: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  onSave?: () => void;
  onReset?: () => void;
  hasUnsavedChanges?: boolean;
}

export default function SettingsSection({
  title,
  id,
  defaultOpen = true,
  children,
  onSave,
  onReset,
  hasUnsavedChanges = false,
}: SettingsSectionProps) {
  const t = useTranslations("common");
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleSave = () => {
    if (onSave) {
      onSave();
    }
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };

  return (
    <Accordion
      title={title}
      id={id}
      defaultOpen={defaultOpen}
      onToggle={(open) => setIsOpen(open)}
    >
      <div className="space-y-6">
        {children}

        <div className="flex justify-end space-x-4 pt-4 pb-4 border-t border-neutral-700">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-md border border-neutral-600 text-gray-300 hover:bg-neutral-700 transition-colors"
          >
            {t("settings.reset", { fallback: "Reset" })}
          </button>
          <SubmitButton
            onClick={handleSave}
            variant="custom"
            className="px-4 py-2 rounded-md text-white hover:bg-primary-700 transition-colors"
          >
            {t("settings.save", { fallback: "Save" })}
          </SubmitButton>
        </div>
      </div>
    </Accordion>
  );
}