import { routing } from '@/i18n/routing';
import { isValidLocale } from '@/i18n/config';

const messagesCache = new Map<string, any>();

export async function getMessages(locale: string) {
  const validLocale = isValidLocale(locale) ? locale : routing.defaultLocale;

  if (messagesCache.has(validLocale)) {
    return messagesCache.get(validLocale);
  }

  const commonModule = await import(`../i18n/labels/common/${validLocale}.ts`);

  const messages = {
    common: commonModule.default,
  };

  messagesCache.set(validLocale, messages);

  return messages;
}
