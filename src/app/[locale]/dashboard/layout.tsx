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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setIsMenuExpanded(true);
      } else if (width < 640) {
        setIsMenuExpanded(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

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
