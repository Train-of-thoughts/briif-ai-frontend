const enBooking = {
  title: 'Book a Demo',
  form: {
    name: 'Full Name',
    email: 'Email Address',
    company: 'Company Name',
    message: 'Message (Optional)',
    submit: 'Submit Request'
  },
  validation: {
    nameRequired: 'Name is required',
    nameMaxLength: 'Name cannot exceed {max} characters',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    companyMaxLength: 'Company name cannot exceed {max} characters',
    messageMaxLength: 'Message cannot exceed {max} characters',
    maxChars: 'max {max} chars'
  },
  success: 'Thank you for your request! We will contact you shortly.',
  error: 'Something went wrong. Please try again later.'
};

export default enBooking;
