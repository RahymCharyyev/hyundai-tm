// next.config.js

const withTM = require('next-transpile-modules')([
  '@photo-sphere-viewer/core',
  'react-photo-sphere-viewer',
]);

const nextTranslate = require('next-translate-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hyundai.com.tm',
      },
    ],
  },
};

module.exports = withTM(nextTranslate(nextConfig));
