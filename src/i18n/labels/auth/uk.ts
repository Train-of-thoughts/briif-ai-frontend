const ukAuth = {
  // Login page
  login: {
    title: "Увійти до облікового запису",
    email: "Електронна пошта",
    emailPlaceholder: "Введіть вашу електронну пошту",
    password: "Пароль",
    passwordPlaceholder: "Введіть ваш пароль",
    submit: "Увійти",
    submitting: "Вхід...",
    or: "або",
    googleLogin: "Увійти через Google",
    noAccount: "Немає облікового запису?",
    signUp: "Зареєструватися",
    forgotPassword: "Забули пароль?",
    genericError: "Під час входу сталася помилка",
    useGoogleLogin: "Будь ласка, використовуйте вхід через Google для цього облікового запису",
  },

  // Signup page
  signup: {
    title: "Створити обліковий запис",
    firstName: "Ім'я",
    firstNamePlaceholder: "Введіть ваше ім'я",
    lastName: "Прізвище",
    lastNamePlaceholder: "Введіть ваше прізвище",
    email: "Електронна пошта",
    emailPlaceholder: "Введіть вашу електронну пошту",
    phone: "Номер телефону",
    phonePlaceholder: "Введіть ваш номер телефону",
    phoneFormat: "Введіть дійсний номер телефону для обраної країни",
    optional: "необов'язково",
    password: "Пароль",
    passwordPlaceholder: "Створіть надійний пароль",
    passwordRequirements:
      "Має містити щонайменше 8 символів, літери, цифри та спеціальні символи",
    confirmPassword: "Підтвердження паролю",
    confirmPasswordPlaceholder: "Підтвердіть ваш пароль",
    submit: "Створити обліковий запис",
    submitting: "Створення облікового запису...",
    or: "або",
    googleSignup: "Зареєструватися через Google",
    haveAccount: "Вже маєте обліковий запис?",
    login: "Увійти",
  },

  // Validation messages
  validation: {
    required: "Це поле обов'язкове",
    invalidEmail: "Будь ласка, введіть дійсну електронну адресу",
    invalidPhone: "Будь ласка, введіть дійсний номер телефону",
    passwordTooShort: "Пароль має містити щонайменше 8 символів",
    passwordRequiresLetter: "Пароль має містити щонайменше одну літеру",
    passwordRequiresNumber: "Пароль має містити щонайменше одну цифру",
    passwordRequiresSpecial:
      "Пароль має містити щонайменше один спеціальний символ",
    passwordsDoNotMatch: "Паролі не співпадають",
  },

  // Auth callback page
  callback: {
    processing: "Обробка автентифікації",
    pleaseWait: "Будь ласка, зачекайте, поки ми вас автентифікуємо...",
    error: "Помилка автентифікації",
    noToken: "Не знайдено токен автентифікації",
    storeFailed: "Не вдалося зберегти токен автентифікації",
    genericError: "Під час автентифікації сталася помилка",
  },
};

export default ukAuth;
