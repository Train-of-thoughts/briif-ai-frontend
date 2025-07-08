import { Locale, defaultLocale } from './config';

// Import all label modules
import commonEn from './labels/common/en';
import commonUk from './labels/common/uk';
import commonCs from './labels/common/cs';
import dashboardEn from './labels/dashboard/en';
import dashboardUk from './labels/dashboard/uk';
import dashboardCs from './labels/dashboard/cs';

// Define the structure of our labels
export type Labels = {
  common: typeof commonEn;
  dashboard: typeof dashboardEn;
  // Add more modules as needed
};

// Create a mapping of locales to their label modules
const labelModules: Record<Locale, Labels> = {
  en: {
    common: commonEn,
    dashboard: dashboardEn,
  },
  uk: {
    common: commonUk,
    dashboard: dashboardUk,
  },
  cs: {
    common: commonCs,
    dashboard: dashboardCs,
  },
};

// Function to get labels for a specific locale
export function getLabels(locale: Locale = defaultLocale): Labels {
  return labelModules[locale];
}

// Helper function to flatten nested objects for easier access
export function flattenLabels(labels: Labels): Record<string, string> {
  const result: Record<string, string> = {};

  function flatten(obj: any, prefix = '') {
    for (const key in obj) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        flatten(value, newKey);
      } else {
        result[newKey] = value;
      }
    }
  }

  flatten(labels);
  return result;
}
