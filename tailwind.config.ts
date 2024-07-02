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
        base: [
          '1rem',
          {
            lineHeight: '1.32rem',
            fontWeight: '700',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.485rem',
            fontWeight: '700',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700',
          },
        ],
        '2xl:': [
          '1.5rem',
          {
            lineHeight: '1.98rem',
            fontWeight: '700',
          },
        ],
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
