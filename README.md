This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Internationalization (i18n)

This project supports multiple languages:

- Ukrainian (uk) - Default language
- English (en)
- Czech (cs)

The i18n implementation uses [next-intl](https://next-intl.dev/) and includes:

- Locale-based routing (`/[locale]/page`)
- Labels in TypeScript format in the `src/i18n/labels` folder
- Client and server components using the same `useTranslations` hook
- Locale-aware `Link` component for navigation

For detailed information about the i18n implementation, see [src/i18n/README.md](src/i18n/README.md).

## Development Guidelines

This section outlines the rules and best practices for developing new features in this project.

### Project Structure

- **Components**: Place reusable UI components in `src/components/`
  - Common components: `src/components/common/` (can be used across the entire application)
  - Feature-specific components: `src/components/{feature}/` (e.g., `src/components/auth/`)
- **Schemas**: Place validation schemas in `src/schema/{feature}/` (e.g., `src/schema/auth/`)
- **Internationalization**: Place translations in `src/i18n/labels/{feature}/` (e.g., `src/i18n/labels/auth/`)
- **Pages**: Place pages in `src/app/[locale]/{path}/page.tsx`

### Component Guidelines

#### Client vs Server Components

- **Server Components**: Use server components for static content that doesn't require interactivity
  - Do NOT use React hooks in server components
  - Server components should be kept simple and focused on rendering
  - Example: Page layouts, static content sections

- **Client Components**: Use client components for interactive elements
  - Add `"use client";` at the top of the file
  - Use React hooks (useState, useEffect, etc.) only in client components
  - Example: Forms, interactive UI elements, components with state

#### Component Composition

- Decompose large components into smaller, reusable ones
- Create specialized components for specific UI patterns
- Avoid duplicating code by reusing components
- Keep components focused on a single responsibility
- Example structure:
  ```
  src/components/auth/
  ├── AuthLayout.tsx       # Layout wrapper for auth pages
  ├── AuthCard.tsx         # Card container for auth forms
  ├── LoginForm.tsx        # Login form component
  ├── SignupForm.tsx       # Signup form component
  └── AuthFooter.tsx       # Footer component for auth forms
  ```

### Form Validation

- Use Yup for schema validation
- Use React Hook Form for form state management
- Place validation schemas in `src/schema/{feature}/`
- Example structure:
  ```
  src/schema/auth/
  ├── login-schema.ts      # Login form validation schema
  └── signup-schema.ts     # Signup form validation schema
  ```

- Basic pattern:
  ```typescript
  // 1. Define schema in src/schema/feature/schema-name.ts
  export const getSchema = (t: (key: string) => string) => {
    return yup.object().shape({
      // schema definition
    });
  };

  // 2. Use schema in component
  const schema = getSchema(t);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  ```

### Internationalization

- Add new translations to all language files (en.ts, uk.ts, cs.ts)
- Use the `useTranslations` hook to access translations
- Structure translations logically by feature
- Update both client and server translation files when adding new keys

### Responsive Design

- Design for mobile-first, then adapt for larger screens
- Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- Test layouts on various screen sizes
- Common breakpoints:
  - Default: Mobile (< 640px)
  - sm: Small tablets (≥ 640px)
  - md: Tablets/small laptops (≥ 768px)
  - lg: Laptops (≥ 1024px)
  - xl: Desktops (≥ 1280px)

### Code Reusability

- **ALWAYS** check for existing components before creating new ones
- Reuse existing logic and components whenever possible
- Extract common patterns into reusable hooks or utilities
- Follow established patterns in the codebase
- If similar functionality exists, extend it rather than duplicating it

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/[locale]/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
