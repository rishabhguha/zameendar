import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '64FD9B',
      secondary: '248232',
      accent: 'AA1155',
      neutral: '121113',
      'base-100': '222725',
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '64FD9B',
          secondary: '248232',
          accent: 'AA1155',
          neutral: '121113',
          'base-100': '222725',
        },
      },
      {
        dark: {
          primary: '64FD9B',
          secondary: '248232',
          accent: 'AA1155',
          neutral: '121113',
          'base-100': '222725',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
