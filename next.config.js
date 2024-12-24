/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'images.pexels.com',
      'raw.githubusercontent.com'
    ],
  },
  basePath: '/hexcode',
  assetPrefix: '/hexcode/',
};

module.exports = nextConfig;