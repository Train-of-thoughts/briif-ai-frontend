"use client";

import { ReactNode } from "react";
import { useTheme } from "@/hooks/useTheme";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize the theme hook
  // The hook handles applying the theme class to the document
  useTheme();
  
  // This component doesn't need to render anything special
  // It just ensures the theme is applied to the document
  return (
    <>
      {children}
    </>
  );
}