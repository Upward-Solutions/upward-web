import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En GitHub Pages el sitio se sirve bajo /upward-web/ (nombre del repo).
// Si más adelante usás un dominio propio (CNAME), cambiá base a '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/upward-web/' : '/',
  plugins: [react()],
}))
