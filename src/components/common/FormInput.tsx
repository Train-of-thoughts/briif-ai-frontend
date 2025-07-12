"use client";

import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { UseFormRegister, Path } from "react-hook-form";

type FormInputProps<TFormValues extends Record<string, unknown>> = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
  register: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  className?: string;
};

const FormInput = <TFormValues extends Record<string, unknown>>({
  id,
  label,
  placeholder,
  type = "text",
  error,
  register,
  name,
  className = "",
}: FormInputProps<TFormValues>): React.ReactElement => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`text-left ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          id={id}
          {...register(name)}
          className={`w-full px-4 py-3 bg-neutral-800 border ${error ? 'border-red-500' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${isPassword ? 'pr-12' : ''}`}
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 focus:outline-none"
            onClick={togglePasswordVisibility}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
