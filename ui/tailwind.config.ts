import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'green-light': 'rgb(var(--green-light))',
      'green-dark': 'rgb(var(--green-dark))',
      'black-light': 'rgb(var(--black-light))',
      'black-dark': 'rgb(var(--black-dark))',
      purple: 'rgb(var(--purple))',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // fontFamily: {
      //   alegreya: ['var(--font-alegreya)'],
      // },
    },
  },
  plugins: [],
};
export default config;
