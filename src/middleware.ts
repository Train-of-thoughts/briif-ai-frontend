import createMiddleware from 'next-intl/middleware';
import {I18N_LOCALES, I18N_DEFAULT_LOCALE} from "@/lib/constants";

export default createMiddleware({
  locales: I18N_LOCALES,
  defaultLocale: I18N_DEFAULT_LOCALE,
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};