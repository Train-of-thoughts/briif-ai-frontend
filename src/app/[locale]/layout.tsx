import {Geist, Geist_Mono} from "next/font/google";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "@/lib/get-messages";
import {defaultLocale, isValidLocale, locales} from "@/i18n";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata({params}: { params: Promise<{ locale: string }> }) {
    const {locale} = await params;
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
    return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const {locale} = await params;
    const validLocale = isValidLocale(locale) ? locale : defaultLocale;
    const messages = await getMessages(validLocale);

    return (
        <html lang={validLocale} className="scroll-smooth">
        <body
            className={`${geistSans.variable} ${geistMono.variable} bg-black text-white min-h-screen`}
        >
        <NextIntlClientProvider locale={validLocale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        <GoogleTagManager gtmId="GTM-56GR76S2"/>
        <GoogleAnalytics gaId="G-R1WNKEYCT2"/>
        </html>
    );
}
