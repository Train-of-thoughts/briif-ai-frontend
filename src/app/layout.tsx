import "./(overview)/globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Briff.ai',
        default: 'Briff.ai - Make SMM Great Again',
    },
    description:
        "Briff.ai is a platform that helps you make your social media marketing great again.",
    icons: {
        icon: '/icons/logo/logo-favicon.svg',
        shortcut: '/icons/logo/logo-favicon.svg',
        apple: '/icons/logo/logo-favicon.svg',
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
    return children;
}
