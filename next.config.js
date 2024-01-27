/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate-plugin');

module.exports = withPlugins([nextTranslate], {
  reactStrictMode: true,
  i18n: {},
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'hyundai.com.tm',
      },
    ],
  },
});
