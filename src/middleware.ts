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
const publicRoutes = [
  '/',
  '/login',
  '/signup',
  '/forgot-password',
  '/reset-password',
  '/auth/callback',
  '/callback',
];

// Define the middleware handler
export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the route is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname.endsWith(route)
  );

  // If it's not a public route, check for authentication
  if (!isPublicRoute) {
    const hasToken = await hasAuthToken();

    // If not authenticated, redirect to login
    if (!hasToken) {
      const url = new URL('/login', request.url);
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
