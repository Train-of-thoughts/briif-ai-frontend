"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import ProfileSettings from "@/components/dashboard/ProfileSettings";
import DevelopmentSettingsSection from "@/components/dashboard/DevelopmentSettingsSection";
import SettingsAnchorMenu from "@/components/dashboard/SettingsAnchorMenu";
import ConfirmationModal from "@/components/common/ConfirmationModal";

export default function SettingsPage() {
  const t = useTranslations("common");
  
  // Track which sections have unsaved changes
  const [unsavedChanges, setUnsavedChanges] = useState<Record<string, boolean>>({
    profile: false,
    security: false,
    system: false,
    data: false,
    payment: false,
  });
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const pendingNavigationRef = useRef<string | null>(null);
  
  const sections = [
    {
      id: "profile",
      label: t("settings.profile.title", { fallback: "Profile" }),
      hasUnsavedChanges: unsavedChanges.profile,
    },
    {
      id: "security",
      label: t("settings.security.title", { fallback: "Security" }),
      hasUnsavedChanges: unsavedChanges.security,
    },
    {
      id: "system",
      label: t("settings.system.title", { fallback: "System Settings" }),
      hasUnsavedChanges: unsavedChanges.system,
    },
    {
      id: "data",
      label: t("settings.data.title", { fallback: "Data Deletion" }),
      hasUnsavedChanges: unsavedChanges.data,
    },
    {
      id: "payment",
      label: t("settings.payment.title", { fallback: "Payment Information" }),
      hasUnsavedChanges: unsavedChanges.payment,
    },
  ];
  
  const handleUnsavedChanges = (sectionId: string, hasChanges: boolean) => {
    setUnsavedChanges(prev => ({
      ...prev,
      [sectionId]: hasChanges
    }));
  };
  
  const handleAnchorClick = (id: string) => {
    // Check if any section has unsaved changes
    const hasAnyUnsavedChanges = Object.values(unsavedChanges).some(Boolean);
    
    if (hasAnyUnsavedChanges) {
      // Store the target section ID and show confirmation modal
      pendingNavigationRef.current = id;
      setModalOpen(true);
    } else {
      // No unsaved changes, navigate directly
      scrollToSection(id);
    }
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the element's position relative to the document
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      // Calculate the offset (header height + some additional padding)
      const headerOffset = 80; // 64px header height + 16px additional padding
      
      // Calculate the final scroll position
      const offsetPosition = elementPosition - headerOffset;
      
      // Scroll to the element with the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  const handleConfirmNavigation = () => {
    // User confirmed navigation despite unsaved changes
    if (pendingNavigationRef.current) {
      scrollToSection(pendingNavigationRef.current);
      setModalOpen(false);
      pendingNavigationRef.current = null;
    }
  };
  
  const handleCancelNavigation = () => {
    setModalOpen(false);
    pendingNavigationRef.current = null;
  };

  return (
    <div className="bg-neutral-800 rounded-lg shadow-lg p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary-1-400">
        {t("settings.title", { fallback: "Settings" })}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Anchor menu */}
        <div className="md:w-64 flex-shrink-0 md:order-last">
          <SettingsAnchorMenu 
            items={sections} 
            onItemClick={handleAnchorClick} 
          />
        </div>
        
        {/* Settings sections */}
        <div className="flex-1 space-y-8 md:order-first">
          <ProfileSettings 
            onUnsavedChanges={(hasChanges) => handleUnsavedChanges("profile", hasChanges)} 
          />
          
          <DevelopmentSettingsSection 
            title={t("settings.security.title", { fallback: "Security" })}
            id="security"
          />
          
          <DevelopmentSettingsSection 
            title={t("settings.system.title", { fallback: "System Settings" })}
            id="system"
          />
          
          <DevelopmentSettingsSection 
            title={t("settings.data.title", { fallback: "Data Deletion" })}
            id="data"
          />
          
          <DevelopmentSettingsSection 
            title={t("settings.payment.title", { fallback: "Payment Information" })}
            id="payment"
          />
        </div>
      </div>
      
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={modalOpen}
        onClose={handleCancelNavigation}
        onConfirm={handleConfirmNavigation}
        title={t("settings.unsavedChanges.title", { fallback: "Unsaved Changes" })}
        message={t("settings.unsavedChanges.message", { 
          fallback: "You have unsaved changes that will be lost if you navigate away. Do you want to continue?" 
        })}
        confirmText={t("settings.unsavedChanges.continue", { fallback: "Continue without saving" })}
        cancelText={t("settings.unsavedChanges.cancel", { fallback: "Stay on this page" })}
      />
    </div>
  );
}