import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
} satisfies NextConfig

export default nextConfig;
