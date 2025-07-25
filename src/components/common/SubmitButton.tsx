"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type SubmitButtonProps = {
  text?: string;
  loadingText?: string;
  isSubmitting?: boolean;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "default" | "custom";
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  loadingText,
  isSubmitting = false,
  className = "",
  onClick,
  children,
  variant = "default",
}) => {
  // Check if component is being used with children (like in SettingsSection)
  const hasChildren = Boolean(children);
  
  // Apply default styles based on variant
  // For "default" variant, apply all default styles
  // For "custom" variant, only apply the background color class but let other styles be customized
  const baseClasses = variant === "default" 
    ? "btn-primary w-full py-3" 
    : "bg-primary-600"; // Purple background color for save button
  
  return (
    <button
      type={onClick ? "button" : "submit"}
      className={`${baseClasses} ${className}`}
      disabled={isSubmitting}
      onClick={onClick}
    >
      {hasChildren ? (
        children
      ) : (
        <>
          {isSubmitting ? loadingText : text}
          {!isSubmitting && <ArrowRightIcon className="w-5 h-5 ml-2 inline" />}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
