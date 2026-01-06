/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment with custom domain
  // basePath: '',
  // assetPrefix: '',
};

module.exports = nextConfig;
