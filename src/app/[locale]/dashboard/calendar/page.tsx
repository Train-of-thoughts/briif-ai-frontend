"use client";

import { useTranslations } from "next-intl";
import UnderDevelopment from "@/components/common/UnderDevelopment";

export default function CalendarPage() {
  const t = useTranslations("common");

  return (
    <div className="bg-neutral-800 rounded-lg shadow-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary-400">
        {t("dashboard.menu.calendar", { fallback: "Publication Calendar" })}
      </h1>
      
      <UnderDevelopment />
    </div>
  );
}