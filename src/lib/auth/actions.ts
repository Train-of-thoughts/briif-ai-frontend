'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { 
  LoginCredentials, 
  RegisterCredentials, 
  ForgotPasswordRequest, 
  ResetPasswordRequest,
  User
} from './types';
import * as authApi from './api';

// Cookie name for the auth token
const AUTH_COOKIE = 'auth_token';
// Cookie options
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 60 * 24, // 1 day
  path: '/',
};

/**
 * Register a new user
 */
export async function registerUser(credentials: RegisterCredentials): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await authApi.register(credentials);
    
    // Set the auth token in a cookie
    (await cookies()).set(AUTH_COOKIE, response.access_token, COOKIE_OPTIONS);
    
    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred during registration' 
    };
  }
}

/**
 * Login a user
 */
export async function loginUser(credentials: LoginCredentials): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await authApi.login(credentials);
    
    // Set the auth token in a cookie
    (await cookies()).set(AUTH_COOKIE, response.access_token, COOKIE_OPTIONS);
    
    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred during login' 
    };
  }
}

/**
 * Logout a user
 */
export async function logoutUser(): Promise<void> {
  // Delete the auth token cookie
  (await cookies()).delete(AUTH_COOKIE);
  
  // Redirect to the login page
  redirect('/login');
}

/**
 * Get the current user
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const token = (await cookies()).get(AUTH_COOKIE)?.value;
    
    if (!token) {
      return null;
    }
    
    return await authApi.getProfile(token);
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

/**
 * Request a password reset
 */
export async function requestPasswordReset(request: ForgotPasswordRequest): Promise<{ success: boolean; error?: string }> {
  try {
    await authApi.forgotPassword(request);
    return { success: true };
  } catch (error) {
    console.error('Password reset request error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred during password reset request' 
    };
  }
}

/**
 * Reset password
 */
export async function resetUserPassword(request: ResetPasswordRequest): Promise<{ success: boolean; error?: string }> {
  try {
    await authApi.resetPassword(request);
    return { success: true };
  } catch (error) {
    console.error('Password reset error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred during password reset' 
    };
  }
}

/**
 * Check if the user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return !!user;
}

/**
 * Get the auth token from cookies
 */
export async function getAuthToken(): Promise<string | undefined> {
  return (await cookies()).get(AUTH_COOKIE)?.value;
}