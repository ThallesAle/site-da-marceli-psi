import type { NextConfig } from 'next';

const nextConfig: NextConfig = process.env.BUILD_FOR_PAGES === 'true' ? { output: 'export' } : {};

export default nextConfig;

