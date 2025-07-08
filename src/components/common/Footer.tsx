import logoIcon from '/public/icons/logo/logo-dark-text-left-transparent.svg'

import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Image
              src={logoIcon}
              alt="Briff.ai Logo"
              className="h-[50px] w-[100px] md:w-[150px] object-cover object-center"
              width={150}
              height={50}
            />
          </div>
          <div className="flex space-x-8 mb-10">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Features</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
          </div>

          {/* Language Switcher */}
          <div className="mb-8">
            <LanguageSwitcher />
          </div>

          <div className="text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Briff.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
