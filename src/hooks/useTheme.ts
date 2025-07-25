"use client";

import { useState, useEffect } from "react";

// Define the theme type
export type Theme = "light" | "dark";

// Define the theme state type
interface ThemeState {
  theme: Theme;
  isLoading: boolean;
}

// Define the theme actions type
interface ThemeActions {
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

/**
 * Custom hook for theme management
 */
export function useTheme(): ThemeState & ThemeActions {
  const [state, setState] = useState<ThemeState>({
    theme: "dark", // Default to dark theme
    isLoading: true,
  });

  // Initialize theme from localStorage on mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      // Use saved theme if available, otherwise use system preference
      const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
      
      setState({
        theme: initialTheme,
        isLoading: false,
      });
      
      // Apply theme to document
      applyTheme(initialTheme);
    }
  }, []);

  // Apply theme to document
  const applyTheme = (theme: Theme) => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      
      // Remove both classes first
      root.classList.remove("light", "dark");
      
      // Add the appropriate class
      root.classList.add(theme);
      
      // Store in localStorage
      localStorage.setItem("theme", theme);
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    setState({
      ...state,
      theme: newTheme,
    });
    applyTheme(newTheme);
  };

  // Set theme function
  const setTheme = (theme: Theme) => {
    setState({
      ...state,
      theme,
    });
    applyTheme(theme);
  };

  return {
    ...state,
    toggleTheme,
    setTheme,
  };
}