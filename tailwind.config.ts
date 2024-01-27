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
        fourthColor: '#00AAD2',
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
        lg: { max: '900px' },
        md: { max: '740px' },
        sm: { max: '500px' },
        xs: { max: '325px' },
      },
    },
  },
  plugins: [],
});
