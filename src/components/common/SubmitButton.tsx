"use client";

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type SubmitButtonProps = {
  text: string;
  loadingText: string;
  isSubmitting: boolean;
  className?: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  loadingText,
  isSubmitting,
  className = "",
}) => {
  return (
    <button
      type="submit"
      className={`btn-primary w-full py-3 ${className}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? loadingText : text}
      {!isSubmitting && <ArrowRightIcon className="w-5 h-5 ml-2 inline" />}
    </button>
  );
};

export default SubmitButton;
