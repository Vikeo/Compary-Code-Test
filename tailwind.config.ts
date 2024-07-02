import type { Config } from 'tailwindcss';

export const baseColors = {
  text: {
    primary: '#E6E5EA',
    secondary: '#817D92',
  },
  background: {
    primary: '#18171F',
    secondary: '#24232C',
  },
  password_strength: {
    strong: '#A4FFAF',
    medium: '#F8CD65',
    weak: '#FB7C58',
    too_weak: '#F64A4A',
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: baseColors,
      fontSize: {
        '3xl': [
          '2rem',
          {
            lineHeight: '2.64rem',
            fontWeight: '700',
          },
        ],
      },
    },
  },
} satisfies Config;
