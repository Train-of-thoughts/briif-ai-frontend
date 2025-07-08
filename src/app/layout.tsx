import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Briff.ai - Make SMM Great Again",
  description: "Briff.ai is a platform that helps you make your social media marketing great again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}