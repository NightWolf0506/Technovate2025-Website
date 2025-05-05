import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/aset/technovate2025/", // Set this to match your deployment path
  plugins: [react()],
})