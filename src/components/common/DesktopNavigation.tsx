"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useAuth } from "@/hooks/useAuth";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const DesktopNavigation: React.FC = () => {
  const t = useTranslations("common");
  const { isLoggedIn, user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
  };

  const handleDashboardClick = () => {
    router.push("/dashboard");
    setIsDropdownOpen(false);
  };

  return (
    <div className="hidden md:flex md:items-center md:space-x-6">
      {isLoggedIn ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 btn-primary"
          >
            <span>{user?.firstName || user?.email}</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-neutral-800 rounded-md shadow-lg py-1 z-50 border border-gray-700">
              <button
                onClick={handleDashboardClick}
                className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-neutral-700"
              >
                {t("header.dashboard", { fallback: "Dashboard" })}
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-neutral-700"
              >
                {t("header.logout", { fallback: "Logout" })}
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link
            href="/login"
            className="text-gray-300 hover:text-primary-400 transition-colors"
          >
            {t("header.login")}
          </Link>
          <Link href="/signup" className="btn-primary">
            {t("header.signUp")}
          </Link>
        </>
      )}
    </div>
  );
};

export default DesktopNavigation;
