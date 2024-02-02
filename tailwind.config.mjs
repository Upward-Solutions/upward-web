/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark-background': '#0d0d0d',
      },
      fontFamily: {
        base: ['Space Grotesk Variable', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', '1.5rem'],
        'page-title': ['3rem', '61px'],
      },
    },
  },
  plugins: [],
};
