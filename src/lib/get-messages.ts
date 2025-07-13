import { routing } from "@/i18n/routing";
import { isValidLocale } from "@/i18n/config";

type Messages = {
  common: Record<string, unknown>;
  landing: Record<string, unknown>;
  auth: Record<string, unknown>;
};

const messagesCache = new Map<string, Messages>();

export async function getMessages(locale: string) {
  const validLocale = isValidLocale(locale) ? locale : routing.defaultLocale;

  if (messagesCache.has(validLocale)) {
    return messagesCache.get(validLocale);
  }

  // Import translation modules
  const commonModule = await import(`../i18n/labels/common/${validLocale}.ts`);
  const landingModule = await import(
    `../i18n/labels/landing/${validLocale}.ts`
  );
  const authModule = await import(`../i18n/labels/auth/${validLocale}.ts`);

  const messages = {
    common: commonModule.default,
    landing: landingModule.default,
    auth: authModule.default,
  };

  messagesCache.set(validLocale, messages);

  return messages;
}
