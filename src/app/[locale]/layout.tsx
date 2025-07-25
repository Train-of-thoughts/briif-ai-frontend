import "../globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/lib/get-messages";
import { locales, defaultLocale, isValidLocale } from "@/i18n";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";
import ThemeProvider from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const messages = await getMessages(validLocale);

  return {
    title: {
      template: `%s | ${messages?.common.metadata.siteName || 'Briff.ai'}`,
      default: messages?.common.metadata.title || 'Briff.ai',
    },
    description: messages?.common.metadata.description || 'Briff.ai is a platform that helps you make your social media marketing great again.',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const messages = await getMessages(validLocale);

  return (
    <html lang={validLocale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen
        bg-light-background text-light-foreground
        dark:bg-dark-background dark:text-dark-foreground`}
      >
        <ThemeProvider>
          <NextIntlClientProvider locale={validLocale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId="GTM-56GR76S2" />
      <GoogleAnalytics gaId="G-R1WNKEYCT2" />
    </html>
  );
}
