"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useAuth } from "@/hooks/useAuth";
import { UserIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoIcon from "/public/icons/logo/logo-dark-favicon-transparent.svg";

interface DashboardHeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function DashboardHeader({
  isMobileMenuOpen,
  toggleMobileMenu
}: DashboardHeaderProps) {
  const t = useTranslations("common");
  const locale = useLocale();
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-800 border-b border-neutral-700">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu burger button */}
            <button
              className="p-2 rounded-md bg-neutral-800 border border-neutral-700 sm:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen 
                ? t("dashboard.menu.closeMenu", { fallback: "Close menu" }) 
                : t("dashboard.menu.openMenu", { fallback: "Open menu" })
              }
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>

            <Link href="/" className="flex items-center">
              <Image
                src={logoIcon}
                alt="Briff.ai Logo"
                className="w-8 sm:w-10 h-8 sm:h-10 object-cover object-center"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* User profile button */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-neutral-700 transition-colors"
            >
              <div className="flex-shrink-0">
                {user?.firstName ? (
                  <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">
                    {user.firstName[0]}
                    {user.lastName ? user.lastName[0] : ""}
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center">
                    <UserIcon className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white">
                  {user?.firstName && user?.lastName
                    ? `${user.firstName} ${user.lastName}`
                    : user?.email}
                </div>
                <div className="text-xs text-gray-400">
                  {t("dashboard.subscription", { fallback: "Free Plan" })}
                </div>
              </div>
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={closeDropdown}
                ></div>
                <div className="absolute right-0 mt-2 w-48 bg-neutral-800 rounded-md shadow-lg border border-neutral-700 z-20">
                  <div className="py-1">
                    <Link
                      href={`/dashboard/settings`}
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-neutral-700 hover:text-white"
                      onClick={closeDropdown}
                    >
                      <Cog6ToothIcon className="h-5 w-5 mr-2" />
                      {t("header.accountSettings", { fallback: "Account Settings" })}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-neutral-700 hover:text-white"
                    >
                      <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                      {t("header.logout", { fallback: "Logout" })}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
