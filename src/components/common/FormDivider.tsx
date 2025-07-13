"use client";

import React from "react";

type FormDividerProps = {
  text: string;
};

const FormDivider: React.FC<FormDividerProps> = ({ text }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="border-t border-gray-700 w-full"></div>
      <span className="bg-neutral-900 px-3 text-sm text-gray-400 relative z-10">
        {text}
      </span>
      <div className="border-t border-gray-700 w-full"></div>
    </div>
  );
};

export default FormDivider;
