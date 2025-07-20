const csBooking = {
  title: 'Objednat demo',
  form: {
    name: 'Celé jméno',
    email: 'E-mailová adresa',
    company: 'Název společnosti',
    message: 'Zpráva (volitelné)',
    submit: 'Odeslat požadavek'
  },
  validation: {
    nameRequired: 'Jméno je povinné',
    nameMaxLength: 'Jméno nesmí překročit {max} znaků',
    emailRequired: 'E-mail je povinný',
    emailInvalid: 'Zadejte prosím platnou e-mailovou adresu',
    companyMaxLength: 'Název společnosti nesmí překročit {max} znaků',
    messageMaxLength: 'Zpráva nesmí překročit {max} znaků',
    maxChars: 'max {max} znaků'
  },
  success: 'Děkujeme za váš požadavek! Budeme vás kontaktovat v nejbližší době.',
  error: 'Něco se pokazilo. Zkuste to prosím později.'
};

export default csBooking;
