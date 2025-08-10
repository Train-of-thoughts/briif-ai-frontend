"use client";

import { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AsideMenu from "@/components/dashboard/AsideMenu";
import { useLocale } from "next-intl";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check screen size to determine menu state
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Only change state when crossing breakpoints
      if (width >= 1024) {
        // On desktop, default to expanded
        setIsMenuExpanded(true);
      } else if (width < 640) {
        // On mobile, always collapse
        setIsMenuExpanded(false);
      }
      // On tablet (640-1024px), we don't change the state automatically
      // This allows users to keep their preference
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenuExpand = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <DashboardHeader 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <div className="flex min-h-screen">
        <AsideMenu 
          locale={locale} 
          isExpanded={isMenuExpanded}
          onToggleExpand={toggleMenuExpand}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <main className={`flex-1 pt-16 transition-all duration-300
          sm:ml-20 ${isMenuExpanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
          <div className="p-4 sm:p-6">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
