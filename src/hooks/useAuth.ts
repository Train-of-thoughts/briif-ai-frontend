"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, LoginCredentials, RegisterCredentials } from "@/lib/auth/types";

// Define the auth state type
interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
}

// Define the auth actions type
interface AuthActions {
  login: (
    credentials: LoginCredentials,
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    credentials: RegisterCredentials,
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

/**
 * Custom hook for authentication
 */
export function useAuth(): AuthState & AuthActions {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoggedIn: false,
    isLoading: true,
  });

  // Fetch the user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/me");
        if (response.ok) {
          const user = await response.json();
          setState({
            user,
            isLoggedIn: true,
            isLoading: false,
          });
        } else {
          setState({
            user: null,
            isLoggedIn: false,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setState({
          user: null,
          isLoggedIn: false,
          isLoading: false,
        });
      }
    };

    void fetchUser();
  }, []);

  // Login function
  const login = async (
    credentials: LoginCredentials,
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const user = await response.json();
        setState({
          user,
          isLoggedIn: true,
          isLoading: false,
        });
        router.refresh();
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.message || "Login failed" };
      }
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unknown error occurred during login",
      };
    }
  };

  // Register function
  const register = async (
    credentials: RegisterCredentials,
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const user = await response.json();
        setState({
          user,
          isLoggedIn: true,
          isLoading: false,
        });
        router.refresh();
        return { success: true };
      } else {
        const error = await response.json();
        return {
          success: false,
          error: error.message || "Registration failed",
        };
      }
    } catch (error) {
      console.error("Registration error:", error);
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "An unknown error occurred during registration",
      };
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setState({
        user: null,
        isLoggedIn: false,
        isLoading: false,
      });
      router.refresh();
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return {
    ...state,
    login,
    register,
    logout,
  };
}
