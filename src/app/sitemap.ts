import { I18N_LOCALES } from "@/lib/constants";

type Route = {
  path: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

// Define the public routes that should be included in the sitemap
const routes: Route[] = [
  {
    path: "",
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    path: "login",
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: "signup",
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
];

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://briif.ai';
  
  // Generate sitemap entries for each locale and route
  const sitemapEntries = I18N_LOCALES.flatMap(locale => 
    routes.map(route => ({
      url: `${baseUrl}/${locale}${route.path ? `/${route.path}` : ''}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  );

  return sitemapEntries;
}