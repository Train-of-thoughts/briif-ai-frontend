"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import SettingsSection from "@/components/dashboard/SettingsSection";
import { useTheme, Theme } from "@/hooks/useTheme";

interface SystemSettingsProps {
  onUnsavedChanges: (hasChanges: boolean) => void;
}

export default function SystemSettings({
  onUnsavedChanges,
}: SystemSettingsProps) {
  const t = useTranslations("common");
  const { theme, setTheme } = useTheme();
  
  // Track the current theme and any unsaved changes
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  // Initialize the current theme from the theme context
  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  
  // Handle theme change
  const handleThemeChange = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
    setHasUnsavedChanges(newTheme !== theme);
    onUnsavedChanges(newTheme !== theme);
  };
  
  // Handle save
  const handleSave = () => {
    setTheme(currentTheme);
    setHasUnsavedChanges(false);
    onUnsavedChanges(false);
  };
  
  // Handle reset
  const handleReset = () => {
    setCurrentTheme(theme);
    setHasUnsavedChanges(false);
    onUnsavedChanges(false);
  };

  return (
    <SettingsSection
      title={t("settings.system.title", { fallback: "System Settings" })}
      id="system"
      onSave={handleSave}
      onReset={handleReset}
      hasUnsavedChanges={hasUnsavedChanges}
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-700 dark:text-white">
            {t("settings.system.appearance", { fallback: "Appearance" })}
          </h3>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="theme-toggle" className="text-sm font-medium">
                {t("settings.system.theme", { fallback: "Theme" })}
              </label>
              
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handleThemeChange("light")}
                  className={`px-3 py-1 rounded-l-md text-sm ${
                    currentTheme === "light"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
                  }`}
                >
                  {t("settings.system.light", { fallback: "Light" })}
                </button>
                
                <button
                  type="button"
                  onClick={() => handleThemeChange("dark")}
                  className={`px-3 py-1 rounded-r-md text-sm ${
                    currentTheme === "dark"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
                  }`}
                >
                  {t("settings.system.dark", { fallback: "Dark" })}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}