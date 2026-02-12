/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ef',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        accent: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e6d2c8',
          400: '#c4a68f',
          500: '#a47e5e',
          600: '#8b6542',
          700: '#73502f',
          800: '#5c3d22',
          900: '#452d18',
        },
        dark: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e7e4df',
          300: '#d6d1ca',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#171412',
        }
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: '"Libre Baskerville", Georgia, serif',
            fontSize: '0.9375rem',
            lineHeight: '1.8',
            color: '#44403c',
            a: {
              color: '#44403c',
              textDecoration: 'none',
              borderBottom: '1px solid #d6d3d1',
              '&:hover': {
                borderBottomColor: '#44403c',
              },
            },
          },
        },
        invert: {
          css: {
            color: '#e7e5e4',
            a: {
              color: '#e7e5e4',
              borderBottomColor: '#57534e',
              '&:hover': {
                borderBottomColor: '#e7e5e4',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
