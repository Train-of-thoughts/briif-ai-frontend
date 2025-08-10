"use client";

import { useTranslations } from "next-intl";
import UnderDevelopment from "@/components/common/UnderDevelopment";

export default function IntegrationsPage() {
  const t = useTranslations("common");

  return (
    <div className="bg-neutral-800 rounded-lg shadow-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary-1-400">
        {t("dashboard.menu.integrations", { fallback: "Integrations" })}
      </h1>
      
      <UnderDevelopment />
    </div>
  );
}