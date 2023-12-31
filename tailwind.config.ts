import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      my_bg: '#FEFCF7',
      my_gray: '#83888F',
      my_cyan: '#0E8784',
      my_dblue: '#333D4B',
      my_cream: '#FDD6BA',
    },

    extend: {
      fontSize: {
        my_title1: '72px',
        my_title2: '40px',
        my_title3: '32px',
        my_title4: '24px',
        my_body_txt: '16px',
        my_nav_txt: '12px',
      },
    },
  },
  plugins: [],
}
export default config
