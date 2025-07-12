// List of countries with their codes and flags
export type Country = {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
};

export const countries: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦", dialCode: "+380" },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿", dialCode: "+420" },
  { code: "DE", name: "Germany", flag: "🇩🇪", dialCode: "+49" },
  { code: "FR", name: "France", flag: "🇫🇷", dialCode: "+33" },
  { code: "IT", name: "Italy", flag: "🇮🇹", dialCode: "+39" },
  { code: "ES", name: "Spain", flag: "🇪🇸", dialCode: "+34" },
  { code: "PL", name: "Poland", flag: "🇵🇱", dialCode: "+48" },
  { code: "CA", name: "Canada", flag: "🇨🇦", dialCode: "+1" },
  { code: "AU", name: "Australia", flag: "🇦🇺", dialCode: "+61" },
  { code: "JP", name: "Japan", flag: "🇯🇵", dialCode: "+81" },
  { code: "CN", name: "China", flag: "🇨🇳", dialCode: "+86" },
  { code: "IN", name: "India", flag: "🇮🇳", dialCode: "+91" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", dialCode: "+55" },
  { code: "RU", name: "Russia", flag: "🇷🇺", dialCode: "+7" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", dialCode: "+82" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", dialCode: "+31" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", dialCode: "+46" },
  { code: "NO", name: "Norway", flag: "🇳🇴", dialCode: "+47" },
  { code: "DK", name: "Denmark", flag: "🇩🇰", dialCode: "+45" },
  { code: "FI", name: "Finland", flag: "🇫🇮", dialCode: "+358" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", dialCode: "+41" },
  { code: "AT", name: "Austria", flag: "🇦🇹", dialCode: "+43" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", dialCode: "+32" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", dialCode: "+353" },
  { code: "PT", name: "Portugal", flag: "🇵🇹", dialCode: "+351" },
  { code: "GR", name: "Greece", flag: "🇬🇷", dialCode: "+30" },
  { code: "HU", name: "Hungary", flag: "🇭🇺", dialCode: "+36" },
  { code: "RO", name: "Romania", flag: "🇷🇴", dialCode: "+40" },
  { code: "BG", name: "Bulgaria", flag: "🇧🇬", dialCode: "+359" },
  { code: "HR", name: "Croatia", flag: "🇭🇷", dialCode: "+385" },
  { code: "RS", name: "Serbia", flag: "🇷🇸", dialCode: "+381" },
  { code: "SK", name: "Slovakia", flag: "🇸🇰", dialCode: "+421" },
  { code: "SI", name: "Slovenia", flag: "🇸🇮", dialCode: "+386" },
  { code: "LT", name: "Lithuania", flag: "🇱🇹", dialCode: "+370" },
  { code: "LV", name: "Latvia", flag: "🇱🇻", dialCode: "+371" },
  { code: "EE", name: "Estonia", flag: "🇪🇪", dialCode: "+372" },
  { code: "BY", name: "Belarus", flag: "🇧🇾", dialCode: "+375" },
  { code: "MD", name: "Moldova", flag: "🇲🇩", dialCode: "+373" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", dialCode: "+90" },
  { code: "IL", name: "Israel", flag: "🇮🇱", dialCode: "+972" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", dialCode: "+966" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", dialCode: "+971" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", dialCode: "+27" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", dialCode: "+52" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", dialCode: "+54" },
  { code: "CL", name: "Chile", flag: "🇨🇱", dialCode: "+56" },
  { code: "CO", name: "Colombia", flag: "🇨🇴", dialCode: "+57" },
  { code: "PE", name: "Peru", flag: "🇵🇪", dialCode: "+51" },
];

// Sort countries by name
export const sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name));

// Get country by dial code
export const getCountryByDialCode = (dialCode: string): Country | undefined => {
  return countries.find(country => country.dialCode === dialCode);
};

// Get country by code
export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(country => country.code === code);
};