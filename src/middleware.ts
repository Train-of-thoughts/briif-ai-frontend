import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { I18N_LOCALES, I18N_DEFAULT_LOCALE } from "@/lib/constants";
import { hasAuthToken } from '@/lib/auth/session';

// Create the i18n middleware
const i18nMiddleware = createMiddleware({
  locales: I18N_LOCALES,
  defaultLocale: I18N_DEFAULT_LOCALE,
});

// Define public routes that don't require authentication
const publicRoutes = I18N_LOCALES.flatMap(locale => [
    `/${locale}`,
    `/${locale}/login`,
    `/${locale}/signup`,
    `/${locale}/forgot-password`,
    `/${locale}/reset-password`,
    `/${locale}/auth/callback`,
    `/${locale}/callback`,
]).concat(["/", "/callback"]);

// Define the middleware handler
export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // If accessing the root path, redirect to the default locale
  if (pathname === '/') {
    const url = new URL(`/${I18N_DEFAULT_LOCALE}`, request.url);
    return NextResponse.redirect(url);
  }

  // Check if the route is public
  // Get the full URL including search params
  const fullUrl = request.nextUrl.toString();

  const isPublicRoute = publicRoutes.some(route => {
    // Check if the pathname matches the route exactly
    if (pathname === route) return true;

    // Check if the URL starts with the route followed by a question mark (search params)
    // This handles cases where search params are present in the URL
    const routeWithOrigin = new URL(route, request.nextUrl.origin).toString();
    return fullUrl.startsWith(routeWithOrigin + '?');
  });

  console.log(isPublicRoute, pathname)

  // If it's not a public route, check for authentication
  if (!isPublicRoute) {
    const hasToken = await hasAuthToken();

    // If not authenticated, redirect to login with default locale
    if (!hasToken) {
      const url = new URL(`/${I18N_DEFAULT_LOCALE}/login`, request.url);
      return NextResponse.redirect(url);
    }
  }

  // Apply i18n middleware
  return i18nMiddleware(request);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
