const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002C5F',
        secondary: '#ECECEC',
        thirdColor: '#888888',
        linkColor: '#666666',
        activeLink: '#0A0A0A',
        header: '#e4dcd3',
        accordionBg: '#f6f3f2',
      },
      screens: {
        '4xl': { max: '1450px' },
        '3xl': { max: '1350px' },
        '2xl': { max: '1150px' },
        xl: { max: '1100px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
      },
    },
  },
  plugins: [],
});
