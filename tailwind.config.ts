import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // это пример цветов во время верстки добавляй цвета сразу в переменные
      // а если название состоит из двух слов давай юзать camelCase чтобы не путать с цветами по умолчанию
      colors: {
        'blue': '#1fb6ff',
        'gray-light': '#d3dce6', 
      },
      // тут происходит переопределение брейкпоинтов по умолчанию на кастомные
      // используй также как и обычные просто сначала делаешь desktop а когда надо например меньше чем 767px, "md:p-[10px]"
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
export default config
