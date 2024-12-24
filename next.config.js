/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
};

module.exports = nextConfig;