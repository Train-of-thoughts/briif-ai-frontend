const enAuth = {
  // Login page
  login: {
    title: "Login to your account",
    email: "Email",
    emailPlaceholder: "Enter your email",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    submit: "Login",
    submitting: "Logging in...",
    or: "or",
    googleLogin: "Login with Google",
    noAccount: "Don't have an account?",
    signUp: "Sign up",
    forgotPassword: "Forgot password?",
    genericError: "An error occurred during login",
    useGoogleLogin: "Please use Google login for this account",
  },

  // Signup page
  signup: {
    title: "Create your account",
    firstName: "First Name",
    firstNamePlaceholder: "Enter your first name",
    lastName: "Last Name",
    lastNamePlaceholder: "Enter your last name",
    email: "Email",
    emailPlaceholder: "Enter your email",
    phone: "Phone Number",
    phonePlaceholder: "Enter your phone number",
    phoneFormat: "Enter a valid phone number for the selected country",
    optional: "optional",
    password: "Password",
    passwordPlaceholder: "Create a strong password",
    passwordRequirements:
      "Must be at least 8 characters with letters, numbers, and special characters",
    confirmPassword: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm your password",
    submit: "Create Account",
    submitting: "Creating account...",
    or: "or",
    googleSignup: "Sign up with Google",
    haveAccount: "Already have an account?",
    login: "Login",
  },

  // Validation messages
  validation: {
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    invalidPhone: "Please enter a valid phone number",
    passwordTooShort: "Password must be at least 8 characters",
    passwordRequiresLetter: "Password must include at least one letter",
    passwordRequiresNumber: "Password must include at least one number",
    passwordRequiresSpecial:
      "Password must include at least one special character",
    passwordsDoNotMatch: "Passwords do not match",
  },

  // Auth callback page
  callback: {
    processing: "Processing authentication",
    pleaseWait: "Please wait while we authenticate you...",
    error: "Authentication Error",
    noToken: "No authentication token found",
    storeFailed: "Failed to store authentication token",
    genericError: "An error occurred during authentication",
  },
};

export default enAuth;
