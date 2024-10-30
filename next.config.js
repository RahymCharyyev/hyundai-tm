const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate-plugin');
const withTM = require('next-transpile-modules')([
  '@photo-sphere-viewer/core',
  'react-photo-sphere-viewer',
]);

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

module.exports = withPlugins([nextTranslate, withTM], nextConfig);
