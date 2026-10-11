import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production'
    ? '/EakPustak-Pvt.-Ltd.-Frontend-Web-Development-Internship-Assignment/'
    : '/',
  plugins: [react()],
}))
