// Server-side session management for authentication

import { cache } from "react";
import { cookies } from "next/headers";
import { getCurrentUser } from "./actions";
import { Session, User } from "./types";

// Create a cached version of getCurrentUser to avoid multiple API calls
const getUser = cache(async () => {
  return await getCurrentUser();
});

/**
 * Get the current session
 * This function is cached and can be called multiple times without triggering multiple API calls
 */
export const getSession = cache(async (): Promise<Session> => {
  try {
    const user = await getUser();

    return {
      user,
      isLoggedIn: !!user,
      isLoading: false,
    };
  } catch (error) {
    console.error("Error getting session:", error);
    return {
      user: null,
      isLoggedIn: false,
      isLoading: false,
    };
  }
});

/**
 * Check if the user is authenticated
 * This is a helper function that can be used in middleware or server components
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return session.isLoggedIn;
}

/**
 * Check if the user is an admin
 * This is a helper function that can be used in middleware or server components
 */
export async function isAdmin(): Promise<boolean> {
  const session = await getSession();
  return session.isLoggedIn && session.user?.isAdmin === true;
}

/**
 * Get the current user
 * This is a helper function that can be used in server components
 */
export async function getSessionUser(): Promise<User | null> {
  const session = await getSession();
  return session.user;
}

/**
 * Check if there's an auth token in the cookies
 * This is a helper function that can be used in middleware
 */
export async function hasAuthToken(): Promise<boolean> {
  return !!(await cookies()).get("auth_token")?.value;
}
