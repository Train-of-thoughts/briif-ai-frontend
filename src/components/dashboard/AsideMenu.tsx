"use client"

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  Cog6ToothIcon as Cog6ToothIconOutline,
  CalendarIcon as CalendarIconOutline,
  HomeIcon as HomeIconOutline,
  ArrowPathIcon as ArrowPathIconOutline,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import {
  Cog6ToothIcon as Cog6ToothIconSolid,
  CalendarIcon as CalendarIconSolid,
  HomeIcon as HomeIconSolid,
  ArrowPathIcon as ArrowPathIconSolid,
} from "@heroicons/react/24/solid";
import { Link } from "@/i18n/navigation";

interface AsideMenuProps {
  locale: string;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  isMobileMenuOpen?: boolean;
}

export default function AsideMenu({ 
  locale, 
  isExpanded = false, 
  onToggleExpand,
  isMobileMenuOpen = false
}: AsideMenuProps) {
  const t = useTranslations("common");
  const pathname = usePathname();

  // Toggle expand function - use prop function if provided, otherwise do nothing
  const toggleExpand = () => {
    if (onToggleExpand) {
      onToggleExpand();
    }
  };

  const menuItems = [
    {
      name: t("dashboard.menu.dashboard", { fallback: "Dashboard" }),
      href: `/dashboard`,
      iconOutline: HomeIconOutline,
      iconSolid: HomeIconSolid,
    },
    {
      name: t("dashboard.menu.calendar", { fallback: "Publication Calendar" }),
      href: `/dashboard/calendar`,
      iconOutline: CalendarIconOutline,
      iconSolid: CalendarIconSolid,
    },
    {
      name: t("dashboard.menu.integrations", { fallback: "Integrations" }),
      href: `/dashboard/integrations`,
      iconOutline: ArrowPathIconOutline,
      iconSolid: ArrowPathIconSolid,
    },
    {
      name: t("dashboard.menu.settings", { fallback: "Settings" }),
      href: `/dashboard/settings`,
      iconOutline: Cog6ToothIconOutline,
      iconSolid: Cog6ToothIconSolid,
    },
  ];


  // Tablet expand/collapse button
  const ExpandButton = () => (
    <button
      className="absolute -right-3 bottom-20 hidden sm:flex lg:hidden items-center justify-center h-6 w-6 rounded-full bg-neutral-700 text-white"
      onClick={toggleExpand}
      aria-label={isExpanded 
        ? t("dashboard.menu.collapseMenu", { fallback: "Collapse menu" }) 
        : t("dashboard.menu.expandMenu", { fallback: "Expand menu" })
      }
    >
      {isExpanded ? (
        <ChevronLeftIcon className="h-4 w-4" />
      ) : (
        <ChevronRightIcon className="h-4 w-4" />
      )}
    </button>
  );

  // Render menu items
  const MenuItems = () => (
    <nav className="space-y-2">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex ${isExpanded ? 'items-center px-4' : 'items-center justify-center h-12 w-12 mx-auto'} py-3 rounded-lg transition-colors ${
              isActive
                ? "bg-linear-[to_right,#4c1d95_0%,#6d28d9_100%] text-white"
                : "text-gray-300 hover:bg-neutral-700"
            }`}
          >
            {isActive ? 
              <item.iconSolid className="h-5 w-5 flex-shrink-0" /> : 
              <item.iconOutline className="h-5 w-5 flex-shrink-0" />
            }
            {(isExpanded || isMobileMenuOpen) && (
              <span className="ml-3 truncate line-clamp-1">{item.name}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Sidebar - hidden on mobile unless menu is open, collapsed on tablet by default */}
      <aside 
        className={`bg-neutral-800 border-r border-neutral-700 h-screen fixed left-0 top-0 pt-16 z-40 transition-all duration-300 
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'} 
          ${isExpanded ? 'w-64' : 'w-20'} 
          sm:block`}
      >
        <ExpandButton />
        <div className={`${isExpanded ? 'px-4' : 'px-2'} py-6`}>
          <MenuItems />
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
        />
      )}
    </>
  );
}
