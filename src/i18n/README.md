# Internationalization (i18n) Implementation with next-intl

This document explains how internationalization is implemented in this project using [next-intl](https://next-intl.dev/).

## Supported Languages

The project supports the following languages:

- Ukrainian (uk) - Default language
- English (en)
- Czech (cs)

## Directory Structure

```
/
├── i18n.ts             # next-intl configuration
├── src/
│   ├── i18n/           # i18n configuration and exports
│   │   ├── config.ts   # Locale configuration
│   │   ├── utils.ts    # Utility functions for labels
│   │   ├── index.ts    # Exports everything from i18n
│   │   └── labels/     # Labels for different modules
│   │       └── common/ # Common labels
│   │           ├── en.ts
│   │           ├── uk.ts
│   │           └── cs.ts
│   ├── lib/
│   │   └── get-messages.ts  # Helper to load messages
│   └── middleware.ts   # Middleware for locale routing
```

## How to Use

### In Client Components

Use the `useTranslations` hook to access translations in client components:

```tsx
"use client";

import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("common.welcome")}</h1>
      <p>{t("common.description")}</p>
      <button>{t("common.save")}</button>
    </div>
  );
}
```

### In Server Components

Use the `useTranslations` hook to access translations in server components:

```tsx
import { useTranslations } from "next-intl";

export default function MyServerComponent() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("common.welcome")}</h1>
      <p>{t("common.description")}</p>
    </div>
  );
}
```

### Links with Locale Support

Use the `Link` component from next-intl to create links that preserve the current locale:

```tsx
import { Link } from "next-intl/client";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

To switch locales, use the `locale` prop:

```tsx
import { Link } from "next-intl/client";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();

  return (
    <div>
      <Link
        href="/"
        locale="en"
        className={currentLocale === "en" ? "active" : ""}
      >
        English
      </Link>
      <Link
        href="/"
        locale="uk"
        className={currentLocale === "uk" ? "active" : ""}
      >
        Українська
      </Link>
      <Link
        href="/"
        locale="cs"
        className={currentLocale === "cs" ? "active" : ""}
      >
        Čeština
      </Link>
    </div>
  );
}
```

## Adding New Translations

1. Create a new module folder in `src/i18n/labels/` if needed
2. Add language files (en.ts, uk.ts, cs.ts) to the module folder
3. Update the `Labels` type in `src/i18n/utils.ts` to include the new module
4. Import and add the new module to the `labelModules` object in `src/i18n/utils.ts`
5. Use the new keys in your components with the `useTranslations` hook

Example of adding a new "dashboard" module:

```ts
// src/i18n/labels/dashboard/en.ts
export default {
  title: "Dashboard",
  summary: "Summary",
  // ...
};

// src/i18n/labels/dashboard/uk.ts
export default {
  title: "Панель керування",
  summary: "Зведення",
  // ...
};

// src/i18n/labels/dashboard/cs.ts
export default {
  title: "Přístrojová deska",
  summary: "Souhrn",
  // ...
};

// Update src/i18n/utils.ts
import dashboardEn from "./labels/dashboard/en";
import dashboardUk from "./labels/dashboard/uk";
import dashboardCs from "./labels/dashboard/cs";

export type Labels = {
  common: typeof commonEn;
  dashboard: typeof dashboardEn;
  // Add more modules as needed
};

const labelModules: Record<Locale, Labels> = {
  en: {
    common: commonEn,
    dashboard: dashboardEn,
  },
  uk: {
    common: commonUk,
    dashboard: dashboardUk,
  },
  cs: {
    common: commonCs,
    dashboard: dashboardCs,
  },
};
```

## URL Structure

The locale is part of the URL path: `/{locale}/path/to/page`

For example:

- `/uk/about` - Ukrainian version of the about page
- `/en/about` - English version of the about page
- `/cs/about` - Czech version of the about page

The middleware automatically redirects requests without a locale to the default locale.
