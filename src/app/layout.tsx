import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Briff.ai - Make SMM Great Again",
  description: "Briff.ai is a platform that helps you make your social media marketing great again.",
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-500 bg-opacity-10 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/logo/logo-dark-favicon-transparent.svg"
                alt="Briff.ai Logo" 
                className="w-10 md:w-12 h-10 md:h-12 object-cover object-center]"
                width={100}
                height={100}
              />
            </Link>
            <nav className="hidden md:ml-12 md:flex md:space-x-10">
              <a href="#hero" className="text-gray-300 hover:text-primary-400 transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">
                Features
              </a>
              <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-gray-300 hover:text-primary-400 transition-colors">
              Login
            </Link>
            <Link href="/signup" className="btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
