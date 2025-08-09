"use client";

import { useTranslations } from "next-intl";
import UnderDevelopment from "@/components/common/UnderDevelopment";

export default function CalendarPage() {
  const t = useTranslations("common");

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 md:p-8 border border-neutral-200 dark:border-neutral-700">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-800 dark:text-primary-400">
        {t("dashboard.menu.calendar", { fallback: "Publication Calendar" })}
      </h1>
      
      <UnderDevelopment />
    </div>
  );
}