import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  // Import translation modules
  const commonModule = await import(`./labels/common/${locale}.ts`);
  const landingModule = await import(`./labels/landing/${locale}.ts`);
  const authModule = await import(`./labels/auth/${locale}.ts`);

  return {
    locale,
    messages: {
      common: commonModule.default,
      landing: landingModule.default,
      auth: authModule.default,
    },
  };
});
