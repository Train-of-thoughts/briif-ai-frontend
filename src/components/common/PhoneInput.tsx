"use client";

import React, { useState, useEffect } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { UseFormRegister, Path } from "react-hook-form";
import { sortedCountries } from "@/lib/countries";

type PhoneInputProps<TFormValues extends Record<string, unknown>> = {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegister<TFormValues>;
  countryCodeName: Path<TFormValues>;
  phoneName: Path<TFormValues>;
  optional?: boolean;
  optionalText?: string;
  helperText?: string;
};

const PhoneInput = <TFormValues extends Record<string, unknown>>({
  id,
  label,
  placeholder,
  error,
  register,
  countryCodeName,
  phoneName,
  optional = false,
  optionalText = "optional",
  helperText,
}: PhoneInputProps<TFormValues>): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(sortedCountries[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(sortedCountries);

  // We can't directly access the form value here, so we'll just use the default country
  // and let the form control the value through the hidden input

  // Set the default country when the component mounts
  useEffect(() => {
    // Just use the first country as default
    setSelectedCountry(sortedCountries[0]);
  }, []);

  // Filter countries based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = sortedCountries.filter(
        country => 
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.dialCode.includes(searchTerm)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(sortedCountries);
    }
  }, [searchTerm]);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
      setFilteredCountries(sortedCountries);
    }
  };

  // Select a country
  const selectCountry = (country: typeof sortedCountries[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);

    // Update the form value
    const event = {
      target: {
        name: countryCodeName,
        value: country.dialCode
      }
    };
    register(countryCodeName).onChange(event);
  };

  return (
    <div className="text-left">
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
        {label} {optional && <span className="text-gray-500">({optionalText})</span>}
      </label>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
        <div className="w-full sm:w-2/5 md:w-1/3 sm:mr-2 relative">
          <input
            type="hidden"
            id={`${id}-countryCode`}
            {...register(countryCodeName)}
            value={selectedCountry.dialCode}
          />
          <button
            type="button"
            className="w-full px-2 py-3 bg-neutral-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent flex items-center justify-between"
            onClick={toggleDropdown}
          >
            <span className="flex items-center">
              <span className="mr-2 text-lg">{selectedCountry.flag}</span>
              <span>{selectedCountry.dialCode}</span>
            </span>
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-auto min-w-full sm:min-w-[250px] md:min-w-[300px] bg-neutral-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
              <div className="sticky top-0 bg-neutral-800 p-2">
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-neutral-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <ul className="py-1">
                {filteredCountries.map((country) => (
                  <li key={country.code}>
                    <button
                      type="button"
                      className="w-full px-3 py-2 text-left hover:bg-neutral-700 flex items-center"
                      onClick={() => selectCountry(country)}
                    >
                      <span className="mr-2 text-lg">{country.flag}</span>
                      <span className="mr-2">{country.dialCode}</span>
                      <span className="text-sm text-gray-400 truncate">{country.name}</span>
                    </button>
                  </li>
                ))}
                {filteredCountries.length === 0 && (
                  <li className="px-3 py-2 text-gray-500">No results found</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <input
          type="tel"
          id={id}
          {...register(phoneName)}
          className={`w-full sm:w-3/5 md:w-2/3 px-4 py-3 bg-neutral-800 border ${error ? 'border-red-500' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
      {helperText && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}
    </div>
  );
};

export default PhoneInput;
