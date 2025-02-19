// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Other config options can go here
};

export default nextConfig;
