import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [vue()],
  base: 'https://kitbuildings.com/buildings/'
})
