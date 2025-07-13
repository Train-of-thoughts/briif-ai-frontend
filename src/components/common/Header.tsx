import logoIcon from "/public/icons/logo/logo-dark-favicon-transparent.svg"

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import MobileMenuToggle from "./MobileMenuToggle";
import DesktopNavigation from "./DesktopNavigation";

export default function Header() {
  const t = useTranslations('common');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-500 bg-opacity-10 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4 md:py-5">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logoIcon}
                alt="Briff.ai Logo"
                className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-cover object-center"
                width={100}
                height={100}
              />
            </Link>
            <nav className="hidden md:ml-12 md:flex md:space-x-10">
              <Link href={'/#here'} className="text-gray-300 hover:text-primary-400 transition-colors">
                {t('header.home')}
              </Link>
              <Link href='/#features' className="text-gray-300 hover:text-primary-400 transition-colors">
                {t('header.features')}
              </Link>
              <Link href='/#about' className="text-gray-300 hover:text-primary-400 transition-colors">
                {t('header.about')}
              </Link>
            </nav>
          </div>

          {/* Desktop navigation */}
          <DesktopNavigation />

          {/* Mobile menu (client component) */}
          <MobileMenuToggle />
        </div>
      </div>
    </header>
  );
}
