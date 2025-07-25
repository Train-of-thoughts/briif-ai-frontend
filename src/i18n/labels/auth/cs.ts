const csAuth = {
  // Login page
  login: {
    title: "Přihlásit se k účtu",
    email: "E-mail",
    emailPlaceholder: "Zadejte svůj e-mail",
    password: "Heslo",
    passwordPlaceholder: "Zadejte své heslo",
    submit: "Přihlásit se",
    submitting: "Přihlašování...",
    or: "nebo",
    googleLogin: "Přihlásit se přes Google",
    noAccount: "Nemáte účet?",
    signUp: "Zaregistrovat se",
    forgotPassword: "Zapomněli jste heslo?",
    genericError: "Během přihlašování došlo k chybě",
    useGoogleLogin: "Pro tento účet prosím použijte přihlášení přes Google",
  },

  // Signup page
  signup: {
    title: "Vytvořit účet",
    firstName: "Jméno",
    firstNamePlaceholder: "Zadejte své jméno",
    lastName: "Příjmení",
    lastNamePlaceholder: "Zadejte své příjmení",
    email: "E-mail",
    emailPlaceholder: "Zadejte svůj e-mail",
    phone: "Telefonní číslo",
    phonePlaceholder: "Zadejte své telefonní číslo",
    phoneFormat: "Zadejte platné telefonní číslo pro vybranou zemi",
    optional: "volitelné",
    password: "Heslo",
    passwordPlaceholder: "Vytvořte silné heslo",
    passwordRequirements:
      "Musí obsahovat alespoň 8 znaků, písmena, číslice a speciální znaky",
    confirmPassword: "Potvrzení hesla",
    confirmPasswordPlaceholder: "Potvrďte své heslo",
    submit: "Vytvořit účet",
    submitting: "Vytváření účtu...",
    or: "nebo",
    googleSignup: "Zaregistrovat se přes Google",
    haveAccount: "Již máte účet?",
    login: "Přihlásit se",
  },

  // Validation messages
  validation: {
    required: "Toto pole je povinné",
    invalidEmail: "Zadejte platnou e-mailovou adresu",
    invalidPhone: "Zadejte platné telefonní číslo",
    passwordTooShort: "Heslo musí obsahovat alespoň 8 znaků",
    passwordRequiresLetter: "Heslo musí obsahovat alespoň jedno písmeno",
    passwordRequiresNumber: "Heslo musí obsahovat alespoň jednu číslici",
    passwordRequiresSpecial:
      "Heslo musí obsahovat alespoň jeden speciální znak",
    passwordsDoNotMatch: "Hesla se neshodují",
  },

  // Auth callback page
  callback: {
    processing: "Zpracování autentizace",
    pleaseWait: "Počkejte prosím, probíhá autentizace...",
    error: "Chyba autentizace",
    noToken: "Nebyl nalezen autentizační token",
    storeFailed: "Nepodařilo se uložit autentizační token",
    genericError: "Během autentizace došlo k chybě",
  },
};

export default csAuth;
