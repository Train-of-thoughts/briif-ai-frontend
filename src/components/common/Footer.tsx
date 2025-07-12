import logoIcon from '/public/icons/logo/logo-dark-text-left-transparent.svg'

import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className="bg-gray-900 py-12 sm:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center">
          <div className="mb-6 sm:mb-8">
            <Image
              src={logoIcon}
              alt="Briff.ai Logo"
              className="h-[40px] sm:h-[50px] w-[80px] sm:w-[100px] md:w-[150px] object-cover object-center"
              width={150}
              height={50}
            />
          </div>

          {/* Footer links - stack on mobile, row on larger screens */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mb-8 sm:mb-10 items-center">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.about')}</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.features')}</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.pricing')}</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.contact')}</a>
          </div>

          {/* Language Switcher */}
          <div className="mb-6 sm:mb-8">
            <LanguageSwitcher />
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm sm:text-base">
              © {new Date().getFullYear()} Briff.ai. {t('footer.allRightsReserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
