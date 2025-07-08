import { routing } from '@/i18n/routing';
import { isValidLocale } from '@/i18n/config';

// Cache for messages to avoid loading them multiple times
const messagesCache = new Map<string, any>();

export async function getMessages(locale: string) {
  // Validate locale or use default
  const validLocale = isValidLocale(locale) ? locale : routing.defaultLocale;

  // Check if messages are already cached
  if (messagesCache.has(validLocale)) {
    return messagesCache.get(validLocale);
  }

  // Dynamically import translation modules
  const commonModule = await import(`../i18n/labels/common/${validLocale}.ts`);
  const dashboardModule = await import(`../i18n/labels/dashboard/${validLocale}.ts`);

  // Convert labels to the format expected by next-intl
  const messages = {
    common: commonModule.default,
    dashboard: dashboardModule.default,
  };

  // Cache messages for future use
  messagesCache.set(validLocale, messages);

  return messages;
}
