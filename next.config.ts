import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// Define the base Next.js configuration
const nextConfig: NextConfig = {
  // Your existing Next.js configuration options
};

// Wrap the Next.js config with the next-intl plugin
export default withNextIntl(nextConfig);
