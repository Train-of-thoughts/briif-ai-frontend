export const locales = ["uk", "en", "cs"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uk";

export const localeNames: Record<Locale, string> = {
  uk: "Українська",
  en: "English",
  cs: "Čeština",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
