import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: '.export',
  trailingSlash: true,
  images: {
  },
  experimental: {
    cssChunking: true,
    mdxRs: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  generateEtags: true,
} satisfies NextConfig

export default nextConfig;
