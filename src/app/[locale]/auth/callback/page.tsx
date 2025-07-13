"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("auth");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setError(t("callback.noToken"));
      // Redirect to login page after a short delay
      setTimeout(() => {
        router.push("/login?error=no-token");
      }, 3000);
      return;
    }

    // Store the token in a cookie via the API
    fetch("/api/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(t("callback.storeFailed"));
        }
        router.push("/dashboard");
      })
      .catch((err) => {
        console.error("Error storing token:", err);
        setError(err.message || t("callback.genericError"));
        // Redirect to login page after a short delay
        setTimeout(() => {
          router.push("/login?error=auth-failed");
        }, 3000);
      });
  }, [router, searchParams, t]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-neutral-900 p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          {error ? t("callback.error") : t("callback.processing")}
        </h1>
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <p className="text-center text-gray-300">
            {t("callback.pleaseWait")}
          </p>
        )}
      </div>
    </div>
  );
}
