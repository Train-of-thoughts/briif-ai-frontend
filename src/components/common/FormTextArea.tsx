"use client";

import React from "react";
import { UseFormRegister, Path } from "react-hook-form";

type FormTextAreaProps<TFormValues extends Record<string, unknown>> = {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  maxLengthText?: string;
  error?: string;
  register: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  className?: string;
  disabled?: boolean;
};

const FormTextArea = <TFormValues extends Record<string, unknown>>({
  id,
  label,
  placeholder,
  rows = 4,
  maxLength,
  maxLengthText,
  error,
  register,
  name,
  className = "",
  disabled = false,
}: FormTextAreaProps<TFormValues>): React.ReactElement => {
  return (
    <div className={`text-left ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label}
        {maxLength && (
          <span className="text-xs text-gray-400 ml-1">
            {maxLengthText || `(max ${maxLength} chars)`}
          </span>
        )}
      </label>
      <div className="relative">
        <textarea
          id={id}
          {...register(name)}
          rows={rows}
          maxLength={maxLength}
          className={`w-full px-4 py-3 bg-neutral-800 border ${
            error ? "border-red-500" : "border-gray-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white`}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormTextArea;
