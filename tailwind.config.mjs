/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        'background-100': '#151515',
        primary: '#00A7B7',
        'primary-hover': '#00838F',
      },
      screens: {
        mobile: '550px',
        tablet: '834px',
        desktop: '1024px',
      },
      fontFamily: {
        base: ['Space Grotesk Variable', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', '1.5rem'],
        'base-label': ['1rem', '1rem'],
        'xl-label': ['1.25rem', '1.25rem'],
        'page-title': ['3rem', '61px'],
      },
    },
  },
  plugins: [],
};
