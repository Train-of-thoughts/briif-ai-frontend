"use client";

import { useTranslations } from "next-intl";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const t = useTranslations("common");
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Not authenticated</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-800 rounded-lg shadow-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary-1-400">
        {t("dashboard.title", { fallback: "Dashboard" })}
      </h1>

      <div className="space-y-4">
        <div className="p-4 bg-neutral-700 rounded-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            {t("dashboard.userProfile", { fallback: "User Profile" })}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">
                {t("dashboard.email", { fallback: "Email" })}
              </p>
              <p className="text-white">{user.email}</p>
            </div>

            {user.firstName && (
              <div>
                <p className="text-gray-400 text-sm">
                  {t("dashboard.firstName", { fallback: "First Name" })}
                </p>
                <p className="text-white">{user.firstName}</p>
              </div>
            )}

            {user.lastName && (
              <div>
                <p className="text-gray-400 text-sm">
                  {t("dashboard.lastName", { fallback: "Last Name" })}
                </p>
                <p className="text-white">{user.lastName}</p>
              </div>
            )}

            <div>
              <p className="text-gray-400 text-sm">
                {t("dashboard.userId", { fallback: "User ID" })}
              </p>
              <p className="text-white">{user.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
