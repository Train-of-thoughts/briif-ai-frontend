"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const MobileMenuToggle: React.FC = () => {
  const t = useTranslations("common");
  const { isLoggedIn, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    setMobileMenuOpen(false);
  };

  const handleDashboardClick = () => {
    router.push("/dashboard");
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="flex md:hidden">
        <button
          type="button"
          className="text-gray-300 hover:text-primary-400 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#hero"
              className="block py-2 text-base font-medium text-gray-300 hover:text-primary-400"
              onClick={toggleMobileMenu}
            >
              {t("header.home")}
            </a>
            <a
              href="#features"
              className="block py-2 text-base font-medium text-gray-300 hover:text-primary-400"
              onClick={toggleMobileMenu}
            >
              {t("header.features")}
            </a>
            <a
              href="#about"
              className="block py-2 text-base font-medium text-gray-300 hover:text-primary-400"
              onClick={toggleMobileMenu}
            >
              {t("header.about")}
            </a>
            <div className="pt-2 flex flex-col space-y-3">
              {isLoggedIn ? (
                <>
                  <div className="block w-full text-center py-2 text-base font-medium btn-primary">
                    {user?.firstName || user?.email}
                  </div>
                  <button
                    onClick={handleDashboardClick}
                    className="block w-full text-center py-2 text-base font-medium text-gray-300 hover:text-primary-400 bg-neutral-800"
                  >
                    {t("header.dashboard")}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center py-2 text-base font-medium text-gray-300 hover:text-primary-400 bg-neutral-800"
                  >
                    {t("header.logout")}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block w-full text-center py-2 text-base font-medium text-gray-300 hover:text-primary-400"
                    onClick={toggleMobileMenu}
                  >
                    {t("header.login")}
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full text-center py-2 text-base font-medium btn-primary"
                    onClick={toggleMobileMenu}
                  >
                    {t("header.signUp")}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuToggle;
