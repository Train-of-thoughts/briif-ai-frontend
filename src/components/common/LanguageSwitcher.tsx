'use client';

import { useLocale } from 'next-intl';
import { locales } from '@/i18n';
import { useRouter, usePathname } from 'next/navigation';
import Dropdown from './Dropdown';

// Define locale names
const localeNames: Record<string, string> = {
  uk: 'Українська',
  en: 'English',
  cs: 'Čeština',
};

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Create options for dropdown
  const languageOptions = locales.map((locale) => ({
    value: locale,
    label: localeNames[locale],
  }));

  // Handle language change
  const handleLanguageChange = (newLocale: string) => {
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');

    // Navigate to the same page with new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <Dropdown
      options={languageOptions}
      value={currentLocale}
      onChange={handleLanguageChange}
      className="w-36"
    />
  );
}
