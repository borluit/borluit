/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment - site is hosted at /borluit/
  basePath: '/borluit',
  assetPrefix: '/borluit',
};

module.exports = nextConfig;
